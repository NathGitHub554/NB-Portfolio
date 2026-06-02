function hide() {

    let watchNext = document.querySelector("#secondary");
    let comments = document.querySelector("#comments");

    if (watchNext) {
        watchNext.style.display = "none";
    }
    if (comments) {
        comments.style.display = "none";
    }
}

// Use a MutationObserver to detect when the page content changes
const observer = new MutationObserver(() => {
    hide();
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initially hide the elements if they are present
hide();
