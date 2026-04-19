class SiteHeader extends HTMLElement {
    connectedCallback() {
        if (!this.style.display) {
            this.style.display = 'block';
        }

        const currentPath = window.location.pathname;
        const isHomePage = currentPath === '/' || currentPath === '/index.html';
        const mobileMenuId = 'mobile-menu-panel';
        
        // Define paths conditionally based on the current page to ensure proper navigation
        const aboutPath = isHomePage ? '#about' : '/index.html#about';
        const skillsPath = isHomePage ? '#skills' : '/index.html#skills';
        const contactPath = isHomePage ? '#contact' : '/index.html#contact';
        const projectsPath = '/projects.html';
        
        // Determine active states for both nav and mobile links
        const isProjectsPage = currentPath.includes('projects');
        const projectsActiveClass = isProjectsPage ? ' active' : '';

        this.innerHTML = `
            <nav class="nav">
                <div class="container">
                    <div class="nav-content">
                        <a href="/index.html" class="nav-logo serif">Mark Kuriy</a>
                        
                        <ul class="nav-links">
                            <li><a href="${aboutPath}" class="nav-link">About</a></li>
                            <li><a href="${skillsPath}" class="nav-link">Skills</a></li>
                            <li><a href="${projectsPath}" class="nav-link${projectsActiveClass}">Projects</a></li>
                            <li><a href="${contactPath}" class="nav-link">Contact</a></li>
                        </ul>
                        
                        <div class="flex items-center">
                            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
                                <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                                </svg>
                                <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </button>
                            
                            <button class="mobile-menu" aria-label="Open mobile menu" aria-expanded="false" aria-controls="${mobileMenuId}">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div id="${mobileMenuId}" class="mobile-menu-container" hidden aria-hidden="true" inert>
                <ul class="nav-links">
                    <li><a href="${aboutPath}" class="nav-link">About</a></li>
                    <li><a href="${skillsPath}" class="nav-link">Skills</a></li>
                    <li><a href="${projectsPath}" class="nav-link${projectsActiveClass}">Projects</a></li>
                    <li><a href="${contactPath}" class="nav-link">Contact</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('site-header', SiteHeader);
