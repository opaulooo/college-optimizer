export interface IResumo {
    ID: number;
    titulo: string;
    materia: number;
    breveDescricao: string;
    resumo: string;
    dataCriacao: Date;
    dataUltimaAtualizacao: Date;
    dataDeletado?: Date | null;
    deletado: false;
}
