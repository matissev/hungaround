

function toggleNotif() {
	var menu = document.getElementById("menuNotif");

	switch (menu.style.display)
	case "block" :
		menu.style.display = "none";
		break;
	case "none" :
		menu.style.display = "block";
		break;
}