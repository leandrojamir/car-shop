// 03 - Escreva testes para cobrir 30% da camada de Service
// 06 - Escreva testes para cobrir 60% da camada de Service
// 09 - Escreva testes para cobrir 80% da camada de Service
// Obrigatoriamente seus arquivos de teste devem fIMotorcycle no diretório tests/unit;
// Obrigatoriamente seus testes devem fazer stub do banco de dados;
// Opcionalmente você pode parar o serviço do MongoDB em sua máquina e executar seus teste com o comando npm run test:mocha;
// Só será contabilizada a cobertura, se seus testes não conterem erros.

// Os seguintes pontos serão avaliados
// Será validado que os testes escritos por você estão sendo executados sem erros;
// Será validado que existe um mínimo de 5 funções na camada Services.
// Será validado que a cobertura total das linhas dos arquivos da camada Services é maior ou igual a 60%;
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesServices from '../../../src/Services/motorcycles.services';
// import Car from '../../../src/Domains/Car';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testar post get e put da MotorcyclesServices', function () {
  it('Testando postMotorcyclesServices', async function () {
    const motorcycleInput = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
      
    const motorcycleOutput: IMotorcycle = {
      id: '63f4cd7bf0d760e3c2ad6cc6',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcyclesServices();
    const result = await service.postMotorcyclesServices(motorcycleInput);

    expect(result).to.deep.equal(motorcycleOutput);
  });

  it('Testar getMotorcyclesServices', async function () {
    const motorcyclesArray = [
      {
        id: '63f512be763760af5de96780',
        model: 'Honda Cb 600f',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    sinon.stub(Model, 'find').resolves(motorcyclesArray);
      
    const service = new MotorcyclesServices();
    const result = await service.getMotorcyclesServices();
    
    expect(result).to.be.deep.equal(motorcyclesArray);
  });

  it('Testar getIdMotorcyclesServices', async function () {
    const outputCar: Motorcycle = new Motorcycle({
      id: '63f512be763760af5de96780',
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'findById').resolves(outputCar);

    const service = new MotorcyclesServices();
    const result = await service.getIdMotorcyclesServices('63f512be763760af5de96780');

    expect(result).to.be.deep.equal(outputCar);
  });

  it('Testar putMotorcyclesServices', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'CG 125 alterada',
      year: 1999,
      color: 'Red',
      status: true,
      buyValue: 9.999,
      category: 'Street',
      engineCapacity: 200,
    };
    const id = '63f52a4c882dc6a7326c3666';
    const motorcycleOutput: IMotorcycle = {
      id: '63f52a4c882dc6a7326c3666',
      model: 'CG 125 alterada',
      year: 1999,
      color: 'Red',
      status: true,
      buyValue: 9.999,
      category: 'Street',
      engineCapacity: 200,
    };

    sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleOutput);
    sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

    const service = new MotorcyclesServices();
    const result = await service.putMotorcyclesServices(id, motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});