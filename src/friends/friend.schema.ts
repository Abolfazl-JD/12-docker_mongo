import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FriendDocument = HydratedDocument<Friend>;

@Schema()
export class Friend {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const FriendSchema = SchemaFactory.createForClass(Friend);