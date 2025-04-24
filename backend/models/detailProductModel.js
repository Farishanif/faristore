import mongoose from "mongoose";

const Schema = mongoose.Schema;

const detailProductSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },

        productName: { type: String, required: true },

        price: { type: Number, required: true },
    },
    { timestamps: true }
);

export const DetailProduct = mongoose.model('DetailProduct', detailProductSchema);