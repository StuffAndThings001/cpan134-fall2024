document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (event) => {
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput.value.includes("@")) {
          alert("Please enter a valid email address.");
          event.preventDefault();
        }
      });
    }
  });
  