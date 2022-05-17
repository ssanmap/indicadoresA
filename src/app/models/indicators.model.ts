export interface AllIndicators {
  uf: Indicator;
  ivp: Indicator;
  dolar: Indicator;
  dolar_intercambio: Indicator;
  euro: Indicator;
  ipc: Indicator;
  utm: Indicator;
  imacec: Indicator;
  tpm: Indicator;
  libra_cobre: Indicator;
  tasa_desempleo: Indicator;
  bitcoin: Indicator;
}

export interface Indicator {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: Date;
  valor?: number;
  serie?: SerieValue[];
}

export interface SerieValue {
  fecha: Date;
  valor: number;
}
