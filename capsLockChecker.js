var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAALpQTFRF8v//AAAAAAArAABZACt0AFqVLAAALHacLIDFP4fKP4/ATpXMWQAAWVlZWlptZWVlZqTQbVpadSwAeLDVeLDbfiwAgsfticftic32nFotnZ2dnZ2po4A/pKSkqZ2dqqqqqrDIsLa7sNv3tuH6u7awvdK9wtbpxpBNxrvGx7Crx8fHyocszdLNzer30I9N0J1b1apm1dTV27CB4beC6vf/7dvC8cyJ99KR9+G2+uOz++rS//fq///3////MM+SPAAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH2QsYCDIM8U3gxAAAAH5JREFUGNNjYMABNND46oxcKHx9ZlUebiS+AZOyrSWbAJxvzKRkawsUEYHyjRhZ1IACpqKMwhABTUUZDqCANruKAkyPOSdQQE8CYagZi7ysvJAYQsBKTkpKSloXIWBtCAImSFqY+Hn52ZC0mLHqaOlIiiMELAR5+Xn5lLB7GwAyHgxyN29KGQAAAABJRU5ErkJggg==';

function onKeyPress(event) {
  var key = event.which;
  var isShiftDown = event.shiftKey;
  if ((64 < key && key < 91 && !isShiftDown)
     || (96 < key && key < 123 && isShiftDown)) {
    $(event.target).addClass('dafizillaCapslockChecker');
  } else {
    $(event.target).removeClass('dafizillaCapslockChecker');
  }
}

jetpack.tabs.onReady(function(doc) {
  var fields = $(doc).find('input[type=password]');

  fields.each(function() {
      this.addEventListener("keypress", onKeyPress, false);
      this.addEventListener("blur", function(event) {
	$(event.target).removeClass('dafizillaCapslockChecker');
      }, false);
    });

  if (fields.size()) {
      $($(doc).find("head").get(0))
	.append('<style type="text/css">.dafizillaCapslockChecker {background-image:url(' + image + ');background-repeat: no-repeat; background-position: right;padding-right:16px;}</style>');
  }
});
