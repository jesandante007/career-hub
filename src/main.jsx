import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import AppliedJob from './components/AppliedJob'
import { loaderCustom } from './utils/loader'
import ErrorPage from './components/ErrorPage'
import Statistics from './components/Statistics'
import Blog from './components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ({params}) => loaderCustom(params.id)
      },
      {
        path: '/applied',
        element: <AppliedJob />
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
