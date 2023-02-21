// 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto
// Será validado que existe uma interface de nome IVehicle e esta contém os atributos repetidos de carro e moto;
export default interface IVehicle {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
}