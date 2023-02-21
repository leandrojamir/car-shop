// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/motorcycles.controllers';

const routes = Router();

routes.post('/', (req, res, next) => new MotorcyclesControllers(req, res, next)
  .postMotorcyclesControllers());

export default routes;