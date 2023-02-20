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
} 

export default CarsControllers;