document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formStatus = document.getElementById('form-status');
  
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
  
      if (response.ok) {
        formStatus.innerHTML = "<p>Thank you! Your message has been sent.</p>";
        formStatus.style.opacity = "1";  
        form.reset();
  

        setTimeout(() => {
          formStatus.style.opacity = "0"; 
        }, 5000);
      } else {
        formStatus.innerHTML = "<p>There was a problem submitting your form.</p>";
      }
    } catch (error) {
      formStatus.innerHTML = "There was a problem submitting your form.</p>";
    }
  });