export interface DestinacionesMain {
    titulo: string,
    destinaciones: Destinacion[]
}

export interface Destinacion {
    titulo: string,
    dias_noches: string,
    precio: string,
    imagen: string
}