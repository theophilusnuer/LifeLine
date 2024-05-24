import { Router } from "express";
import { verifyToken } from "../middlewares/authenticate.js";
import { addAppointment, deleteAppointment, getAppointments, updateAppointment } from "../controllers/appointment.controller.js";



//create appointments router
const appointmentsRouter = Router();

appointmentsRouter.use(verifyToken);

//define routes
appointmentsRouter.post('/', addAppointment);
appointmentsRouter.get('/', getAppointments);
appointmentsRouter.delete('/:id', deleteAppointment);
appointmentsRouter.patch('/:id', updateAppointment);


export default appointmentsRouter;