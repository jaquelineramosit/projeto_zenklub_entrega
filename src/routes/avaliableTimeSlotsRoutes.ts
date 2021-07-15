import  { Router } from 'express';
import { avaliableController } from '../controllers';

const avaliableTimeSlotsRouter = Router();

avaliableTimeSlotsRouter.get('/:dateStart/:dateEnd/:hourStart/:hourEnd', avaliableController.findAvaliableTimeSlot);

export default avaliableTimeSlotsRouter;