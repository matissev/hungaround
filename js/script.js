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



/* ISOTOPE LAYOUT SETTINGS

var $container = $('#mosaic').isotope({
  // main isotope options
  itemSelector: '.item',
  layoutMode: 'masonry',
  // options for cellsByRow layout mode
  cellsByRow: {
    columnWidth: 200,
    rowHeight: 150
  },
  // options for masonry layout mode
  masonry: {
    columnWidth: '.grid-sizer'
  }
})*/




/* MASONRY LAYOUT SETTINGS */

var mosaic = document.querySelector('#mosaic');
var msnry = new Masonry( mosaic );
container.appendChild( item );
msnry.appended( item );
msnry.layout();