import cypherify from '../lib/cypherify';
/*
let cypher = new cypherify({
  verbose: true  // print cypher statement to console as they are constructed
})



describe('Cypher Query Language Section 10.1 General Clauses - Return', () => {
  it('should return nodes', function() {
    expect(`MATCH (n { name: "B" }) RETURN n`).to.equal(
      cypher.match(
        node('n', {name: 'B'})
      ).return(
        ({n}) => n
      ).toCypher();
    );
  });

  it('should return relationships', function() {
    expect(`MATCH (n { name: "A" })-[r:KNOWS]->(c) RETURN r`).to.equal(
      cypher.match(
        node('n', {name: 'A'}).out('r', { type: KNOWS }).node('c')
      ).return(
        ({r}) => r
      ).toCypher();
    );
  });

  it('should return properties', function() {
    expect(`MATCH (node0 {node0_properties})-[relationship:KNOWS]->(n2) RETURN relationship`).to.equal(
      match.node({name: 'A'}).out('relationship', { type: KNOWS }).node
        .returns('relationship')
        .toCypher();
    );
  });

  neo4j.query()

  it('should return a property', function() {
    expect(`MATCH (n {n_propertoes}) RETURN n.name`).to.equal(
      cypheriphy
        .match.node('n', {name: 'A'})
        .returns.property('n', 'name')
        .toCypher();
    );
  });

  it('should return all elements', function() {
    expect(`MATCH p=(a {a_properties})-[r]->(b) RETURN *`).to.equal(
      cypheriphy
        .match.path('p').node('a', { name: 'A' }).out('r').node('b')
        .returns.all
        .toCypher();
    );
  });

  it('should accept uncommon characters', function() {
    expect('MATCH (\`This isn\'t a common identifier\`) WHERE \`This isn\'t a common identifier\`.name = \'A\' RETURN \`This isn\'t a common identifier\`.happy').to.equal(
      cypheriphy
        .match.node('`This isn\'t a common identifier\`')
        .where.property('\`This isn\'t a common identifier\`', 'name').eq('A')
        .returns('\`This isn\'t a common identifier\`')
        .toCypher();
    );
  });

  it('should return a property as an alias', function() {
    expect('MATCH (a {a_props}) RETURN a.age AS SomethingTotallyDifferent').to.equal(
      cypheriphy
        .match.node('a', { name: 'A' })
        .returns.property('a', 'age')
        .as('SomethingTotallyDifferent')
        .toString();
    );
  });

  it('should return an optional property', function() {
    expect('MATCH (n) RETURN n.age').to.equal(
      cypheriphy
        .match.node('n')
        .returns.property('n', 'age')
        .toCypher()
    );
  });

  it('should return other expressions', function() {
    expect('MATCH (n {n_properties}) RETURN a.age > 30, \"I\'m a literal\",(a)-->(node0)').to.equal(
      cypheriphy
        .match.node('n', { name: 'A' })
        .returns(
          cypheriphy.property('n', 'age').ht(30).toCypher(),
          cypheriphy.literal('\"I\'m a literal\"').toCypher(),
          cypheriphy.node('a').out.node.toCypher()
        )
        .toCypher();
    );
  });

  // match(
  //  node('a').out.node('b', GraphQLObj)
  // ).where(
  //  property(identifier('a'), 'name')
  // )

  it('should return unique nodes', function() {
    expect('MATCH (a { name: "A" })-->(b) RETURN DISTINCT b').to.equal(
      cypheriphy
        .match.node('n', { name: 'A' }).out.node('b')
        .returns.distinct.identifier('b')
        .toCypher();
    );
  });
});

// describe('graphql-cypherify')
//   it('test16_9_1_2', function {
//     expect(`MATCH (n0 {id: id}) RETURN n0`).to.equal(
//       cypherify.match.node;
//     );
//   });

//   it('test16_9_1_2', function {
//     expect(`MATCH (n0 {n0Properties}) RETURN n0`).to.equal(
//       cypherify.match.node({ key: 'value' });
//     );
//   });

//   it('test16_9_1_3', function {
//     expect(`MATCH (n:User {nodeIdentifierProperties}) RETURN n`).to.equal(
//       cypherify.match.node({ label: 'User', key: 'value'}).as('nodeIdentifier');
//     );
//   });

//   it('test16_9_2', function {
//     expect(`MATCH (n0)-[relationshipIdentifier]->(n1) RETURN relationshipIdentifier`).to.equal(
//       cypherify.match.node.out.as('relationshipIdentifier').node.returns('relationshipIdentifier');
//     );
//   });

//   it('test16_9_3', function {
//     expect('MATCH n0=node(1,2,3) RETURN n0').to.equal(
//       cypherify.match.node(1,2,3).as('n');
//     );
//   });

//   it('test16_9_4', function {
//     expect('START namedNode=node(*) RETURN namedNode').to.equal(
//       cypherify.start.node('*').as('namedNode');
//     );
//   });

//   it('test16_9_5', function {
//     expect('START namedNode=node:nodes(name=\"A\") RETURN namedNode').to.equal(
//       cypherify.start.node.as('namedNode').where({ name: 'A' });
//     );
//   });

//   it('test16_9_6', function {
//     // 'START (r=relationship:rels(name=\"Andreas\") RETURN r'
//     expect(`MATCH (n0)-[relationshipIdentifier:{relationshipIdentifierProperties}]->(n1) RETURN relationshipIdentifier`).to.equal(
//       cypherify.start.node.inout({ name: 'Andreas' }).as('relationshipIdentifier').node.returns('relationshipIdentifier');
//     );
//   });

  it('', function {
    expect('').to.equal(
      cypherify.returns();
    )
  });
}

//  @Test
//  public void test16_9_7()
//  {
//      assertQueryEquals( "START n=node:nodes(\"name:A\") RETURN n",
//        start( query( "n", "nodes", "name:A" ) ).returns( identifier( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_9_7_1()
//  {
//      assertQueryEquals( "START n=node:nodes({paramName}) RETURN n",
//        start( queryByParameter( "n", "nodes", "paramName" ) ).returns( identifier( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_9_8()
//  {
//      assertQueryEquals( "START a=node(1),b=node(2) RETURN a,b",
//        start( nodesById( "a", 1 ), nodesById( "b", 2 ) ).returns( identifier( "a" ), identifier( "b" ) )
//          .toString() );
//  }

//  @Test
//  public void test16_10_2()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)--(x) RETURN x",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).both().node( "x" ) ).
//          returns( identifier( "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_3()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-->(x) RETURN x",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out().node( "x" ) ).
//          returns( identifier( "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_4()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r]->() RETURN r",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out().as( "r" ).node() ).
//          returns( identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_5()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[:BLOCKS]->(x) RETURN x",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out( "BLOCKS" ).node( "x" ) ).
//          returns( identifier( "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_6()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[:BLOCKS|KNOWS]->(x) RETURN x",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out( "BLOCKS", "KNOWS" ).node( "x" ) ).
//          returns( identifier( "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_7()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r:BLOCKS]->() RETURN r",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out( "BLOCKS" ).as( "r" ).node() ).
//          returns( identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_8()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r:`TYPE WITH SPACE IN IT`]->() RETURN r",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out( "TYPE WITH SPACE IN IT" ).as( "r" ).node() ).
//          returns( identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_9()
//  {
//      assertQueryEquals( "START a=node(3) MATCH (a)-[:KNOWS]->(b)-[:KNOWS]->(c) RETURN a,b,c",
//        start( nodesById( "a", 3 ) ).
//          match( node( "a" ).out( "KNOWS" ).node( "b" ).out( "KNOWS" ).node( "c" ) ).
//          returns( identifiers( "a", "b", "c" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_10()
//  {
//      assertQueryEquals( "START a=node(3),x=node(2,4) MATCH (a)-[:KNOWS*1..3]->(x) RETURN a,x",
//        start( nodesById( "a", 3 ), nodesById( "x", 2, 4 ) ).
//          match( node( "a" ).out( "KNOWS" ).hops( 1, 3 ).node( "x" ) ).
//          returns( identifiers( "a", "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_11()
//  {
//      assertQueryEquals( "START a=node(3),x=node(2,4) MATCH (a)-[r:KNOWS*1..3]->(x) RETURN r",
//        start( nodesById( "a", 3 ), nodesById( "x", 2, 4 ) ).
//          match( node( "a" ).out( "KNOWS" ).hops( 1, 3 ).as( "r" ).node( "x" ) ).
//          returns( identifiers( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_12()
//  {
//      assertQueryEquals( "START a=node(3) MATCH p1=(a)-[:KNOWS*0..1]->(b)," +
//        "p2=(b)-[:BLOCKS*0..1]->(c) RETURN a,b,c,length(p1),length(p2)",
//        start( nodesById( "a", 3 ) ).
//          match( path( "p1", node( "a" ).out( "KNOWS" ).hops( 0, 1 ).node( "b" ) ),
//               path( "p2", node( "b" ).out( "BLOCKS" ).hops( 0, 1 ).node( "c" ) ) ).
//          returns( identifier( "a" ), identifier( "b" ), identifier( "c" ), length( identifier( "p1"
//          ) ), length( identifier( "p2" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_13()
//  {
//      assertQueryEquals( "START a=node(2) OPTIONAL MATCH (a)-->(x) RETURN a,x",
//        start( nodesById( "a", 2 ) ).
//          match( node( "a" ).out().node( "x" ) ).optional().
//          returns( identifiers( "a", "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_14()
//  {
//      assertQueryEquals( "START a=node(3) OPTIONAL MATCH (a)-[r:LOVES]->() RETURN a,r",
//        start( nodesById( "a", 3 ) ).
//          match( node( "a" ).out( "LOVES" ).as( "r" ).node() ).optional().
//          returns( identifier( "a" ), identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_15()
//  {
//      assertQueryEquals( "START a=node(2) OPTIONAL MATCH (a)-->(x) RETURN x,x.name",
//        start( nodesById( "a", 2 ) ).
//          match( node( "a" ).out().node( "x" ) ).optional().
//          returns( identifier( "x" ), identifier( "x" ).string( "name" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_16()
//  {
//      assertQueryEquals( "START a=node(3) MATCH (a)-[:KNOWS]->(b)-[:KNOWS]->(c)," +
//        "(a)-[:BLOCKS]-(d)-[:KNOWS]-(c) RETURN a,b,c,d",
//        start( nodesById( "a", 3 ) ).
//          match( node( "a" ).out( "KNOWS" ).node( "b" ).out( "KNOWS" ).node( "c" ),
//               node( "a" ).both( "BLOCKS" ).node( "d" ).both( "KNOWS" ).node( "c" ) ).
//          returns( identifiers( "a", "b", "c", "d" ) ).
//          toString() );
//
//           start( node( "a", 3 ) ).
//            match( path().from( "a" ).out( "KNOWS" ).to( "b" ).link().out( "KNOWS" ).to( "c" ),
//                path().from( "a" ).both( "BLOCKS" ).to( "d" ).link().both( "KNOWS" ).to( "c" ) ).
//            returns( identifiers( "a", "b", "c", "d" ) ).
//            toString() );
//
//  }

//  @Test
//  public void test16_10_17()
//  {
//      assertQueryEquals( "START d=node(1),e=node(2) MATCH p=shortestPath((d)-[*..15]->(e)) RETURN p",
//        start( nodesById( "d", 1 ), nodesById( "e", 2 ) ).
//          match( path( "p", shortestPath( node( "d" ).out().hops( null, 15 ).node( "e" ) ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_18()
//  {
//      assertQueryEquals( "START d=node(1),e=node(2) MATCH p=allShortestPaths((d)-[*..15]->(e)) RETURN p",
//        start( nodesById( "d", 1 ), nodesById( "e", 2 ) ).
//          match( path( "p", allShortestPaths( node( "d" ).out().hops( null, 15 ).node( "e" ) ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_19()
//  {
//      assertQueryEquals( "START a=node(3) MATCH p=(a)-->(b) RETURN p",
//        start( nodesById( "a", 3 ) ).
//          match( path( "p", node( "a" ).out().node( "b" ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_20()
//  {
//      assertQueryEquals( "START r=relationship(0) MATCH (a)-[r]-(b) RETURN a,b",
//        start( relationshipsById( "r", 0 ) ).
//          match( node( "a" ).both().as( "r" ).node( "b" ) ).
//          returns( identifier( "a" ), identifier( "b" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_10_21()
//  {
//      assertQueryEquals( "START a=node(3),b=node(2) OPTIONAL MATCH (a)-[:KNOWS]-(x)-[:KNOWS]-(b) RETURN x",
//        start( nodesById( "a", 3 ), nodesById( "b", 2 ) ).
//          match( node( "a" ).
//               both( "KNOWS" ).
//               node( "x" ).
//               both( "KNOWS" ).
//               node( "b" ) ).optional().
//          returns( identifier( "x" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_1()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE (n.age<30 and n.name=\"Tobias\") or not(n" +
//        ".name=\"Tobias\") RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).number( "age" ).lt( 30 ).and( identifier( "n" ).string( "name" )
//               .eq( "Tobias" ) )
//               .or( not( identifier( "n" ).string( "name" ).eq( "Tobias" ) ) ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_2()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.age<30 RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).number( "age" ).lt( 30 ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_3()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.name=~\"Tob.*\" RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).string( "name" ).regexp( "Tob.*" ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_4()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.name=~\"Some/thing\" RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).string( "name" ).regexp( "Some/thing" ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_5()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.name=~\"(?i)ANDR.*\" RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).string( "name" ).regexp( "ANDR.*", false ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_6()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r]->() WHERE type(r)=~\"K.*\" RETURN r",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out().as( "r" ).node() ).
//          where( type( identifier( "r" ) ).regexp( literal( "K.*" ) ) ).
//          returns( identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_7()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE has(n.belt) RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( has( identifier( "n" ).property( "belt" ) ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_8()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.belt=\"white\" RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).property( "belt" ).eq( "white" ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_9()
//  {
//      assertQueryEquals( "START n=node(3,1) WHERE n.belt=\"white\" RETURN n",
//        start( nodesById( "n", 3, 1 ) ).
//          where( identifier( "n" ).property( "belt" ).eq( "white" ) ).
//          returns( identifier( "n" ) ).
//          toString() );
//  }


//  @Test
//  public void test16_11_10()
//  {
//      assertQueryEquals( "START a=node(1),b=node(3,2) OPTIONAL MATCH (a)<-[r]-(b) WHERE r is null RETURN b",
//        start( nodesById( "a", 1 ), nodesById( "b", 3, 2 ) ).
//          match( node( "a" ).in().as( "r" ).node( "b" ) ).optional().
//          where( isNull( identifier( "r" ) ) ).
//          returns( identifier( "b" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_10_2()
//  {
//      assertQueryEquals( "START a=node(1),b=node(3,2) OPTIONAL MATCH (a)<-[r]-(b) WHERE r is not null RETURN b",
//        start( nodesById( "a", 1 ), nodesById( "b", 3, 2 ) ).
//          match( node( "a" ).in().as( "r" ).node( "b" ) ).optional().
//          where( isNotNull( identifier( "r" ) ) ).
//          returns( identifier( "b" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_11()
//  {
//      assertQueryEquals( "START a=node(1),b=node(3,2) WHERE (a)<--(b) RETURN b",
//        start( nodesById( "a", 1 ), nodesById( "b", 3, 2 ) ).
//          where( node( "a" ).in().node( "b" ) ).
//          returns( identifier( "b" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_11_12()
//  {
//      assertQueryEquals( "START a=node(3,1,2) WHERE a.name IN [\"Peter\",\"Tobias\"] RETURN a",
//        start( nodesById( "a", 3, 1, 2 ) ).where( identifier( "a" ).string( "name" ).in( collection( "Peter",
//          "Tobias" ) ) ).returns( identifier( "a" ) ).toString() );
//  }

//  @Test
//  public void test16_12_1()
//  {
//      assertQueryEquals( "START n=node(2) RETURN n",
//        start( nodesById( "n", 2 ) ).returns( identifier( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_12_2()
//  {
//      assertQueryEquals( "START n=node(1) MATCH (n)-[r:KNOWS]->(c) RETURN r",
//        start( nodesById( "n", 1 ) ).
//          match( node( "n" ).out( "KNOWS" ).as( "r" ).node( "c" ) ).
//          returns( identifier( "r" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_12_3()
//  {
//      assertQueryEquals( "START n=node(1) RETURN n.name",
//        start( nodesById( "n", 1 ) ).returns( identifier( "n" ).property( "name" ) ).toString() );
//  }

//  @Test
//  public void test16_12_4()
//  {
//      assertQueryEquals( "START a=node(1) MATCH p=(a)-[r]->(b) RETURN *",
//        start( nodesById( "a", 1 ) ).match( path( "p", node( "a" ).out().as( "r" ).node( "b" ) ) ).returns(
//          all() ).toString() );
//  }

//  @Test
//  public void test16_12_5()
//  {
//      assertQueryEquals( "START `This isn't a common identifier`=node(1) RETURN `This isn't a common " +
//        "identifier`.happy",
//        start( nodesById( identifier( "This isn't a common identifier" ), 1 ) ).
//          returns( identifier( "This isn't a common identifier" ).property( "happy" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_12_6()
//  {
//      assertQueryEquals( "START a=node(1) RETURN a.age AS SomethingTotallyDifferent",
//        start( nodesById( "a", 1 ) ).
//          returns( as( identifier( "a" ).property( "age" ), "SomethingTotallyDifferent" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_12_7()
//  {
//      assertQueryEquals( "START n=node(1,2) RETURN n.age",
//        start( nodesById( "n", 1, 2 ) ).
//          returns( identifier( "n" ).property( "age" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_12_8()
//  {
//      assertQueryEquals( "START a=node(1) MATCH (a)-->(b) RETURN DISTINCT b",
//        start( nodesById( "a", 1 ) ).
//          match( node( "a" ).out().node( "b" ) ).
//          returns( distinct( identifier( "b" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_13_3()
//  {
//      assertQueryEquals( "START n=node(2) MATCH (n)-->(x) RETURN n,count(*)",
//        start( nodesById( "n", 2 ) ).
//          match( node( "n" ).out().node( "x" ) ).
//          returns( identifier( "n" ), count() ).
//          toString() );
//  }

//  @Test
//  public void test16_13_4()
//  {
//      assertQueryEquals( "START n=node(2) MATCH (n)-[r]->() RETURN type(r),count(*)",
//        start( nodesById( "n", 2 ) ).
//          match( node( "n" ).out().as( "r" ).node() ).
//          returns( type( identifier( "r" ) ), count() ).
//          toString() );
//  }

//  @Test
//  public void test16_13_5()
//  {
//      assertQueryEquals( "START n=node(2) MATCH (n)-->(x) RETURN count(x)",
//        start( nodesById( "n", 2 ) ).
//          match( node( "n" ).out().node( "x" ) ).
//          returns( count( identifier( "x" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_13_6()
//  {
//      assertQueryEquals( "START n=node(2,3,4,1) RETURN count(n.property)",
//        start( nodesById( "n", 2, 3, 4, 1 ) ).
//          returns( count( identifier( "n" ).property( "property" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_13_7()
//  {
//      assertQueryEquals( "START n=node(2,3,4) RETURN sum(n.property)",
//        start( nodesById( "n", 2, 3, 4 ) ).returns( sum( identifier( "n" ).property( "property" ) ) )
//          .toString() );
//  }

//  @Test
//  public void test16_13_8()
//  {
//      assertQueryEquals( "START n=node(2,3,4) RETURN avg(n.property)",
//        start( nodesById( "n", 2, 3, 4 ) ).returns( avg( identifier( "n" ).property( "property" ) ) )
//          .toString() );
//  }

//  @Test
//  public void test16_13_9()
//  {
//      assertQueryEquals( "START n=node(2,3,4) RETURN max(n.property)",
//        start( nodesById( "n", 2, 3, 4 ) ).returns( max( identifier( "n" ).property( "property" ) ) )
//          .toString() );
//  }

//  @Test
//  public void test16_13_10()
//  {
//      assertQueryEquals( "START n=node(2,3,4) RETURN min(n.property)",
//        start( nodesById( "n", 2, 3, 4 ) ).returns( min( identifier( "n" ).property( "property" ) ) )
//          .toString() );
//  }

//  @Test
//  public void test16_13_11()
//  {
//      assertQueryEquals( "START n=node(2,3,4) RETURN collect(n.property)",
//        start( nodesById( "n", 2, 3, 4 ) ).returns( collect( identifier( "n" ).property( "property" ) ) )
//          .toString() );
//  }

//  @Test
//  public void test16_13_12()
//  {
//      assertQueryEquals( "START a=node(2) MATCH (a)-->(b) RETURN count(DISTINCT b.eyes)",
//        start( nodesById( "a", 2 ) ).
//          match( node( "a" ).out().node( "b" ) ).
//          returns( count( distinct( identifier( "b" ).property( "eyes" ) ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_14_1()
//  {
//      assertQueryEquals( "START n=node(3,1,2) RETURN n ORDER BY n.name",
//        start( nodesById( "n", 3, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "name" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_14_2()
//  {
//      assertQueryEquals( "START n=node(3,1,2) RETURN n ORDER BY n.age,n.name",
//        start( nodesById( "n", 3, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "age" ), identifier( "n" ).property( "name" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_14_3()
//  {
//      assertQueryEquals( "START n=node(3,1,2) RETURN n ORDER BY n.name DESCENDING",
//        start( nodesById( "n", 3, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( order( identifier( "n" ).property( "name" ), DESCENDING ) ).
//          toString() );
//  }

//  @Test
//  public void test16_14_4()
//  {
//      assertQueryEquals( "START n=node(3,1,2) RETURN n.length,n ORDER BY n.length",
//        start( nodesById( "n", 3, 1, 2 ) ).
//          returns( identifier( "n" ).property( "length" ), identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "length" )).
//          toString() );
//  }

//  @Test
//  public void test16_15_1()
//  {
//      assertQueryEquals( "START n=node(3,4,5,1,2) RETURN n ORDER BY n.name SKIP 3",
//        start( nodesById( "n", 3, 4, 5, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "name" ) ).
//          skip( 3 ).
//          toString() );
//  }

//  @Test
//  public void test16_15_1_1()
//  {
//      assertQueryEquals( "START n=node(3,4,5,1,2) RETURN n ORDER BY n.name SKIP {skipParam}",
//        start( nodesById( "n", 3, 4, 5, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "name" ) ).
//          skip( "skipParam" ).
//          toString() );
//  }


//  @Test
//  public void test16_15_2()
//  {
//      assertQueryEquals( "START n=node(3,4,5,1,2) RETURN n ORDER BY n.name SKIP 1 LIMIT 2",
//        start( nodesById( "n", 3, 4, 5, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "name" ) ).
//          skip( 1 ).
//          limit( 2 ).
//          toString() );
//  }

//  @Test
//  public void test16_15_2_1()
//  {
//      assertQueryEquals( "START n=node(3,4,5,1,2) RETURN n ORDER BY n.name SKIP {skipParam} LIMIT " +
//        "{limitParam}",
//        start( nodesById( "n", 3, 4, 5, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          orderBy( identifier( "n" ).property( "name" ) ).
//          skip( "skipParam" ).
//          limit( "limitParam" ).
//          toString() );
//  }

//  @Test
//  public void test16_16_1()
//  {
//      assertQueryEquals( "START n=node(3,4,5,1,2) RETURN n LIMIT 3",
//        start( nodesById( "n", 3, 4, 5, 1, 2 ) ).
//          returns( identifier( "n" ) ).
//          limit( 3 ).
//          toString() );
//  }

//  @Test
//  public void test16_17_1()
//  {
//      assertQueryEquals( "START david=node(1) MATCH (david)-[otherPerson]->() WITH otherPerson," +
//        "count(*) AS foaf WHERE foaf>1 RETURN otherPerson",
//        start( nodesById( "david", 1 ) ).
//          match( node( "david" ).out().as( "otherPerson" ).node() ).
//          with( identifier( "otherPerson" ), as( count(), "foaf" ) ).
//          where( identifier( "foaf" ).gt( literal( 1 ) ) ).
//          returns( identifier( "otherPerson" ) ).
//          toString() );
//  }


//  @Test
//  public void test16_18_1()
//  {
//      assertQueryEquals( "CREATE (n)",
//        create( node( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_18_1_merge()
//  {
//      assertQueryEquals( "MERGE (n)",
//        merge( node( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_18_1_match()
//  {
//      assertQueryEquals( "MATCH (n) RETURN n",
//        match( node( "n" ) ).returns( identifier("n") ).toString() );
//  }

//  @Test
//  public void test16_18_2()
//  {
//      assertQueryEquals( "CREATE (n {name:\"Andres\",title:\"Developer\"})",
//        create( node( identifier( "n" ) ).values( value( "name", "Andres" ), value( "title",
//          "Developer" ) ) ).toString() );
//  }

//  @Test
//  public void test16_18_2_merge()
//  {
//      assertQueryEquals( "MERGE (n {name:\"Andres\",title:\"Developer\"})",
//        merge( node( identifier( "n" ) ).values( value( "name", "Andres" ), value( "title",
//          "Developer" ) ) ).toString() );
//  }

//  @Test
//  public void test16_18_3()
//  {
//      assertQueryEquals( "CREATE (a {name:\"Andres\"}) RETURN a",
//        create( node( "a" ).values( value( "name", "Andres" ) ) ).returns( identifier( "a" ) ).toString() );
//  }
//  @Test
//  public void test16_18_3_merge()
//  {
//      assertQueryEquals( "MERGE (a {name:\"Andres\"}) RETURN a",
//        merge( node( "a" ).values( value( "name", "Andres" ) ) ).returns( identifier( "a" ) ).toString() );
//  }

//  @Test
//  public void test16_18_4()
//  {
//      assertQueryEquals( "START a=node(1),b=node(2) CREATE (a)-[r:REL]->(b) RETURN r",
//        start( nodesById( "a", 1 ), nodesById( "b", 2 ) ).create( node( "a" ).out( "REL" ).as( identifier(
//          "r" ) ).node( identifier( "b" ) ) ).returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_18_5()
//  {
//      assertQueryEquals( "START a=node(1),b=node(2) CREATE (a)-[r:REL {name:a.name+\"<->\"+b.name}]->(b) " +
//        "RETURN r",
//        start( nodesById( "a", 1 ), nodesById( "b", 2 ) ).create( node( "a" )
//          .out( identifier( "REL" ) ).values( value( "name", identifier( "a" )
//               .string( "name" )
//               .concat( "<->" )
//               .concat( identifier( "b" ).string( "name" ) ) ) )
//          .as( "r" )
//          .node( identifier( "b" ) ) )
//          .returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_18_6()
//  {
//      assertQueryEquals( "CREATE (andres {name:\"Andres\"})-[:WORKS_AT]->(neo)<-[:WORKS_AT]-(michael " +
//        "{name:\"Michael\"}) RETURN andres,michael",
//        create( node( "andres" ).values( value( "name", "Andres" ) ).out( "WORKS_AT" ).node( identifier(
//          "neo" ) ).in( "WORKS_AT" ).node( "michael" ).values( value( "name",
//          "Michael" ) ) ).returns( identifier( "andres" ), identifier( "michael" ) ).toString() );
//  }

//  @Test
//  public void test16_18_7()
//  {
//      String query = create( node( "node" ).values( param( "props" ) ) ).toString();
//      assertEquals( "CREATE (node {props})", query );
//      Map<String, Object> n1 = new HashMap<String, Object>();
//      n1.put( "name", "Andres" );
//      n1.put( "position", "Developer" );

//      Map<String, Object> n2 = new HashMap<String, Object>();
//      n2.put( "name", "Michael" );
//      n2.put( "position", "Developer" );

//      Map<String, Object> params = new HashMap<String, Object>();
//      @SuppressWarnings("unchecked")
//      List<Map<String, Object>> maps = Arrays.asList( n1, n2 );
//      params.put( "props", maps );
//      engine.execute( query, params );
//  }

//  @Test
//  public void test16_19_1()
//  {
//      assertQueryEquals( "START n=node(4) DELETE n",
//        start( nodesById( "n", 4 ) ).delete( identifier( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_19_2()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r]-() DELETE n,r",
//        start( nodesById( "n", 3 ) ).match( node( "n" ).both().as( "r" ).node() ).delete( identifier( "n" ),
//          identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_19_3()
//  {
//      assertQueryEquals( "START andres=node(3) REMOVE andres.age RETURN andres",
//        start( nodesById( "andres", 3 ) ).remove( identifier( "andres" ).property( "age" ) ).returns(
//          identifier( "andres" ) ).toString() );
//  }

//  @Test
//  public void test16_20_1()
//  {
//      assertQueryEquals( "START n=node(2) SET n.surname=\"Taylor\" RETURN n",
//        start( nodesById( "n", 2 ) ).set( property( identifier( "n" ).property( "surname" ),
//          literal( "Taylor" ) ) ).returns( identifier( "n" ) ).toString() );
//  }

//  @Test
//  public void test16_21_1()
//  {
//      assertQueryEquals( "START left=node(1),right=node(3,4) CREATE UNIQUE (left)-[r:KNOWS]->(right) " +
//        "RETURN r",
//        start( nodesById( "left", 1 ), nodesById( "right", 3, 4 ) ).createUnique( node( "left" ).out( "KNOWS"
//        ).as( "r" ).node( "right" ) ).returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_21_1_merge()
//  {
//      assertQueryEquals( "START left=node(1),right=node(3,4) MERGE (left)-[r:KNOWS]->(right) " +
//        "RETURN r",
//        start( nodesById( "left", 1 ), nodesById( "right", 3, 4 ) ).merge( node( "left" ).out( "KNOWS"
//        ).as( "r" ).node( "right" ) ).returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_21_2()
//  {
//      assertQueryEquals( "START root=node(2) CREATE UNIQUE (root)-[:LOVES]-(someone) RETURN someone",
//        start( nodesById( "root", 2 ) ).createUnique( node( "root" ).both( "LOVES" ).node( "someone" ) )
//          .returns( identifier( "someone" ) ).toString() );
//  }

//  @Test
//  public void test16_21_2_merge()
//  {
//      assertQueryEquals( "START root=node(2) MERGE (root)-[:LOVES]->(someone) RETURN someone",
//        start( nodesById( "root", 2 ) ).merge( node( "root" ).out( "LOVES" ).node( "someone" ) )
//          .returns( identifier( "someone" ) ).toString() );
//  }

//  @Test
//  public void test16_21_3()
//  {
//      assertQueryEquals( "START root=node(2) CREATE UNIQUE (root)-[:X]-(leaf {name:\"D\"}) RETURN leaf",
//        start( nodesById( "root", 2 ) ).createUnique( node( "root" ).both( "X" ).node( identifier( "leaf" ) )
//          .values( value( "name", "D" ) ) ).returns( identifier( "leaf" ) ).toString() );
//  }

//  @Test
//  public void test16_21_3_merge()
//  {
//      assertQueryEquals( "START root=node(2) MERGE (root)-[:X]->(leaf {name:\"D\"}) RETURN leaf",
//        start( nodesById( "root", 2 ) ).merge( node( "root" ).out( "X" ).node( identifier( "leaf" ) )
//          .values( value( "name", "D" ) ) ).returns( identifier( "leaf" ) ).toString() );
//  }

//  @Test
//  public void test16_21_4()
//  {
//      assertQueryEquals( "START root=node(2) CREATE UNIQUE (root)-[r:X {since:\"forever\"}]-() RETURN r",
//        start( nodesById( "root", 2 ) ).createUnique( node( "root" ).both( identifier( "X" ) ).values( value(
//          "since", "forever" ) ).as( "r" ).node() ).returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_21_4_merge()
//  {
//      assertQueryEquals( "START root=node(2) MERGE (root)-[r:X {since:\"forever\"}]->() RETURN r",
//        start( nodesById( "root", 2 ) ).merge( node( "root" ).out( identifier( "X" ) ).values( value(
//          "since", "forever" ) ).as( "r" ).node() ).returns( identifier( "r" ) ).toString() );
//  }

//  @Test
//  public void test16_21_5()
//  {
//      assertQueryEquals( "START root=node(2) CREATE UNIQUE (root)-[:FOO]->(x),(root)-[:BAR]->(x) RETURN x",
//        start( nodesById( "root", 2 ) ).createUnique( node( "root" ).out( "FOO" ).node( "x" ),
//          node( "root" ).out( "BAR" ).node( "x" ) ).returns( identifier( "x" ) ).toString() );
//  }

//  @Test
//  public void test16_22_1()
//  {
//      assertQueryEquals( "START begin=node(2),end=node(1) MATCH p=(begin)-->(end) FOREACH(n in nodes(p)| " +
//        "SET n.marked=true)",
//        start( nodesById( "begin", 2 ), nodesById( "end", 1 ) ).
//          match( path( "p", node( "begin" ).out().node( "end" ) ) ).
//          forEach( in( identifier( "n" ), nodes( identifier( "p" ) ) ).
//               set( property( identifier( "n" ).property( "marked" ),
//                 literal( true ) ) ) ).toString() );
//  }


//  @Test
//  public void test16_23_1_1()
//  {
//      assertQueryEquals( "START a=node(3),b=node(1) MATCH p=(a)-[*1..3]->(b) WHERE all(x IN nodes(p) WHERE" +
//        " x.age>30) RETURN p",
//        start( nodesById( "a", 3 ), nodesById( "b", 1 ) ).
//          match( path( "p", node( "a" ).out().hops( 1, 3 ).node( "b" ) ) ).
//          where( all( "x", nodes( identifier( "p" ) ), identifier( "x" ).number( "age" ).gt( 30 ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_1_2()
//  {
//      assertQueryEquals( "START a=node(2) WHERE any(x IN a.array WHERE x=\"one\") RETURN a",
//        start( nodesById( "a", 2 ) ).
//          where( any( "x", identifier( "a" ).property( "array" ), identifier( "x" ).eq( "one" ) ) ).
//          returns( identifier( "a" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_1_3()
//  {
//      assertQueryEquals( "START n=node(3) MATCH p=(n)-[*1..3]->(b) WHERE none(x IN nodes(p) WHERE x" +
//        ".age=25) " +
//        "RETURN p",
//        start( nodesById( "n", 3 ) ).
//          match( path( "p", node( "n" ).out().hops( 1, 3 ).node( "b" ) ) ).
//          where( none( "x", nodes( identifier( "p" ) ), identifier( "x" ).number( "age" ).eq( 25 ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_1_4()
//  {
//      assertQueryEquals( "START n=node(3) MATCH p=(n)-->(b) WHERE single(var IN nodes(p) WHERE var" +
//        ".eyes=\"blue\") RETURN p",
//        start( nodesById( "n", 3 ) ).
//          match( path( "p", node( "n" ).out().node( "b" ) ) ).
//          where( single( "var", nodes( identifier( "p" ) ), identifier( "var" ).string( "eyes" )
//               .eq( "blue" ) ) ).
//          returns( identifier( "p" ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_2_1()
//  {
//      assertQueryEquals( "START a=node(3) MATCH p=(a)-->(b)-->(c) RETURN length(p)",
//        start( nodesById( "a", 3 ) ).
//          match( path( "p", node( "a" ).out().node( "b" ).out().node( "c" ) ) ).
//          returns( length( identifier( "p" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_2_2()
//  {
//      assertQueryEquals( "START n=node(3) MATCH (n)-[r]->() RETURN type(r)",
//        start( nodesById( "n", 3 ) ).
//          match( node( "n" ).out().as( "r" ).node() ).
//          returns( type( identifier( "r" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_2_3()
//  {
//      assertQueryEquals( "START a=node(3,4,5) RETURN id(a)",
//        start( nodesById( "a", 3, 4, 5 ) ).returns( id( identifier( "a" ) ) ).toString() );
//  }

//  @Test
//  public void test16_23_2_4()
//  {
//      assertQueryEquals( "START a=node(3) RETURN coalesce(a.hairColour,a.eyes)",
//        start( nodesById( "a", 3 ) ).returns( coalesce( identifier( "a" ).property( "hairColour" )
//          , identifier( "a" ).property( "eyes" )) ).toString() );
//  }

//  @Test
//  public void test16_23_2_5()
//  {
//      assertQueryEquals( "START a=node(2) RETURN a.array,head(a.array)",
//        start( nodesById( "a", 2 ) ).returns( identifier( "a" ).property( "array" ),
//          head( identifier( "a" ).property( "array" ) ) ).toString() );
//  }

//  @Test
//  public void test16_23_2_6()
//  {
//      assertQueryEquals( "START a=node(2) RETURN a.array,last(a.array)",
//        start( nodesById( "a", 2 ) ).returns( identifier( "a" ).property( "array" ),
//          last( identifier( "a" ).property( "array" ) ) ).toString() );
//  }

//  @Test
//  public void test16_23_3_1()
//  {
//      assertQueryEquals( "START a=node(3),c=node(2) MATCH p=(a)-->(b)-->(c) RETURN nodes(p)",
//        start( nodesById( "a", 3 ), nodesById( "c", 2 ) ).
//          match( path( "p", node( "a" ).out().node( "b" ).out().node( "c" ) ) ).
//          returns( nodes( identifier( "p" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_3_2()
//  {
//      assertQueryEquals( "START a=node(3),c=node(2) MATCH p=(a)-->(b)-->(c) RETURN relationships(p)",
//        start( nodesById( "a", 3 ), nodesById( "c", 2 ) ).
//          match( path( "p", node( "a" ).out().node( "b" ).out().node( "c" ) ) ).
//          returns( relationships( identifier( "p" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_3_3()
//  {
//      assertQueryEquals( "START a=node(3),b=node(4),c=node(1) MATCH p=(a)-->(b)-->(c) RETURN extract(n IN " +
//        "nodes(p)|n.age)",
//        start( nodesById( "a", 3 ), nodesById( "b", 4 ), nodesById( "c", 1 ) ).
//          match( path( "p", node( "a" ).out().node( "b" ).out().node( "c" ) ) ).
//          returns( extract( "n", nodes( identifier( "p" ) ), identifier( "n" ).number( "age" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_3_4()
//  {
//      assertQueryEquals( "START a=node(2) RETURN a.array,filter(x IN a.array WHERE length(x)=3)",
//        start( nodesById( "a", 2 ) ).
//          returns( identifier( "a" ).property( "array" ), filter( "x",
//               identifier( "a" ).property( "array" ), length( identifier( "x" ) )
//               .eq( 3 ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_3_5()
//  {
//      assertQueryEquals( "START a=node(2) RETURN a.array,tail(a.array)",
//        start( nodesById( "a", 2 ) ).
//          returns( identifier( "a" ).property( "array" ), tail( identifier( "a" ).property( "array" ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_3_6()
//  {
//      assertQueryEquals( "START a=node(1) RETURN range(0,10),range(2,18,3)",
//        start( nodesById( "a", 1 ) ).
//          returns( range( 0, 10 ), range( 2, 18, 3 ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_4_1()
//  {
//      assertQueryEquals( "START a=node(3),c=node(2) RETURN a.age,c.age,abs(a.age-c.age)",
//        start( nodesById( "a", 3 ), nodesById( "c", 2 ) ).
//          returns( identifier( "a" ).property( "age" ), identifier( "c" ).property( "age" ),
//               abs( identifier( "a" )
//                 .number( "age" )
//                 .subtract( identifier( "c" )
//                      .property( "age" ) ) ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_4_2()
//  {
//      assertQueryEquals( "START a=node(1) RETURN round(3.141592)",
//        start( nodesById( "a", 1 ) ).
//          returns( round( 3.141592 ) ).
//          toString() );
//  }

//  @Test
//  public void test16_23_4_3()
//  {
//      assertQueryEquals( "START a=node(1) RETURN sqrt(256)",
//        start( nodesById( "a", 1 ) ).
//          returns( sqrt( 256 ) ).
//          toString() );
//  }


//  @Test
//  public void test16_23_4_4()
//  {
//      assertQueryEquals( "START a=node(1) RETURN sign(-17),sign(0.1)",
//        start( nodesById( "a", 1 ) ).
//          returns( sign( -17 ), sign( 0.1 ) ).
//          toString() );
//  }

// //    @Test
// //    public void testMerge_single_node_with_a_label() throws Exception {
// //     assertQueryEquals( "MERGE (robert:Critic) RETURN robert, labels(robert)",
// //       merge( node( "a", 1 ) ).
// //            returns( sign( -17 ), sign( 0.1 ) ).
// //            toString() );
// //    }

//  @Test
//  public void test10_1_2_Match_with_labels()
//  {
//      assertQueryEquals( "MATCH (charlie:Person {name:\"Charlie Sheen\"})--(movie:Movie) RETURN movie",
//        match( node( "charlie" ).label( "Person" ).values( value("name", "Charlie Sheen") ).
//          both().node( "movie" ).label( "Movie" ) ).
//          returns( identifier( "movie" ) ).
//          toString() );
//  }

//  @Test
//  public void test10_1_4_Match_with_properties_on_a_variable_length_path()
//  {
//      assertQueryEquals( "MATCH (charlie:Person {name:\"Charlie Sheen\"}),(martin:Person {name:\"Martin Sheen\"}) " +
//                "CREATE (charlie)-[:X {blocked:false}]->(:Unblocked)<-[:X {blocked:false}]-(martin) " +
//                "CREATE (charlie)-[:X {blocked:true}]->(:Blocked)<-[:X {blocked:false}]-(martin)",
//        match( node( "charlie" ).label( "Person" ).values( value("name", "Charlie Sheen") ),
//          node( "martin" ).label( "Person" ).values( value("name", "Martin Sheen") ) ).
//        create( node( "charlie" ).
//          out( "X" ).values( value( "blocked", false ) ).
//          node().label( "Unblocked" ).
//          in( "X").values( value( "blocked", false) ).
//          node( "martin" ) ).
//        create( node( "charlie" ).
//          out( "X" ).values( value( "blocked", true ) ).
//          node().label( "Blocked" ).
//          in( "X" ).values( value( "blocked", false ) ).
//          node( "martin" ) ).
//        toString() );
//  }

//  @Test
//  public void test11_1_1_Create_a_node_with_a_label()
//  {
//      assertQueryEquals( "CREATE (n:Person)",
//        create( node( "n" ).label( "Person" ) ).toString() );
//  }

//  @Test
//  public void test11_1_1_Create_a_node_with_multiple_labels()
//  {
//      assertQueryEquals( "CREATE (n:Person:Swedish)",
//        create( node( "n" ).labels( label("Person"), label("Swedish") ) ).toString() );
//  }

//  @Test
//  public void test11_1_1_Create_node_and_add_labels_and_properties()
//  {
//      assertQueryEquals( "CREATE (n:Person {name:\"Andres\",title:\"Developer\"})",
//        create( node( "n" ).label("Person" ).values( value( "name", "Andres" ), value( "title", "Developer" ) ) ).toString() );
//  }

//  @Test
//  public void test10_1_2_Get_all_nodes_with_a_label()
//  {
//      assertQueryEquals( "MATCH (movie:Movie) RETURN movie",
//        match( node( "movie" ).label( "Movie" ) ).
//          returns( identifier( "movie" ) ).
//          toString() );
//  }

//  @Test
//  public void test11_1_2_Create_a_relationship_between_two_nodes()
//  {
//      assertQueryEquals( "MATCH (a:Person),(b:Person) " +
//                "WHERE a.name=\"Node A\" and b.name=\"Node B\" " +
//                "CREATE (a)-[r:RELTYPE]->(b) " +
//                "RETURN r",
//        match( node( "a" ).label( "Person" ), node( "b" ).label( "Person" ) ).
//        where( identifier( "a" ).string( "name" ).eq( "Node A" ).
//          and( identifier( "b" ).string( "name" ).eq( "Node B" ) ) ).
//        create( node( "a" ).out( "RELTYPE" ).as( "r" ).node( "b" ) ).
//        returns( identifier( "r" ) ).
//        toString() );
//  }

//  @Test
//  public void test_9_7_2_Union()
//  {
//      assertQueryEquals( "MATCH (n:Actor) " +
//                "RETURN n.name AS name " +
//                "UNION " +
//                "MATCH (n:Movie) " +
//                "RETURN n.title AS name",
//        match( node( "n" ).label( "Actor" )).returns(as(identifier("n").property("name"), "name")).union().
//        match( node( "n" ).label( "Movie" )).returns(as(identifier("n").property("title"), "name")).
//        toString() );
//  }

//  @Test
//  public void test_9_7_1_UnionAll()
//  {
//      assertQueryEquals( "MATCH (n:Actor) " +
//          "RETURN n.name AS name " +
//          "UNION ALL " +
//          "MATCH (n:Movie) " +
//          "RETURN n.title AS name",
//        match( node( "n" ).label( "Actor" )).returns(as(identifier("n").property("name"), "name")).union().all().
//          match( node( "n" ).label( "Movie" )).returns(as(identifier("n").property("title"), "name")).
//          toString() );
//  }

//      @Test
//  public void test_13_2_1_MergeOnCreate()
//  {
//      assertQueryEquals("MERGE (keanu:Person {name:\"Keanu Reeves\"}) " +
//          "ON CREATE SET keanu.movie=\"Matrix\"",
//        merge(node(identifier("keanu")).label("Person").values(value("name", "Keanu Reeves")))
//          .onCreate(property(identifier("keanu").property("movie"),
//               literal("Matrix"))).toString());
//  }

//  @Test
//  public void test_13_2_1_MergeOnMatch()
//  {
//      assertQueryEquals("MERGE (keanu:Person {name:\"Keanu Reeves\"}) " +
//          "ON MATCH SET keanu.movie=\"Matrix\"",
//        merge(node(identifier("keanu")).label("Person").values(value("name", "Keanu Reeves")))
//          .onMatch(property(identifier("keanu").property("movie"),
//               literal("Matrix"))).toString());
//  }

//  @Test
//  public void test_13_2_1_MergeOnMatchAndOnCreate()
//  {
//      assertQueryEquals("MERGE (keanu:Person {name:\"Keanu Reeves\"}) " +
//          "ON CREATE SET keanu.movie=\"Matrix\" " +
//          "ON MATCH SET keanu.movie=\"Matrix\",keanu.found=true " +
//          "RETURN keanu",
//        merge(node(identifier("keanu")).label("Person").values(value("name", "Keanu Reeves")))
//          .onCreate(property(identifier("keanu").property("movie"),
//               literal("Matrix")))
//          .onMatch(property(identifier("keanu").property("movie"),
//               literal("Matrix")), property(identifier("keanu").property("found"),
//               literal(true)))
//          .returns(identifier("keanu"))
//          .toString());
//  }

//  @Test
//  public void test_11_5_1_RemoveLabel()
//  {
//      assertQueryEquals("START n=node(1) REMOVE n:Swedish",
//        start(nodesById(identifier("n"), 1L)).remove(identifier("n").label("Swedish")).toString());
//  }

//  @Test
//  public void test_11_5_1_RemoveLabelSpaces()
//  {
//      assertQueryEquals("START n=node(1) REMOVE n:`Swedish Guy`",
//        start(nodesById(identifier("n"), 1L)).remove(identifier("n").label("Swedish Guy")).toString());
//  }

//  @Test
//  public void test_11_5_1_RemoveLabelAndProperty()
//  {
//      assertQueryEquals("START n=node(1) REMOVE n:`Swedish Guy`,n.name",
//        start(nodesById(identifier("n"), 1L)).remove(identifier("n").label("Swedish Guy"),
//          identifier("n").property("name")).toString());
//  }

//  @Test
//  public void test_11_5_1_RemoveMultipleLabelsWithSpacesAndProperty()
//  {
//      assertQueryEquals("START n=node(1) REMOVE n:`Swedish Guy`:`German Guy`,n.name",
//        start(nodesById(identifier("n"), 1L)).remove(identifier("n").labels("Swedish Guy", "German Guy"),
//          identifier("n").property("name")).toString());
//  }

//  @Test
//  public void test_11_5_1_RemoveMultipleLabels()
//  {
//      assertQueryEquals("START n=node(1) REMOVE n:Swedish:German",
//        start(nodesById(identifier("n"), 1L)).remove(identifier("n").labels("Swedish", "German")).toString());
//  }

//  @Test
//  public void test_12_3_1_SetLabelOnNode()
//  {
//      assertQueryEquals("START n=node(1) SET n:Swedish",
//       start(nodesById(identifier("n"), 1L)).set(identifier("n").label("Swedish")).toString());
//  }

//  @Test
//  public void test_12_3_1_SetMultipleLabelsOnNode()
//  {
//      assertQueryEquals("START n=node(1) SET n:Swedish:German",
//       start(nodesById(identifier("n"), 1L)).set(
//        identifier("n").labels("Swedish", "German")).toString());
//  }

//  @Test
//  public void test_11_5_1_SetMultipleLabelsWithSpacesAndProperty()
//  {
//      assertQueryEquals(CYPHER
//        + "START n=node(1) SET n:`Swedish Guy`:`German Guy`,n.name=\"Michael\"",
//       start(nodesById(identifier("n"), 1L))
//        .set(identifier("n").labels("Swedish Guy", "German Guy"),
//         property(identifier("n").property("name"), literal("Michael")) ).toString() );
//  }

//  @Test
//  public void testForEachSetPropertyAndLabel()
//  {
//      assertQueryEquals( "START begin=node(2),end=node(1) MATCH p=(begin)-->(end) FOREACH(n in nodes(p)| " +
//        "SET n.marked=true,n:Person)",
//       start( nodesById( "begin", 2 ), nodesById( "end", 1 ) ).
//        match( path( "p", node( "begin" ).out().node( "end" ) ) ).
//        forEach( in( identifier( "n" ), nodes( identifier( "p" ) ) ).
//         set( property( identifier( "n" ).property( "marked" ),
//          literal( true ) ) , identifier("n").label("Person") ) ).toString() );
//  }
}
*/
