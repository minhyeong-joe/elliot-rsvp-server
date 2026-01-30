import AttendeeModel from "../models/Attendee.js";

const createAttendee = async ({...payload}) => {
    console.log(`payload: ${JSON.stringify(payload)}`);
    try {
        const newAttendee = new AttendeeModel(payload);
        await newAttendee.save();
        return newAttendee;
    } catch (error) {
        throw new Error('Error creating attendee: ' + error.message);
    }
}

export { createAttendee };