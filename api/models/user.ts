// src/models/user.ts
import mongoose, { Document, Schema, Model } from "mongoose";
import { NextFunction } from "express";

export interface IUser extends Document {
	email    : string,
	first    : string,
	last     : string,
	password : string,
	created  : Date,
}

const UserSchema: Schema = new Schema({
	email : {
		type: string,
		required: true,
		unique: true,
	},
	first : {
		type: string,
		required: true,
	},
	last: {
		type: string,
		required: true,
	},
	password: {
		type: string,
		max: 28,
		min: 8,
		required: true,
	},
	created : {
		type: Date,
		required: true,
	}
});

UserSchema.methods.fullname = function(): string {
	return (this.first.trim() + " " + this.last.trim());
};

UserSchema.pre("save", function(next: NextFunction) {
	let now = Date();
	if (!this.created) {
		this.created = now;
	}
	next();
	});

// export as mongoose model
export default User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

