const express = require('express');
const router = express.Router();
const { createTicket, updateTicket, deleteTicket, assignTicket, getTickets } = require('../controllers/ticketController');      
const auth = require('../middlewares/auth');
const { isSupport, isAdmin } = require('../middlewares/roles');
  
router.post('/createTicket', auth, createTicket);
router.put('/:id', auth, isSupport, updateTicket);
router.delete('/:id', auth, isAdmin, deleteTicket);
router.put('/assign/:id', auth, isSupport, assignTicket);
router.get('/', auth, isSupport, getTickets);
  
module.exports = router;
