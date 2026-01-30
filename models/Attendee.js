import mongoose from "mongoose";

const AttendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isAttending: {
        type: Boolean,
        required: true,
    },
    hasChildren: {
        type: Boolean,
        required: function() { return this.isAttending; },
        default: false,
    },
    numChildren: {
        type: Number,
        required: function() { return this.hasChildren && this.isAttending; },
        default: 0,
        min: 0,
    },
    hasAllergies: {
        type: Boolean,
        required: function() { return this.isAttending; },
        default: false,
    },
    allergyDetails: {
        type: String,
        required: function() { return this.hasAllergies && this.isAttending; },
        default: '',
    },
    guess: {
        type: String,
        required: false,
        default: '',
    }
}, { timestamps: true });

export default mongoose.model("Attendee", AttendeeSchema);