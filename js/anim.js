var anim = {

  fadeOut: function(element) {
    element = document.getElementById("canvas");
    var op = 1; // initial opacity
    var timer = setInterval(function() {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op + 0.1;
    }, 50);
  },

  fadeIn: function(element) {
    var op = 0; // initial opacity
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
        element.style.display = 'block';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += 0.1;
    }, 50);
  },

  shake: function(element) {

    $(element).animate({
        'margin-left': '-=5px',
        'margin-right': '+=5px'
      }, 10,

      function() {
        $(element).animate({
            'margin-left': '+=5px',
            'margin-right': '-=5px'
          }, 10,

          function() {

          });

      });
  },

  tween: function(element) {
    $(element).animate({
      left: '950px'
    });
  },

  shrink: function(element) {
    $(element).animate({
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  },

  grow: function(element) {
    $(element).animate({
      opacity: '1',
      height: '400px',
      width: '400px'
    });
  }

}
