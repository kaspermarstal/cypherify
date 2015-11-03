/* @flow */
import { Expression } from './expression';

export function path(...args) {
  let anchor = new Expression();
  return anchor.path(...args);
}

export function node(...args) {
  let anchor = new Expression();
  return anchor.node(...args);
}

export function identifier(...args) {
  let anchor = new Expression();
  return anchor.identifier(...args);
}
