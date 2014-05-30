

function toggleNotif() {
	var menu = document.getElementById("menuNotif");

	switch (menu.className) {
	case "nav-profil-menuDeroulant open" :
		menu.className = "nav-profil-menuDeroulant close";
		break;
	case "nav-profil-menuDeroulant close" :
		menu.className = "nav-profil-menuDeroulant open";
		break;
	}
}