/* @flow */

import { type } from './type'
import {Clauses} from './clauses'

export class Expression extends Clauses {
  constructor(){
    super();

    this.type = type.EXPRESSION;
    this.value = [];
  }
}
