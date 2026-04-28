import '../style.css'

function setupPreviewToggle() {
  const previewFrame = document.querySelector('.preview-frame');
  const previewToggle = document.querySelector('.expand-preview-btn');

  if (!previewFrame || !previewToggle) {
    return;
  }

  const setFullscreen = expanded => {
    previewFrame.classList.toggle('fullscreen', expanded);
    document.body.classList.toggle('fullscreen-active', expanded);
    previewToggle.setAttribute('aria-expanded', String(expanded));
    previewToggle.setAttribute('aria-label', expanded ? 'Close preview' : 'Expand preview');
  };

  previewToggle.addEventListener('click', () => {
    setFullscreen(!previewFrame.classList.contains('fullscreen'));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && previewFrame.classList.contains('fullscreen')) {
      setFullscreen(false);
    }
  });

  setFullscreen(false);
}

document.addEventListener('DOMContentLoaded', () => {
  setupPreviewToggle();
});
