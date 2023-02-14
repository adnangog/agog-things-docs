# Table
You can easily show your data to your users by using the `Table` component. The table component is a highly advanced component with many features.

## Basic usage
The two basic props you need to use the `Table` component are **data** and **columns**:

{{Basic}}
```jsx
import { Table } from 'agog-things';

export default function App() {
    const columns = [
        {
          title: 'Name',
          key: 'first_name'
        },
        {
          title: 'Surname',
          key: 'last_name',
        },
        {
          title: 'E mail',
          key: 'email'
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
        }
      ]; 

  const data = [
        {
        "id": 1,
        "first_name": "Gregg",
        "last_name": "Harbron",
        "email": "gharbron0@who.int",
        "gender": "Male",
        "ip_address": "179.22.243.67",
        "age": 87
      },
      // ... other datas
    ]

    return <Table data={data} columns={columns} />
}
}
```

## Sorting
You can use **isSorted** for to make a column sortable.

{{Sorting}}
```jsx
import { Table } from 'agog-things';

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
```

## Filtering
Use **isFiltered** for filterable columns. You can use it for as many columns as you want.

{{Filtering}}
```jsx
import { Table } from 'agog-things';

export default function App() {
    const columns = [
        {
          title: 'Name',
          key: 'first_name',
          isFiltered: true
        },
        {
          title: 'Surname',
          key: 'last_name',
          isFiltered: true
        },
        {
          title: 'E mail',
          key: 'email',
          isFiltered: true
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
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
      },
      // ... others
    ]

    return <Table data={data} columns={columns} />
}
```

## Pager
Paging is another feature of the table component and is very simple to use.

{{Paging}}
```jsx
import { Table } from 'agog-things';

export default function App() {
    const columns = [
        {
          title: 'Name',
          key: 'first_name',
          isFiltered: true
        },
        {
          title: 'Surname',
          key: 'last_name',
          isFiltered: true
        },
        {
          title: 'E mail',
          key: 'email',
          isFiltered: true
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
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
      },
      // ... others
    ]

    return <Table data={data} columns={columns} pagination />
}
```

## Select All / Select One
You can use **rowSelection** to select one or more rows. If you want only one row to be selected, use the **radio** ''selectionYype''. you can use **checkbox** for multiple row selection

{{RowSelection}}
```jsx
import { Table } from 'agog-things';

export default function App() {

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    selectionType: "checkbox"
  };

    const columns = [
        {
          title: 'Name',
          key: 'first_name',
          isFiltered: true
        },
        {
          title: 'Surname',
          key: 'last_name',
          isFiltered: true
        },
        {
          title: 'E mail',
          key: 'email',
          isFiltered: true
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
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
      },
      // ... others
    ]

    return <Table data={data} columns={columns} rowSelection={rowSelection} pagination />
}
```

## Fixed Header & Fixed Columns
For a table with the header fixed to the top, use the **isStickyHeader** prop. To fix your columns, you should use the **isSticky** prop.

{{Fixed}}
```jsx
import { Table } from 'agog-things';

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
      },
      // ... others
    ]

    return <Table data={data} columns={columns} isStickyHeader pagination maxHeight={200} />
}
```

## Full Screen
You can use **fullScreen** prop to make your table full screen

{{FullScreen}}
```jsx
import { Table } from 'agog-things';

export default function App() {

         const columns = [
        {
          title: 'Name',
          key: 'first_name'
        },
        {
          title: 'Surname',
          key: 'last_name',
        },
        {
          title: 'E mail',
          key: 'email'
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
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
      },
      // ... others
    ]

   return <Table data={data} columns={columns} fullScreen />
}
```

## Show/Hide Columns

{{ShowHide}}
```jsx
import { Table } from 'agog-things';

export default function App() {

         const columns = [
        {
          title: 'Name',
          key: 'first_name'
        },
        {
          title: 'Surname',
          key: 'last_name',
        },
        {
          title: 'E mail',
          key: 'email'
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150,
        },
        {
          title: 'IP Address',
          key: 'ip_address',
          width: 150,
        },
        {
          title: 'Age',
          key: 'age',
          width: 50,
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
      },
      // ... others
    ]

   return <Table data={data} columns={columns} showHideColumns />
}
```

## API

  
### Table

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Columns of table | [ColumnsType](#column)\[] | - |
| data | Data record array to be displayed | object\[] | - |
| pagination | You can use this prop for pagination | boolean | false |
| rowSelection | Row selection [config](#rowselection) | object | - |
| isStickyHeader | Set sticky header  | boolean  | false |
| title | Table title | string | - |
| maxHeight | set table height| string \| number | - |
| fullScreen | You can use this prop to make the table full screen | boolean  | false |
| showHideColumns | shows a dropdown menu where you can adjust the column show/hide | boolean  | false |

### Column

One of the Table `columns` prop for describing the table's columns, Column has the same API.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| align | The specify which way that column is aligned | `left` \| `right` \| `center` | `left` |
| className | The className of this column | string | - |
| colSpan | Span of this column's title | number | - |
| isSticky | Set column to be fixed| boolean | false |
| isFiltered | Set column to be filtered | boolean | false |
| isSorted | Set column to be sorted | boolean | false |
| key | Unique key of this column | string | - |
| render | Renderer of the table cell. The return value should be a ReactNode | function(text, record, index) {} | - |
| rowScope | Set scope attribute for all cells in this column | `row` | - |
| title | Title of this column | string | - |
| width | Width of this column | number | - |

### rowSelection

Properties for row selection.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checkStrictly | Check table row precisely; parent row and children rows are not associated | boolean | true |
| columnTitle | Set the title of the selection column | ReactNode | - |
| columnWidth | Set the width of the selection column | string \| number | `32px` |
| fixed | Fixed selection column on the left | boolean | - |
| getCheckboxProps | Get Checkbox or Radio props | function(record) | - |
| hideSelectAll | Hide the selectAll checkbox and custom selection | boolean | false |
| preserveSelectedRowKeys | Keep selection `key` even when it removed from `dataSource` | boolean | - |
| renderCell | Renderer of the table cell. Same as `render` in column | function(checked, record, index, originNode) {} | - |
| selectedRowKeys | Controlled selected row keys | string\[] \| number\[] | \[] |
| selections | Custom selection [config](#selection), only displays default selections when set to `true` | object\[] \| boolean | - |
| type | `checkbox` or `radio` | `checkbox` \| `radio` | `checkbox` |
| onChange | Callback executed when selected rows change | function(selectedRowKeys, selectedRows, info: { type }) | - |
| onSelect | Callback executed when select/deselect one row | function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | Callback executed when select/deselect all rows | function(selected, selectedRows, changeRows) | - |
| onSelectInvert | Callback executed when row selection is inverted | function(selectedRowKeys) | - |
| onSelectNone | Callback executed when row selection is cleared | function() | - |
| onSelectMultiple | Callback executed when row selection is changed by pressing shift | function(selected, selectedRows, changeRows) | - |
