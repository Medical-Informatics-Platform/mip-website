import '../style.css'
import { marked } from 'marked'

// Fetch and render Federations
async function loadFederations() {
  try {
    const response = await fetch('content/federations.json');
    const federations = await response.json();
    const grid = document.getElementById('federations-grid');

    if (!grid) return;

    grid.innerHTML = federations.map(fed => `
      <div class="card-fed">
        <div class="card-header">
          <h3 class="card-title">${fed.title}</h3>
        </div>
        <div class="card-stats">
          ${fed.nbNodes ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg> ${fed.nbNodes}</span>` : ''}
          ${fed.nbRecords ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg> ${fed.nbRecords.toLocaleString()}</span>` : ''}
        </div>
        <p class="card-description">${fed.description}</p>
        <a href="${fed.link || '#'}" target="_blank" class="card-link">ACCESS FEDERATION</a>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading federations:', error);
  }
}

// Fetch and render Documentation text
async function loadDocumentation() {
  try {
    const response = await fetch('content/documentation.md');
    const text = await response.text();
    const docContainer = document.getElementById('doc-text');

    if (docContainer) {
      docContainer.innerHTML = marked.parse(text);
    }
  } catch (error) {
    console.error('Error loading documentation:', error);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadFederations();
  loadDocumentation();
});
