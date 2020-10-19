const electron = require('electron')
const url = require('url')
const path = require('path')
var fs = require('fs')
const MenuItem = electron.MenuItem
const ipc = electron.ipcMain
const { BrowserWindow, Menu, dialog, app} = electron
let window;

class Window {
    constructor(pName) {
        this.aName = pName;
        this.aIsOpen = false;
        this.aWindowObject = null;
    }
    get name() {
        return this.aName;
    }

    get isOpen() {
        return this.aIsOpen;
    }

    get windowObject() {
        return this.aWindowObject;
    }

    loadWindowObject(pWindowObject) {
        this.aWindowObject = pWindowObject;
        this.aWindowObject.on('closed', () => {
            this.aWindowObject = null;
            this.aIsOpen = false;
        });
    }

    open() {
        this.aIsOpen = true;
    }

    close() {
        this.aIsOpen = false;
    }

}

const aboutWindow = new Window('about');
const accueilWindow = new Window('connexion');

app.on('ready', () => {
    if (!accueilWindow.isOpen) {
        accueilWindow.loadWindowObject(openWindow(accueilWindow.name));
        accueilWindow.open();
        createIndexMenu();
    }
});

function createIndexMenu() {
    var indexMenu = Menu.buildFromTemplate(
        [{
                label: 'Fichier',
                submenu: [
                    {
                        label: 'Quitter',
                        click() {
                            app.quit();
                        },
                        accelerator: 'CmdOrCtrl+Shift+Q'
                    }
                ]
            },
            {
                label: 'Edition',
                submenu: [
                    {label: 'Copier', role: 'copy'},
                    {label: 'Coller', role: 'paste'}
                ]
            },
            {
                label: 'A propos',
                submenu: [{
                    label: '?',
                    click() {
                        clickAbout()
                    }
                }]
            }
        ]);
    Menu.setApplicationMenu(indexMenu);
}

function clickAbout() {
    if (!aboutWindow.isOpen) {
        aboutWindow.loadWindowObject(openWindow(aboutWindow.name));
        aboutWindow.open();
        createIndexMenu();
    }
}

function openWindow(filename) {
    switch (filename) {
        case 'about':
            window = new BrowserWindow({
                maximizable: false,
                minimizable: false,
                fullscreenable: false,
                resizable: false,
                autoHideMenuBar: true,
                parent: accueilWindow.windowObject,
                darkTheme: true,
                width: 500,
                height: 175,
                icon: path.join(__dirname, 'content/img/logo.png'),
                webPreferences: {
                    nodeIntegration: true
                }
            });
            break;
        default:
            window = new BrowserWindow({
                icon: path.join(__dirname, 'content/img/logo.png'),
                minHeight: 580,
                minWidth: 950,
                width: 950,
                height: 580,
                darkTheme: true,
                webPreferences: {
                    nodeIntegration: true
                }
            });
            break;
    }

    window.loadURL(url.format({
        pathname: path.join(__dirname,filename + '.html'),
        protocol: 'file',
        slashes: true
    }));

    window.on('closed', () => {
        window = null;
    });

    return window;

};

const right_click = new Menu()
right_click.append(new MenuItem({role: 'copy',label:'Copy                 ',accelerator:'CmdOrCtrl+C'}))
right_click.append(new MenuItem({type: 'separator' }))
right_click.append(new MenuItem({role: 'paste',label:'Paste                 ',accelerator:'CmdOrCtrl+V'}))
ipc.on('show-context-menu', function (event) {
    const win = BrowserWindow.fromWebContents(event.sender)
    right_click.popup(win)
})