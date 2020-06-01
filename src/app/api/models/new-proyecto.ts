/* tslint:disable */

/**
 * (tsType: Omit<Proyecto, 'idProyecto'>, schemaOptions: { title: 'NewProyecto', exclude: [ 'idProyecto' ] })
 */
export interface NewProyecto {
  CP?: number;
  Ciudad?: string;
  Colonia?: string;
  Direccion?: string;
  Estado?: string;
  FechaFin?: string;
  FechaInicio?: string;
  Nombre: string;
  Status?: string;

  [key: string]: any;
}
