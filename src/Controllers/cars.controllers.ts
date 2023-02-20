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

    // Será validado que não é possível listar um carro quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem: { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: 'Invalid mongo id' });
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
        return this.res.status(404).json({ message: 'Car not found' });
      }
      // Será validado que é possível alterar um carro com sucesso;
      return this.res.status(200).json(updated);
      
      // Será validado que não é possível alterar um carro quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:  { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
} 

export default CarsControllers;
