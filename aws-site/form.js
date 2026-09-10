document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const endpoint = window.TBI_CONFIG?.contactApiUrl;
  if (!endpoint || endpoint.includes("__CONTACT_API_URL__")) {
    status.textContent = "The contact form is being configured. Please call (407) 310-3300.";
    return;
  }

  submitButton.disabled = true;
  status.textContent = "Sending…";
  const values = Object.fromEntries(new FormData(form).entries());
  values.consent = values.consent === "on";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    if (!response.ok) throw new Error("Request failed");
    form.reset();
    status.textContent = "Thanks—your request has been received.";
  } catch {
    status.textContent = "We couldn't send your request. Please call (407) 310-3300.";
  } finally {
    submitButton.disabled = false;
  }
});
