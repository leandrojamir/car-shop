// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import { Router } from 'express';
import CarsControllers from '../Controllers/cars.controllers';

const routes = Router();

routes.post('/', (req, res, next) => new CarsControllers(req, res, next).postCarsControllers());

// 02 - Crie o endpoint para listar carros
// O endpoint deve ser acessível através do caminho (/cars) e (/cars/:id);
routes.get('/', (req, res, next) => new CarsControllers(req, res, next).getCarsControllers());
routes.get('/:id', (req, res, next) => new CarsControllers(req, res, next).getIdCarsControllers());

export default routes;