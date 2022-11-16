import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import Landing from './Landing';
import EventPage from './landingpage/EventPage';
import Schedule from './landingpage/schedule';
import Personal from './landingpage/personal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
                <Routes>
                    <Route path ="/" element ={<Landing/>} />
                    <Route path="/eventpage" element={<EventPage/>} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/personal" element={<Personal />} />
                </Routes>
            </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
