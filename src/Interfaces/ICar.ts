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
