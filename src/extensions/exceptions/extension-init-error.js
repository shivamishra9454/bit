/** @flow */

import ExternalError from '../../error/external-error';

export default class ExtensionInitError extends ExternalError {
  name: string;

  constructor(originalError: Error, name: string) {
    super(originalError);
    this.name = name;
  }
}
