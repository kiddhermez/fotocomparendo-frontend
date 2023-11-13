export interface Vehicle {
  placa: string;
  linea: string;
  marca: string;
  tecnomecanica: Tecnomecanica;
  soat: Soat;
  tipo_vehiculo: string;
  color: string;
}

export interface Tecnomecanica {
  nro_acreditacion: string;
  fecha_expedicion: string;
  fecha_vencimiento: string;
}

export interface Soat {
  nro_poliza: string;
  fecha_vigencia: string;
  fecha_final: string;
  costo: number;
}
