function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Close menu ONLY on mobile
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {

        ```
if (window.innerWidth <= 768) {
  document.getElementById("nav").style.display = "none";
}
```

    });
});
