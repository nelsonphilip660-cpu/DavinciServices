/* ==========================================
   DAVINCISERVICES DIRECTORY EDITOR

   Change the name, image, location and link.
   Copy a complete listing to add another one.

   IMPORTANT:
   Your link must begin with https:// or http://
========================================== */

const directoryListings = {

    // VETERINARY SERVICES
    veterinary: [
        {
            name: "Pets haven veterinary",
            location: "Ajah",
            image: "vet1.jpg",
            link: "https://www.petshavenvet.com/"
        },
        {
            name: "petmedplusveterinary",
            location: "Lekki",
            image: "vet.jpg",
            link: "https://www.petmedplusveterinary.com/"
        },
          {
            name: "Shalom Veterinary Clinic",
            location: "Ajah",
            image: "vet2.jpg",
            link: "https://shalomvetclinic.com.ng/"
        },
    ],

    


    // DENTIST
    dentist: [
        {
            name: "Hilton Dental Clinic",
            location: "Lekki",
            image: "Dentist.jpg",
            link: "https://hiltondental.com.ng/"
        },
        {
            name: "Schubbs Dental Clinic",
            location: "Ikoyi",
            image: "dentist1.jpg",
            link: "https://www.schubbsdental.com/"
        },
          {
            name: "Zoom Exclusive Dental Clinic",
            location: "Lekki",
            image: "dentist2.jpg",
            link: "https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwi4y8artuSXAxXTllAGHRCkNjAYACICCAEQABoCZGc&co=1&ase=2&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXCbB83CNFSnkjVG32kagqGO9xvR6IFy3oAI54GCzPz3WWKhDuHFL6xoCZ4EQAvD_BwE&cid=CAASuwHkaKU80X9Bm4l-eWBO5ArQTh0I1aij965nm3rbknWf9hqakv7jL1_l7ja9keAiwFCEshaDxz9TzLYbdseP0wy56DLxoc4hn3QLStrFYGloLVIcCnWxZTJoffO2f4pTf0wuLCuD2g8SSNbR5LUA47785sO-yA2Sh7igA7GXxjSHB970eh7ZU0UZNeWuJF1gth9UGL8QwpSuqT57sesqvQu3Fjskx7uRmV6Z6gIO6eZ9o2ra7shsGnBagM97&cce=2&category=acrcp_v1_32&sig=AOD64_3wtnlXP-pzU0v2reBU5lMOICg2AA&q&nis=4&adurl=https://zoomexclusive.com?gad_source%3D1%26gad_campaignid%3D24013878427%26gbraid%3D0AAAABBsAVmRY_9NpDfEzBK6SKspzECXC0%26gclid%3DCjwKCAjwo5bXBhAEEiwAkgpgXCbB83CNFSnkjVG32kagqGO9xvR6IFy3oAI54GCzPz3WWKhDuHFL6xoCZ4EQAvD_BwE&ved=2ahUKEwiBtsCrtuSXAxX6W0EAHVwACX8Q0Qx6BAgcEAQ"
        },
          {
            name: "Smile Best Dental Clinic",
            location: "Ikeja",
            image: "dentist3.webp",
            link: "https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwiAlriEt-SXAxWelVAGHYdvGZIYACICCAEQAxoCZGc&co=1&ase=2&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXFrG3pqWexNpjxruk8WAl5u0GcyZrf1MGF-_NPykwp0HVR532SAaDxoCZn8QAvD_BwE&cid=CAASuwHkaAFsF87_Ijalz-Vj7BKs5qL_cwPrVH3EviHn9FMVc9gh_6ko5k7zCgx1ofhkw2JAZxPsOHh34k-VqyfxG75bJel4Q-GHChZnTvWvkiP9iJxsYJYgXtdYGlUxg41IABkNKqbQj7TnjVG72Ejsa-lD-6umwAEP8M42OehBB37TvXyFAot9lI9yQvglIEwGVmGS5k_zVNCC2VP7OF4mep-znEdQr8C5cvmOwHgM00mWIPpTgZFsN1OMpEvu&cce=2&category=acrcp_v1_32&sig=AOD64_2Z1SwhCOpIvOdnIqNN9ZVQgz1gbA&q&nis=4&adurl=https://business.google.com/v/smile-best-dental-clinic/012471873876353489617/3454/_?caid%3D21592594952%26agid%3D185272138720%26gclid%3DCjwKCAjwo5bXBhAEEiwAkgpgXFrG3pqWexNpjxruk8WAl5u0GcyZrf1MGF-_NPykwp0HVR532SAaDxoCZn8QAvD_BwE%26gad_source%3D1%26gad_campaignid%3D21592594952%26gbraid%3D0AAAAA9Z95IekEsibiyUB2Gh72_ef4QHEO&ved=2ahUKEwiw37GEt-SXAxUpQEEAHQeINBUQ0Qx6BAgbEAs"
        }
    ],

    // HOSPITAL
    hospital: [
        {
            name: "Genesis Specialist Hospital",
            location: "Ikeja",
            image: "hos.jpg",
            link: "http://www.genesishospitalng.com/"
        },
        {
            name: "Queensway Hospital",
            location: "Ajah",
            image: "hos1.jpg",
            link: "http://www.instagram.com/queenswayhosp"
        },
         {
            name: "Evercare Hospital Lekki",
            location: "Lekki",
            image: "hos2.jpg",
            link: "http://www.evercare.ng/"
        },
         {
            name: "Kelina Hospital Lagos",
            location: "Victoria Island",
            image: "hos3.jpg",
            link: "https://www.kelinahospital.com/lagos"
        },
         {
            name: "Queensway Hospital",
            location: "Maryland",
            image: "hos4.jpg",
            link: "http://starcare.hospital/"
        }
    ],

    // TRANSPORTATION SERVICES
    transportation: [
        {
            name: "GIG",
            location: "Ajah",
            image: "trans.jpg",
            link: "https://gigm.com/"
        },
        {
            name: "Libra",
            location: "Ajah",
            image: "trans1.jpg",
            link: "https://www.libmot.com/"
        },
          {
            name: "GUO",
            location: "Ajah",
            image: "trans2.jpg",
            link: "https://guotransport.com/"
        },
          {
            name: "Peace Mass Transit",
            location: "Ajah",
            image: "trans3.jpg",
            link: "https://pmt.ng/"
        }
    ]

};


