const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
	ruleName: {
		type: String,
		required: true
	},
	ruleDescription: String,
	specificRules: [{ type: String }]
});
const eventSchema = new Schema({
	fest: String,
	eventDescription: String,
	eventTitle: {
		type: String,
		required: true
	},
	rules: [ruleSchema],
	contacts: [{ name: String, contact: String }]
});

module.exports = mongoose.model('Event', eventSchema);
