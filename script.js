// Get all tab links and tab contents
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(evt, tabname) {
    // Deactivate all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Hide all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Activate the clicked tab link
    evt.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}