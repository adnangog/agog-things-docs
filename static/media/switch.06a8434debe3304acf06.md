# Switch
Switching Selector.

{{Basic}}
```jsx
import React, { useState } from 'react'
import Switch, {SwitchProps} from '../../package/components/switch';

export default function App() {
  const [isOk, setIsOk] = useState(false)
  const swcIsOk : SwitchProps = {
    value: isOk,
    onChange: (val)=> setIsOk(val)
  }
  
  return <Switch {...swcIsOk}/>;
}
```