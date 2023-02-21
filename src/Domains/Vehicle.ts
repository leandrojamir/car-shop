// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que existe uma classe de domínio com o nome Vehicle e esta contém os atributos repetidos de carro e moto; Deve-se refatorar as Domains se necessário;
// Será validado que a classe de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses;
import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(carParameters: IVehicle) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status;
    this.buyValue = carParameters.buyValue;
  }
}