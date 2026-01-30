import MessageModel from "../models/Message.js";

const createMessage = async ({...payload}) => {
    const { message, anonymous, attendeeId } = payload;
    console.log(`Message: ${message}`);
    try {
        const newMessage = new MessageModel({
            content: message,
            anonymous: anonymous,
            writer: anonymous ? null : attendeeId,
        });
        await newMessage.save();
        return newMessage;
    } catch (error) {
        throw new Error('Error creating message: ' + error.message);
    }
}

export { createMessage };