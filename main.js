const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // et charger le fichier index.html de l'application.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
