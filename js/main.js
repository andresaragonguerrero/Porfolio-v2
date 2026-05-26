// Mostrar sidebar
document.addEventListener("DOMContentLoaded", () => {
    const buttonMenu = document.querySelector(".button-menu");
    const sidebar = document.querySelector(".header-sidebar");
    const buttonClose = document.querySelector(".button-close-menu");

    // Mostrar sidebar
    buttonMenu.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    // Ocultar sidebar
    buttonClose.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

// Cambiar tema
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (event.target.closest(".button-theme")) {
            document.documentElement.classList.toggle("dark");

            const isDark = document.documentElement.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    }
});

// Cambiar de color el header al llegar al main
const header = document.querySelector('.header');
const sentinel = document.querySelector('.header-sentinel');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            header.classList.add('covering');
        } else {
            header.classList.remove('covering');
        }
    },
    {
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px`
    }
);

observer.observe(sentinel);

// acordeón para mostrar los detalles de los proyectos
const toggleDetailsBtns = document.querySelectorAll('.toggle-details-btn');
toggleDetailsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const detailsContainer = btn.closest('.item-project').querySelector('.details-container');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        // Alternar visibilidad
        if (isExpanded) {
            detailsContainer.style.display = 'none';
            btn.textContent = 'Ver más detalles';
            btn.setAttribute('aria-expanded', 'false');
        } else {
            detailsContainer.style.display = 'block';
            btn.textContent = 'Ver menos';
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// animación para la aparición de los artículos al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".article");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); 
                }
            });
        },
        {
            threshold: 0.2, 
            rootMargin: "0px 0px -50px 0px"
        }
    );

    articles.forEach(article => {
        observer.observe(article);
    });
});
