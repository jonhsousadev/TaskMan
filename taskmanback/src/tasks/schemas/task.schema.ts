import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: false
})
export class Task {
  @Prop()
  title: string;
  @Prop()
  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task)