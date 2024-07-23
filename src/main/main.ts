import {app, BrowserWindow, Tray, Menu} from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

import path from 'path';

if (require('electron-squirrel-startup')) {
    app.quit();
}


/*
  create Tray
*/


let tray: Tray | null = null;

const createTray = (): void => {
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'quit',
            click: () => {
                app.quit();
            },
        },
        {
            label: 'show',
            click: () => {
                showWindow();
            },
        },
        {
            label: 'dev',
            click: () => {
                mainWindow?.webContents.openDevTools();
            }
        },
        {
            label: 'setting',
            click: () => {
                showWindow();
                mainWindow?.webContents.send('navigate', '/setting');
            },
        },
        {
            label: 'new remind',
            click: () => {
                showWindow();
                mainWindow?.webContents.send('navigate', '/newRemind');
            },
        },
    ]);

    tray.setToolTip('remine.ts');
    tray.setContextMenu(contextMenu);
}


/*
  create main window
*/


let mainWindow: BrowserWindow | null = null;

const createWindow = (): void => {
    mainWindow = new BrowserWindow({
        height: 300,
        width: 400,
        show: false,
        frame: false,
        backgroundMaterial: 'acrylic',
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).then(r => console.log(r));

    mainWindow.on('blur', () => {
         mainWindow?.hide();
    });
};

const showWindow = (): void => {
    mainWindow?.show();
};


/*
  app events
*/


app.on('ready', () => {
    tray = new Tray(path.join(__dirname, 'lib', 'remine.png'));
    createTray();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
