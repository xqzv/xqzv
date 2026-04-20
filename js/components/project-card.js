class ProjectCard extends HTMLElement {
    sanitizeLink(rawLink) {
        const value = (rawLink || '').trim();
        if (!value) {
            return '#';
        }

        if (value.startsWith('#') || value.startsWith('/') || value.startsWith('./') || value.startsWith('../')) {
            return value;
        }

        try {
            const parsed = new URL(value, window.location.origin);
            return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol) ? parsed.href : '#';
        } catch {
            return '#';
        }
    }

    connectedCallback() {
        const title = this.getAttribute('heading') || this.getAttribute('title') || '';
        if (this.hasAttribute('title')) {
            this.removeAttribute('title');
        }
        const tagsRaw = this.getAttribute('tags') || '';
        const link = this.sanitizeLink(this.getAttribute('link'));
        const linkText = this.getAttribute('link-text') || 'View Case Study';
        const category = this.getAttribute('category') || '';

        const iconSlot = this.querySelector('[slot="icon"]');
        const descSlot = this.querySelector('[slot="description"]');

        const article = document.createElement('article');
        article.className = 'project-card lazy-load';
        if (category) {
            article.dataset.category = category;
        }

        const header = document.createElement('div');
        header.className = 'project-header';
        if (iconSlot) {
            const icon = iconSlot.cloneNode(true);
            if (icon.nodeType === Node.ELEMENT_NODE) {
                icon.removeAttribute('slot');
            }
            header.appendChild(icon);
        }

        const content = document.createElement('div');
        content.className = 'project-content';

        const meta = document.createElement('div');
        meta.className = 'project-meta';
        tagsRaw
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
            .forEach((tag) => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'project-tag';
                tagSpan.textContent = tag;
                meta.appendChild(tagSpan);
            });

        const heading = document.createElement('h3');
        heading.className = 'text-2xl mb-sm';
        heading.textContent = title;

        const description = document.createElement('div');
        description.className = 'text-secondary mb-lg';
        if (descSlot) {
            const fragment = document.createDocumentFragment();
            Array.from(descSlot.childNodes).forEach((node) => {
                fragment.appendChild(node.cloneNode(true));
            });
            description.appendChild(fragment);
        }

        const linkElement = document.createElement('a');
        linkElement.className = 'btn btn-secondary';
        linkElement.style.alignSelf = 'flex-start';
        linkElement.href = link;
        linkElement.textContent = linkText;

        content.appendChild(meta);
        content.appendChild(heading);
        content.appendChild(description);
        content.appendChild(linkElement);

        article.appendChild(header);
        article.appendChild(content);

        this.replaceChildren(article);
    }
}

customElements.define('custom-project-card', ProjectCard);
