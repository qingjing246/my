;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xuelirenzheng" viewBox="0 0 1106 1024">' +
    '' +
    '<path d="M552.828871 1024l397.857974-208.614668-107.287544-347.790454-290.570431 146.030268-290.570431-146.030268L154.970896 815.385332 552.828871 1024zM1078.239813 646.109429 1025.192083 318.5844l80.465658-40.53085L552.828871 0 0 278.053551l553.424912 278.053551 470.873108-236.926659 0 351.962747 51.557625-25.03376L1078.239813 646.109429z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao12" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M505.9328 537.9328c-135.4752 0-245.6576-110.208-245.6576-245.6576s110.208-245.6576 245.6576-245.6576 245.6576 110.208 245.6576 245.6576S641.408 537.9328 505.9328 537.9328z"  ></path>' +
    '' +
    '<path d="M746.7008 967.8848 746.7008 967.8848c-0.2048 0-2.5344-0.0256-2.7392-0.0256l-500.736 0c-75.264-4.1984-119.4496-53.376-122.3168-134.9376-0.7168-19.9424 9.0368-51.456 14.2336-62.08 70.3744-143.5648 213.3504-232.7296 373.1456-232.7296 168.1664 0 319.104 95.5904 375.5776 237.8752 21.9904 55.424 21.4784 100.7104-1.5616 134.6048C845.2608 965.12 762.8544 967.8848 746.7008 967.8848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M760.396753 215.64807 757.197359 212.36978C694.164945 148.067235 607.584116 108.318161 511.994228 108.318161 416.515724 108.318161 329.991494 147.980986 266.975372 212.180387L263.420881 215.837463C201.305879 280.983878 162.909091 370.348591 162.909091 469.038499 162.909091 567.814703 201.362479 657.267665 263.604177 722.415057L266.791098 725.694371 512.006703 979.112541 757.393129 725.563485 760.226909 722.605475C822.567471 657.430295 861.090909 567.919802 861.090909 469.0405 861.091887 370.276212 822.63943 280.824227 760.396753 215.64807L760.396753 215.64807ZM512.00768 571.546159C444.549399 571.546159 389.86482 515.024849 389.86482 445.331875 389.86482 416.524335 399.171305 390.020329 414.852655 368.790761 437.173713 338.585041 472.384512 319.088826 512.00768 319.088826 579.466892 319.088826 634.15054 375.62503 634.15054 445.332852 634.15054 515.024849 579.466892 571.546159 512.00768 571.546159L512.00768 571.546159Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-state" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 24.380952c269.287619 0 487.619048 218.331429 487.619048 487.619048s-218.331429 487.619048-487.619048 487.619048C242.688 999.619048 24.380952 781.287619 24.380952 512S242.688 24.380952 512 24.380952z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)