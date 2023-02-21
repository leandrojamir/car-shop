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

    // super(schema, 'car');
    // INFO] 13:27:09 Restarting: /app/src/Routes/index.ts has been modified
    // ValidationError: car validation failed: seatsQty: Path `seatsQty` is required., doorsQty: Path `doorsQty` is required.
    //     at model.Document.invalidate (/app/node_modules/mongoose/lib/document.js:2943:32)
    //     at /app/node_modules/mongoose/lib/document.js:2734:17
    //     at /app/node_modules/mongoose/lib/schematype.js:1280:9
    //     at processTicksAndRejections (node:internal/process/task_queues:78:11)
    super(schema, 'motorcycle');
  }
  // 07 - Crie a rota /motorcycles onde seja possível listar motos
  
  //   // 02 - Crie o endpoint para listar carros
  //   public async getAll(): Promise<ICar[]> {
  //     return this.model.find();
  //   }
  //   // https://github.com/tryber/poo-trix/blob/application-live-lectures-part-2/src/Models/KeyODM.ts
  //   public async getId(value: string): Promise<ICar | null> {
  //     return this.model.findById(value);
  //   }
  public async getAll(): Promise <IMotorcycle[]> {
    return this.model.find();
  }

  public async getId(value: string): Promise <IMotorcycle | null> {
    return this.model.findById(value);
  }
}

export default MotorcycleODM;