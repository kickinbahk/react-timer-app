var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Controls = require('Controls')

describe('Controls', function () {
  it('should exist', function () {
    expect(Controls).toExist()
  })

  describe('render', function () {
    it('should render pause button if started', function () {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />)
      var $el = $(ReactDOM.findDOMNode(controls))
      var $pauseButton = $el.find('button:contains(Pause)')

      expect($pauseButton.length).toBe(1)
    })

    it('should render start button if paused', function () {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' />)
      var $el = $(ReactDOM.findDOMNode(controls))
      var $startButton = $el.find('button:contains(Start)')

      expect($startButton.length).toBe(1)
    })
  })
})
