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
        label: "Belgium",
        value: 34
      },
      {
        label: "Poland",
        value: 6
      },
      {
        label: "Italy",
        value: 16
      },
      {
        label: "India",
        value: 35
      },
      {
        label: "Nepal",
        value: 58
      },
      {
        label: "Uzbekistan",
        value: 26
      },
      {
        label: "Azerbaijan",
        value: 45
      },
      {
        label: "Argentina",
        value: 19
      },
      {
        label: "Brazil",
        value: 29
      },
      {
        label: "Ecuador",
        value: 39
      },
      {
        label: "Uruguay",
        value: 49
      }
    ],
    isMultiple:true
  }
  
  return <Select {...ddlCountries}/>;
}