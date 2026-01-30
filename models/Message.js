import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        default: '',
    },
    anonymous: {
        type: Boolean,
        required: true,
        default: false,
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendee',
        required: function() { return !this.anonymous; },
        default: null,
    }
}, { timestamps: true });

export default mongoose.model("Message", MessageSchema);