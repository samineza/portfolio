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

        // Hide hire form if open
        const hireForm = document.getElementById("hireForm");
        if (hireForm) hireForm.style.display = "none";
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

// ================= HIRE FORM =================
function openHireForm() {
    hideAllSections();
    clearActiveLinks();
    sections.contact.style.display = "flex";
    document.getElementById("hireForm").style.display = "block";
}

// ================= FORM HANDLER FUNCTION =================
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

// ================= INIT FORMS =================
handleFormSubmission("contactForm", "contactSuccess", "contactError", "contactLoading");
handleFormSubmission("hireForm", "hireSuccess", "hireError", "hireLoading");

// ================= MOBILE MENU =================
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
        }
    });
});
