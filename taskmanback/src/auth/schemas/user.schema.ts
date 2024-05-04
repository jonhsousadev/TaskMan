import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true
})
export class User {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'We currently have an account with this e-mail. Please, type another email.']})
  email: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)