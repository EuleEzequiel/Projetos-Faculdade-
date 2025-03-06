document.addEventListener("DOMContentLoaded", function () {
    // Seleciona elementos importantes
    const logo = document.getElementById("logo");
    const header = document.querySelector("header");
    const paragraphs = document.querySelectorAll("p, li");
    const titles = document.querySelectorAll("h1, h2");

    // Efeito de zoom e pulso na logo ao passar o mouse
    logo.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
        this.style.transition = "transform 0.3s ease-in-out";
        this.style.animation = "pulse 0.5s infinite alternate";
    });

    logo.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.animation = "none";
    });

    // Mudança de cor gradiente no menu ao passar o mouse nos links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseover', function () {
            header.style.background = "linear-gradient(90deg, #5f6020, #000000)";
        });

        link.addEventListener('mouseout', function () {
            header.style.background = "#000000fd"; // Volta ao normal
        });
    });

    // Adiciona sombra ao menu ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // Efeito de fade-in nos parágrafos e listas ao rolar a página
    function fadeInElements() {
        paragraphs.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });

        titles.forEach(title => {
            const rect = title.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                title.style.opacity = "1";
                title.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInElements);

    // Inicializa os elementos com opacidade 0 para o efeito de fade-in
    paragraphs.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    titles.forEach(title => {
        title.style.opacity = "0";
        title.style.transform = "translateY(-20px)";
        title.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Efeito de digitação automática no título principal
    function typeWriterEffect(element, text, speed) {
        let i = 0;
        element.innerHTML = ""; // Limpa o texto inicial
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeWriterEffect(document.querySelector("#logo"), "Front End 🚀", 100);
});
