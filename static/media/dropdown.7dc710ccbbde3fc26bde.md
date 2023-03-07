# Dropdown
A dropdown list.

## Basic usage
{{Basic}}
```jsx
import React, { useState } from 'react'
import { DropDown, DropDownProps, CheckBox, CheckBoxProps} from 'agog-things';

export default function App() {
  const [colors, setColors] = useState(null)
  const cbColors: CheckBoxProps = {
    value: colors,
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

## API
### Dropdown Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Label of Dropdown | string \| JSX.Element | - |
| children | Content of Dropdown | JSX.Element | - |