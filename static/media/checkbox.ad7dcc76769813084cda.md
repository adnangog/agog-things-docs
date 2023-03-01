# Checkbox
You can use the `Checkbox` component to select multiple values from multiple options.
## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import CheckBox, {CheckBoxProps} from '../../package/components/checkbox';

export default function App() {
  const [colors, setColors] = useState()
  const cbColors: CheckBoxProps = {
    value: colors,
    label: "Color",
    infoText: "this is a sample info text",
    onChange: (value: any ) => setColors(value),
    options: [
      {
        label: "Blue",
        value: 34,
        disabled: true
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
    onChange: (value: any ) => setColors(value),
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

## API
### Checkbox Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | If disable all checkboxes | boolean | false |
| label | label of component | string | - |
| infoText | extra info | string | - |
| options | options | string\[] \| number\[] \| Option\[] | \[] |
| value | Used for setting the currently selected value | (string \| number)\[] | \[] |
| direction | direction of options | `'vertical'` \| `'horizontal'` | `'vertical'` |
| onChange | The callback function that is triggered when the state changes | function(checkedValue) | - |

### Options Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disable option | boolean | false |
| label | label of option | string | - |
| value | option value | (string \| number)\[] | \[] |
| group | group field | string | - |