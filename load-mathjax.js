window.MathJax = {
  options: {
    menuOptions: {
      settings: {
        zoom: 'Click',        // or 'Click' or 'DoubleClick' as zoom trigger
        zscale: '300%'        // zoom scaling factor
      }
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://ilias-cdn.tik.uni-stuttgart.de/mj3/es5/tex-svg-full.js';
  script.async = true;
  document.head.appendChild(script);
})();