TODO
----

- Factor out AST from cypherify class
- Better class hierarchy
- Export types one by one for compile time check of availability
- Label on nodes and outs can be list
- Take thunks as arguments and unpack them at run-time, e.g. where(ids => ids.a.age.lt(32))
- Find out if we want a.name.eq(32) vs a.property('a').eq(32)
- Expose valid functions (wait for OpenCypher language specification)
