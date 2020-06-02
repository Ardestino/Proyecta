/* tslint:disable */

/**
 * (tsType: ClienteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ClienteWithRelations {
  CP?: number;
  Ciudad?: string;
  Colonia?: string;
  Direccion?: string;
  Estado?: string;
  Mail?: string;
  Nombre: string;
  Notas?: string;
  RFC?: string;
  Telefono?: number;
  Telefono1?: number;
  idCliente?: number;

  [key: string]: any;
}
