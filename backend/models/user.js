import { Schema, model } from "mongoose";


const userSchema = new Schema({
    email: {type:String, required:true, unique:true},
    fullname: {type:String, required:true},
    phone: {type:Number, required:true, unique:true},
    password: {type:String, required:true},
    dob: {type:Date, required:true},
    gender: {type:String, enum:['Male','Female'], required:true},
    tokens: [{ type: Object }],
});



// Customize toJSON to format the date
userSchema.set('toJSON', {
    transform: function (doc, ret) {
        // Convert the date to a string without the time part
        ret.date = ret.date.toISOString().split('T')[0];
        return ret;
    }
});


export const UserModel = model ('user', userSchema, 'users');
