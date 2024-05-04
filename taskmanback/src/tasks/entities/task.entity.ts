import mongoose, { Document } from "mongoose";

export class Task extends Document{
  title?: string;
  completed?: boolean;
  createdByUser:mongoose.Schema.Types.ObjectId;
  assignedByUser:mongoose.Schema.Types.ObjectId;
}
