import mongoose from "mongoose";

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
    {
        invoiceNumber: { type: String, required: true, unique: true },

        product: { type: Schema.Types.ObjectId, ref: "DetailProduct" },

        testimony: { type: Schema.Types.ObjectId, ref: "Testimonies", required: true },
        
        status: { type: String, default: "waiting", enum: ["waiting","pending", "done"] },
    },
    { timestamps: true }
);

export const Invoice = mongoose.model('Invoice', invoiceSchema);