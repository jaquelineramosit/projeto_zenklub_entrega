import { Router } from 'express';
import userRouter from './userRoutes';
import professionalRouter from './professionalRoutes';
import avaliableTimeSlotsRouter from './avaliableTimeSlotsRoutes';
import bookSessionRouter from './bookSessionRoutes';
import avaliableRouter from './avaliableRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/professionals', professionalRouter);
router.use('/avaliables-time-slots', avaliableTimeSlotsRouter);
router.use('/book-session', bookSessionRouter);
router.use('/avaliables', avaliableRouter);

export default router;