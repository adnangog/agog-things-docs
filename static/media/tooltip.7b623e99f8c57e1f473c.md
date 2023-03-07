# Tooltip
The `Tooltip` component is used when you want to give a small hint about anything you mouse over.

{{Basic}}
```jsx
import {ToolTip} from 'agog-things'

export default function App() {
  return <ToolTip text={"Earth is the third planet from the Sun "}><span>Earth</span></ToolTip>;
}
```

## Placement

{{Placement}}
```jsx
import {ToolTip, ToolTipProps} from 'agog-things'


export default function App() {

  const generalContent = <div>The tooltip component is<br/> an easy to use <br/>and very useful component.</div>

  const tt1: ToolTipProps = {
    placement: "topLeft",
    content: generalContent,
    children: <div>Top Left</div>
  }

  const tt2: ToolTipProps = {
    placement: "topCenter",
    content: generalContent,
    children: <div>Top Center</div>
  }

  const tt3: ToolTipProps = {
    placement: "topRight",
    content: generalContent,
    children: <div>Top Right</div>
  }

  const tt4: ToolTipProps = {
    placement: "leftTop",
    content: generalContent,
    children: <div>Left Top</div>
  }

  const tt5: ToolTipProps = {
    placement: "rightTop",
    content: generalContent,
    children: <div>Right Top</div>
  }

  const tt6: ToolTipProps = {
    placement: "leftMiddle",
    content: generalContent,
    children: <div>Left Middle</div>
  }

  const tt7: ToolTipProps = {
    placement: "rightMiddle",
    content: generalContent,
    children: <div>Right Middle</div>
  }

  const tt8: ToolTipProps = {
    placement: "leftBottom",
    content: generalContent,
    children: <div>Left Bottom</div>
  }

  const tt9: ToolTipProps = {
    placement: "rightBottom",
    content: generalContent,
    children: <div>Right Bottom</div>
  }

  const tt10: ToolTipProps = {
    placement: "bottomLeft",
    content: generalContent,
    children: <div>Bottom Left</div>
  }

  const tt11: ToolTipProps = {
    placement: "bottomCenter",
    content: generalContent,
    children: <div>Bottom Center</div>
  }

  const tt12: ToolTipProps = {
    placement: "bottomRight",
    content: generalContent,
    children: <div>Bottom Right</div>
  }

  return <div style={{ gap: 10, display: 'flex', padding: 10, alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      display: "grid",
      gap:3,
      gridTemplateColumns: "auto auto auto",
      backgroundColor: " #dedede",
      padding: 10,
      borderRadius: 10
    }}>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt1} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt2} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt3} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt4} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
       
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt5} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt6} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
       
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt7} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt8} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
       
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt9} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt10} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt11} />
      </div>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 5
      }}>
        <ToolTip {...tt12} />
      </div>
    </div>

  </div>;
}

```

## API

### Tooltip
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | tooltip content | string \| number \| ReactNode | - |
| color | background color of tooltip | string | - |
| placement |  position of the tooltip| `topLeft` \| `topCenter` \| `topRight` \| `rightTop` \| `rightMiddle` \| `rightBottom` \| `bottomLeft` \| `bottomCenter` \| `bottomRight` \| `leftTop` \| `leftMiddle` \| `leftBottom` | `rightMiddle` | - |
| zIndex | zIndex of tooltip | number | - |