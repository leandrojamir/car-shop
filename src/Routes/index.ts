// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import { Router } from 'express';
import carsRoutes from './cars.routes';

const routes = Router();

// O endpoint deve ser acessível através do caminho (/cars);
routes.use('/cars', carsRoutes);

export default routes;
