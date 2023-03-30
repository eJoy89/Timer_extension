chrome.action.onClicked.addListener(function () {
    chrome.windows.create({ type: 'popup', url: "./index.html", width: 424, height: 270 })
})