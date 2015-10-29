import {expect} from 'chai'

import {cypherify, node, path} from '../lib/cypherify';

describe('Return Clause', () => {

  it('should query for a relationship between two nodes', function() {
    let cypher = new cypherify().match(node('a').out('b').node('c'));
    console.log(cypher.toString())
    //expect('MATCH (a)-[:b]->(c)').to.equal(cypher.toCypher())
  });

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
