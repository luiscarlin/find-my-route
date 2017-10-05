'use strict'

exports.handler = (event, context, callback) => {
  var hello = {
    bye: {
      unformatted: 'hello'
    }
  }
  console.log(hello)
  callback()
}

exports.handler(null, null, () => {})
