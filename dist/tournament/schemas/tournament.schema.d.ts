import { Document } from 'mongoose';
export declare class Tournament extends Document {
    name: string;
    email: string;
    teamName: string;
    category: string;
}
export declare const TournamentSchema: import("mongoose").Schema<Tournament, import("mongoose").Model<Tournament, any, any, any, Document<unknown, any, Tournament> & Tournament & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tournament, Document<unknown, {}, import("mongoose").FlatRecord<Tournament>> & import("mongoose").FlatRecord<Tournament> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
