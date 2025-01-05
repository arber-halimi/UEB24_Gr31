//nese e mbajme hover ne image, nderrohet ne video

document.querySelector('.main').addEventListener('mouseenter', function() {
    var video = this.querySelector('.video');
    video.play();
});

document.querySelector('.main').addEventListener('mouseleave', function() {
    var video = this.querySelector('.video');
    video.pause();
    video.currentTime = 0; 
});

try {
  const triangle = document.getElementById("square");
  const container = document.querySelector(".container");
  // Kontrollo nese elementet ekzistojne ne DOM

  if (!triangle || !container) {
    throw new Error("Required elements are not found in the DOM.");
  }

  let offsetX, offsetY;

  // Pozita fillestare e trekendeshit
  const initialPosition = { x: 0, y: 0 };

  triangle.addEventListener("mousedown", (e) => {
    try {
      // Merr pozicionin e mausit ne raport me trekendeshin
      offsetX = e.clientX - triangle.offsetLeft;
      offsetY = e.clientY - triangle.offsetTop;

      // Fillo terheqjen
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } catch (error) {
      console.error("Error in mousedown event:", error.message);
    }
  });

  function onMouseMove(e) {
    try {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      // Siguro qe trekendeshi te mbetet brenda konteinerit
      const maxX = container.offsetWidth - triangle.offsetWidth;
      const maxY = container.offsetHeight - triangle.offsetHeight;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > maxX) newX = maxX;
      if (newY > maxY) newY = maxY;

      triangle.style.left = `${newX}px`;
      triangle.style.top = `${newY}px`;
    } catch (error) {
      console.error("Error in mousemove event:", error.message);
    }
  }

  function onMouseUp() {
    try {
      // Ndal terheqjen
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    } catch (error) {
      console.error("Error in mouseup event:", error.message);
    }
  }

  // Funksioni per te kthyer trekendeshin ne pozicionin fillestar
  function resetPosition() {
    try {
      triangle.style.left = `${initialPosition.x}px`;
      triangle.style.top = `${initialPosition.y}px`;
    } catch (error) {
      console.error("Error in resetPosition function:", error.message);
    }
  }
} catch (error) {
  console.error("Initialization error:", error.message);
}
