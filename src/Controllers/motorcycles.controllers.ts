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
