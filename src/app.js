import './branding/branding.js';
import { start } from './scripts/start';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs-extra';
const app = remote.app;

Bugsnag.metaData = {
    // platformId: app.process.platform,
    // platformArch: app.process.arch,
    // electronVersion: app.process.versions.electron,
    version: app.getVersion()
    // platformVersion: cordova.platformVersion
    // build: appInfo.build
};

Bugsnag.appVersion = app.getVersion();

app.setAppUserModelId('chat.rocket');

window.$ = window.jQuery = require('./vendor/jquery-3.1.1');

window.APPDATA_PATH = path.join(app.getPath('userData'), 'custom');

console.log(window.APPDATA_PATH);

fs.ensureFileSync(path.join(window.APPDATA_PATH, 'custom.css'));
fs.ensureFileSync(path.join(window.APPDATA_PATH, 'custom-ui.css'));

start();
