import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Table from './components/table';
import Button from './components/button';
import Checkbox from './components/checkbox';
import Datepicker from './components/datepicker';
import Dropdown from './components/dropdown';
import Loading from './components/loading';
import Pager from './components/pager';
import Radio from './components/radio';
import Select from './components/select';
import Switch from './components/switch';
import Textbox from './components/textbox';
import Tooltip from './components/tooltip';
import ErrorPage from './errorPages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "checkbox",
        element: <Checkbox />,
      },
      {
        path: "datepicker",
        element: <Datepicker />,
      },
      {
        path: "dropdown",
        element: <Dropdown />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "pager",
        element: <Pager />,
      },
      {
        path: "radio",
        element: <Radio />,
      },
      {
        path: "select",
        element: <Select />,
      },
      {
        path: "switch",
        element: <Switch />,
      },
      {
        path: "textbox",
        element: <Textbox />,
      },
      {
        path: "tooltip",
        element: <Tooltip />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
