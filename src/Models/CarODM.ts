// 01 - Crie a rota /cars onde seja possível cadastrar um carro
import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
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
      doorsQty: {
        type: Number,
        required: true,
      },
      seatsQty: {
        type: Number,
        required: true,
      },
    });
    
    super(schema, 'car');
  }

  // 02 - Crie o endpoint para listar carros
  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }
  
  // https://github.com/tryber/poo-trix/blob/application-live-lectures-part-2/src/Models/KeyODM.ts
  public async getId(value: string): Promise<ICar | null> {
    return this.model.findById(value);
  }
  
  // 10 - Crie a rota /cars/:id onde seja possível excluir um carro por ID
  public async deleteId(value: string): Promise<ICar | null> {
    return this.model.findByIdAndDelete(value);
  }
}

export default CarODM;