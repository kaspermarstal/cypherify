/* @flow */
import {Expression} from './expression'

export class Pattern extends Expression {
  constructor() {
    super();
  }

  path(name: string) {
    if(!name) {
        throw Error(
          'path() requires a name of type \"string\". ' +
          'If you do not need to reference the path later, ' +
          'use node() as the first function and skip path().'
        )
    }

    this.ast.push({
      path: {
        name: name
      }
    });
    return this;
  }

  node(name: string, labels: any, properties: any) {
    this.ast.push({
      node: {
        name: name,
        labels: labels,
        properties: properties
      }
    });
    return this;
  }

  out(name: string, labels: any, properties: any) {
    this.ast.push({
      out: {
        name: name,
        labels: null,
        properties: null,
        length: null
      }
    });
    return this;
  }
}

export function path(...args){
  const pattern = new Pattern()
  return pattern.path(...args)
}

export function node(...args){
  const pattern = new Pattern()
  return pattern.node(...args)
}
