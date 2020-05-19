window.MathJax = {
  options: {
    menuOptions: {
      settings: {
        texHints: true,        // put TeX-related attributes on MathML
        semantics: false,      // put original format in <semantic> tag in MathML
        zoom: 'NoZoom',        // or 'Click' or 'DoubleClick' as zoom trigger
        zscale: '200%',        // zoom scaling factor
        renderer: 'CHTML',     // or 'SVG'
        alt: false,            // true if ALT required for zooming
        cmd: false,            // true if CMD required for zooming
        ctrl: false,           // true if CTRL required for zooming
        shift: false,          // true if SHIFT required for zooming
        scale: 1,              // scaling factor for all math
        collapsible: false,    // true if complex math should be collapsible
        inTabOrder: true,      // true if tabbing includes math
      },
      annotationTypes: {
        TeX: ['TeX', 'LaTeX', 'application/x-tex'],
        StarMath: ['StarMath 5.0'],
        Maple: ['Maple'],
        ContentMathML: ['MathML-Content', 'application/mathml-content+xml'],
        OpenMath: ['OpenMath']
      }
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://ilias-cdn.tik.uni-stuttgart.de/mj3/e5/tex-svg-full.js';
  script.async = true;
  document.head.appendChild(script);
})();