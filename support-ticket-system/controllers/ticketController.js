const Ticket = require('../models/Ticket');
const nodeMailer = require("../services/emailService");


exports.createTicket = async (req, res) => {
  const { title, description, email} = req.body;
  try {
    const ticket = new Ticket({ title, description, createdBy: req.user.id, ticketEmail: email});
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateTicket = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    let ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: 'Ticket not found' });

    if (ticket.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    ticket.title = title || ticket.title;
    ticket.description = description || ticket.description;

    ticket.status = status || ticket.status;
    //alert user that ticket status or details has been updated 
	nodeMailer.sendNotification(ticket.ticketEmail, 'Ticket Status Update and Updated', ticket.status);
    console.log("sent the mail");


    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    let ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: 'Ticket not found' });

	console.log("is it here?");
    await ticket.deleteOne();

    res.json({ msg: 'Ticket removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.assignTicket = async (req, res) => {
  const {assignedTo} = req.body;
  try {
    let ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: 'Ticket not found' });

    ticket.assignedTo = assignedTo;
   //send email alert when assignment is done
	nodeMailer.sendNotification(ticket.ticketEmail, 'Ticket Assignment Status', ticket.assignedTo);


    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('createdBy assignedTo', '-password');
    res.json(tickets);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

