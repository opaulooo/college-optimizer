export interface IResumo {
    titulo: string;
    breveDescricao: string;
    resumo: string;
    dataCriacao: Date;
    dataUltimaAtualizacao: Date;
    dataDeletado?: Date | null;
    deletado: false;
}
