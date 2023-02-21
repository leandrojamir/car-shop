// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que existe uma interface de nome IMotorcycle que representa o contrato usado para cadastrar uma moto;
// Será validado que a interface contém os atributos especificados na tabela;
export default interface IMotorcycle {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  category: string,
  engineCapacity: number,
}