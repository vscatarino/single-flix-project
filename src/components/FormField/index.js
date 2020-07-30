import React from 'react'

function FormField(props) {
 return (
  <div>
   <label>
    {props.label}
    	<props.tag
     type={props.type}
     name={props.name}
     value={props.value}
     onChange={(event) => props.onChange(event)}
    />
   </label>
  </div>
 )

}

export default FormField