const body = $("body");

// Add navigation bar
body.prepend($("<nav></nav>"));
$("nav").load("/assets/components/navbar.html #navbar");

// Handle scroll events to add/remove the "scrolled" class on the navbar
$(body).scroll(() => {
    let navbar = document.querySelector("#navbar");
    if ($(body).scrollTop() <= 10) {
        navbar.className = "";
    } else {
        navbar.className = "scrolled";
    }
});

// Add footer
body.append($("<footer></footer>"));
$("footer").load("/assets/components/footer.html #footer");

// Handle alternate stylesheet logic on window load
window.onload = () => {
    function enableAlternativeStylesheet() {
        $('link[rel="stylesheet"][href*="regular"]').each(function () {
            let href = $(this).attr("href").replace("regular", "2000");
            if ($('link[rel="stylesheet"][href="' + href + '"]').length === 0) {
                let linkElement = $("<link>", {
                    rel: "stylesheet",
                    href: href,
                    class: "alternative-2000"
                });
                $("head").append(linkElement);
            }
        });
    }

    function disableAlternativeStylesheet() {
        $('link[rel="stylesheet"].alternative-2000').remove();
    }

    // Check localStorage for alternative stylesheet preference
    if (localStorage.getItem("alternative") === "true") {
        enableAlternativeStylesheet();
    }

    // Toggle alternative stylesheet on switch click
    $(".switch").click(function () {
        if (localStorage.getItem("alternative") === "true") {
            disableAlternativeStylesheet();
            localStorage.removeItem("alternative");
        } else {
            enableAlternativeStylesheet();
            localStorage.setItem("alternative", "true");
        }
    });
};