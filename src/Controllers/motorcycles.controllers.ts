// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que é possível cadastrar uma moto com sucesso;
import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesServices from '../Services/motorcycles.services';

class MotorcyclesControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesServices();
  }
  
  // 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
  public async postMotorcyclesControllers() {
    const motorcycle : IMotorcycle = { ...this.req.body };

    try {
      const result = await this.service.postMotorcyclesServices(motorcycle);
      
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
  
  // 07 - Crie a rota /motorcycles onde seja possível listar motos
  // Será validado que é possível listar todas as motos;
  public async getMotorcyclesControllers() {
    try {
      const result = await this.service.getMotorcyclesServices();

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getIdMotorcyclesControllers() {
    const { id } = this.req.params;

    try {
      const result = await this.service.getIdMotorcyclesServices(id);

      // Será validado que não é possível listar uma moto que não existe;
      if (!result) {
        // Deve-se retornar o status 404 e um JSON com a seguinte mensagem:
        //   { "message": "Motorcycle not found" }
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }

      // Será validado que é possível listar uma moto específica com sucesso;
      return this.res.status(200).json(result);

    // Será validado que não é possível listar uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  // 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID
  public async putMotorcyclesControllers() {
    const { id } = this.req.params;
    const motorcycleBody: IMotorcycle = { ...this.req.body };
    try {
      const result = await this.service.getIdMotorcyclesServices(id);
      const updated = await this.service.putMotorcyclesServices(id, motorcycleBody);

      // Será validado que não é possível alterar uma moto que não existe;
      if (!result) {
        // Deve-se retornar o status 404 e um JSON com a seguinte mensagem:
        //   { "message": "Motorcycle not found" }
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      
      // Será validado que é possível alterar uma moto com sucesso;
      return this.res.status(200).json(updated);
      
    // Será validado que não é possível alterar uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcyclesControllers;