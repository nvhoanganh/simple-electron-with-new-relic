import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

// Remaining code
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remaining import statements

// Populate using values from NerdGraph
const options = {
  init: {
    session_replay: {
      enabled: true,
      block_selector: '',
      mask_text_selector: '*',
      sampling_rate: 100.0,
      error_sampling_rate: 100.0,
      mask_all_inputs: true,
      collect_fonts: true,
      inline_images: false,
      inline_stylesheet: true,
      fix_stylesheets: true,
      preload: false,
      mask_input_options: {}
    },
    distributed_tracing: {
      enabled: true
    },
    privacy: {
      cookies_enabled: true
    },
    ajax: {
      deny_list: ["bam.nr-data.net"]
    }
  },
  info: { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net", licenseKey: "NRJS-05659363373c16b84a6", applicationID: "594601031", sa: 1 },
  loader_config: {
    accountID: "6624806",
    trustKey: "6624806",
    agentID: "594601031",
    licenseKey: "NRJS-05659363373c16b84a6",
    applicationID: "594601031"
  }
}

// The agent loader code executes immediately on instantiation.;
// new BrowserAgent(options);
setTimeout(function () {
  console.log('reloading New Relic for the first time')
  new BrowserAgent(options);
}, 1000);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
