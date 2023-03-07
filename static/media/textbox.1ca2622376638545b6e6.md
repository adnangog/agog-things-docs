# Textbox
The component you need to use to get text input from users is the `Textbox` component. It can be used for different types of input (text, numeric, phone number etc.).

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import {TextBox, TextBoxProps} from 'agog-things'

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
```

## Clear
You can use the **isClear** prop to add a small cancel icon to remove input content

{{IsClear}}
```jsx
import React, { useState } from 'react'
import {TextBox, TextBoxProps} from 'agog-things'

export default function App() {
  const [name, setName] = useState()
  const txtName: TextBoxProps = {
    label: 'Name Surname',
    value: name,
    placeholder: 'Your name and surname',
    isClear:true,
    onChange: (value) => setName(value)
  }
  
  return <TextBox {...txtName}/>;
}
```

## Disabled

{{Disabled}}
```jsx
import React, { useState } from 'react'
import {TextBox, TextBoxProps} from 'agog-things'

export default function App() {
  const [name, setName] = useState()
  const txtName: TextBoxProps = {
    label: 'Disabled',
    value: name,
    disabled:true,
    onChange: (value) => setName(value)
  }
  
  return <TextBox {...txtName}/>;
}
```


## Size
{{Size}}
```jsx
import React, { useState } from 'react'
import {TextBox, TextBoxProps} from 'agog-things'

export default function App() {
  const [name, setName] = useState()
  const txtLarge: TextBoxProps = {
    label: 'Large',
    value: name,
    placeholder: 'Your name and surname',
    size:"large",
    onChange: (value) => setName(value)
  }

  const txtMiddle: TextBoxProps = {
    label: 'Middle',
    value: name,
    placeholder: 'Your name and surname',
    size:"middle",
    onChange: (value) => setName(value)
  }

  const txtSmall: TextBoxProps = {
    label: 'Small',
    value: name,
    placeholder: 'Your name and surname',
    size:"small",
    onChange: (value) => setName(value)
  }
  
  return <div style={{gap:10, display: 'flex', padding: 10, alignItems:'center'}}>
    <TextBox {...txtLarge}/>
    <TextBox {...txtMiddle}/>
    <TextBox {...txtSmall}/>
    </div>;
}
```

## Type
{{Numeric}}
```jsx
import React, { useState } from 'react'
import {TextBox, TextBoxProps} from 'agog-things'

export default function App() {
  const [name, setName] = useState()
  const txtName: TextBoxProps = {
    label: 'Name Surname',
    value: name,
    placeholder: 'Your name and surname',
    type: "number",
    onChange: (value) => setName(value)
  }
  
  return <TextBox {...txtName}/>;
}
```

## API

### Textbox
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| isClear | If allow to remove input content with clear icon | boolean \| { clearIcon: ReactNode } | false |
| disabled | Whether the input is disabled | boolean | false |
| id | The ID for input | string | - |
| maxLength | The max length | number | - |
| size | The size of the input box. Note: in the context of a form, the `middle` size is used | `large` \| `middle` \| `small` | - |
| type | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)( use `Input.TextArea` instead of `type="textarea"`) | string | `text` |
| label | label of option | string | - |
| value | The input content value | string | - |
| onChange | Callback when user input | function(e) | - |
| onPressEnter | The callback function that is triggered when Enter key is pressed | function(e) | - |