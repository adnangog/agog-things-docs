# Radio
You can use the `Radio` component to select a value from multiple options.

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import Radio, {RadioButtonProps} from '../../package/components/radio';

export default function App() {
  const [country, setcountry] = useState()
  const rblCountries: RadioButtonProps = {
    value: country,
    label: "Country :",
    onChange: (value) => setcountry(value),
    items: [
      {
        label: "Australia",
        value: 34
      },
      {
        label: "Belgium",
        value: 6,
      },
      {
        label: "China",
        value: 16,
      },
      {
        label: "Germany",
        value: 35,
      },
      {
        label: "Russia",
        value: 55,
      }
    ]
  }
  
  return <Radio {...rblCountries}/>;
}
```

## API
### Radio Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | If disable all radioboxes | boolean | false |
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