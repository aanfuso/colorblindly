var colorblind = {
  init: function () {
      var css = document.createElement("style");

      css.id = "colorblind-extension";
      css.innerHTML = "a:visited { color: coral }";
      document.head.appendChild(css);
    }
}

colorblind.init();
