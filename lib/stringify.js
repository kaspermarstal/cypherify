import { type } from './type';

export function stringify(node) {
  switch(node.type) {
    case type.CYPHERIFY:
      return node.value.map(stringify).join(` `)
    case type.EXPRESSION:
      return node.value.map(stringify).join('')
    case type.MATCH:
      return match() + node.value.map(stringify).join(`, `)
    case type.NODE:
      save(node)
      return stringifynode(node.value);
    case type.OUT:
      save(node);
      return out(node.value);
    case type.PATH:
      save(node);
      return path(node);
    case type.RETURN:
      return return_() + node.value.map(stringify).join(`, `);
    case type.IDENTIFIER:
      return identifier(node.value);
    default:
      throw Error('Not implemented error for type ' + node.type + JSON.stringify(node));
  }
}

function save(node) {

}

function load(node) {

}

function identifier(name) {
  return `${name}`;
}

function match() {
  return `MATCH `;
}

function stringifynode(obj) {
  let statement = `(`;

  if(obj.name) statement += `${obj.name}`;
  if(obj.label) statement += `:${obj.label}`;
  if(obj.properties) statement += ` {${obj.name}_properties}`

  statement += `)`;
  return statement;
}

function out(obj) {
  let statement = `-[`;

  if(obj.name) statement += `${obj.name}`;
  if(obj.label) statement += `:${obj.label}`;
  if(obj.properties) statement += ` {${obj.name}_properties}`;
  if(obj.length) statement += ` ${obj.length}`;

  statement += `]->`;
  return statement;
}

function path(obj) {
  let statement = ``;

  if(obj.name) {
    statement += `${obj.name} = `;
  } else {
    throw Error('path requires a name of type string as first argument.');
  }

  return statement;
}

function return_() {
  return `RETURN `
}
