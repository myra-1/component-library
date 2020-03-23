import React, { Component } from "react"

const InputButton = props => (
  <button
    className={props.typeButton}
    onClick={props.onClick}> {props.labelButton}
  </button >
)

export default InputButton