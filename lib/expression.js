/* @flow */

import { type } from './type'

export class Expression {
  constructor(){
    this.type = type.EXPRESSION;
    this.value = [];
  }
}
