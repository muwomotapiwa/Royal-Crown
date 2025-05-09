document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"], a[href*="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").includes("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").split("#")[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for sticky header
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    

    // Hamburger Menu Functionality
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const chatLauncher = document.getElementById("chat-launcher");
    const chatOptions = document.getElementById("chat-options");
  
    if (chatLauncher) {
      chatLauncher.addEventListener("click", function () {
        chatOptions.classList.toggle("hidden");
      });
    }
  });
  
  function openWhatsApp() {
    const firstName = prompt("Please enter your FIRST name:");
    if (!firstName) return;
  
    const lastName = prompt("Please enter your LAST name:");
    if (!lastName) return;
  
    const message = `Hi, my name is ${firstName} ${lastName} and I would like to get in touch with Royal Crown Ministries.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "27"; // Replace with your WhatsApp number
  
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }
  
  function openLiveChat() {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.maximize(); // Show the Tawk.to live chat widget
    } else {
      alert("Live chat is not available right now.");
    }
  }

  

  
  
