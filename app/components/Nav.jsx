var React = require('react')
var {IndexLink} = require('react-router')

var Nav = React.createClass({

  render: function () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Timer App</li>
            <li>
              <IndexLink to='/'activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <IndexLink to='#' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <p>Created by Josiah Mory</p>
        </div>
      </div>
    )
  }
})

module.exports = Nav
