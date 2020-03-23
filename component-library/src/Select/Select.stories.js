import React from "react"
import { storiesOf } from "@storybook/react"
import Select from "./Select"
import "./Select.css"

storiesOf("Select", module)
  .add("Small", () => <Select type="select-small" />)
  .add("Medium", () => <Select type="select-medium" />)
  .add("Large", () => <Select type="select-large" />)