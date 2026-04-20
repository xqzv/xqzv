class ProjectCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('heading') || this.getAttribute('title') || '';
        if (this.hasAttribute('title')) {
            this.removeAttribute('title');
        }
        const tagsRaw = this.getAttribute('tags') || '';
        const link = this.getAttribute('link') || '#';
        const linkText = this.getAttribute('link-text') || 'View Case Study';
        const category = this.getAttribute('category') || '';
        
        // Parse slotted content before replacing innerHTML
        const iconSlot = this.querySelector('[slot="icon"]');
        const descSlot = this.querySelector('[slot="description"]');
        
        const iconHtml = iconSlot ? iconSlot.outerHTML : '';
        const descHtml = descSlot ? descSlot.innerHTML.trim() : '';
        
        const tagsHtml = tagsRaw.split(',').filter(t => t.trim() !== '').map(t => 
            `<span class="project-tag">${t.trim()}</span>`
        ).join('');
        
        const categoryAttr = category ? `data-category="${category}"` : '';

        this.innerHTML = `
            <article class="project-card lazy-load" ${categoryAttr}>
                <div class="project-header">
                    ${iconHtml}
                </div>
                <div class="project-content">
                    <div class="project-meta">
                        ${tagsHtml}
                    </div>
                    <h3 class="text-2xl mb-sm">${title}</h3>
                    <p class="text-secondary mb-lg">
                        ${descHtml}
                    </p>
                    <a href="${link}" class="btn btn-secondary" style="align-self: flex-start;">
                        ${linkText}
                    </a>
                </div>
            </article>
        `;
    }
}

customElements.define('custom-project-card', ProjectCard);