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
    request.open("GET", "https://kors-aniwere.herokuapp.com/https://discord.com/api/v8/users/" + id);
    request.setRequestHeader("authorization", "ODIzMTUwNTA4NjY3MTc0OTIy.YFdfzA.tLTuydqyH1bSU5Qs3uK8b37vLXg");
    request.onreadystatechange = () => {
        if (request.readyState === request.DONE) {
            resolve({ username: "man.", discriminator: "1234" });
        }
    }
    request.send();
});