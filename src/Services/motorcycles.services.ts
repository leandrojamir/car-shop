// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcyclesServices {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }

    return null;
  }

  public async postMotorcyclesServices(motorcycle: IMotorcycle) {
    const MotorcyclesModels = new MotorcycleODM();
    const result = await MotorcyclesModels.create(motorcycle);
    
    return this.createMotorcycleDomain(result);
  }
  
  // 07 - Crie a rota /motorcycles onde seja possível listar motos
  public async getMotorcyclesServices() {
    const MotorcyclesModels = new MotorcycleODM();
    const result = await MotorcyclesModels.getAll();

    return result.map((element) => this.createMotorcycleDomain(element));
  }
  
  public async getIdMotorcyclesServices(motorcycle: string) {
    const MotorcyclesModels = new MotorcycleODM();
    const result = await MotorcyclesModels.getId(motorcycle);

    return this.createMotorcycleDomain(result);
  }
}

export default MotorcyclesServices;