import React from 'react'
import { ButtonHTMLAttributes } from 'react'

 function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  
  const { children, ...rest } = props;

  return <button
    {...rest}
    className=""
  >{props.children}</button>
}


export default SecondaryButton