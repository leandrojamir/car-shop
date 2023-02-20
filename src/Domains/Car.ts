// 01 - Crie a rota /cars onde seja possível cadastrar um carro
// Será validado que existe uma classe de domínio com o nome Car que representa o objeto carro;
// Será validado que a classe de domínio carro contém os atributos: doorsQty e seatsQty acessíveis apenas a própria classe;
// Será validado que a classe de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses;
// Será validado que a instância da classe de domínio carro recebe como parâmetro um objeto do tipo ICar;
import ICar from '../Interfaces/ICar';

// Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: Pet.ts ---> export default class Pet { });
export default class Car {
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
