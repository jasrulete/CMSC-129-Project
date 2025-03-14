import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tournament extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  teamName: string;

  @Prop({ required: true })
  category: string;
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
