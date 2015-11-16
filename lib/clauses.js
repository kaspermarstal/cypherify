/* @flow */
import {
  CREATE,
  IDENTIFIER,
  MATCH,
  NODE,
  OUT,
  OPTIONAL_MATCH,
  PATH,
  RETURN,
  WHERE
} from './types'

export class Clauses {
  constructor() {
  }

  create(...args) {
    this.value.push({
      type: CREATE,
      value: args
    });

    return this;
  };

  identifier(name) {
    this.value.push({
      type: IDENTIFIER,
      value: name
    })

    return this;
  };

  match(...args) {
    this.value.push({
      type: MATCH,
      value: args
    });

    return this;
  };

  optionalMatch(...args) {
    this.value.push({
      type: OPTIONAL_MATCH,
      value: args
    });

    return this;
  };

  return_(...args) {
    this.value.push({
      type: RETURN,
      value: args
    });

    return this;
  };

  where(...args) {
    this.value.push({
      type: WHERE,
      value: args
    });

    return this;
  };

  path(name: string) {
    this.value.push({
      type: PATH,
      value: {
        name: name
      }
    });

    return this;
  };

  node(name: string, label: string, properties: any) {
    this.value.push({
      type: NODE,
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
      type: OUT,
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
