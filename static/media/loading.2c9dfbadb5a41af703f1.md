# Loading
{{Basic}}
```jsx
import React, { useState } from 'react'
import {Loading} from 'agog-things'

export default function App() {
  const [isShow, setIsShow] = useState(true)
  
  return <Loading isShow={isShow}/>;
}
```

## API
### Pager Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| isShow | Whether Loading is visible | boolean | false |
| isModal | - | boolean | true |