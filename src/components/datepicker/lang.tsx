import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    lang: "fr-FR",
    format: "YYYY.MM.DD",
    onChange: (val)=>console.log(val),
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}