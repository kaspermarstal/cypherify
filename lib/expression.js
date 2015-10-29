/* @flow */

import { type } from './type'

export class Expression {
  constructor(){
    this.type = type.EXPRESSION;
    this.value = [];
  }

  toArray(thunks) {
    return thunks.reduce(function(array, thunk) {
      array.push(thunk);
      return array;
    }, [])
  };

  toAST() {
    return this;
  }
}
