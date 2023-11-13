export interface License {
  nro_lic: string;
  fecha_expedicion: string;
  fecha_vencimiento: string;
  categoria: Categoria;
}

export interface Categoria {
  cod_categoria: string;
  clase_vehiculo: string;
}
