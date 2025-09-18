document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const form = document.getElementById("form"); // Formulario
  const welcomeScreen = document.getElementById("form-section"); // Pantalla inicial
  const mainScreen = document.getElementById("main-screen"); // Segunda pantalla
  const letter = document.getElementById("letter"); // Pastel
  const openLetterBtn = document.getElementById("open-letter"); // Botón para abrir carta
  const card = document.getElementById("card"); // Contenedor de carta
  const closeCardBtn = document.getElementById("close-card"); // Botón cerrar carta

  // Al enviar formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const colorFav = document.getElementById("color").value.toLowerCase();

    // Ocultar formulario y mostrar segunda pantalla
    welcomeScreen.style.display = "none";
    mainScreen.style.display = "block";

    // 🎉 No cambiamos el saludo fijo
    // document.getElementById("saludo").innerHTML = `🎂 ¡Feliz cumpleaños ${nombre} ${apellido}! 💖`;

    // Mostrar pastel y botón de carta
    letter.style.display = "block";
    openLetterBtn.style.display = "inline-block";

    // Cambiar color favorito (opcional)
    document.documentElement.style.setProperty("--color-favorito", colorFav);
  });

  // Al presionar botón "Abrir carta"
  openLetterBtn.addEventListener("click", () => {
    card.style.display = "block"; // Muestra la carta
    openLetterBtn.style.display = "none"; // Oculta el botón
  });

  // Botón cerrar carta
  closeCardBtn.addEventListener("click", () => {
    card.style.display = "none"; // Oculta la carta
    openLetterBtn.style.display = "inline-block"; // Muestra el botón nuevamente
  });
});
