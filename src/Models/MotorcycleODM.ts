// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM extends AbstractODM <IMotorcycle> {
  constructor() {
    const schema = new Schema <IMotorcycle>({
      model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        required: false,
        default: false,
      },
      buyValue: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      engineCapacity: {
        type: Number,
        required: true,
      },
    });
   
    super(schema, 'motorcycle');
  }
  // 07 - Crie a rota /motorcycles onde seja possível listar motos
  public async getAll(): Promise <IMotorcycle[]> {
    return this.model.find();
  }

  public async getId(value: string): Promise <IMotorcycle | null> {
    return this.model.findById(value);
  }
}

export default MotorcycleODM;