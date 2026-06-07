/* ── Side menu ───────────────────────────────────────────── */
(function () {
    var hamburger = document.querySelector('.hamburger-btn');
    var closeBtn  = document.getElementById('sideMenuClose');
    var overlay   = document.getElementById('sideMenuOverlay');
    var sideMenu  = document.getElementById('sideMenu');

    function openMenu() {
        sideMenu.classList.add('is-open');
        overlay.classList.add('is-visible');
        document.body.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
        closeBtn.focus();
    }

    function closeMenu() {
        sideMenu.classList.remove('is-open');
        overlay.classList.remove('is-visible');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sideMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    var currentLinks = sideMenu.querySelectorAll('.sidemenu_links a');
    currentLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sideMenu.querySelectorAll('.sidemenu_links li').forEach(function (li) {
                li.classList.remove('active');
            });
            link.closest('li').classList.add('active');
        });
    });
}());

/* ── Property type tabs ──────────────────────────────────── */
function openProperty(evt, propName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(propName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
