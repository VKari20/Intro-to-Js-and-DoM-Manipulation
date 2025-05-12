// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("info-text").textContent = "The text has been updated!";
  });
  
  // Modify CSS styles
  document.getElementById("change-style-btn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.style.color = "teal";
    title.style.fontSize = "2.5rem";
    title.style.textTransform = "uppercase";
  });
  
  // Add/Remove element
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "dynamic-box";
      box.textContent = "I'm a new box!";
      box.style.backgroundColor = "#ddd";
      box.style.padding = "20px";
      box.style.marginTop = "10px";
      box.style.borderRadius = "8px";
      container.appendChild(box);
    }
  });
  