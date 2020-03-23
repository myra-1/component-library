import React from "react"
import { storiesOf } from "@storybook/react"
import Input from "../TextInput/TextInput"
import InputButton from "./TextInputButton"
import "./TextInputButton.css"

storiesOf("Text Input Buttons", module)
  .add("Medium", () => (
    <form>
      <Input placeholder="Voucher code" type="input-medium" />
      <InputButton labelButton="Redeem" typeButton="input-button-medium" />
    </form>
  ))
  .add("Large", () => (
    <form>
      <Input placeholder="Voucher code" type="input-large" />
      <InputButton labelButton="Redeem" typeButton="input-button-large" />
    </form>
  ))