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

const triangle = document.getElementById("square");
    const container = document.querySelector(".container");

    let offsetX, offsetY;

    triangle.addEventListener("mousedown", (e) => {
      // Get the mouse position relative to the triangle
      offsetX = e.clientX - triangle.offsetLeft;
      offsetY = e.clientY - triangle.offsetTop;

      // Start dragging
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      // Ensure the triangle stays within the container
      const maxX = container.offsetWidth - triangle.offsetWidth;
      const maxY = container.offsetHeight - triangle.offsetHeight;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > maxX) newX = maxX;
      if (newY > maxY) newY = maxY;

      triangle.style.left = `${newX}px`;
      triangle.style.top = `${newY}px`;
    }

    function onMouseUp() {
      // Stop dragging
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }