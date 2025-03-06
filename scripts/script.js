
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
        
            navLinks.forEach(l => l.classList.remove("active"));
            
            this.classList.add("active");
        });
    });


    const filterButtons = document.querySelectorAll(".filters button");
    const courseItems = document.querySelectorAll(".course-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            
            courseItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

const year = new Date().getFullYear();
document.querySelector("footer p").innerHTML = `©${year} Javier A. Manosalva - Bucaramanga`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Última modificación: ${lastModified}`;

});
