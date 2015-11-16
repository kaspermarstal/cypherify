/* @flow */

import { EXPRESSION } from './types'
import { Clauses } from './clauses'

export class Expression extends Clauses {
  constructor(){
    super();

    this.type = EXPRESSION;
    this.value = [];
  }
}
