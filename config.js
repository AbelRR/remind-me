'use strict';

require('dotenv-safe').load();

const cfg = {};

// HTTP Port
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';
cfg.twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

cfg.twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// MongoDB connection string - MONGO_URL is for local dev,
// MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
cfg.mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL;
cfg.mongoUrlTest = process.env.MONGO_URL_TEST;

// Export configuration object
module.exports = cfg;