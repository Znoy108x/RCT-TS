import React from 'react'

type ButtonProps = {
    handleClick ?: () => void , 
    // handleClick2 ?: (e : React.MouseEvent<HTMLButtonElement> , id : number) => void
}


const Button = (props : ButtonProps) => {
  return (
    <button onClick={props.handleClick}>Click Me</button>
  )
}

export default Button