function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading ' + file, error));
}

// Load the header and footer
window.onload = function() {
    loadHTML("header.html", "header-container");
    loadHTML("footer.html", "footer-container");
};