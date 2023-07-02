import React from 'react'

type InputProps = React.ComponentProps<'input'>

const InputHtml  = (props : InputProps) => {
  return (
    <input type="text" {...props}>Input</input>
  )
}

export default InputHtml