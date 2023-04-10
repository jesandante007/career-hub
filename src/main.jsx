import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import AppliedJob from './components/AppliedJob'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'applied',
        element: <AppliedJob />
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
