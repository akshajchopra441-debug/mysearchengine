function search() {
    const query = document.getElementById('searchBox').value;
    if (query.trim() !== "") {
        window.open(https://duckduckgo.com/?q=${encodeURIComponent(query)}, "_blank");
    } else {
        alert("Please type something to search!");
    }
}