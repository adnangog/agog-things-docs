import Table from '../../package/components/table';

export default function App() {
  const columns = [
    {
      title: 'Country',
      key: 'country',
      isSorted: true
    },
    {
      title: 'Country code',
      key: 'country_code',
      isSorted: true
    }
  ];

  const data = [
    {
      "id": 1,
      "country": "Albania",
      "country_code": 355
    },
    {
      "id": 2,
      "country": "Argentina",
      "country_code": 54
    },
    {
      "id": 3,
      "country": "Bosnia and Herzegovina",
      "country_code": 387
    },
    {
      "id": 4,
      "country": "Croatia",
      "country_code": 385
    },
    {
      "id": 5,
      "country": "Germany",
      "country_code": 49
    },
    {
      "id": 6,
      "country": "Mexico",
      "country_code": 52
    },
    {
      "id": 7,
      "country": "Norway",
      "country_code": 47
    },
    {
      "id": 8,
      "country": "Spain",
      "country_code": 34
    },
    {
      "id": 9,
      "country": "Turkey",
      "country_code": 90
    },
    {
      "id": 10,
      "country": "United States",
      "country_code": 1
    }
  ]

  return <Table data={data} columns={columns} />
}