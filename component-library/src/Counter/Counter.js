import React, { Component } from "react"

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: this.props.startValue
    }
  }

  increaseCount = () => {
    let newCount = this.state.count + this.props.value;
    this.setState({
      count: newCount
    })
  }

  decreaseCount = () => {
    let newCount = this.state.count - this.props.value;
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <span className='counter'>
        <button className='counterButton' onClick={this.state.count > this.props.minValue && this.decreaseCount}>-</button>
        <span className='center'> {this.state.count} </span>
        <button className='counterButton' onClick={this.state.count < this.props.maxValue && this.increaseCount}>+</button>
      </span>
    )
  }
}

export default Counter