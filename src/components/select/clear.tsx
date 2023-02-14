import React, { useState } from 'react'
import Select, {SelectProps} from '../../package/components/select';

export default function App() {
  const [country, setCountry] = useState()

  const ddlCountries: SelectProps = {
    value: country,
    placeholder: "--Please select--",
    label: "Country",
    onSelect: (value) => setCountry(value),
    items: [
      {
        label: "Turkey",
        value: 34
      },
      {
        label: "Greece",
        value: 6,
      },
      {
        label: "Bulgaria",
        value: 16,
      },
      {
        label: "Iran",
        value: 35,
      }
    ],
    isClear: true
  }
  
  return <Select {...ddlCountries}/>;
}