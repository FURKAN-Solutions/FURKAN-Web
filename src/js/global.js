const body = $('body');

// Loading the navbar component
body.prepend($('<nav></nav>'));
$('nav').load("./assets/components/navbar.html #navbar");

// Navbar scroll effect
$(body).scroll(() => {
    const nav = document.querySelector('#navbar');
    if ($(body).scrollTop() <= 10) nav.className = ''; else nav.className = 'scrolled';
});

// Loading the footer component
body.append($('<footer></footer>'));
$('footer').load("./assets/components/footer.html #footer");

// Handling the 2000 version of the website
document.addEventListener('DOMContentLoaded', () => {
    // Function to add "2000" stylesheets
    function add2000Stylesheets() {
        $('link[rel="stylesheet"][href*="regular"]').each(function () {
            let regularHref = $(this).attr('href');
            let alternateHref = regularHref.replace('regular', '2000');

            // Check if the "2000" stylesheet is already added to prevent duplicates
            if ($('link[rel="stylesheet"][href="' + alternateHref + '"]').length === 0) {
                // Create a new link element for the "2000" stylesheet
                let newLink = $('<link>', {
                    rel: 'stylesheet',
                    href: alternateHref,
                    class: 'alternative-2000' // Class to identify "2000" stylesheets
                });
                $('head').append(newLink);
            }
        });
    }

    // Function to remove "2000" stylesheets
    function remove2000Stylesheets() {
        $('link[rel="stylesheet"].alternative-2000').remove();
    }

    // Initialize styles based on localStorage on page load
    if (localStorage.getItem("alternative") === "true") {
        add2000Stylesheets();
    }

    // Event listener for the toggle button
    $(".switch").click(function () {
        if (localStorage.getItem("alternative") === "true") {
            // If "2000" styles are active, remove them
            remove2000Stylesheets();
            localStorage.removeItem("alternative");
        } else {
            // If "2000" styles are not active, add them
            add2000Stylesheets();
            localStorage.setItem("alternative", "true");
        }
    });
});