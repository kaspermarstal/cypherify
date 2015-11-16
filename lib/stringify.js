import {
  CREATE,
  CYPHERIFY,
  EXPRESSION,
  IDENTIFIER,
  MATCH,
  NODE,
  OUT,
  OPTIONAL_MATCH,
  PATH,
  RETURN,
  WHERE
} from './types'

export function stringify(ast) {
  return visit(ast);
}

function visit(ast) {
  switch(ast.type) {
    case CREATE:
      return create();
    case CYPHERIFY:
      return ast.value.map(visit).join(` `)
    case EXPRESSION:
      return ast.value.map(visit).join('')
    case MATCH:
      return match() + ast.value.map(visit).join(`, `)
    case NODE:
      return node(ast.value);
    case OUT:
      return out(ast.value);
    case PATH:
      return path(ast.value);
    case RETURN:
      return return_() + ast.value.map(visit).join(`, `);
    case IDENTIFIER:
      return identifier(ast.value);
    default:
      throw Error('Not implemented error for type ' + ast.type + ': ' + JSON.stringify(ast));
  }
}

let identifiers = [];

function save(name) {
  identifiers.push(name);
}

function load(name) {
  if(identifiers.indexOf(name) == -1) throw Error('No identifier ' + name);
}

function identifier(name) {
  load(name);
  return `${name}`;
}

function match() {
  return `MATCH `;
}

function node(obj) {
  save(obj.name);

  let statement = `(`;
  if(obj.name) statement += `${obj.name}`;
  if(obj.label) statement += `:${obj.label}`;
  if(obj.properties) statement += ` {${obj.name}_properties}`
  statement += `)`;

  return statement;
}

function out(obj) {
  save(obj.name);

  let statement = `-[`;
  if(obj.name) statement += `${obj.name}`;
  if(obj.label) statement += `:${obj.label}`;
  if(obj.properties) statement += ` {${obj.name}_properties}`;
  if(obj.length) statement += ` ${obj.length}`;
  statement += `]->`;

  return statement;
}

function path(obj) {
  save(obj.name);

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
