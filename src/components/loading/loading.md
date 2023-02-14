# Loading
{{Basic}}
```jsx
import React, { useState } from 'react'
import Loading from '../../package/components/loading';

export default function App() {
  const [isShow, setIsShow] = useState(true)
  
  return <Loading isShow={isShow}/>;
}
```