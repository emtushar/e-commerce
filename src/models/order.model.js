import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order: [
      [
        {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        {
          type: Number,
          required: true,
        },
      ],
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    pincode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
