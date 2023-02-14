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
        value: 34,
        group: "Europe"
      },
      {
        label: "Poland",
        value: 6,
        group: "Europe"
      },
      {
        label: "Italy",
        value: 16,
        group: "Europe"
      },
      {
        label: "India",
        value: 35,
        group: "Asia"
      },
      {
        label: "Nepal",
        value: 58,
        group: "Asia"
      },
      {
        label: "Uzbekistan",
        value: 26,
        group: "Asia"
      },
      {
        label: "Azerbaijan",
        value: 45,
        group: "Asia"
      },
      {
        label: "Argentina",
        value: 19,
        group: "South America"
      },
      {
        label: "Brazil",
        value: 29,
        group: "South America"
      },
      {
        label: "Ecuador",
        value: 39,
        group: "South America"
      },
      {
        label: "Uruguay",
        value: 49,
        group: "South America"
      }
    ],
    isGroup: true
  }
  
  return <Select {...ddlCountries}/>;
}