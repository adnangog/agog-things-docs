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

## Element Type

{{ElementType}}
```jsx
import Buton, { ButtonProps } from '../../package/components/button';

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
    <Buton {...btnPrimary} />
    <Buton {...btnTransparent} />
    <Buton {...btnDashed} />
    <Buton {...btnLink} />
    <Buton {...btnText} />
  </div>;
}
```

## Size

{{Size}}
```jsx
import Buton, { ButtonProps } from '../../package/components/button';

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
    <Buton {...btnLarge} />
    <Buton {...btnMiddle} />
    <Buton {...btnSmall} />
  </>;
}
```

## Shape

{{Shape}}
```jsx
import Buton, { ButtonProps } from '../../package/components/button';

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
    <Buton {...btnDefault} />
    <Buton {...btnRound} />
    <Buton {...btnCircle} />
  </div>;
}
```

## Loading

{{Loading}}
```jsx
import Buton, {ButtonProps} from '../../package/components/button';

export default function App() {  
  return <Buton loading={true} elementType="primary">Loading</Buton>;
}
```

## Stretch

{{Stretch}}
```jsx
import Buton, {ButtonProps} from '../../package/components/button';

export default function App() {  
  return <Buton stretch elementType="primary">Click</Buton>;
}
```

## Disabled

{{Disabled}}
```jsx
import Buton, {ButtonProps} from '../../package/components/button';

export default function App() {  
  return <Buton disabled elementType="primary">Disabled</Buton>;
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