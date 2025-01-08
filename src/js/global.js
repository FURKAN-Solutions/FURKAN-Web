const body = $('body');

// Loading the navbar component

body.prepend($('<nav></nav>'));
$('nav').load("./assets/components/navbar.html #navbar");

// Navbar scroll effect

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(window.scrollY <= 10) nav.className = ''; else nav.className = 'scrolled';
}

// Loading the footer component

body.append($('<footer></footer>'));
$('footer').load("./assets/components/footer.html #footer");
