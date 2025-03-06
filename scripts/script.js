document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");


    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    
    document.getElementById("menu-toggle").addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("active");
    });

    
    const filterButtons = document.querySelectorAll(".filters button");
    const courseItems = document.querySelectorAll(".course");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            courseItems.forEach(item => {
                item.style.display = (category === "all" || item.classList.contains(category)) ? "block" : "none";
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

   
    const courses = [
        { name: "CSE 110", credits: 3 },
        { name: "WDD 130", credits: 4 },
        { name: "CSE 111", credits: 3 },
        { name: "CSE 210", credits: 3 },
        { name: "WDD 131", credits: 4 },
        { name: "WDD 231", credits: 4 },
    ];

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const creditsDisplay = document.createElement("p");
    creditsDisplay.textContent = `Total de créditos: ${totalCredits}`;
    document.querySelector(".certificate").appendChild(creditsDisplay);

  
    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent = `©${year} Javier A. Manosalva - Bucaramanga`;

    
    document.getElementById("lastModified").textContent = `Última modificación: ${document.lastModified}`;
});
