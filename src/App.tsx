import React from "react";
import { Outlet, NavLink } from "react-router-dom"
import './App.css';

function App() {

    const componentList = [
        {
            group: "general",
            component: [
                {
                    name: "Button",
                    route: "button"
                }
            ]
        },
        {
            group: "data entry",
            component: [
                {
                    name: "Checkbox",
                    route: "checkbox"
                },
                {
                    name: "DatePicker",
                    route: "datePicker"
                },
                {
                    name: "Radio",
                    route: "radio"
                },
                {
                    name: "Select",
                    route: "select"
                },
                {
                    name: "Switch",
                    route: "switch"
                },
                {
                    name: "Textbox",
                    route: "textbox"
                }
            ]
        },
        {
            group: "data display",
            component: [
                {
                    name: "Table",
                    route: "table"
                },

                {
                    name: "Tooltip",
                    route: "tooltip"
                }
            ]
        },
        {
            group: "navigation",
            component: [
                {
                    name: "Dropdown",
                    route: "dropdown"
                },
                {
                    name: "Pager",
                    route: "pager"
                }
            ]
        },
        {
            group: "feedback",
            component: [
                {
                    name: "Loading",
                    route: "loading",
                }
            ]
        }
    ]


    return (<div className='container'>
        <header><h1>Agog Things</h1></header>

        <main>
            <nav>
                {componentList.map((group, index) => {
                    return <React.Fragment key={`group${index}`}>
                        <div className="nav-title">{group.group}</div>
                        <ul>
                            {group.component.map((item, ind) => (<li key={`component${ind}`}>
                                <span>
                                    <NavLink to={item.route} className={({ isActive }) =>
                                        isActive ? "selected" : undefined
                                    }>
                                        <span>{item.name}</span>
                                    </NavLink>
                                </span>
                            </li>))}
                        </ul>
                    </React.Fragment>
                })}

            </nav>
            <article>
                <Outlet />
            </article>

        </main>
    </div>)
}

export default App;
