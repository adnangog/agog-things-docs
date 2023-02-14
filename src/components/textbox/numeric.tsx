import React, { useState } from 'react'
import TextBox, {TextBoxProps} from '../../package/components/textbox';

export default function App() {
  const [name, setName] = useState()
  const txtName: TextBoxProps = {
    label: 'Shoe Size',
    value: name,
    placeholder: '...',
    type: "number",
    onChange: (value) => setName(value)
  }
  
  return <TextBox {...txtName}/>;
}