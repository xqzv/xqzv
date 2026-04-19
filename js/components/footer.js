class SiteFooter extends HTMLElement {
    connectedCallback() {
        // Automatically grab the current year for the copyright
        const year = new Date().getFullYear();
        
        this.innerHTML = `
            <footer class="py-xl bg-deep-charcoal text-white">
                <div class="container">
                    <div class="text-center">
                        <p class="text-secondary">&copy; <span id="current-year">${year}</span> Mark Kuriy. All rights reserved.</p>
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