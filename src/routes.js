import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import authMiddleware from './app/middlewares/auth';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/providers', ProviderController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.get('/schedule', ScheduleController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
