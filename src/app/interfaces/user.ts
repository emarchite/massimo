/**
 * Usuario, credenciales de acceso
 *
 * @export
 * @interface User
 */

export interface User {

  /**
   * UserName para el login
   *
   * @type {string}
   * @memberof User
   */
  UserName: string;

  /**
   * Password para el login
   *
   * @type {string}
   * @memberof User
   */
  Password: string;

  /**
   * Nombre del usuario
   *
   * @type {string}
   * @memberof User
   */
  FirstName?: string;

  /**
   * Apellido del usuario
   *
   * @type {string}
   * @memberof User
   */
  LastName?: string;

  /**
   * email del usuario
   *
   * @type {string}
   * @memberof User
   */
  Email?: string;

}

