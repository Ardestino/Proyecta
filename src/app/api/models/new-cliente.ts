/* tslint:disable */

/**
 * (tsType: Omit<Cliente, 'idCliente'>, schemaOptions: { title: 'NewCliente', exclude: [ 'idCliente' ] })
 */
export interface NewCliente {
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

  [key: string]: any;
}
