const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	eventName: {
		type: String,
		required: true
	},
	eventDescription: String,
	rules: [{ type: String }],
	contacts: [{ name: String, contact: String }]
});
const clusterSchema = new Schema({
	fest: String,
	clusterDescription: String,
	cluster: {
		type: String,
		required: true
	},
	events: [eventSchema]
});

module.exports = mongoose.model('Cluster', clusterSchema);
