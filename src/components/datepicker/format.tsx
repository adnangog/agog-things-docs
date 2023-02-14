import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    format: "YYYY.MM.DD",
    onChange: (val)=>console.log(val),
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}