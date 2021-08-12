// megaMenu

$(document).ready(function() {
    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
// end megaMenu

// side menu
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '80%';
    document.getElementById('grayBgSlideNav').style.width = '100%';

}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('grayBgSlideNav').style.width = '0';
    document.getElementById('openHomeSide-Menu').style.width = '0';
}

function openHomeMenu() {
    document.getElementById('openHomeSide-Menu').style.width = '80%';

}


// end side menu