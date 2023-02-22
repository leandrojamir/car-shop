// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// Será validado que é possível cadastrar um carro com sucesso;
import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsServices from '../Services/cars.services';

// Define a constant instead of duplicating this literal 3 times.eslintsonarjs/no-duplicate-string
const notFound = 'Car not found';
const invalidId = 'Invalid mongo id';

class CarsControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsServices();
  }
    
  public async postCarsControllers() {
    const car: ICar = { ...this.req.body };

    try {
      const result = await this.service.postCarsServices(car);

      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  // 02 - Crie o endpoint para listar carros
  // Será validado que é possível listar todos os carros;
  public async getCarsControllers() {
    try {
      const result = await this.service.getCarsServices();

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getIdCarsControllers() {
    const { id } = this.req.params;

    try {
      const result = await this.service.getIdCarsServices(id);
      // Será validado que não é possível listar um carro que não existe;
      if (!result) {
        // Deve-se retornar o status 404 e um JSON com a seguinte mensagem:   { "message": "Car not found" }
        return this.res.status(404).json({ message: `${notFound}` });
        // get http://localhost:3001/cars/63f64cd58ab523f5af2679a2
        // Status: 404 Not Found
        // Size: 27 Bytes
        // Time: 17 ms
        // {
        //   "message": "Car not found"
        // }
      } 
      // Será validado que é possível listar um carro específico com sucesso;
      return this.res.status(200).json(result);
      // get http://localhost:3001/cars/63f64cd58ab523f5af2679a1
      // Status: 200 OK
      // Size: 134 Bytes
      // Time: 19 ms
      // {
      //   "id": "63f64cd58ab523f5af2679a1",
      //   "model": "Marea",
      //   "year": 2002,
      //   "color": "Black",
      //   "status": true,
      //   "buyValue": 15.99,
      //   "doorsQty": 4,
      //   "seatsQty": 5
      // }

    // Será validado que não é possível listar um carro quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem: { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
      // get http://localhost:3001/cars/63f64
      // Status: 422 Unprocessable Entity
      // Size: 30 Bytes
      // Time: 8 ms
      // {
      //   "message": "Invalid mongo id"
      // }
    }
  }

  // 04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID
  // Apenas o carro com o id presente na URL deve ser atualizado;
  public async putCarsControllers() {
    const { id } = this.req.params;
    const carBody: ICar = { ...this.req.body };
    try {
      const result = await this.service.getIdCarsServices(id);
      const updated = await this.service.putCarsServices(id, carBody);
      // Será validado que não é possível alterar um carro que não existe;
      if (!result) {
        // Deve-se retornar o status 404 e um JSON com a seguinte mensagem:   { "message": "Car not found" }
        return this.res.status(404).json({ message: `${notFound}` });
        // put http://localhost:3001/cars/63f64fc58ab523f5af2679ab
        // Status: 404 Not Found
        // Size: 27 Bytes
        // Time: 27 ms
        // {
        //   "message": "Car not found"
        // }
      }
      // Será validado que é possível alterar um carro com sucesso;
      return this.res.status(200).json(updated);
      // put http://localhost:3001/cars/63f64fc58ab523f5af2679aa
      // Status: 200 OK
      // Size: 138 Bytes
      // Time: 63 ms
      // {
      //   "id": "63f64fc58ab523f5af2679aa",
      //   "model": "Teste PUT",
      //   "year": 2002,
      //   "color": "Black",
      //   "status": true,
      //   "buyValue": 15.99,
      //   "doorsQty": 4,
      //   "seatsQty": 5
      // }
      
      // Será validado que não é possível alterar um carro quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:  { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
      // put http://localhost:3001/cars/63f64fc58ab523f5af2679abbbbbbbbbb
      // Status: 422 Unprocessable Entity
      // Size: 30 Bytes
      // Time: 13 ms
      // {
      //   "message": "Invalid mongo id"
      // }
    }
  }

  // 10 - Crie a rota /cars/:id onde seja possível excluir um carro por ID
  // Através do caminho /cars/:id, apenas o carro com o id presente na URL deve ser excluído;
  public async deleteCarsControllers() {
    try {
      const { id } = this.req.params;
      const result = await this.service.deleteCarsServices(id);
      // Não é possível excluir um carro que não existe;
      if (!result) {
        // Retorne status 404 e um JSON com a mensagem:
        //   { "message": "Car not found" }
        return this.res.status(404).json({ message: `${notFound}` });
        // delete http://localhost:3001/cars/63f64cd58ab523f5af2679a2
        // Status: 404 Not Found
        // Size: 27 Bytes
        // Time: 23 ms
        // {
        //   "message": "Car not found"
        // }
      }
      // Ao excluir com sucesso, retorne status 204 sem body;
      return this.res.status(204).json(result);
      // delete http://localhost:3001/cars/63f64cd58ab523f5af2679a1
      // Status: 204 No Content
      // Size: 0 Bytes
      // Time: 16 ms

    // Não é possível excluir um carro quando o formato do id esta inválido;
    } catch (error) {
      // Retorne status 422 e um JSON com a mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
      // delete http://localhost:3001/cars/63f64cd58ab523f5af2
      // Status: 422 Unprocessable Entity
      // Size: 30 Bytes
      // Time: 12 ms
      // {
      //   "message": "Invalid mongo id"
      // }
    }
  }
} 

export default CarsControllers;

// http://localhost:3001/cars
// Status: 201 Created
// Size: 134 Bytes
// Time: 74 ms
// {
//   "id": "63f642f98405736405854e6d",
//   "model": "Marea",
//   "year": 2002,
//   "color": "Black",
//   "status": true,
//   "buyValue": 15.99,
//   "doorsQty": 4,
//   "seatsQty": 5
// }

// http://localhost:3001/cars/63f642f98405736405854e6d
// Status: 204 No Content
// Size: 0 Bytes
// Time: 61 ms
