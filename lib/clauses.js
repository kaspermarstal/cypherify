/* @flow */
import { type } from './type'

export class Clauses {
  constructor() {
    this.value = [];
    this.type = type.CYPHERIFY
  }

  create(...args) {
    this.value.push({
      type: type.CREATE,
      value: args
    });

    return this;
  };

  identifier(name) {
    this.value.push({
      type: type.IDENTIFIER,
      value: name
    })

    return this;
  };

  match(...args) {
    this.value.push({
      type: type.MATCH,
      value: args
    });

    return this;
  };

  optionalMatch(...args) {
    this.value.push({
      type: type.OPTIONAL_MATCH,
      value: args
    });

    return this;
  };

  return_(...args) {
    this.value.push({
      type: type.RETURN,
      value: args
    });

    return this;
  };

  where(...args) {
    this.value.push({
      type: type.WHERE,
      value: args
    });

    return this;
  };

  path(name: string) {
    this.value.push({
      type: type.PATH,
      value: {
        name: name
      }
    });

    return this;
  };

  node(name: string, label: string, properties: any) {
    this.value.push({
      type: type.NODE,
      value: {
        name: name,
        label: label,
        properties: properties
      }
    });

    return this;
  };

  out(name: string, label: string, properties: any, length: string) {
    this.value.push({
      type: type.OUT,
      value: {
        name: name,
        label: label,
        properties: properties,
        length: length
      }
    });

    return this;
  };
}
