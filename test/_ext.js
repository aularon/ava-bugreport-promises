'use strict'

exports.resolve = (val) => Promise.resolve(val)
exports.getPromise = () => Promise
exports.Promise = Promise
exports.isPromise = (p) => p instanceof Promise
