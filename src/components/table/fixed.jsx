import Table from '../../package/components/table';

export default function App() {
    const columns = [
        {
          title: 'Name',
          key: 'first_name',
          width: 200,
          isSticky: true
        },
        {
          title: 'Surname',
          key: 'last_name',
          width: 300,
        },
        {
          title: 'E mail',
          key: 'email',
          width: 300,
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 300,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 300,
        },
        {
          title: 'Age',
          key: 'age',
        }
      ]; 

      const data = [{
        "id": 1,
        "first_name": "Gregg",
        "last_name": "Harbron",
        "email": "gharbron0@who.int",
        "gender": "Male",
        "ip_address": "179.22.243.67",
        "age": 87
      }, {
        "id": 2,
        "first_name": "Delbert",
        "last_name": "Bold",
        "email": "dbold1@huffingtonpost.com",
        "gender": "Male",
        "ip_address": "195.74.252.2",
        "age": 99
      }, {
        "id": 3,
        "first_name": "Mechelle",
        "last_name": "Ninotti",
        "email": "mninotti2@buzzfeed.com",
        "gender": "Female",
        "ip_address": "29.215.60.116",
        "age": 93
      }, {
        "id": 4,
        "first_name": "Meir",
        "last_name": "Ingham",
        "email": "mingham3@ucoz.ru",
        "gender": "Male",
        "ip_address": "11.135.215.20",
        "age": 7
      }, {
        "id": 5,
        "first_name": "Tomkin",
        "last_name": "Silvers",
        "email": "tsilvers4@freewebs.com",
        "gender": "Male",
        "ip_address": "218.128.192.100",
        "age": 85
      }, {
        "id": 6,
        "first_name": "Georgette",
        "last_name": "Durnall",
        "email": "gdurnall5@ebay.com",
        "gender": "Female",
        "ip_address": "158.66.244.228",
        "age": 34
      }, {
        "id": 7,
        "first_name": "Aylmar",
        "last_name": "Caldaro",
        "email": "acaldaro6@dmoz.org",
        "gender": "Male",
        "ip_address": "25.36.203.216",
        "age": 7
      }, {
        "id": 8,
        "first_name": "Rafferty",
        "last_name": "Varker",
        "email": "rvarker7@vk.com",
        "gender": "Male",
        "ip_address": "5.169.253.193",
        "age": 90
      }, {
        "id": 9,
        "first_name": "Emory",
        "last_name": "Cheake",
        "email": "echeake8@dell.com",
        "gender": "Male",
        "ip_address": "81.74.139.210",
        "age": 64
      }, {
        "id": 10,
        "first_name": "Molly",
        "last_name": "Longhorn",
        "email": "mlonghorn9@irs.gov",
        "gender": "Female",
        "ip_address": "140.8.28.171",
        "age": 1
      }, {
        "id": 11,
        "first_name": "Katheryn",
        "last_name": "Robion",
        "email": "krobiona@prweb.com",
        "gender": "Genderqueer",
        "ip_address": "7.191.126.44",
        "age": 23
      }
    ]

    return <Table data={data} columns={columns} isStickyHeader pagination maxHeight={200} fullScreen />
}