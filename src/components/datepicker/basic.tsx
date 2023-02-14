import Datepicker, {DatePickerProps} from '../../package/components/datepicker';

export default function App() {

  const ddlDatePicker:DatePickerProps = {
    onChange: (val)=>console.log(val),
    label: "Birth Date"
  }
  
  return <Datepicker {...ddlDatePicker}/>;
}