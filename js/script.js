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

function filter() {
	if ( $('#checkRecommandes').checked ) {
		$('.recommande').style.display = 'none'; }
	else { $('.recommande').style.display = 'block'; }

	if ( $('#checkNonlus').checked ) {
		$('.nonlu').style.display = 'none'; }
	else { $('.nonlu').style.display = 'block'; }

	if ( $('#checkSuivi').checked ) {
		$('.suivi').style.display = 'none'; }
	else { $('.suivi').style.display = 'block'; }


	$('#mosaic').packery({ itemSelector: '.item' });
	$container.packery('destroy');
}



/* ISOTOPE LAYOUT SETTINGS */

$('#mosaic').packery({ itemSelector: '.item' });
/* $container.packery('destroy') */