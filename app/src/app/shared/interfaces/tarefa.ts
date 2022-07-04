export interface ITarefa {
  ID: number;
  titulo: String;
  descricao: String;
  materia: String;
  dataInicio: Date;
  dataFim: Date;
  concluido: boolean;
  notificar: boolean;
  dataCriacao: Date;
  dataUltimaAtualizacao: Date;
  dataDeletado: Date;
  deletado: Date;
}
