/**
 * PORTFOLIO JAVASCRIPT - ABDELLAH BENTAOUIT
 * Typewriter effect, multilingual support (ES/EN), mobile nav, contact form handling
 */

// Multilingual dictionary
const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_exp: "Experiencia",
    nav_edu: "Formación",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    cv_download: "Descargar CV",
    status_text: "Disponible para prácticas y oportunidades laborales",
    hero_hello: "Hola, soy",
    hero_desc: "Estudiante de 2º año de <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> con amplia experiencia en programación de software, desarrollo web y creación de contenido audiovisual profesional.",
    contact_me: "Contáctame",
    view_cv: "Ver CV Completo",
    badge_dam: "2º Año en curso",
    badge_exp: "Synthetic Intelligence Agency",
    tag_about: "Perfil Profesional",
    title_about: "Sobre Mí",
    about_highlight: "\"Responsable, creativo y con pasión por resolver problemas mediante tecnología moderna y soluciones visuales de alto impacto.\"",
    about_p1: "Soy estudiante de segundo año de <strong>Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> en el <strong>IES Las Salinas</strong>. Cuento con una sólida formación en fundamentos de ingeniería de software, arquitectura orientada a objetos (POO), diseño y gestión de bases de datos relacionales, así como desarrollo web completo.",
    about_p2: "Además del desarrollo de código, poseo habilidades destacadas en <strong>fotografía, edición y montaje de vídeo profesional</strong> y creación de contenido digital, lo que me permite aportar una visión integral tanto a nivel técnico como estético y de experiencia de usuario (UI/UX).",
    stat_course: "Año DAM Actual",
    stat_commitment: "Compromiso & Aprendizaje",
    stat_languages: "Idiomas Dominados",
    title_languages: "Idiomas",
    lang_native: "Nativo",
    lang_advanced: "Avanzado",
    lang_basic: "Básico",
    title_soft_skills: "Competencias Personales",
    soft_learning: "Capacidad de aprendizaje",
    soft_creativity: "Creatividad",
    soft_problem: "Resolución de problemas",
    soft_team: "Trabajo en equipo",
    soft_org: "Organización",
    soft_detail: "Atención al detalle",
    soft_adapt: "Adaptabilidad",
    tag_skills: "Conocimientos Técnicos",
    title_skills: "Habilidades & Tecnologías",
    cat_dev_title: "Desarrollo de Software & POO",
    cat_dev_sub: "Arquitectura, lógica y estructura",
    skill_java_desc: "Estructuras de datos, sintaxis moderna, clases y colecciones",
    skill_poo_desc: "Encapsulamiento, herencia, polimorfismo y abstracción limpia",
    skill_debug_desc: "Análisis de errores, debugging avanzado y optimización de código",
    skill_apps_desc: "Aplicaciones multiplataforma desktop y mobile (DAM)",
    cat_web_title: "Desarrollo Web & Bases de Datos",
    cat_web_sub: "Web moderna, interfaces y persistencia",
    skill_html_desc: "Diseño web responsivo, layouts Flexbox, Grid y animaciones",
    skill_sql_desc: "Consultas avanzadas, joins, procedimientos y diseño de esquemas",
    skill_data_desc: "Diagramas ER, normalización e integridad relacional",
    skill_ide_desc: "VS Code, IntelliJ IDEA, Eclipse, Git y herramientas de control",
    cat_media_title: "Audiovisual & Creación Digital",
    cat_media_sub: "Contenido multimedia, fotografía y vídeo",
    skill_video_desc: "Postproducción, ritmo narrativo, transiciones y corrección",
    skill_rec_desc: "Manejo de cámaras, iluminación, audio e iluminación técnica",
    skill_photo_desc: "Encuadre visual, colorimetría y estética para marcas",
    skill_edit_desc: "Edición fotográfica, creación de assets para webs y redes",
    tag_exp: "Trayectoria",
    title_exp: "Experiencia Laboral",
    exp1_role: "Desarrollador Web",
    exp1_duration: "6 Meses",
    exp1_desc: "Desarrollo y mantenimiento técnico de plataformas y páginas web corporativas. Colaboración activa en proyectos web de la agencia y creación de contenido digital y recursos multimedia de alto impacto.",
    exp2_role: "Desarrollador Web Freelance",
    exp2_company: "Proyectos Independientes",
    exp2_status: "Freelance",
    exp2_desc: "Creación y modificación de páginas web comerciales personalizadas para clientes de sectores locales, incluyendo <strong>restaurantes y barberías</strong>. Diseño a medida, adaptación a dispositivos móviles y actualización continua de contenido web.",
    tag_edu: "Estudios",
    title_edu: "Formación Académica",
    edu_dam_tag: "En Curso",
    edu_dam_title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    edu_dam_details: "Formación avanzada en programación orientada a objetos (Java), diseño e implementación de bases de datos relacionales, acceso a datos, interfaces de usuario y desarrollo de software multiplataforma.",
    edu_bach_tag: "Homologado",
    edu_bach_title: "Bachillerato Homologado",
    edu_bach_details: "Título oficial de bachillerato homologado con éxito, que otorga la base formativa y el acceso directo al ciclo formativo de grado superior en tecnología.",
    tag_proj: "Trabajos Realizados",
    title_proj: "Proyectos Destacados",
    proj1_badge: "Web Comercial",
    proj1_title: "Web para Restaurantes & Gastronomía",
    proj1_desc: "Diseño y desarrollo de sitios web dinámicos con carta digital interactiva, sistema de contacto directo por WhatsApp, reservas y optimización para visualización móvil fluida.",
    proj2_badge: "Web de Servicios",
    proj2_title: "Sitio Web para Barberías & Salones",
    proj2_desc: "Plataforma web con estética cuidada, catálogo de cortes de cabello, tarifas transparentes, ubicación en Google Maps e integración de citas directas para clientes locales.",
    proj3_badge: "Software DAM",
    proj3_title: "Gestión de Datos & Aplicaciones Java",
    proj3_desc: "Proyectos académicos y personales aplicando programación orientada a objetos (POO), patrones limpios de arquitectura y conexión con bases de datos SQL relacionales.",
    tag_contact: "Contacto",
    title_contact: "Hablemos de Nuevos Proyectos",
    contact_label_email: "Correo Electrónico",
    contact_sub_email: "Respuesta rápida",
    contact_label_phone: "Teléfono / WhatsApp",
    contact_sub_phone: "Llamadas y mensajes",
    contact_label_loc: "Ubicación",
    contact_sub_loc: "Disponibilidad presencial o remota",
    contact_cv_label: "Curriculum Vitae",
    contact_cv_btn: "Descargar Archivo PDF",
    contact_cv_sub: "Documento oficial para prácticas",
    form_title: "Enviar un mensaje directo",
    form_sub: "¿Tienes una oferta de prácticas, proyecto freelance o propuesta laboral? Escríbeme directamente.",
    form_name: "Tu Nombre",
    form_email: "Tu Correo Electrónico",
    form_subject: "Asunto",
    form_message: "Mensaje",
    form_submit: "Enviar Mensaje"
  },
  en: {
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_edu: "Education",
    nav_projects: "Projects",
    nav_contact: "Contact",
    cv_download: "Download CV",
    status_text: "Available for internships and work opportunities",
    hero_hello: "Hello, I am",
    hero_desc: "2nd-year student of <strong>Multiplatform Applications Development (DAM)</strong> with solid experience in software programming, web development, and professional audiovisual content creation.",
    contact_me: "Contact Me",
    view_cv: "View Full CV",
    badge_dam: "2nd Year in progress",
    badge_exp: "Synthetic Intelligence Agency",
    tag_about: "Professional Profile",
    title_about: "About Me",
    about_highlight: "\"Responsible, creative, and passionate about solving problems using modern technology and high-impact visual solutions.\"",
    about_p1: "I am a second-year student of the <strong>Higher Degree in Multiplatform Applications Development (DAM)</strong> at <strong>IES Las Salinas</strong>. I have a strong foundation in software engineering, Object-Oriented Programming (OOP), relational database design and management, as well as full-stack web development.",
    about_p2: "Beyond writing software, I have proven skills in <strong>photography, video editing, professional montage</strong>, and digital media production, bringing a well-rounded technical and UI/UX aesthetic perspective to every project.",
    stat_course: "Current DAM Year",
    stat_commitment: "Commitment & Learning",
    stat_languages: "Languages Mastered",
    title_languages: "Languages",
    lang_native: "Native",
    lang_advanced: "Advanced",
    lang_basic: "Basic",
    title_soft_skills: "Soft Skills",
    soft_learning: "Learning agility",
    soft_creativity: "Creativity",
    soft_problem: "Problem solving",
    soft_team: "Teamwork",
    soft_org: "Organization",
    soft_detail: "Attention to detail",
    soft_adapt: "Adaptability",
    tag_skills: "Technical Knowledge",
    title_skills: "Skills & Technologies",
    cat_dev_title: "Software Development & OOP",
    cat_dev_sub: "Architecture, logic, and structure",
    skill_java_desc: "Data structures, modern syntax, classes, and collections",
    skill_poo_desc: "Encapsulation, inheritance, polymorphism, and clean abstraction",
    skill_debug_desc: "Error analysis, advanced debugging, and code optimization",
    skill_apps_desc: "Cross-platform desktop and mobile software (DAM)",
    cat_web_title: "Web Development & Databases",
    cat_web_sub: "Modern web, interfaces, and persistence",
    skill_html_desc: "Responsive web design, Flexbox, CSS Grid layouts, and animations",
    skill_sql_desc: "Advanced SQL queries, joins, stored procedures, schema design",
    skill_data_desc: "ER diagrams, database normalization, relational integrity",
    skill_ide_desc: "VS Code, IntelliJ IDEA, Eclipse, Git, version control workflows",
    cat_media_title: "Audiovisual & Digital Creation",
    cat_media_sub: "Multimedia content, photo, and video",
    skill_video_desc: "Post-production, narrative pacing, color correction, transitions",
    skill_rec_desc: "Camera operation, technical lighting, clear audio capture",
    skill_photo_desc: "Visual composition, framing, brand aesthetics",
    skill_edit_desc: "Photo retouching, asset creation for web and social channels",
    tag_exp: "Career Path",
    title_exp: "Work Experience",
    exp1_role: "Web Developer",
    exp1_duration: "6 Months",
    exp1_desc: "Technical development and maintenance of company web platforms. Active team collaboration on web initiatives and creation of high-impact digital multimedia assets.",
    exp2_role: "Freelance Web Developer",
    exp2_company: "Independent Projects",
    exp2_status: "Freelance",
    exp2_desc: "Creation and customization of commercial websites for local business clients, including <strong>restaurants and barbershops</strong>. Responsive mobile layouts and continuous content management.",
    tag_edu: "Studies",
    title_edu: "Academic Background",
    edu_dam_tag: "In Progress",
    edu_dam_title: "Higher Vocational Degree in Multiplatform Application Development (DAM)",
    edu_dam_details: "Advanced curriculum covering Java OOP, relational database architecture and SQL management, data access layers, GUI interfaces, and cross-platform application engineering.",
    edu_bach_tag: "Officially Accredited",
    edu_bach_title: "Accredited High School Diploma",
    edu_bach_details: "Officially accredited high school education providing full eligibility and direct academic entry to higher technological degrees in Spain.",
    tag_proj: "Portfolio Works",
    title_proj: "Featured Projects",
    proj1_badge: "Commercial Web",
    proj1_title: "Restaurant & Gastronomy Website",
    proj1_desc: "Interactive website featuring dynamic digital menu, direct WhatsApp ordering/reservations, and seamless mobile responsiveness.",
    proj2_badge: "Service Web",
    proj2_title: "Barbershop & Salon Website",
    proj2_desc: "Modern presentation website with haircut lookbooks, transparent pricing, Google Maps integration, and quick booking access.",
    proj3_badge: "DAM Software",
    proj3_title: "Database Management & Java Apps",
    proj3_desc: "Academic and personal software projects implementing OOP design patterns and robust SQL database persistence.",
    tag_contact: "Contact",
    title_contact: "Let's Talk About New Opportunities",
    contact_label_email: "Email Address",
    contact_sub_email: "Fast response",
    contact_label_phone: "Phone / WhatsApp",
    contact_sub_phone: "Calls and messaging",
    contact_label_loc: "Location",
    contact_sub_loc: "Available for on-site or remote work",
    contact_cv_label: "Curriculum Vitae",
    contact_cv_btn: "Download PDF Resume",
    contact_cv_sub: "Official resume for internships",
    form_title: "Send a Direct Message",
    form_sub: "Have an internship offer, freelance project, or job opportunity? Contact me right away.",
    form_name: "Your Name",
    form_email: "Your Email Address",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message"
  }
};

