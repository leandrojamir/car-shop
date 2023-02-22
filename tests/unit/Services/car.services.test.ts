// 03 - Escreva testes para cobrir 30% da camada de Service
// Obrigatoriamente seus arquivos de teste devem ficar no diretório tests/unit;
// Obrigatoriamente seus testes devem fazer stub do banco de dados;
// Opcionalmente você pode parar o serviço do MongoDB em sua máquina e executar seus teste com o comando npm run test:mocha;
// Só será contabilizada a cobertura, se seus testes não conterem erros.

// Os seguintes pontos serão avaliados
// Será validado que os testes escritos por você estão sendo executados sem erros;
// Será validado que existe um mínimo de 3 funções na camada Services.
// Será validado que a cobertura total das linhas dos arquivos da camada Services é maior ou igual a 30%;

// https://github.com/tryber/poo-trix/blob/application-live-lectures-part-2/tests/unit/services/keyRegister.test.ts
// https://github.com/tryber/poo-trix/blob/application-live-lectures-part-2/tests/unit/services/undoTransfer.test.ts
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarsServices from '../../../src/Services/cars.services';
import Car from '../../../src/Domains/Car';

describe('Testar post get e put da CarsServices', function () {
  it('Testando postCarsServices', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    const carOutput: ICar = {
      id: '63f2de4fbe34102ba275cac8',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarsServices();
    const result = await service.postCarsServices(carInput);

    expect(result).to.deep.equal(carOutput);
  });

  it('Testar getCarsServices', async function () {
    const carsArray = [
      {
        id: '63f2de4fbe34102ba275cac8',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '633ec9fa3df977e30e993492',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63f2f653121b553dcc3044a2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(carsArray);
      
    const service = new CarsServices();
    const result = await service.getCarsServices();
    
    expect(result).to.be.deep.equal(carsArray);
  });

  it('Testar getIdCarsServices', async function () {
    const outputCar: Car = new Car({
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findById').resolves(outputCar);

    const service = new CarsServices();
    const result = await service.getIdCarsServices('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(outputCar);
  });

  // http://localhost:3001/cars/63f2f653121b553dcc3044a2
  // Status: 200 OK
  // Size: 149 Bytes
  // Time: 132 ms
  // Response Headers6 Cookies Results Docs
  // {
  //   "id": "63f2f653121b553dcc3044a2",
  //   "model": "TrocarMareaParaBomba",
  //   "year": 2002,
  //   "color": "Black",
  //   "status": true,
  //   "buyValue": 15.99,
  //   "doorsQty": 4,
  //   "seatsQty": 5
  // }
  it('Testar putCarsServices', async function () {
    const carInput: ICar = {
      model: 'TrocarMareaParaBomba',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const id = '63f2f653121b553dcc3044a2';
    const carOutput: ICar = {
      id: '63f2f653121b553dcc3044a2',
      model: 'TrocarMareaParaBomba',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    // sinon.stub(Model, 'update').resolves();
    // MongooseError: Operation `cars.findOneAndUpdate()` buffering timed out after 10000ms
    sinon.stub(Model, 'findOneAndUpdate').resolves(carOutput);
    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarsServices();
    const result = await service.putCarsServices(id, carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});