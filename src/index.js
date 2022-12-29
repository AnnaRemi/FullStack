import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Home_page';
import Log_in_page from './components/Log_in_page';
import Learn_more from './components/Learn_more';
import New_note from './components/new_note';
import Sign_up from './components/Sign_up_page';
import Note from './components/page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signin",
    element: <Log_in_page />,
  },
  {
    path: "/signup",
    element: <Sign_up />,
  },
  {
    path: "/learnmore",
    element: <Learn_more />,
  },
  {
    path: "/newnote",
    element: <New_note />,
  },
  {
    path: "/newnote/new",
    element: <Note />,
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
