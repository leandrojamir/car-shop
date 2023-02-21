// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/motorcycles.controllers';

const routes = Router();

// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
routes.post('/', (req, res, next) => new MotorcyclesControllers(req, res, next)
  .postMotorcyclesControllers());

// 07 - Crie a rota /motorcycles onde seja possível listar motos
// O endpoint deve ser acessível através do caminho (/motorcycles) e (/motorcycles/:id);
routes.get('/', (req, res, next) => new MotorcyclesControllers(req, res, next)
  .getMotorcyclesControllers());
routes.get('/:id', (req, res, next) => new MotorcyclesControllers(req, res, next)
  .getIdMotorcyclesControllers());

// 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID
// O endpoint deve ser acessível através do caminho (/motorcycles/:id);
routes.put('/:id', (req, res, next) => new MotorcyclesControllers(req, res, next)
  .putMotorcyclesControllers());
  
export default routes;