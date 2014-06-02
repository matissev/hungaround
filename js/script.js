/* SMALL JS FOR ANIMATION PURPOSE */

function toggleNotif() {
	var menu = document.getElementById("menuNotif");

	switch (menu.className) {
	case "nav-profil-toggle open" :
		menu.className = "nav-profil-toggle close";
		break;
	case "nav-profil-toggle close" :
		menu.className = "nav-profil-toggle open";
		break;
	}
}



/* ISOTOPE LAYOUT SETTINGS */

$('#mosaic').packery({ itemSelector: '.item' });