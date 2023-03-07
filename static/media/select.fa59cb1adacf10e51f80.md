# Select
You can use `Select` component for select value or values  from several options.

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Turkey",
        value: 34
      },
      {
        label: "Greece",
        value: 6,
      },
      {
        label: "Bulgaria",
        value: 16,
      },
      {
        label: "Iran",
        value: 35,
      }
    ]
  }
  
  return <Select {...ddlCountries}/>;
}
```

## Size

{{Size}}
```jsx
import React, { useState } from 'react'
import Select, { SelectProps } from '../../package/components/select';

export default function App() {
  const [country, setCountry] = useState()

  const data = [
    {
      label: "Turkey",
      value: 34
    },
    {
      label: "Greece",
      value: 6,
    },
    {
      label: "Bulgaria",
      value: 16,
    },
    {
      label: "Iran",
      value: 35,
    }
  ];

  const ddlLarge: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Large",
    onSelect: (value) => setCountry(value),
    size:"large",
    options: data
  }

  const ddlMiddle: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Middle",
    onSelect: (value) => setCountry(value),
    size:"middle",
    options: data
  }

  const ddlSmall: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Small",
    onSelect: (value) => setCountry(value),
    size:"small",
    options: data
  }

  return <div style={{ gap: 10, display: 'flex', padding: 10, alignItems: 'center' }}>
    <Select {...ddlLarge} />
    <Select {...ddlMiddle} />
    <Select {...ddlSmall} />
  </div>;
}
```

## Disabled

{{Disabled}}
```jsx
import React, { useState } from 'react'
import Select, { SelectProps } from '../../package/components/select';

export default function App() {
  const [country, setCountry] = useState()

  const data = [
    {
      label: "Turkey",
      value: 34,
      disabled:true
    },
    {
      label: "Greece",
      value: 6,
    },
    {
      label: "Bulgaria",
      value: 16,
    },
    {
      label: "Iran",
      value: 35,
    }
  ];

  const ddl1 : SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Disabled",
    onSelect: (value) => setCountry(value),
    disabled: true,
    options: data
  }

  const ddl2: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Option Disabled",
    onSelect: (value) => setCountry(value),
    options: data
  }

  return <div style={{ gap: 10, display: 'flex', padding: 10, alignItems: 'center' }}>
    <Select {...ddl1} />
    <Select {...ddl2} />
  </div>;
}
```

## Clear
You can use the **isClear** prop to add a small cancel icon to cancel the selected value.

{{Clear}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Turkey",
        value: 34
      },
      {
        label: "Greece",
        value: 6,
      },
      {
        label: "Bulgaria",
        value: 16,
      },
      {
        label: "Iran",
        value: 35,
      }
    ],
    isClear: true
  }
  
  return <Select {...ddlCountries}/>;
}
```
## Multiple
For multiple selection you should use **isMultiple** prop.

{{Multiple}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
       {
        label: "Belgium",
        value: 34
      },
      {
        label: "Poland",
        value: 6
      },
      {
        label: "Italy",
        value: 16
      },
      {
        label: "India",
        value: 35
      },
      {
        label: "Nepal",
        value: 58
      },
      {
        label: "Uzbekistan",
        value: 26
      },
      {
        label: "Azerbaijan",
        value: 45
      },
      {
        label: "Argentina",
        value: 19
      },
      {
        label: "Brazil",
        value: 29
      },
      {
        label: "Ecuador",
        value: 39
      },
      {
        label: "Uruguay",
        value: 49
      }
    ],
    isMultiple:true
  }
  
  return <Select {...ddlCountries}/>;
}
```
## Total Selected
The **isTotalDisplay** prop will come in handy to easily show how many values have been selected in multiple selections.

{{TotalSelected}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Belgium",
        value: 34
      },
      {
        label: "Poland",
        value: 6
      },
      {
        label: "Italy",
        value: 16
      },
      {
        label: "India",
        value: 35
      },
      {
        label: "Nepal",
        value: 58
      },
      {
        label: "Uzbekistan",
        value: 26
      },
      {
        label: "Azerbaijan",
        value: 45
      },
      {
        label: "Argentina",
        value: 19
      },
      {
        label: "Brazil",
        value: 29
      },
      {
        label: "Ecuador",
        value: 39
      },
      {
        label: "Uruguay",
        value: 49
      }
    ],
    isMultiple: true,
    isTotalDisplay: true
  }
  
  return <Select {...ddlCountries}/>;
}
```
## Etiquette
The **isEtiquette** prop is a very useful feature that allows you to easily edit selected values.

