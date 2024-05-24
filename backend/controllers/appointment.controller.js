import { AppointmentModel } from "../models/appointment.js";

export const addAppointment = async (req, res, next) => {
  try {
    const results = await AppointmentModel.create(req.body);
    res.status(201).json({results, message:'appointment booked'});
  } catch (error) {
    next(error);
  }
};

export const getAppointments = async (req, res, next) => {
  try {
    const results = await AppointmentModel.find(req.query);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await AppointmentModel.findByIdAndDelete({ _id: id });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (req,res,next) => {

    try {
        const { id } = req.params;
        const { status } = req.body;
       
      const request = await AppointmentModel.findById(id)
        if(status){
          request.status = status
          const updatedRequest = await request.save()
          res.json(updatedRequest)
        } else{
          res.json(request)
        }
        
    } catch (error) {
        next(error);
    }
};
