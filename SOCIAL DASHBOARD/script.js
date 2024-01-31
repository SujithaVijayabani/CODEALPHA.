// Example JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", () => {
        // Mock login functionality
        alert("Logging in...");
        // Assuming the user is logged in, fetch and display social media feeds
        displayFeeds();
    });
});

function displayFeeds() {
    const feedsContainer = document.getElementById("feeds");
    feedsContainer.innerHTML = "";

    // Dummy data for demonstration
    const socialMediaFeeds = [
        { platform: "Twitter", content: "Tweet 1" },
        { platform: "Facebook", content: "Facebook post 1" },
        { platform: "Instagram", content: "Instagram post 1" }
        // Add more dummy data for other social media platforms
    ];

    socialMediaFeeds.forEach(feed => {
        const feedElement = document.createElement("div");
        feedElement.classList.add("feed");
        feedElement.innerHTML = `<h2>${feed.platform}</h2><p>${feed.content}</p>`;
        feedsContainer.appendChild(feedElement);
    });
}
