# Date picker
## Basic usage
{{Basic}}
```jsx
import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    onChange: (val)=>console.log(val),
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}
```

## Date Format
{{Format}}
```jsx
import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    onChange: (val)=>console.log(val),
    format: "DD.MM.YYYY",
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}
```

## Lang
{{Lang}}
```jsx
import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    lang: "fr-FR",
    onChange: (val)=>console.log(val),
    format: "DD.MM.YYYY",
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}
```