import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testimonySchema = new Schema(
    {
        invoice: { type: Schema.Types.ObjectId, ref: "Invoice", required: true },

        phoneNumber: { type: String, required: true, unique: true },

        testimonyDescription: { type: String, },
        
        rate: { type: Number, required: true }
    },
    { timestamps: true }
);

export const Testimony = mongoose.model('Testimony', testimonySchema);