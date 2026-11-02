const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = themeButton.querySelector("i");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.className = isDark ? "fa-regular fa-sun" : "fa-regular fa-moon";
});

// My Toolkit: show a description when a card is selected.
const skillDetails = {
  html: {
    title: "HTML5",
    icon: '<i class="fa-brands fa-html5"></i>',
    description: "HTML is the standard markup language used to structure the content of web pages.",
    usage: "It defines page elements such as headings, paragraphs, links, images, forms, and sections."
  },
  css: {
    title: "CSS3",
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    description: "CSS controls the visual presentation and layout of a website.",
    usage: "It is used to style colors, fonts, spacing, responsive layouts, animations, and page appearance."
  },
  javascript: {
    title: "JavaScript",
    icon: '<i class="fa-brands fa-js"></i>',
    description: "JavaScript is a programming language that adds behavior and interactivity to web pages.",
    usage: "It can respond to clicks, validate forms, update page content, open menus, and create interactive features."
  },
  bootstrap: {
    title: "Bootstrap",
    icon: '<i class="fa-brands fa-bootstrap"></i>',
    description: "Bootstrap is a front-end framework that provides ready-made styles and interface components.",
    usage: "It helps build responsive layouts and common elements such as navigation bars, buttons, cards, and grids."
  },
  git: {
    title: "Git",
    icon: '<i class="fa-brands fa-git-alt"></i>',
    description: "Git is a version control system used to track changes in source code.",
    usage: "It helps developers save versions of their work, compare changes, and collaborate on code."
  },
  github: {
    title: "GitHub",
    icon: '<i class="fa-brands fa-github"></i>',
    description: "GitHub is an online platform for hosting and collaborating on Git repositories.",
    usage: "It is used to store projects online, share code, work with branches, and collaborate with teammates."
  }
};

const modal = document.getElementById("skillModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalUsage = document.getElementById("modalUsage");
const modalUsageTitle = document.getElementById("modalUsageTitle");
const modalProjectTags = document.getElementById("modalProjectTags");
const closeModalButton = document.querySelector(".modal-close");

function openSkillModal(skillKey) {
  const skill = skillDetails[skillKey];
  if (!skill) return;

  modalIcon.innerHTML = skill.icon;
  modalTitle.textContent = skill.title;
  modalDescription.textContent = skill.description;
  modalUsage.textContent = skill.usage;
  modalUsageTitle.textContent = "What is it used for?";
  modalProjectTags.innerHTML = "";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  closeModalButton.focus();
}

function closeSkillModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("click", () => openSkillModal(card.dataset.skill));
});

// Projects: open the same animated details popup used by My Toolkit.
const projectDetails = {
  ml: {
    title: "Machine Learning Model Comparison",
    icon: '<i class="fa-solid fa-brain"></i>',
    description: "A college training project focused on analyzing a dataset, training and comparing machine learning models, and identifying the best-performing model based on evaluation results.",
    usage: "The work focused on the Machine Learning part of the training. Deep Learning is not listed because its use in this project has not been confirmed.",
    tags: ["Data Analysis", "Machine Learning", "Model Evaluation"]
  },
  dotnet: {
    title: "ASP.NET Core MVC Web Project",
    icon: '<i class="fa-solid fa-laptop-code"></i>',
    description: "A web development practice project created while learning the Model–View–Controller (MVC) architecture in ASP.NET Core.",
    usage: "The practice included exploring controllers, actions, and action results. It is presented as a learning project, not as a finished production application.",
    tags: ["C#", "ASP.NET Core MVC", "MVC Architecture"]
  }
};

function openProjectModal(projectKey) {
  const project = projectDetails[projectKey];
  if (!project) return;

  modalIcon.innerHTML = project.icon;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalUsageTitle.textContent = "Project overview";
  modalUsage.textContent = project.usage;
  modalProjectTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  closeModalButton.focus();
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card.dataset.project));
});

closeModalButton.addEventListener("click", closeSkillModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSkillModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) closeSkillModal();
});

// Contact form preview: it does not send or save messages without a backend/service.
const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNotice.textContent = "Thanks! The form layout is working, but message delivery has not been connected yet.";
  formNotice.classList.add("notice-highlight");
});

document.getElementById("year").textContent = new Date().getFullYear();
