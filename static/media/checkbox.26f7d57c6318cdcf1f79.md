# Checkbox
You can use the `Checkbox` component to select multiple values from multiple options.
## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
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
```

## Direction
{{Direction}}
```jsx
import React, { useState } from 'react'
import CheckBox, {CheckBoxProps} from '../../package/components/checkbox';

export default function App() {
  const [colors, setColors] = useState(null)
  const cbColors: CheckBoxProps = {
    value: colors,
    label: "Color",
    direction: "horizontal",
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
  
  return <CheckBox {...cbColors}/>;
}
```
