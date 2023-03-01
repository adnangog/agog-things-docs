# Tooltip
The `Tooltip` component is used when you want to give a small hint about anything you mouse over.

{{Basic}}
```jsx
import ToolTip from `../../package/components/tooltip`;

export default function App() {
  return <ToolTip text={"Earth is the third planet from the Sun "}><span>Earth</span></ToolTip>;
}
```

## Placement

{{Placement}}

## API

### Tooltip
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | tooltip content | string \| number \| ReactNode | - |
| color | background color of tooltip | string | - |
| placement |  position of the tooltip| `topLeft` \| `topCenter` \| `topRight` \| `rightTop` \| `rightMiddle` \| `rightBottom` \| `bottomLeft` \| `bottomCenter` \| `bottomRight` \| `leftTop` \| `leftMiddle` \| `leftBottom` | `rightMiddle` | - |
| zIndex | zIndex of tooltip | number | - |