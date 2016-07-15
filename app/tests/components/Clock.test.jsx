/* global describe, it */

var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Clock = require('Clock')

describe('Clock', function () {
  it('should exist', function () {
    expect(Clock).toExist()
  })

  describe('formatSeconds', function () {
    it('should format seconds', function () {
      var clock = TestUtils.renderIntoDocument(<Clock />)
      var seconds = '615'
      var expected = '10:15'
      var actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
})
