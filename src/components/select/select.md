# Select
You can use `Select` component for select value or values  from several options.

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import Select, {SelectProps} from '../../package/components/select';

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
## Clear
You can use the **isClear** prop to add a small cancel icon to cancel the selected value.

{{Clear}}
```jsx
import React, { useState } from 'react'
import Select, {SelectProps} from '../../package/components/select';

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
import Select, {SelectProps} from '../../package/components/select';

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
import Select, {SelectProps} from '../../package/components/select';

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
import Select, {SelectProps} from '../../package/components/select';

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
import Select, {SelectProps} from '../../package/components/select';

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
import Select, {SelectProps} from '../../package/components/select';

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