const mongoose = require('mongoose');
const { Schema } = mongoose;

const WaitlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Waitlist', WaitlistSchema);
