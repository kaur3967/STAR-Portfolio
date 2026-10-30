document.getElementById("lastUpdated").textContent =
    new Date().toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });