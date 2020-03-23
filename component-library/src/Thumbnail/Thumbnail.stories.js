import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "./Thumbnail"
import "./Thumbnail.css"

import product from '/Users/myra/supernovas/unit-2/week-1/day-5/component-library-project/component-library-lab/src/Images/product.png';
import producthover from '../Images/producthover.png'
import producthover1 from '../Images/producthover1.png'
import productside from '../Images/productside.png'
import productsidehover from '../Images/productsidehover.png'
import productInline from '/Users/myra/supernovas/unit-2/week-1/day-5/component-library-project/component-library-lab/src/Images/product-inline.png'



storiesOf("Thumbnails", module)
  .add("Thumbnail 1", () => (
    <Thumbnail product={product} producthover={producthover} />
  ))

  .add("Thumbnail 2", () => (
    <Thumbnail product={product} producthover1={producthover1} />
  ))

  .add("Thumbnail 3", () => (
    <Thumbnail productside={productside} productsidehover={productsidehover} />
  ))

  .add("Thumbnail 4", () => (
    <Thumbnail productInline={productInline} />
  ))

