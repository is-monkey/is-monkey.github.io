window.showToast = (content, delay = 5000, success = true) => {
    const htmlContents = `
        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto"></strong>
            </div>
            <div class="toast-body"></div>
        </div>
    `;
    const _temp = document.createElement("div");
    _temp.innerHTML = htmlContents.trim();
    const toast = _temp.firstChild;
    window.toast = toast;
    success ? toast.firstElementChild.firstElementChild.innerHTML = "Success!" : toast.firstElementChild.firstElementChild.innerHTML = "Error!";
    toast.lastElementChild.innerHTML = content;
    document.body.appendChild(toast);
    setTimeout(() => {
        document.body.removeChild(toast)
    }, delay);
}

window.checkID = id => new Promise(resolve => {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord-id-lookup.herokuapp.com/lookup");
    request.setRequestHeader("content-type", "application/json");
    request.onreadystatechange = () => {
        if (request.readyState === request.DONE) {
            if (request.status !== 404) resolve(JSON.parse(request.responseText));
            else resolve(false);
        }
    }
    request.send(JSON.stringify({id: id}));
});