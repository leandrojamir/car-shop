// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// Será validado que existe uma classe de domínio com o nome Car que representa o objeto carro;
// Será validado que a classe de domínio carro contém os atributos: doorsQty e seatsQty acessíveis apenas a própria classe;
// Será validado que a classe de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses;
// Será validado que a instância da classe de domínio carro recebe como parâmetro um objeto do tipo ICar;
import ICar from '../Interfaces/ICar';

// Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: Pet.ts ---> export default class Pet { });
export default class Car {
  // Os atributos necessários para criar um carro estão na tabela:
  // Atributos Descrição
  // id        String contendo id do veículo
  // model     String contendo modelo do veículo
  // year      Number contendo ano de fabricação do veículo
  // color     String contendo cor principal do veículo
  // status    Booleano contendo status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
  // buyValue  Number contendo valor de compra do veículo
  // doorsQty  Number contendo quantidade de portas de um carro
  // seatsQty  Number contendo quantidade de assentos de um carro

  // O tipo 'string | undefined' não pode ser atribuído ao tipo 'string'.
  // O tipo 'undefined' não pode ser atribuído ao tipo 'string'.ts(2322)
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParameters:ICar) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status;
    this.buyValue = carParameters.buyValue;
    this.doorsQty = carParameters.doorsQty;
    this.seatsQty = carParameters.seatsQty;
  }
}

// FAIL  __tests__/01 - createCar.test.ts (43.438 s)
// 01 - Crie a rota /cars onde seja possível cadastrar um carro
//   ✓ Será validado que existe uma interface de nome ICar que representa o contrato usado para cadastrar um carro (5439 ms)
//   ✓ Será validado que a interface contém os atributos especificados na tabela (6453 ms)
//   ✓ Será validado que existe uma classe de domínio com o nome Car que representa o objeto carro (3080 ms)
//   ✓ Será validado que a classe de domínio carro contém os atributos: doorsQty e seatsQty acessíveis apenas a própria classe (8473 ms)
//   ✓ Será validado que a classe de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses (8007 ms)
//   ✓ Será validado que a instância da classe de domínio carro recebe como parâmetro um objeto do tipo ICar (2625 ms)
//   ✕ Será validado que é possível cadastrar um carro com sucesso (384 ms)
