const BUSINESS_WHATSAPP = "2349037141652";

window.addEventListener("load", () => {
  document.getElementById("loader")?.classList.add("hide");
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

document.getElementById("bookingForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("bookingService").value;
  const location = document.getElementById("bookingLocation").value;
  const date = document.getElementById("bookingDate").value;
  const message = document.getElementById("bookingMessage").value.trim();

  const text =
    `Hello DavinciServices, I want to book a service.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Location: ${encodeURIComponent(location)}%0A` +
    `Date: ${encodeURIComponent(date || "Not specified")}%0A` +
    `Details: ${encodeURIComponent(message || "Not specified")}`;

  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${text}`, "_blank");
});