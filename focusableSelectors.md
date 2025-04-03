<!-- from EmpowerAbilityLab.js No.236 -->

if (openBtn && modal && closeBtn) {
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');

    // set focus to the modal title
    const title = modal.querySelector('#modalTitle');
    if (title) {
      title.focus();
    }

    // gain focus on all focusable elements in modal
    const focusableElements = modal.querySelectorAll(focusableSelectors);
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });

    function closeModal() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      openBtn.focus(); // return focus to the button
    }

    closeBtn.addEventListener('click', closeModal);
  });
}