let currentLang = 'es';

// Typewriter roles
const rolesEs = [
  "Desarrollador de Software",
  "Estudiante DAM (2º Año)",
  "Desarrollador Web",
  "Creador de Contenido Audiovisual"
];

const rolesEn = [
  "Software Developer",
  "DAM Student (2nd Year)",
  "Web Developer",
  "Audiovisual Content Creator"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimer = null;

function typeWriter() {
  const roles = currentLang === 'es' ? rolesEs : rolesEn;
  const currentRole = roles[roleIndex % roles.length];
  const el = document.getElementById('typewriter');
  if (!el) return;

  if (isDeleting) {
    el.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex++;
    typingSpeed = 500; // Pause before next word
  }

  clearTimeout(typewriterTimer);
  typewriterTimer = setTimeout(typeWriter, typingSpeed);
}

// Language switch function
function setLanguage(lang) {
  currentLang = lang;
  
  // Update toggle button states
  document.getElementById('btnEs').classList.toggle('active', lang === 'es');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  
  // Update HTML elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Re-trigger typewriter with new language
  charIndex = 0;
  isDeleting = false;
  clearTimeout(typewriterTimer);
  typeWriter();
  
  // Re-create icons if any were re-rendered
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navbar scroll styling
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Contact form handler - Web3Forms Direct Email Delivery
async function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');
  const submitBtnSpan = submitBtn ? submitBtn.querySelector('span') : null;
  const originalBtnText = submitBtnSpan ? submitBtnSpan.textContent : '';

  if (feedback) {
    feedback.className = 'form-feedback hidden';
  }

  // Disable button and show loading status
  if (submitBtn) submitBtn.disabled = true;
  if (submitBtnSpan) {
    submitBtnSpan.textContent = currentLang === 'es' ? 'Enviando mensaje...' : 'Sending message...';
  }

  const formData = new FormData(form);
  const jsonObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(jsonObject)
    });

    const result = await response.json();

    if (response.status === 200 && result.success) {
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = currentLang === 'es'
          ? '✅ ¡Mensaje enviado con éxito! Te responderé lo antes posible.'
          : '✅ Message sent successfully! I will get back to you as soon as possible.';
      }
      form.reset();
    } else {
      throw new Error(result.message || 'Error al enviar');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    if (feedback) {
      feedback.className = 'form-feedback error';
      feedback.textContent = currentLang === 'es'
        ? '❌ Hubo un problema al enviar el mensaje. Por favor, escríbeme directamente a ab.bentaoit@gmail.com'
        : '❌ An error occurred while sending. Please contact me directly at ab.bentaoit@gmail.com';
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (submitBtnSpan) submitBtnSpan.textContent = originalBtnText;
  }
}

