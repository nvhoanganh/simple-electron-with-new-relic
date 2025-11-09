const {app, BrowserWindow} = require('electron') // http://electronjs.org/docs/api
const path = require('path') // https://nodejs.org/api/path.html
const url = require('url') // https://nodejs.org/api/url.html

let window = null

const fs = require('fs');

// Wait until the app is ready
app.once('ready', () => {
  // Read config.json
  let enabledNewRelic = true;
  try {
    const configPath = path.join(__dirname, 'config.json');
    const configData = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configData);
    enabledNewRelic = config.enabledNewRelic;
  } catch (err) {
    // If config.json is missing or invalid, default to true
    enabledNewRelic = true;
  }

  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 400px
    width: 400,
    // Set the initial height to 500px
    height: 500,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: true,
    webPreferences: {
      // Enable Node.js integration in the renderer process
      nodeIntegration: true,
      // Disable context isolation to allow access to Node.js APIs
      contextIsolation: false,
      webSecurity: false,
    }
  })

  window.webContents.setUserAgent('sample_agent_ui_electron/1.0.0-master');

  // Decide which HTML to load
  const htmlFile = enabledNewRelic ? 'index.html' : 'index-no-nr.html';
  window.loadURL(url.format({
    pathname: path.join(__dirname, htmlFile),
    protocol: 'file:',
    slashes: true
  }));

  window.once('ready-to-show', () => {
    window.show()
  })
})
