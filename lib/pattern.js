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

  node(name: string, ...args) {
    if(name == null) {
      this.ast.push({ node: null });
      return this;
    } else {
      this.ast.push({
        node: {
          // TODO: Elegant way of determining which args are label, prop or length expr respectively
          name: name,
          labels: null,
          properties: null
        }
      });
    };
    return this;
  }

  out(name: string, ...args) {
    if(name == null) {
      this.ast.push({ out: null });
      return this;
    } else {
      this.ast.push({
        out: {
          name: name,
          // TODO: Elegant way of determining which args are label, prop or length expr respectively
          labels: null,
          properties: null,
          length: null
        }
      });
    };
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
