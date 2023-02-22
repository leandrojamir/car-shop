// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarsServices {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }

    return null;
  }
  
  public async postCarsServices(car: ICar) {
    const CarsModels = new CarODM();
    const result = await CarsModels.create(car);

    return this.createCarDomain(result);
  }

  // 02 - Crie o endpoint para listar carros
  public async getCarsServices() {
    const CarsModels = new CarODM();
    const result = await CarsModels.getAll();
    
    return result.map((element) => this.createCarDomain(element));
  }

  public async getIdCarsServices(car: string) {
    const CarsModels = new CarODM();
    const result = await CarsModels.getId(car);
   
    return this.createCarDomain(result);
  }

  // 04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID
  public async putCarsServices(car: string, carBody: object) {
    const CarsModels = new CarODM();
    const result = await CarsModels.update(car, carBody);
    
    return this.createCarDomain(result);
  }

  // 10 - Crie a rota /cars/:id onde seja possível excluir um carro por ID
  public async deleteCarsServices(car: string) {
    const CarsModels = new CarODM();
    const result = await CarsModels.deleteId(car);
    
    return this.createCarDomain(result);
  }
}

export default CarsServices;