docReady( function() {
  slidecontainer = document.querySelector('.slides');
  pckry = new Packery( slidecontainer, {
  rowHeight: 130,
  columnWidth: 1000
});

var itemElems = pckry.getItemElements();
// for each item...
for ( var i=0, len = itemElems.length; i < len; i++ ) {
  var elem = itemElems[i];
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( elem, {
    handle: '.handle'
  } );
  // bind Draggabilly events to Packery
  pckry.bindDraggabillyEvents( draggie );
}

});
