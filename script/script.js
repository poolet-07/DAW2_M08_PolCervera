// Tema claro/oscuro (recuerda la elección)
const root = document.documentElement;
const temaGuardado = (() => { try { return localStorage.getItem("tema"); } catch { return null; } })();
const oscuroSistema = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = temaGuardado || (oscuroSistema ? "dark" : "light");

document.querySelector(".theme-btn").addEventListener("click", () => {
  const nuevo = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nuevo;
  try { localStorage.setItem("tema", nuevo); } catch {}
});

// Menú móvil
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", abierto);
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Filtro de proyectos
const botones = document.querySelectorAll(".filters button");
const proyectos = document.querySelectorAll(".project");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const filtro = boton.dataset.filter;
    botones.forEach((b) => b.classList.toggle("on", b === boton));
    proyectos.forEach((p) => {
      p.hidden = filtro !== "todos" && p.dataset.type !== filtro;
    });
  });
});

// Marca en el menú la sección visible
const enlaces = document.querySelectorAll("nav a");
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      enlaces.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entrada.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main > section[id]").forEach((s) => observer.observe(s));

// Año del pie de página
document.getElementById("year").textContent = new Date().getFullYear();
