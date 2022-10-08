// The built directory structure
//
// ├─┬ dist
// │ ├─┬ electron
// │ │ ├─┬ main
// │ │ │ └── index.js
// │ │ └─┬ preload
// │ │   └── index.js
// │ ├── index.html
// │ ├── ...other-static-files-from-public
// │
import fetch from 'electron-fetch'
import URL from '../../url.js'

process.env.DIST = join(__dirname, '../..')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { release } from 'os'
import { join } from 'path'

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let win: BrowserWindow | null = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: 'Nuclear',
    width: 1000,
    titleBarStyle: 'hidden',
    icon: join(process.env.PUBLIC, 'favicon.svg'),
    webPreferences: {
      preload,
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  win.webContents.openDevTools()

  if (app.isPackaged) {
    win.loadFile(indexHtml)
  } else {
    win.loadURL(url)
    // win.webContents.openDevTools()
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// new window example arg: new windows url
ipcMain.handle('open-win', (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
    },
  })

  if (app.isPackaged) {
    childWindow.loadFile(indexHtml, { hash: arg })
  } else {
    childWindow.loadURL(`${url}/#${arg}`)
    // childWindow.webContents.openDevTools({ mode: "undocked", activate: true })
  }
})

//Auth Functions 
ipcMain.handle("get-auth-tokens", async(event, username, password) =>{
  const response = await fetch(`${URL}/account/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({'username':username, 'password':password})
  })
  const data = await response.json()
  if(response.status===200){
    return data;
    // console.log("DATA >>>>>>", data)
  }
  return false;
})

ipcMain.handle('update-auth-tokens',async(event, refreshToken, bearerToken)=>{
  const bearer = 'Bearer ' + bearerToken;
  const response = await fetch(`${URL}/account/api/token/refresh/`, {
    method: 'POST',
    headers: { 'Authorization': bearer, "Content-Type": "application/json; charset=UTF-8" },
    body:JSON.stringify({'refresh': refreshToken})
  })
  const data = await response.json()
  if(response.status===200){
    return data;
  }
  return false;
})

// Dashboard
ipcMain.handle('get-global-bot-data', async(event, currentUrl, bearerToken)=>{
  const bearer = 'Bearer ' + bearerToken;
  const response = await fetch(currentUrl, {
    method: 'GET',
    headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  if(response.status===200){
    return data
  }
  return false;
})


// I want to be fully transparent I will charge 35% advance than 35%  after the first draft and the rest of the money on