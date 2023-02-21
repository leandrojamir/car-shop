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
}

export default MotorcycleODM;