# Button
You can use the `Button` component to trigger an action.
## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import Buton from '../../package/components/button';

export default function App() {  
  return <Buton onClick={()=>console.log("click click")}>Click</Buton>;
}
```