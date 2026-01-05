// Crosshair cursor
document.body.style.cursor = "none";
const crosshair = document.createElement("div");
crosshair.style.width = "20px";
crosshair.style.height = "20px";
crosshair.style.border = "2px solid red";
crosshair.style.borderRadius = "50%";
crosshair.style.position = "fixed";
crosshair.style.pointerEvents = "none";
crosshair.style.zIndex = "9999";
crosshair.style.transform = "translate(-50%, -50%)";
document.body.appendChild(crosshair);

document.addEventListener("mousemove", (e) => {
  crosshair.style.left = e.clientX + "px";
  crosshair.style.top = e.clientY + "px";
});
