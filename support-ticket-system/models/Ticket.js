const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'pending', 'closed'],
    default: 'open',
  },
  assignedTo: {
    type: String,
    ref: 'User',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ticketEmail: {
	type: String,
	ref: 'User',
	required: true,
	  },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', TicketSchema);

