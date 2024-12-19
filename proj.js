document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.innerHTML = "↑";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const profilePhoto = document.querySelector('.hero-image img');

// Flag to track enlargement state
let isEnlarged = false;

profilePhoto.addEventListener('click', () => {
    if (!isEnlarged) {
        // Enlarge the profile photo
        profilePhoto.style.width = '300px'; // Increase size to 150% of the original
        profilePhoto.style.height = '300px';
        profilePhoto.style.borderRadius = '10%'; // Maintain rounded corners
        profilePhoto.style.transition = 'all 0.3s ease'; // Smooth transition
        isEnlarged = true;
    } else {
        // Reset to original size
        profilePhoto.style.width = '200px';
        profilePhoto.style.height = '200px';
        profilePhoto.style.borderRadius = '50%'; // Maintain original rounded corners
        isEnlarged = false;
    }
});

window.addEventListener('click', (e) => {
    if (e.target !== profilePhoto) {
        profilePhoto.style.width = '200px';
        profilePhoto.style.height = '200px';
        profilePhoto.style.borderRadius = '50%'; // Reset to original rounded corners
        isEnlarged = false;
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for reaching out! I'll get back to you soon.");

    document.getElementById("contactForm").reset();
});
