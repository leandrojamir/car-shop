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
      // http://localhost:3001/motorcycles/63f52a4c882dc6a7326c3666
      //   Status: 200 OK
      //   Size: 157 Bytes
      //   Time: 46 ms
      //   {
      //     "id": "63f52a4c882dc6a7326c3666",
      //     "model": "CG 125 alterada",
      //     "year": 1999,
      //     "color": "Red",
      //     "status": true,
      //     "buyValue": 9.999,
      //     "category": "Street",
      //     "engineCapacity": 200
      //   }

    // Será validado que não é possível alterar uma moto quando o formato do id esta inválido;
    } catch (error) {
      // Deve-se retornar o status 422 e um JSON com a seguinte mensagem:
      //   { "message": "Invalid mongo id" }
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcyclesControllers;

// Status: 201 Created
// Size: 162 Bytes
// Time: 736 ms
// Response Headers6 Cookies Results Docs { }
// {
//     "id": "63f4cd7bf0d760e3c2ad6cc6",
//     "model": "Honda Cb 600f Hornet",
//     "year": 2005,
//     "color": "Yellow",
//     "status": true,
//     "buyValue": 30,
//     "category": "Street",
//     "engineCapacity": 600
//   }

// PASS  __tests__/05 - createMotorcycle.test.ts (83.955 s)
// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
//   ✓ Será validado que existe uma interface de nome IMotorcycle que representa o contrato usado para cadastrar uma moto (5599 ms)
//   ✓ Será validado que a interface contém os atributos especificados na tabela (3412 ms)
//   ✓ Será validado que existe uma interface de nome IVehicle e esta contém os atributos repetidos de carro e moto (12334 ms)
//   ✓ Será validado que existe uma classe de domínio com o nome Motorcycle que representa o objeto moto (3000 ms)
//   ✓ Será validado que a classe de domínio moto contém os atributos: category e engineCapacity acessíveis apenas a própria classe (7178 ms)
//   ✓ Será validado que a classe de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses (7074 ms)
//   ✓ Será validado que a instância da classe de domínio moto recebe como parâmetro um objeto do tipo IMotorcycle (3012 ms)
//   ✓ Será validado que existe uma classe de domínio com o nome Vehicle e esta contém os atributos repetidos de carro e moto (2468 ms)
//   ✓ Será validado que a classe de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses (6670 ms)
//   ✓ Será validado que existe uma classe de nome AbstractODM que representa o modelo de comunicação com o banco e ela serve como abstração para as demais (17024 ms)
//   ✓ Será validado que é possível cadastrar uma moto com sucesso (541 ms)

// http://localhost:3001/motorcycles/63f512be763760af5de96780
// Status: 200 OK
// Size: 162 Bytes
// Time: 59 ms
// Response Headers6 Cookies Results Docs
// {
//     "id": "63f512be763760af5de96780",
//     "model": "Honda Cb 600f Hornet",
//     "year": 2005,
//     "color": "Yellow",
//     "status": true,
//     "buyValue": 30,
//     "category": "Street",
//     "engineCapacity": 600
//   }

// PASS  __tests__/07 - readMotorcycle.test.ts (9.198 s)
// 07 - Crie a rota /motorcycles onde seja possível listar motos
//   ✓ Será validado que é possível listar todas as motos (247 ms)
//   ✓ Será validado que não é possível listar uma moto que não existe (166 ms)
//   ✓ Será validado que não é possível listar uma moto quando o formato do id esta inválido (168 ms)
//   ✓ Será validado que é possível listar uma moto específica com sucesso (164 ms)

// PASS  __tests__/08 - updateMotorcycle.test.ts (11.363 s)
// 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID
//   ✓ Será validado que não é possível alterar uma moto que não existe (271 ms)
//   ✓ Será validado que não é possível alterar uma moto quando o formato do id esta inválido (167 ms)
//   ✓ Será validado que é possível alterar uma moto com sucesso (181 ms)
