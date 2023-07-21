const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create
};

// async function addToFlight(req, res) {
//     const ticket = await Ticket.findById(req.params.id);
//     ticket.flight.push(req.body.flightId);
//     await ticket.save();
//     res.redirect(`/flights/${flight._id}`);
// };
  
async function create(req, res) {
    // const flight = await Flight.findById(req.params.id);
    // try {
    //   await Ticket.create(req.body);
    // } catch (err) {
    //   console.log(err);
    // }
    req.body.flight = req.params.id;
    try {
      await Ticket.create(req.body);
    } catch (err) {
      console.log(err);
    }
  
    res.redirect(`/flights/${req.params.id}`);
};