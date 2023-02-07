import React, { useState } from 'react'
import TextBox, {TextBoxProps} from '../../package/components/textbox';

export default function App() {
  const [name, setName] = useState()
  const txtName: TextBoxProps = {
    label: 'Name Surname',
    value: name,
    placeholder: 'Your name and surname',
    onChange: (value) => setName(value)
  }
  
  return <TextBox {...txtName}/>;
}