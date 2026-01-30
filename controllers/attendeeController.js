import AttendeeModel from "../models/Attendee.js";

const createAttendee = async ({...payload}) => {
    try {
        const newAttendee = new AttendeeModel(payload);
        await newAttendee.save();
        return newAttendee;
    } catch (error) {
        throw new Error('Error creating attendee: ' + error.message);
    }
}

export { createAttendee };