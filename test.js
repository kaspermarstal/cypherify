import {cypherify, node, path} from './src/cypherify'


let cypher = cypherify().match(
  path('p')
    .node('n', {name: 'Alice'})
    .inout('r', 'KNOWS', 'HATES', {well: false}).len('1..5')
    .node('m', 'Person'),
  node('x', {id: 1337}).related(null, len`*1..5`).node(null),
  node(null).out().node(null),
).where(
  ({a}) => a.derp.eq(2),
  ({x}) => x.prop('id').eq(1337)
).return(
  ({x}) => x.prop('id').as('somename')
)

console.log(cypher.toString())
