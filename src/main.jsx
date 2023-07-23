import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundContainer from './components/containers/NotFoundContainer.jsx'
import { ContextProvider } from './context/Global.context.jsx'
import HomeContainer from './components/containers/HomeContainer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundContainer />,
    children: [
      {
        index: true,
        path: "location/*",
        element: <HomeContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);