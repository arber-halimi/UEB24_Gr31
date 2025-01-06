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
    const square = document.getElementById("square");
    const container = document.querySelector(".container");

    if (!square || !container) {
      throw new Error("Required elements are not found in the DOM.");
    }

    let offsetX, offsetY;

    // Initial position of the square
    const initialPosition = { x: 6, y: 6 };

    square.addEventListener("mousedown", (e) => {
      try {
        // Get mouse position relative to the square
        offsetX = e.clientX - square.offsetLeft;
        offsetY = e.clientY - square.offsetTop;

        // Start dragging
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

        // Ensure the square stays within the container
        const maxX = container.offsetWidth - square.offsetWidth;
        const maxY = container.offsetHeight - square.offsetHeight;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        square.style.left = `${newX}px`;
        square.style.top = `${newY}px`;
      } catch (error) {
        console.error("Error in mousemove event:", error.message);
      }
    }

    function onMouseUp() {
      try {
        // Stop dragging
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      } catch (error) {
        console.error("Error in mouseup event:", error.message);
      }
    }

    // Reset function to move the square back to its initial position
    function resetPosition() {
      try {
        square.style.left = `${initialPosition.x}px`;
        square.style.top = `${initialPosition.y}px`;
      } catch (error) {
        console.error("Error in resetPosition function:", error.message);
      }
    }
  } catch (error) {
    console.error("Initialization error:", error.message);
  }

