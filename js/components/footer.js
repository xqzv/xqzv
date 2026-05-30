class SiteFooter extends HTMLElement {
    connectedCallback() {
        // Automatically grab the current year for the copyright
        const year = new Date().getFullYear();
        
        this.innerHTML = `
            <footer class="py-xl bg-soft" style="border-top: 1px solid var(--border-color); transition: background-color 0.3s ease, border-color 0.3s ease;">
                <div class="container">
                    <div class="text-center">
                        <p class="text-secondary">&copy; <span>${year}</span> Mark Kuriy. All rights reserved.</p>
                        <p class="text-sm text-tertiary mt-sm">
                            Simplicity is the ultimate sophistication
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Define the new custom element
customElements.define('site-footer', SiteFooter);