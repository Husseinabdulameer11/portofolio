document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const repoList = document.getElementById("repo-list");
    
    // Load theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    }
    
    // Theme Toggle Logic
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    
    // Fetch GitHub Repositories
    async function fetchRepos() {
        const username = "YOUR_GITHUB_USERNAME"; // Replace with your GitHub username
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
            const repos = await response.json();
            
            repos.forEach(repo => {
                const repoItem = document.createElement("div");
                repoItem.classList.add("col-md-4", "mb-3");
                repoItem.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || "No description available."}</p>
                            <a href="${repo.html_url}" target="_blank" class="btn btn-success">View Repo</a>
                        </div>
                    </div>
                `;
                repoList.appendChild(repoItem);
            });
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    }
    
    fetchRepos();
});
