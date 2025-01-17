var test = require('tape')

var Observ = require('observ')
var ObservNodeArray = require('../')
var ObservStruct = require('observ-struct')

var first = require('../first.js')

test('first', function(t){
  var obs = ObservNodeArray({
    nodes: {
      Test: function(context){
        var obs = Observ()
        obs._type = 'Test'
        return obs
      },

      AnotherTest: function(context){
        var obs = Observ()
        obs._type = 'AnotherTest'
        return obs
      }
    }
  })

  obs.set([{
    node: 'Test',
    value: 123
  }, {
    node: 'AnotherTest',
    value: 456
  }])

  var obj1 = obs.get(0)
  var obj2 = obs.get(1)

  var item = first(obs)
  t.equal(item.get(), obj1)

  obs.remove(obj1)
  t.equal(item.get(), obj2)

  t.end()
})