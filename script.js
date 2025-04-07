document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Menu Toggle
  const toggle = document.getElementById('menu-toggle');
  const dropdown = document.getElementById('dropdown-menu');
  
  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
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
