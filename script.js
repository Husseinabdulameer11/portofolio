document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const repoList = document.getElementById("repo-list");
    
    // Theme Toggle Logic
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
    
    // Fetch GitHub Repositories
    async function fetchRepos() {
        const username = "Husseinabdulameer11"; // Replace with your GitHub username
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
