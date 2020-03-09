const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

router.get('/events', async (req, res) => {
	const events = await Event.find({ fest: 'ks20' }).catch(e => console.log(e));
	if (events) {
		res.send(events);
	} else {
		res.send('Documents not found');
	}
});

router.post('/events', async (req, res) => {
	const event = req.body;
	console.log(eventTitle);
	const event = new Event({ ...event });
	const eventF = await event.save().catch(e => console.log(e));
	if (eventF) {
		console.log(eventF);
		res.send(eventF);
	}
});

module.exports = router;
