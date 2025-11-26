// ================= SELECT ELEMENTS =================
const navLinks = document.querySelectorAll("nav a");

const sections = {
    home: document.getElementById("content"),
    services: document.getElementById("service-container"),
    skills: document.getElementById("skills-container"),
    education: document.getElementById("education-container"),
    experience: document.getElementById("exprience-container"),
    contact: document.getElementById("contact-container")
};

// ================= HIDE ALL SECTIONS =================
function hideAllSections() {
    Object.values(sections).forEach(section => {
        section.style.display = "none";
    });
}

// ================= REMOVE ACTIVE CLASS =================
function clearActiveLinks() {
    navLinks.forEach(link => link.classList.remove("active"));
}

// ================= NAVIGATION HANDLER =================
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        clearActiveLinks();
        hideAllSections();

        link.classList.add("active");

        switch (link.id) {
            case "array":
                sections.home.style.display = "flex";
                break;
            case "service":
                sections.services.style.display = "block";
                break;
            case "skills":
                sections.skills.style.display = "grid";
                break;
            case "education":
                sections.education.style.display = "block";
                break;
            case "exprience":
                sections.experience.style.display = "block";
                break;
            case "contact":
                sections.contact.style.display = "flex";
                break;
        }
    });
});

// ================= HOME DEFAULT =================
hideAllSections();
sections.home.style.display = "flex";

// ================= VIEW RESULT BUTTON =================
function viewhere() {
    const link = document.getElementById("here");
    link.style.display = "inline-block";
}
function openHireForm() {
    hideAllSections();
    clearActiveLinks();
    sections.contact.style.display = "flex";
    document.getElementById("hireForm").style.display = "block";
}
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            contactForm.reset();
            successMessage.style.display = "block";

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        }
    });
}
// ---------------- HELPER ----------------
async function handleFormSubmission(formId, successId, errorId, loadingId) {
    const form = document.getElementById(formId);
    const successMsg = document.getElementById(successId);
    const errorMsg = document.getElementById(errorId);
    const loadingMsg = document.getElementById(loadingId);

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        successMsg.style.display = "none";
        errorMsg.style.display = "none";
        loadingMsg.style.display = "block";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });

            loadingMsg.style.display = "none";

            if (response.ok) {
                form.reset();
                successMsg.style.display = "block";
                setTimeout(() => { successMsg.style.display = "none"; }, 5000);
            } else {
                errorMsg.style.display = "block";
            }
        } catch (err) {
            loadingMsg.style.display = "none";
            errorMsg.style.display = "block";
        }
    });
}

// ---------------- INIT FORMS ----------------
handleFormSubmission("contactForm", "contactSuccess", "contactError", "contactLoading");
handleFormSubmission("hireForm", "hireSuccess", "hireError", "hireLoading");

// ---------------- HIRE ME BUTTON ----------------
function openHireForm() {
    hideAllSections();
    clearActiveLinks();
    sections.contact.style.display = "flex";
    document.getElementById("hireForm").style.display = "block";
}

// --- Side Menu Logic ---
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    // Toggle the 'open' class to slide the menu in or out
    navLinks.classList.toggle('open');
});

// Optionally, close the menu when a link inside it is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});
// --- End Side Menu Logic ---
