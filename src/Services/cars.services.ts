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
}

export default CarsServices;