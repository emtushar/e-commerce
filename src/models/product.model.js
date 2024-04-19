import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productImage: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    review: [
      [
        {
          type: String,
        },
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
    ],
    stock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
