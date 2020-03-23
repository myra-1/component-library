import React from 'react'

const Thumbnail = props => (
  <>
    <img className='mainImage' src={props.product} />
    <img className='hoverImage' src={props.producthover} />
    <img className='hoverImage1' src={props.producthover1} />
    <img className='sideImage' src={props.productside} />
    <img className='sidehoverImage' src={props.productsidehover} />
    <img className='inlineImage' src={props.productInline} />
  </>
)

export default Thumbnail