# Dropdown
## Basic usage
{{Basic}}
```jsx
import React, { useState } from 'react'
import DropDown, {DropDownProps} from '../../package/components/dropdown';
import CheckBox, {CheckBoxProps} from '../../package/components/checkbox';

export default function App() {
  const [colors, setColors] = useState(null)
  const cbColors: CheckBoxProps = {
    value: colors,
    label: "Color",
    onSelect: (value: any ) => setColors(value),
    items: [
      {
        label: "Blue",
        value: 34
      },
      {
        label: "Yellow",
        value: 6,
      },
      {
        label: "Red",
        value: 16,
      },
      {
        label: "Green",
        value: 35,
      },
      {
        label: "Black",
        value: 55,
      }
    ]
  }
  
  const ddProps : DropDownProps = {
    label: "Colors"
  }
  
  return <DropDown {...ddProps}><CheckBox {...cbColors}/></DropDown>;
}
```