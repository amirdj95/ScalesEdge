document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Menu Toggle with accessibility support
  const toggle = document.getElementById('menu-toggle');
  const dropdown = document.getElementById('dropdown-menu');

  function closeMenu() {
    dropdown.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      dropdown.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
    }
  }

  toggle.addEventListener('click', toggleMenu);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  // Copy email to clipboard with confirmation
  function copyEmail() {
    const email = "info@scalesedge.com";
    navigator.clipboard.writeText(email).then(() => {
      const confirmation = document.getElementById("copy-confirmation");
      confirmation.style.display = "inline";
      setTimeout(() => {
        confirmation.style.display = "none";
      }, 2000);
    });
  }
  
  // Attach the copyEmail function to the button for email copy
  const copyButton = document.querySelector('button[onclick="copyEmail()"]');
  if (copyButton) {
    copyButton.addEventListener('click', copyEmail);
  }

  // Form submission and confirmation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      status.style.display = "block";
      setTimeout(() => {
        status.style.display = "none";
      }, 4000);
    }
  });
});
