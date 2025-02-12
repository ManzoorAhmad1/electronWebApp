import { app, shell, BrowserWindow, ipcMain, Tray } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

// Set the icon path correctly for each platform
const iconPath = join(__dirname, '../../resources/icon.png') // Default for Linux
const windowsIconPath = join(__dirname, '../../resources/mono.ico') // Windows
const macIconPath = join(__dirname, '../../resources/icon.icns') // macOS

let tray = null;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    // Set the icon depending on the platform
    icon: process.platform === 'win32'
      ? windowsIconPath
      : process.platform === 'darwin'
      ? macIconPath
      : iconPath, // Default for Linux
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // Create system tray icon (for minimizing the app to the tray)
  if (process.platform === 'win32' || process.platform === 'darwin' || process.platform === 'linux') {
    tray = new Tray(process.platform === 'win32'
      ? windowsIconPath
      : process.platform === 'darwin'
      ? macIconPath
      : iconPath);
      
    tray.setToolTip('Your App Name');
    
    // Handle tray icon click to show window
    tray.on('click', () => {
      mainWindow.show();
    });
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
