import React from "react"
import { storiesOf } from "@storybook/react"
import Counter from "./Counter"
import "./Counter.css"


storiesOf("Counter", module)
  .add("Counter", () => (
    <Counter value={1} startValue={0} maxValue={20} minValue={0} />
  ))