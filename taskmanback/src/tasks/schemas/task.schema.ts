import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

@Schema({
  timestamps: false
})
export class Task {
  @Prop()
  title: string;
  @Prop()
  completed: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  createdByUser: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  assignedToUser: User;

}

export const TaskSchema = SchemaFactory.createForClass(Task)