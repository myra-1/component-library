import React from 'react'
import './button.css'

const Button = (props) => {
  let classList = ''
  let style = ''
  let types = [
    'primary', 'primary-faded', 'primary-white',
    'danger', 'danger-faded', 'danger-white',
    'warning', 'warning-faded', 'warning-white',
    'success', 'success-faded', 'success-white'
  ]
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`
  }
  if (props.large) {
    classList += ` button-large`
  }

  return <button className={classList}>{props.label}</button>
}

export default Button