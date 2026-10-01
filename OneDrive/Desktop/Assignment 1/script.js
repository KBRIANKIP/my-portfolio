"use strict";

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = category !== "all" && !categories.includes(category);
    });
  });
});

const form = document.querySelector("#contact-form");
if (form) {
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      status.textContent = "Please complete your name, email, and message.";
      return;
    }
    if (!validEmail) {
      status.textContent = "Please enter a valid email address.";
      form.elements.email.focus();
      return;
    }

    status.textContent = "Your email app should open with the message ready to send.";
    const recipient = form.dataset.recipient;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
