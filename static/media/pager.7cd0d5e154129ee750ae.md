# Pager
If you have a list or table that you want to divide into several pages, you can use the `Pager` component.

{{Basic}}
```jsx
import React, { useState, useEffect } from 'react'
import {Pager} from 'agog-things'

export default function App() {
  const [state, setState] = useState({
    countPerPage: 10,
    page: 1,
  })


  return <Pager page={state.page} countPerPage={state.countPerPage} onSelect={({page, countPerPage}:{page: number; countPerPage: number;})=>setState({...state, page, countPerPage})} totalCount={200} />;
}
```

## API
### Pager Props
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| totalCount | Total item count | number | - |
| page | Current page | number | 0 |
| countPerPage | item count per page | number | 0 |
| onChange | The callback function that is triggered when the state changes | function(checkedValue) | - |