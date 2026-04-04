import AttendeeModel from "../models/Attendee.js";

const createAttendee = async ({ ...payload }) => {
	try {
		const newAttendee = new AttendeeModel(payload);
		await newAttendee.save();
		return newAttendee;
	} catch (error) {
		throw new Error("Error creating attendee: " + error.message);
	}
};

const getAllAttendeesByGuess = async () => {
	try {
		const allAttendees = await AttendeeModel.find({
			isAttending: true,
			guess: { $ne: "" },
		}).select("name guess");
		const guessMap = {};
		allAttendees.forEach((attendee) => {
			const guess = attendee.guess || null;
			if (!guessMap[guess]) {
				guessMap[guess] = [];
			}
			guessMap[guess].push(attendee.name);
		});
		console.log(guessMap);

		return guessMap;
	} catch (error) {
		throw new Error(
			"Error fetching attendees by their guesses: " + error.message,
		);
	}
};

export { createAttendee, getAllAttendeesByGuess };
