/* @flow */
import { Clauses } from './clauses';

export function path(...args){
  const anchor = new Clauses()
  return anchor.path(...args)
}

export function node(...args){
  const anchor = new Clauses()
  return anchor.node(...args)
}