{{Etiquette}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Belgium",
        value: 34
      },
      {
        label: "Poland",
        value: 6
      },
      {
        label: "Italy",
        value: 16
      },
      {
        label: "India",
        value: 35
      },
      {
        label: "Nepal",
        value: 58
      },
      {
        label: "Uzbekistan",
        value: 26
      },
      {
        label: "Azerbaijan",
        value: 45
      },
      {
        label: "Argentina",
        value: 19
      },
      {
        label: "Brazil",
        value: 29
      },
      {
        label: "Ecuador",
        value: 39
      },
      {
        label: "Uruguay",
        value: 49
      }
    ],
    isEtiquette: true,
    isMultiple: true
  }
  
  return <Select {...ddlCountries}/>;
}
```
## Grouping
You can use the **isGroup** prop to show your options in groups.

{{Grouping}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Belgium",
        value: 34,
        group: "Europe"
      },
      {
        label: "Poland",
        value: 6,
        group: "Europe"
      },
      {
        label: "Italy",
        value: 16,
        group: "Europe"
      },
      {
        label: "India",
        value: 35,
        group: "Asia"
      },
      {
        label: "Nepal",
        value: 58,
        group: "Asia"
      },
      {
        label: "Uzbekistan",
        value: 26,
        group: "Asia"
      },
      {
        label: "Azerbaijan",
        value: 45,
        group: "Asia"
      },
      {
        label: "Argentina",
        value: 19,
        group: "South America"
      },
      {
        label: "Brazil",
        value: 29,
        group: "South America"
      },
      {
        label: "Ecuador",
        value: 39,
        group: "South America"
      },
      {
        label: "Uruguay",
        value: 49,
        group: "South America"
      }
    ],
    isGroup: true
  }
  
  return <Select {...ddlCountries}/>;
}
```
## Filtering
The **isFilter** prop is used to filter the options in the `Select` component.

{{Filtering}}
```jsx
import React, { useState } from 'react'
import {Select, SelectProps} from 'agog-things'

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Belgium",
        value: 34,
        group: "Europe"
      },
      {
        label: "Poland",
        value: 6,
        group: "Europe"
      },
      {
        label: "Italy",
        value: 16,
        group: "Europe"
      },
      {
        label: "India",
        value: 35,
        group: "Asia"
      },
      {
        label: "Nepal",
        value: 58,
        group: "Asia"
      },
      {
        label: "Uzbekistan",
        value: 26,
        group: "Asia"
      },
      {
        label: "Azerbaijan",
        value: 45,
        group: "Asia"
      },
      {
        label: "Argentina",
        value: 19,
        group: "South America"
      },
      {
        label: "Brazil",
        value: 29,
        group: "South America"
      },
      {
        label: "Ecuador",
        value: 39,
        group: "South America"
      },
      {
        label: "Uruguay",
        value: 49,
        group: "South America"
      }
    ],
    isGroup: true,
    isFilter: true
  }
  
  return <Select {...ddlCountries}/>;
}
```

 
## API
### Select props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Whether disabled select | boolean | false |
| options | Select options. Will get better perf than jsx definition | { label, value }\[] | - |
| placeholder | Placeholder of select | string | - |
| searchPlaceholder | Placeholder of search input | string | - |
| isEtiquette | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | (props) => ReactNode | - |
| isFilter | Whether select is searchable | boolean | single: false, multiple: true |
| isClear | Show clear button | boolean | false |
| isMultiple | Select for multiple values | boolean | false |
| isGroup |  Show your options in groups | boolean | false |
| isTotalDisplay | Show how many values have been selected in multiple selections | boolean | false |
| infoText | extra info | string | - |
| type | Size of Select input | `mini` \| `default` | `default` |
| value | Current selected option (considered as a immutable array) | string \| string\[]<br />number \| number\[]<br />LabeledValue \| LabeledValue\[] | - |
| label | label of select | string | - |
| onSelect | Called when an option is selected, the params are option's value (or key) and option instance | function(string \| number \| LabeledValue, option: Option) | - |

### Options Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disable option | boolean | false |
| label | label of option | string | - |
| value | option value | (string \| number)\[] | \[] |
| group | group field | string | - |