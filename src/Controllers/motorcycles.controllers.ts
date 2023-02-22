// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que é possível cadastrar uma moto com sucesso;
import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesServices from '../Services/motorcycles.services';

const notFound = 'Motorcycle not found';
const invalidId = 'Invalid mongo id';

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
        return this.res.status(404).json({ message: `${notFound}` });
      }

      // Será validado que é possível listar uma moto específica com sucesso;
      return this.res.status(200).json(result);

    // Será validado que não é possível listar uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
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
        return this.res.status(404).json({ message: `${notFound}` });
      }
      
      // Será validado que é possível alterar uma moto com sucesso;
      return this.res.status(200).json(updated);
      
    // Será validado que não é possível alterar uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
    }
  }

  // 11 - Crie a rota /motorcycles/:id onde seja possível excluir uma moto por ID
  // Através do caminho /cars/:id, apenas o carro com o id presente na URL deve ser excluído;
  public async deleteMotorcyclesControllers() {
    try {
      const { id } = this.req.params;
      const result = await this.service.deleteMotorcyclesServices(id);

      // Não é possível excluir uma moto que não existe;
      if (!result) {
        // Retorne status 404 e um JSON com a mensagem:
        //   { "message": "Motorcycle not found" }
        return this.res.status(404).json({ message: `${notFound}` });
      }

      // Ao excluir com sucesso, retorne status 204 sem body;
      return this.res.status(204).json(result);
      
      // Não é possível excluir uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Retorne status 422 e um JSON com a mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: `${invalidId}` });
    }
  }
}

export default MotorcyclesControllers;

// delete http://localhost:3001/motorcycles/63f668dffbc75bd953bc5915
// Status: 404 Not Found
// Size: 34 Bytes
// Time: 29 ms
// {
//   "message": "Motorcycle not found"
// }

// delete http://localhost:3001/motorcycles/63f668dffbc75bd953bc591555555555555555555
// Status: 422 Unprocessable Entity
// Size: 30 Bytes
// Time: 21 ms
// {
//   "message": "Invalid mongo id"
// }

// delete http://localhost:3001/motorcycles/63f668dffbc75bd953bc5914
// Status: 204 No Content
// Size: 0 Bytes
// Time: 18 ms
