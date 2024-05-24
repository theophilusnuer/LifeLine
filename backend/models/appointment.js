import { Schema, Types, model } from "mongoose";


//regex pattern for validating time in HH:MM:SS format
const timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

const appointmentSchema = new Schema({
    userId: {type: Types.ObjectId, required:true},
    fullname: {type: String, required:true, trim:true},
    email: {type: String, required:true, trim:true},
    phone: {type: Number, required:true, trim:true},
    date: {type: Date, required:true},
    time: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return timePattern.test(v);
          },
          message: props => `${props.value} is not a valid time format!`
        }
    },
    category: {
        type:String,
        enum: ['Wellness','Surgery','Laboratory'],
        required:true
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Rescheduled', 'Cancelled'],
        default: 'Scheduled'
      },
      createdAt: {type: Date, default: Date.now}
});

// Customize toJSON to format the date
appointmentSchema.set('toJSON', {
    transform: function (doc, ret) {
        // Convert the date to a string without the time part
        ret.date = ret.date.toISOString().split('T')[0];
        return ret;
    }
});

export const AppointmentModel = model ('Transaction', appointmentSchema, 'transactions');