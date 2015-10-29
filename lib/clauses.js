/* @flow */
import { Expression } from './expression';
import { type } from './type'

export class Clauses extends Expression {
  constructor() {
    super();
  }

  create(...thunks) {
    this.value.push({
      type: type.CREATE,
      value: this.toArray(thunks)
    });

    return this;
  };

  match(...thunks) {
    this.value.push({
      type: type.MATCH,
      value: this.toArray(thunks)
    });

    return this;
  };

  optionalMatch(...thunks) {
    this.value.push({
      type: type.OPTIONAL_MATCH,
      value: this.toArray(thunks)
    });

    return this;
  };

  return_(...thunks) {
    this.value.push({
      type: type.RETURN,
      value: this.toArray(thunks)
    });

    return this;
  };

  where(...thunks) {
    this.value.push({
      type: type.WHERE,
      value: this.toArray(thunks)
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
  };

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
  };
}
