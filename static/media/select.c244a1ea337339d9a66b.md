# Select
## Basic usage
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