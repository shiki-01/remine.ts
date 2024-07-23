import { contextBridge, ipcRenderer } from "electron";

const electronHandler = {
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;