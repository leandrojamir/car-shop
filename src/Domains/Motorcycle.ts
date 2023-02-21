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

  constructor(carParameters: IMotorcycle) {
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