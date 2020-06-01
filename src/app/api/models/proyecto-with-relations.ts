/* tslint:disable */

/**
 * (tsType: ProyectoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProyectoWithRelations {
  CP?: number;
  Ciudad?: string;
  Colonia?: string;
  Direccion?: string;
  Estado?: string;
  FechaFin?: string;
  FechaInicio?: string;
  Nombre: string;
  Status?: string;
  idProyecto?: number;

  [key: string]: any;
}
