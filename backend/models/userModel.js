import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, select: false },

    username: { type: String, required: true, unique: true, trim: true },

    profilePicUrl: { type: String },

    newMessagePopup: { type: Boolean, default: true },

    role: { type: String, default: "user", enum: ["user", "admin", "superadmin"] },

    resetToken: { type: String },

    expireToken: { type: Date }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