/* ==========================================
   DO NOT EDIT BELOW THIS LINE
========================================== */

const params = new URLSearchParams(window.location.search);
const category = params.get("type") || "veterinary";

const titles = {
    veterinary: "Veterinary Services",
    dentist: "Dentist Services",
    hospital: "Hospital Services",
    transportation: "Transportation Services"
};

const pageTitle = document.getElementById("pageTitle");
const listingGrid = document.getElementById("listingGrid");
const locationFilter = document.getElementById("locationFilter");

const selectedListings = directoryListings[category] || [];

if (pageTitle) {
    pageTitle.textContent = titles[category] || "Service Listings";
}

function showListings(location = "all") {
    listingGrid.innerHTML = "";

    const results = selectedListings.filter(item =>
        location === "all" ||
        item.location.toLowerCase() === location.toLowerCase()
    );

    if (results.length === 0) {
        listingGrid.innerHTML =
            '<p class="empty-message">No listings found. Try another location.</p>';
        return;
    }

    results.forEach(item => {
        const card = document.createElement("a");
        card.className = "listing-card";

        // Only allow normal HTTP or HTTPS website links.
        let safeLink;

        try {
            const parsedLink = new URL(item.link);

            if (!["http:", "https:"].includes(parsedLink.protocol)) {
                throw new Error("Invalid link");
            }

            safeLink = parsedLink.href;
        } catch {
            safeLink = "#";
        }

        card.href = safeLink;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        image.loading = "lazy";

        const info = document.createElement("div");
        info.className = "listing-info";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const place = document.createElement("p");
        place.textContent = "Location: " + item.location;

        const open = document.createElement("span");
        open.className = "open-label";
        open.textContent = "Visit Website →";

        info.append(name, place, open);
        card.append(image, info);
        listingGrid.appendChild(card);
    });
}

locationFilter.addEventListener("change", () => {
    showListings(locationFilter.value);
});

showListings();