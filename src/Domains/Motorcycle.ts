// Expected Motorcycles/exists-domain.ts to compile successfully. TS Error: Cannot find module '../../../src/Domains/Motorcycle' or its corresponding type declarations.

// 26 |
// 27 |   it('Será validado que existe uma classe de domínio com o nome Motorcycle que representa o objeto moto', () => {
// > 28 |     expect('Motorcycles/exists-domain').toCompile();
//    |                                         ^

// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que existe uma classe de domínio com o nome Motorcycle que representa o objeto moto;
// Será validado que a classe de domínio moto contém os atributos: category e engineCapacity acessíveis apenas a própria classe;
// Será validado que a classe de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses;
// Será validado que a instância da classe de domínio moto recebe como parâmetro um objeto do tipo IMotorcycle;
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(carParameters:IMotorcycle) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status;
    this.buyValue = carParameters.buyValue;
    this.category = carParameters.category;
    this.engineCapacity = carParameters.engineCapacity;
  }
}

// FAIL  __tests__/05 - createMotorcycle.test.ts (67.298 s)
// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
//   ✓ Será validado que existe uma interface de nome IMotorcycle que representa o contrato usado para cadastrar uma moto (4766 ms)
//   ✓ Será validado que a interface contém os atributos especificados na tabela (2578 ms)
//   ✓ Será validado que existe uma interface de nome IVehicle e esta contém os atributos repetidos de carro e moto (10669 ms)
//   ✓ Será validado que existe uma classe de domínio com o nome Motorcycle que representa o objeto moto (2447 ms)
//   ✓ Será validado que a classe de domínio moto contém os atributos: category e engineCapacity acessíveis apenas a própria classe (9307 ms)
//   ✓ Será validado que a classe de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses (7721 ms)
//   ✓ Será validado que a instância da classe de domínio moto recebe como parâmetro um objeto do tipo IMotorcycle (2207 ms)
//   ✕ Será validado que existe uma classe de domínio com o nome Vehicle e esta contém os atributos repetidos de carro e moto (2222 ms)
//   ✕ Será validado que a classe de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses (2020 ms)
//   ✓ Será validado que existe uma classe de nome AbstractODM que representa o modelo de comunicação com o banco e ela serve como abstração para as demais (14685 ms)
//   ✕ Será validado que é possível cadastrar uma moto com sucesso (945 ms)
