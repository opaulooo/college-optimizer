export interface IMateria {
  ID: number;
  materia: string;
  periodo: number;
  descricao: string;
  dataCriacao: Date;
  dataUltimaAtualizacao: Date;
  dataDeletado: Date;
  deletado: boolean;
}