// Start typewriter on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  initBackgroundConstellation();
  init3DCardTilt();
});

/* ==========================================================================
   INTERACTIVE CYBER CONSTELLATION BACKGROUND
   Efecto limpio y profesional: estrellas conectadas en el fondo.
   Va por DETRÁS de todo el contenido, el texto y las tarjetas.
   Nunca tapa las letras ni molesta la lectura.
   ========================================================================== */
function initBackgroundConstellation() {
  const canvas = document.getElementById('bgStarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = Math.min(Math.floor(window.innerWidth / 16), 65);

  let mouse = {
    x: null,
    y: null,
    radius: 160
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Star {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 0.8;
      this.color = Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(99, 102, 241,';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} 0.55)`;
      ctx.fill();
    }

    update() {
      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Soft mouse gravity deflection in background
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }

      this.x += this.vx;
      this.y += this.vy;
      this.draw();
    }
  }

  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

  function animateStars() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();

      // Connect nearby stars with faint glowing lines
      for (let j = i + 1; j < stars.length; j++) {
        let dx = stars[i].x - stars[j].x;
        let dy = stars[i].y - stars[j].y;
        let dist = Math.hypot(dx, dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }

      // Connect star to mouse position subtly when near
      if (mouse.x !== null && mouse.y !== null) {
        let dx = stars[i].x - mouse.x;
        let dy = stars[i].y - mouse.y;
        let dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.28 * (1 - dist / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateStars);
  }

  animateStars();
}

/* ==========================================================================
   3D TILT EFFECT & INTERACTIVE CARD GLOW (HOVER PERSPECTIVE)
   ========================================================================== */
function init3DCardTilt() {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return; // Disable on touch devices for fluid native scrolling
  }

  const tiltCards = document.querySelectorAll(
    '.project-card, .skill-category-card, .edu-card, .timeline-content, .contact-card, .contact-form-wrapper, .about-card'
  );

  tiltCards.forEach(card => {
    // Add inner dynamic glow layer
    let glow = card.querySelector('.interactive-card-glow');
    if (!glow) {
      glow = document.createElement('div');
      glow.className = 'interactive-card-glow';
      card.appendChild(glow);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle professional 3D tilt angles (max ~4deg)
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}
