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
    console.log(result);

    // return this.createCarDomain(result);
    // O argumento do tipo 'ICar[]' não é atribuível ao parâmetro do tipo 'ICar'.
    // O tipo 'ICar[]' não tem as propriedades a seguir do tipo 'ICar': model, year, color, buyValue e mais 2.ts(2345)
    return result.map((element) => this.createCarDomain(element));
  }

  public async getIdCarsServices(car: string) {
    const CarsModels = new CarODM();
    const result = await CarsModels.getId(car);
    console.log(result);
   
    return this.createCarDomain(result);
  }
}

export default CarsServices;