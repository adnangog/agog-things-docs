# Date picker
`Datepicker` component is used to select any date.

## Basic usage
The simple usage of this component is as follows:

{{Basic}}
```jsx
import {DatePicker, DatePickerProps} from 'agog-things';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    onChange: (val)=>console.log(val),
    label: "Birth Date"
  }
  
  return <DatePicker {...ddlDatePicker}/>;
}
```

## Date Format
{{Format}}
```jsx
import {DatePicker, DatePickerProps} from 'agog-things';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    onChange: (val)=>console.log(val),
    format: "DD.MM.YYYY",
    label: "Birth Date"
  }
  
  return <DatePicker {...ddlDatePicker}/>;
}
```

## Lang
{{Lang}}
```jsx
import {DatePicker, DatePickerProps} from 'agog-things';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    lang: "fr-FR",
    onChange: (val)=>console.log(val),
    format: "DD.MM.YYYY",
    label: "Birth Date"
  }
  
  return <DatePicker {...ddlDatePicker}/>;
}
```

## API

### Textbox
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| lang | datepicker language | string | window.navigator.language |
| format | date format | string | 'DD.MM.YYYY' |
| label | label of datepicker | string | - |
| placeholder | Placeholder of input | string | - |
| value | datepicker value | string | - |
| infoText | extra info | string | - |
| onChange | Callback when change date| function(e) | - |