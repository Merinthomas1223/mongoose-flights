const Flight = require('../models/flight');
const Ticket = require('../models/ticket')
module.exports = {
  index,
  show,
  new: newFlight,
  create,
}
async function index(req, res) {
  try {
    const flights = await Flight.getAll();
    res.render('flights/index', { flights });
  } catch (err) {
    res.render('error', { errorMsg: err.message });
  }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const ticket = await Ticket.find({flight: flight._id})
  res.render('flights/show', { title: 'Flight Detail', flight,ticket});
}

function newFlight(req, res) {
  res.render('flights/new', { errorMsg: '' });
  
}
async function create(req,res) {
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }

  try {
    req.body.flightNo = parseInt(req.body.flightNo);

    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the flights index after we implement it
    res.redirect('/flights/');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }

}
