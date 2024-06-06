# Sample React Project

## Make sure we have nodejs / create react app
nvm?

```
npx create-react-app project-name
```
## packages
```
npm i react-router-dom
npm install -g serve
```

## index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import About from './routes/about';
import Products from './routes/products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## create /src/routes

### src/routes/root.jsx
```
import { Link, json } from "react-router-dom";
import Nav from "../components/nav";
import data from "../data/data.json"

export default function Root() {

    return(
        <div>
            <h1>Hello World</h1>
            <Nav/>
        </div>
    )
}
```

### src/routes/about.jsx
```
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import data from '../data/data.json';
import { useState } from "react";

export default function Root() {

    const [lang, setLang] = useState(data.en)

    return(
        <div>
            <h1>About</h1>
            <Nav/>
            {
                lang.map((person => <div key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.title}</p>
                </div>))
            }
            <select onChange={(e) => setLang(data[e.currentTarget.value])}>
                {
                    Object.keys(data).map(lang => <option val={lang}>{lang}</option>)
                }
            </select>
        </div>
    )
}
```

### src/routes/product.jsx
```
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import data from "../data/data.json"

export default function Root() {
    return(
        <div>
            <h1>Products</h1>
            <Nav/>
        </div>
    )
}
```


### create /src/components/nav.jsx
```
import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/products'}>Products</Link>
        </nav>
    )
}
```

### data/data.json
```
// adding a new language is as simple is just adding a new object key to the top level 
{
    "en": [
        {
            "id": 1,
            "name": "gil",
            "title": "Lead Scientist"
        },
        {
            "id": 2,
            "name": "Murray",
            "title": "CEO"
        }
    ],
    "fr": [
        {
            "id": 3,
            "name": "gil",
            "title": "Scientifique Principal"
        },
        {
            "id": 4,
            "name": "Murray",
            "title": "Le CEO"
        }
    ],
    "es": [
        {
            "id": 5,
            "name": "El gilo",
            "title": "Científico principal"
        },
        {
            "id": 6,
            "name": "Senior Murray",
            "title": "El CEO"
        }
    ]
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
