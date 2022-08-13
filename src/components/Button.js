import React from 'react'
import Button from "@mui/material/Button";

export default function myButton({children, variant, ...props}) {
    //changing it to my button because button is already declared, can alias this without changing it all over the application
  return (
    <Button variant={variant??"contained"} {...props}>
        {children}
    </Button>
  )
}

 