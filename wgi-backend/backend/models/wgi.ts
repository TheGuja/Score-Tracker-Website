import mongoose from "mongoose";
import { Schema } from "mongoose";

const groupData = new Schema({
    group: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

export const wgi = mongoose.model('piw-2024-group', groupData)