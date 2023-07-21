const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req,res) {
  try {
    const flight = await Flight.findById(req.params.id);
    // Save any changes made to the movie doc
    flight.destinations.push(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);

  } catch (err) {
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
}

