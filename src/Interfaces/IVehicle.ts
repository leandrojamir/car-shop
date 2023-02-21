// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que existe uma interface de nome IVehicle e esta contém os atributos repetidos de carro e moto;
// Deve-se refatorar as Interfaces se necessário;

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

// Os atributos necessários para criar uma moto estão na tabela:
// Atributos      Descrição
// id             String contendo id do veículo
// model          String contendo modelo do veículo
// year           Number contendo ano de fabricação do veículo
// color          String contendo cor principal do veículo
// status         Booleano contendo status que define se um veículo pode ou não ser comprado (este atributo deve ser opcional e se não passado, deve ser false)
// buyValue       Number contendo valor de compra do veículo

// category       String contendo categoria da moto (opções: Street, Custom ou Trail)
// engineCapacity Number contendo capacidade do motor
export default interface IVehicle {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
}

// FAIL  __tests__/05 - createMotorcycle.test.ts (59.042 s)
// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
//   ✓ Será validado que existe uma interface de nome IMotorcycle que representa o contrato usado para cadastrar uma moto (4768 ms)
//   ✓ Será validado que a interface contém os atributos especificados na tabela (3341 ms)
//   ✓ Será validado que existe uma interface de nome IVehicle e esta contém os atributos repetidos de carro e moto (11290 ms)
//   ✕ Será validado que existe uma classe de domínio com o nome Motorcycle que representa o objeto moto (2497 ms)
//   ✕ Será validado que a classe de domínio moto contém os atributos: category e engineCapacity acessíveis apenas a própria classe (2425 ms)
//   ✕ Será validado que a classe de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses (2036 ms)
//   ✕ Será validado que a instância da classe de domínio moto recebe como parâmetro um objeto do tipo IMotorcycle (2132 ms)
//   ✕ Será validado que existe uma classe de domínio com o nome Vehicle e esta contém os atributos repetidos de carro e moto (2123 ms)
//   ✕ Será validado que a classe de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses (2350 ms)
//   ✓ Será validado que existe uma classe de nome AbstractODM que representa o modelo de comunicação com o banco e ela serve como abstração para as demais (15577 ms)
//   ✕ Será validado que é possível cadastrar uma moto com sucesso (615 ms)
