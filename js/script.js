const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav")

hamburgerButton.addEventListener("click", () => {
    console.log("Click");
	mobileNav.classList.toggle("display-none");
    console.log("mobileNav")
})