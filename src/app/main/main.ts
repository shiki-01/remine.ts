import {app, BrowserWindow, Tray, Menu} from 'electron';
import { join } from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';
const devUrl = 'http://localhost:3000';
const prodPath = join(__dirname, '../renderer/out/index.html');
const prodUrl = new URL(`file://${prodPath}`).toString();


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

    tray?.setToolTip('remine.ts');
    tray?.setContextMenu(contextMenu);
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
            preload: join(__dirname, 'preload.js'),
        },
    });

    const url = isDevelopment ? devUrl : prodUrl;
    mainWindow.loadURL(url).then(() => console.log(`Loaded: ${url}`));

    mainWindow.on('blur', () => {
         //mainWindow?.hide();
    });
};

const showWindow = (): void => {
    mainWindow?.show();
};


/*
  app events
*/


app.on('ready', () => {
    tray = new Tray(join(__dirname, 'lib', 'remine.png'));
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
