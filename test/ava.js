'use strict'
import test from 'ava'
const _ext = require('./_ext')
const P = require('./_promise')
const _local = {
  resolve: (val) => Promise.resolve(val)
}

// These two pass in v6 and v5
test('global', t => t.true(Promise.resolve(19) instanceof Promise))
test('local', t => t.true(_local.resolve(19) instanceof Promise))

// The following does pass on v6, but not on v5 or v4
test('external.isPromise', t => t.true(_ext.isPromise(Promise.resolve(19))))

test('external.resolve', t => t.true(_ext.resolve(19) instanceof Promise))
test('external.Promise.resolve', t => t.true(_ext.Promise.resolve(19) instanceof Promise))
test('external.getPromise().resolve', t => t.true(_ext.getPromise().resolve(19) instanceof Promise))

test('external module.exports', t => t.true(P.resolve(19) instanceof Promise))

// Because of this (pass on both v5 and v6)
test('external is local', t => t.not(Promise, P))
test('external is local', t => t.not(Promise, _ext.Promise))
test('external is local', t => t.is(P, _ext.Promise))
