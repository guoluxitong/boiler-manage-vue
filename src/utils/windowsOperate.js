//const {BrowserWindow} = require('electron').remote
/**
 * 打开windows自带的窗口
 * @param url
 * @param title
 * @param w
 * @param h
 * */
export function openCommonWindow(url, title, w, h) {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    const left = ((width / 2) - (w / 2)) + dualScreenLeft
    const top = ((height / 2) - (h / 2)) + dualScreenTop
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)
    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus()
    }
}

/**
 * 打开electron的窗口
 * @param url
 * @param option
*/
// export function openElectronWindow(url,option={},isExtendParent=true) {
//     if(isExtendParent){
//         option.parent=require('electron').remote.getCurrentWindow()
//     }
//     option.webPreferences={webSecurity: false}
//     option.icon=__static+'/common/icon.ico'
//     let windowsHref=window.location.href;
//     const locationURL =windowsHref.substring(0,windowsHref.indexOf("#")+1)
//     let win = new BrowserWindow(option)
//     //win.webContents.openDevTools();
//     win.loadURL(locationURL+url)
//     return win
// }

