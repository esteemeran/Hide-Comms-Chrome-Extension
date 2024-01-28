const grabBtn = document.getElementById("hide");
grabBtn.addEventListener("click",() => {    
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        if (tab) {
            chrome.scripting.executeScript(
                {
                    target:{tabId: tab.id, allFrames: true},
                    func:grabImages
                },
                onResult
            )
        } else {
            alert("There are no active tabs")
        }
    })
})

function grabImages() {
    document.getElementsByClassName("replies").forEach((i) => {i.hidden = true})
}

function onResult(frames) {
    // TODO - Объединить списки URL-ов, полученных из каждого фрейма в один,
    // затем объединить их в строку, разделенную символом перевода строки
    // и скопировать в буфер обмена
}