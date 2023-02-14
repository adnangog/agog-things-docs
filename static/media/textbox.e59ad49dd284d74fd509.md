# Textbox
The component you need to use to get text input from users is the `Textbox` component. It can be used for different types of input (text, numeric, phone number etc.).

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import React, { useState } from 'react'
import TextBox, {TextBoxProps} from '../../package/components/textbox';

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

## Type
{{Numeric}}
```jsx
import React, { useState } from 'react'
import TextBox, {TextBoxProps} from '../../package/components/textbox';

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