import {expect} from 'chai'

import {cypherify, node, path, identifier, stringify} from '../lib/cypherify';

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
} from '../lib/types'

describe('Cypherify', () => {

  it('should return nodes with relationship to a specified node', function() {
    let cypher = new cypherify().match(node('a', 'Person', {id: 0}).out('b', 'KNOWS', null, null).node('c',
  'Person', {})).return_(identifier('c'));
    let tree = {
      type: CYPHERIFY,
      value: [
        {
          type: MATCH,
          value: [
            {
              type: EXPRESSION,
              value: [
                {
                  type: NODE,
                  value: {
                    name: 'a',
                    label: 'Person',
                    properties: {
                      id: 0
                    }
                  }
                },
                {
                  type: OUT,
                  value: {
                    name: 'b',
                    label: 'KNOWS',
                    properties: null,
                    length: null
                  }
                },
                {
                  type: NODE,
                  value: {
                    name: 'c',
                    label: 'Person',
                    properties: {}
                  }
                }
              ]
            }
          ]
        },
        {
          type: RETURN,
          value: [
            {
              type: EXPRESSION,
              value: [
                {
                  type: IDENTIFIER,
                  value: 'c'
                }
              ]
            }
          ]
        }
      ]
    }

    expect(cypher.toAST()).to.deep.equal(tree);
    expect(cypher.toCypher()).to.equal('MATCH (a:Person {a_properties})-[b:KNOWS]->(c:Person {c_properties}) RETURN c');
  });



  // let cypher = new cypherify().match(node('a').out('b').node('c')).return_(count(identifier('a).age.lt(35), 'a')
  // const tests = {
  //   'return nodes': [
  //     `MATCH (n { name: "B" }) RETURN n`,
  //     () => cypherify().match(
  //       node('n', {name: 'B'})
  //     ).return(
  //       ({n}) => n
  //     )
  //   ],
  //
  //   'should return relationships': [
  //     `MATCH (n { name: "A" })-[r:KNOWS]->(c) RETURN r`,
  //     () => cypherify().match(
  //       node('n', {name: 'A'}).out('r', { type: 'KNOWS' }).node('c')
  //     )
  //     .return('r')
  //   ],
  //
  //   'should return properties': [
  //     `MATCH (n { name: "A" }) RETURN n.name`,
  //     () => cypherify().match(
  //       node('n', {name: 'A'})
  //     )
  //     .return( ({n}) => n.name )
  //   ],
  //
  //   'return all elements': [
  //     `MATCH p=(a { name: "A" })-[r]->(b) RETURN *`,
  //     () => cypherify().match(
  //       path('p').node('a', {name: 'A'}).out('r').node('b')
  //     )
  //     .return('*')
  //   ],
  //
  //   'Identifier with uncommon characters': [
  //     "MATCH (`This isn't a common identifier`) " +
  //     "WHERE `This isn't a common identifier`.name='A' " +
  //     "RETURN `This isn't a common identifier`.happy",
  //     () => cypherify().match(
  //       node("This isn't a common identifier")
  //     )
  //     .where(({_}) => _("This isn't a common identifier").name.eq('A'))
  //     .return(({_}) => _("This isn't a common identifier").happy)
  //   ],
  //
  //   'Property exists': [
  //     "MATCH (n) " +
  //     "WHERE exists(n.belt) " +
  //     "RETURN n",
  //     () => cypherify().match(
  //       node('n')
  //     )
  //     .where(({exists, n}) => exists(n))
  //     .return(({n}) => n)
  //   ],
  // };
  //
  // for (const test in tests) {
  //   it('should ' + test, () => {
  //     const [exp, own] = tests[test];
  //     expect(exp).to.equal(own().toCypher());
  //   });
  // }

});
