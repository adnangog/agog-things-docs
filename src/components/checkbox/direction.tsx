import React, { useState } from 'react'
import CheckBox, {CheckBoxProps} from '../../package/components/checkbox';

export default function App() {
  const [choices, setChoices] = useState(null)
  const cbChoice: CheckBoxProps = {
    value: choices,
    label: "Your Choice : ",
    direction: "horizontal",
    onSelect: (value: any ) => setChoices(value),
    items: [
      {
        label: "First",
        value: 34
      },
      {
        label: "Second",
        value: 6,
      },
      {
        label: "None",
        value: 16,
      }
    ]
  }
  
  return <CheckBox {...cbChoice}/>;
}