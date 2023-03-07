# Button
You can use the `Button` component to trigger an action.
## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import {Button} from 'agog-things';

export default function App() {  
  return <Button onClick={()=>console.log("click click")}>Click</Button>;
}
```

## Element Type

{{ElementType}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {
  const btnPrimary: ButtonProps = {
    children: "Primary",
    elementType: "primary"
  }
  const btnTransparent: ButtonProps = {
    children: "Transparent",
    elementType: "transparent"
  }
  const btnDashed: ButtonProps = {
    children: "Dashed",
    elementType: "dashed"
  }
  const btnLink: ButtonProps = {
    children: "Link",
    elementType: "link"
  }
  const btnText: ButtonProps = {
    children: "Text",
    elementType: "text"
  }
  return <div style={{gap:10, display: 'flex', padding: 10, alignItems:'center'}}>
    <Button {...btnPrimary} />
    <Button {...btnTransparent} />
    <Button {...btnDashed} />
    <Button {...btnLink} />
    <Button {...btnText} />
  </div>;
}
```

## Size

{{Size}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {
  const btnLarge: ButtonProps = {
    children: "Large",
    size: 'large'
  }
  const btnMiddle: ButtonProps = {
    children: "Middle",
    size: 'middle'
  }
  const btnSmall: ButtonProps = {
    children: "Small",
    size: 'small'
  }
  return <>
    <Button {...btnLarge} />
    <Button {...btnMiddle} />
    <Button {...btnSmall} />
  </>;
}
```

## Shape

{{Shape}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {
  const btnDefault: ButtonProps = {
    children: "Default",
    elementType: "primary",
    shape: 'default'
  }
  const btnRound: ButtonProps = {
    children: "Round",
    elementType: "primary",
    shape: 'round'
  }
  const btnCircle: ButtonProps = {
    children: "C",
    elementType: "primary",
    shape: 'circle'
  }

  return <div style={{gap:10, display: 'flex', padding: 10, alignItems:'center'}}>
    <Button {...btnDefault} />
    <Button {...btnRound} />
    <Button {...btnCircle} />
  </div>;
}
```

## Loading

{{Loading}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {  
  return <Button loading={true} elementType="primary">Loading</Button>;
}
```

## Stretch

{{Stretch}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {  
  return <Button stretch elementType="primary">Click</Button>;
}
```

## Disabled

{{Disabled}}
```jsx
import {Button, ButtonProps} from 'agog-things';

export default function App() {  
  return <Button disabled elementType="primary">Disabled</Button>;
}
```

## API

### Button

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| stretch | fit to width of parent element | boolean | false |
| disabled | Disabled state of button | boolean | false |
| type | Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
| loading | Set the loading status of button | boolean  | false |
| shape | Can be set button shape | `default` \| `circle` \| `round` | 'default' |
| size | Set the size of button | `large` \| `middle` \| `small` | `middle` |
| elementType | Can be set to `primary` `ghost` `dashed` `link` `text` `default` | string | `default` |
| onClick | Set the handler to handle `click` event | (event: MouseEvent) => void | - |