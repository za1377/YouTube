import React from 'react'
import { Tooltip } from 'react-tooltip';

function Tooltips() {

    const tooltips = ["setting" , "search", "voiceSearch"];
  return (
    <>{tooltips.map( (id, index) => (<Tooltip id={id} key={index} noArrow/>) )}</>
  )
}

export default Tooltips