/* =====================================
   DAVINCISERVICES PERSONNEL

   To add someone, copy one complete entry.
   Use WhatsApp number format: 2348031234567
   Do not use +, spaces or the first zero.
===================================== */

const personnel = [

  // Lekki//
  {
    name: "John Laundry Services",
    city: "Lekki",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: "09037141652"
  },
   {
    name: "John Laundry Services",
    city: "Lekki",
    service: "Cleaning",
    address: "Add the real street address, Ajah",
    whatsapp: "07025483343"
  },
   {
    name: "John Laundry Services",
    city: "Lekki",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: "08045678101"
  },
     {
    name: "John Laundry Services",
    city: "Lekki",
    service: "Housemaid",
    address: "Add the real street address, Ajah",
    whatsapp: "08045678101"
  },
     {
    name: "John Laundry Services",
    city: "Lekki",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: "08045678101"
  },

  //ajah//
   {
    name: "John Laundry Services",
    city: "Ajah",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "Mary Cleaning Services",
    city: "Ajah",
    service: "Cleaning",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
{
    name: "Mary Cleaning Services",
    city: "Ajah",
    service: "Cleaning",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "Mary Cleaning Services",
    city: "Ajah",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
    {
    name: "Mary Cleaning Services",
    city: "Sangotedo",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
    {
    name: "Mary Cleaning Services",
    city: "Ajah",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
    {
    name: "Mary Cleaning Services",
    city: "Sangotedo",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
    {
    name: "Mary Cleaning Services",
    city: "Sangotedoh",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
    {
    name: "Mary Cleaning Services",
    city: "Sangotedo",
    service: "Laundry",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "David Errand Services",
    city: "Ajah",
    service: "Errands",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "Grace Housemaid Services",
    city: "Ajah",
    service: "Housemaid",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "Beauty Nails",
    city: "Ajah",
    service: "Nail Fixer",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  },
  {
    name: "Fresh Cut Barber",
    city: "Ajah",
    service: "Hair Barber",
    address: "Add the real street address, Ajah",
    whatsapp: ""
  }
  

  
// added

  

  // ADD MORE PEOPLE BELOW.
  // You can add personnel for any of the 10 cities.
];


/* =====================================
   DISPLAY PERSONNEL
   DO NOT EDIT BELOW THIS LINE
===================================== */

const params = new URLSearchParams(window.location.search);
const city = params.get("city") || "Ajah";

const cityTitle = document.getElementById("cityTitle");
const serviceTags = document.getElementById("serviceTags");
const personnelGrid = document.getElementById("personnelGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");

let selectedService = "Laundry";

cityTitle.textContent = city + ", Lagos";

function displayPersonnel() {
  personnelGrid.innerHTML = "";

  const found = personnel.filter(person =>
    person.city.toLowerCase() === city.toLowerCase() &&
    person.service === selectedService
  );

  resultsTitle.textContent = selectedService + " Personnel in " + city;
  resultsCount.textContent = found.length + " listing(s) found";

  if (found.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent =
      "No " + selectedService + " personnel have been added for " +
      city + " yet. Please check another service or visit later.";

    personnelGrid.appendChild(message);
    return;
  }

  found.forEach(person => {
    const card = document.createElement("article");
    card.className = "person-card";

    const service = document.createElement("span");
    service.className = "person-service";
    service.textContent = person.service;

    const name = document.createElement("h3");
    name.textContent = person.name;

    const address = document.createElement("p");
    address.textContent = "Address: " + person.address;

    const location = document.createElement("p");
    location.textContent = "Location: " + person.city + ", Lagos";

    const contact = document.createElement("a");
    const number = person.whatsapp.replace(/\D/g, "");

if (number.length >= 10 && number !== "ADD_REAL_NUMBER") {
  const internationalNumber = number.startsWith("0")
    ? "234" + number.slice(1)
    : number;

  contact.href = "https://wa.me/" + internationalNumber;
  contact.textContent = "Chat on WhatsApp";
  contact.className = "whatsapp-link";
  contact.target = "_blank";
} else {
  contact.textContent = "Add real WhatsApp number";
  contact.className = "whatsapp-link disabled";
}

    card.append(service, name, address, location, contact);
    personnelGrid.appendChild(card);
  });
}

serviceTags.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    selectedService = button.dataset.service;

    serviceTags.querySelectorAll("button").forEach(tag => {
      tag.classList.remove("active");
    });

    button.classList.add("active");
    displayPersonnel();
  });
});

const firstTag = serviceTags.querySelector('[data-service="Laundry"]');
firstTag.classList.add("active");

displayPersonnel();