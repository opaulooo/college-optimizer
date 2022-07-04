export interface IMateria {
  ID: number;
  materia: string;
  periodo: number;
  descricao: string;
  quantidadeaulas: number;
  quantidadefaltas: number;
  dataCriacao: Date;
  dataUltimaAtualizacao: Date;
  dataDeletado: Date;
  deletado: boolean;
}
