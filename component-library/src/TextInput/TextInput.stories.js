import React from "react"
import { storiesOf } from "@storybook/react"
import Input from "./TextInput"
import "./TextInput.css"


storiesOf("Text Input", module)
  .add("Small", () => (
    <Input label="Email" placeholder="Email" type="input-small" />
  ))
  .add("Medium", () => (
    <Input label="Email" placeholder="Email" type="input-medium" />
  ))
  .add("Large", () => (
    <Input label="Email" placeholder="Email" type="input-large" />
  ))