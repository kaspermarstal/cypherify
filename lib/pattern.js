/* @flow */
import { Expression } from './expression';
import { type } from './type'

export class Pattern extends Expression {
  constructor() {
    super();
  }

  path(name: string) {
    this.value.push({
      type: type.PATH,
      value: {
        name: name
      }
    });
    return this;
  }

  node(name: string, labels: any, properties: any) {
    this.value.push({
      type: type.NODE,
      value: {
        name: name,
        labels: labels,
        properties: properties
      }
    });
    return this;
  }

  out(name: string, labels: any, properties: any, length: string) {
    this.value.push({
      type: type.OUT,
      value: {
        name: name,
        labels: labels,
        properties: properties,
        length: length
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
