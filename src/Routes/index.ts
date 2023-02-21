// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import { Router } from 'express';
import carsRoutes from './cars.routes';
import motorcyclesRoutes from './motorcycles.routes';

const routes = Router();

// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// O endpoint deve ser acessível através do caminho (/cars);
routes.use('/cars', carsRoutes);

// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// O endpoint deve ser acessível através do caminho (/motorcycles);
routes.use('/motorcycles', motorcyclesRoutes);

export default routes;
