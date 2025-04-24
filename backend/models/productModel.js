import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        gameName: { type: String, required: true, unique: true },

        type: { type: String, required: true },

        product: [{ type: Schema.Types.ObjectId, ref: "DetailProduct" }],
        
        rate: { type: String, required: true },
    },
    { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);