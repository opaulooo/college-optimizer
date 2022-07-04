export interface IMateria {
  ID: number;
  materia: string;
  periodo: number;
  descricao: string;
  quantidadeaulas: string;
  quantidadefaltas: string;
  dataCriacao: Date;
  dataUltimaAtualizacao: Date;
  dataDeletado: Date;
  deletado: boolean;
}
