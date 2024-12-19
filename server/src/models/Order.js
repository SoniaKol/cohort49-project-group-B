import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  restaurant_id: {
    type: Schema.Types.ObjectId, // Reference to the Restaurant model
    ref: "Restaurant",
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "on the way", "delivered"],
  },
  category: {
    type: String,
    required: true,
    enum: ["starter", "main_dish", "desserts", "drinks"],
  },
  //ordered items?
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update `updatedAt` field before saving
orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
