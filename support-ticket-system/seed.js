const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Ticket = require('./models/Ticket');
const connectDB = require('./config/db');

dotenv.config();

// Seed data
const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Ticket.deleteMany({});

    // Create admin user when seeding api 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);

    const admin = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: "admin123",
      role: 'admin',
    });

    await admin.save();

    console.log('Data seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Connect to DB and seed data
connectDB().then(seedData);

