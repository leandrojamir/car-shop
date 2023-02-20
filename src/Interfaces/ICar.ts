// node@88e1c2f35931:/app$ npm test 01

// > car-shop@1.0.0 test
// > jest -i --verbose "01"

//  FAIL  __tests__/01 - createCar.test.ts
//   ● Test suite failed to run

//     __tests__/utils/CarsMock.ts:1:18 - error TS2307: Cannot find module '../../src/Interfaces/ICar' or its corresponding type declarations.

//     1 import ICar from '../../src/Interfaces/ICar';
//                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        16.358 s
// Ran all test suites matching /01/i.

// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// Será validado que existe uma interface de nome ICar que representa o contrato usado para cadastrar um carro;
// Será validado que a interface contém os atributos especificados na tabela;

export default interface ICar {
  id?: string,
  model: string,
  year: number,
  color:string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
}

// Atributos Descrição
// id String contendo id do veículo
// model String contendo modelo do veículo
// year Number contendo ano de fabricação do veículo
// color String contendo cor principal do veículo
// status Booleano contendo status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
// buyValue Number contendo valor de compra do veículo
// doorsQty Number contendo quantidade de portas de um carro
// seatsQty Number contendo quantidade de assentos de um carro
