// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import { Router } from 'express';
import CarsControllers from '../Controllers/cars.controllers';

const routes = Router();

routes.post('/', (req, res, next) => new CarsControllers(req, res, next).postCarsControllers());

export default routes;