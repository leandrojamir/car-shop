// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// Será validado que é possível cadastrar um carro com sucesso;
import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsServices from '../Services/cars.services';

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
        return this.res.status(404).json({ message: 'Car not found' });
      } 
      // Será validado que é possível listar um carro específico com sucesso;
      return this.res.status(200).json(result);

      // http://localhost:3001/cars/63f2de4fbe34102ba275cac8
      // Status: 200 OK
      // Size: 134 Bytes
      // Time: 34 ms
      // Response Headers6 Cookies Results Docs 
      // {
      //   "id": "63f2de4fbe34102ba275cac8",
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
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
} 

export default CarsControllers;

// Status: 201 Created
// Size: 134 Bytes
// Time: 1.23 s
// Response Headers6 Cookies Results Docs
// {
//   "id": "63f2cea3f412a6cf6fff48e7",
//   "model": "Marea",
//   "year": 2002,
//   "color": "Black",
//   "status": true,
//   "buyValue": 15.99,
//   "doorsQty": 4,
//   "seatsQty": 5
// }
// PASS  __tests__/01 - createCar.test.ts (52.863 s)
// 01 - Crie a rota /cars onde seja possível cadastrar um carro
//   ✓ Será validado que existe uma interface de nome ICar que representa o contrato usado para cadastrar um carro (6174 ms)
//   ✓ Será validado que a interface contém os atributos especificados na tabela (5865 ms)
//   ✓ Será validado que existe uma classe de domínio com o nome Car que representa o objeto carro (3004 ms)
//   ✓ Será validado que a classe de domínio carro contém os atributos: doorsQty e seatsQty acessíveis apenas a própria classe (7343 ms)
//   ✓ Será validado que a classe de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses (7793 ms)
//   ✓ Será validado que a instância da classe de domínio carro recebe como parâmetro um objeto do tipo ICar (2739 ms)
//   ✓ Será validado que é possível cadastrar um carro com sucesso (1004 ms)

// PASS  __tests__/02 - readCar.test.ts (18.019 s)
// 02 - Crie o endpoint para listar carros
//   ✓ Será validado que é possível listar todos os carros (508 ms)
//   ✓ Será validado que não é possível listar um carro que não existe (300 ms)
//   ✓ Será validado que não é possível listar um carro quando o formato do id esta inválido (253 ms)
//   ✓ Será validado que é possível listar um carro específico com sucesso (291 ms)
