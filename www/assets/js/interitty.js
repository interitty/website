(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _bootstrapNativeV = require('bootstrap.native/dist/bootstrap-native-v4');

var _bootstrapNativeV2 = _interopRequireDefault(_bootstrapNativeV);

var _naja = require('naja');

var _naja2 = _interopRequireDefault(_naja);

var _netteForms = require('nette-forms');

var _netteForms2 = _interopRequireDefault(_netteForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Nette = _netteForms2.default;
document.addEventListener('DOMContentLoaded', _naja2.default.initialize.bind(_naja2.default));

},{"bootstrap.native/dist/bootstrap-native-v4":2,"naja":3,"nette-forms":4}],2:[function(require,module,exports){
(function (global){
// Native Javascript for Bootstrap 4 v2.0.23 | © dnp_theme | MIT-License
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD support:
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like:
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    var bsn = factory();
    root.Alert = bsn.Alert;
    root.Button = bsn.Button;
    root.Carousel = bsn.Carousel;
    root.Collapse = bsn.Collapse;
    root.Dropdown = bsn.Dropdown;
    root.Modal = bsn.Modal;
    root.Popover = bsn.Popover;
    root.ScrollSpy = bsn.ScrollSpy;
    root.Tab = bsn.Tab;
    root.Tooltip = bsn.Tooltip;
  }
}(this, function () {
  
  /* Native Javascript for Bootstrap 4 | Internal Utility Functions
  ----------------------------------------------------------------*/
  "use strict";
  
  // globals
  var globalObject = typeof global !== 'undefined' ? global : this||window,
    DOC = document, HTML = DOC.documentElement, body = 'body', // allow the library to be used in <head>
  
    // Native Javascript for Bootstrap Global Object
    BSN = globalObject.BSN = {},
    supports = BSN.supports = [],
  
    // function toggle attributes
    dataToggle    = 'data-toggle',
    dataDismiss   = 'data-dismiss',
    dataSpy       = 'data-spy',
    dataRide      = 'data-ride',
  
    // components
    stringAlert     = 'Alert',
    stringButton    = 'Button',
    stringCarousel  = 'Carousel',
    stringCollapse  = 'Collapse',
    stringDropdown  = 'Dropdown',
    stringModal     = 'Modal',
    stringPopover   = 'Popover',
    stringScrollSpy = 'ScrollSpy',
    stringTab       = 'Tab',
    stringTooltip   = 'Tooltip',
  
    // options DATA API
    databackdrop      = 'data-backdrop',
    dataKeyboard      = 'data-keyboard',
    dataTarget        = 'data-target',
    dataInterval      = 'data-interval',
    dataHeight        = 'data-height',
    dataPause         = 'data-pause',
    dataTitle         = 'data-title',
    dataOriginalTitle = 'data-original-title',
    dataOriginalText  = 'data-original-text',
    dataDismissible   = 'data-dismissible',
    dataTrigger       = 'data-trigger',
    dataAnimation     = 'data-animation',
    dataContainer     = 'data-container',
    dataPlacement     = 'data-placement',
    dataDelay         = 'data-delay',
    dataOffsetTop     = 'data-offset-top',
    dataOffsetBottom  = 'data-offset-bottom',
  
    // option keys
    backdrop = 'backdrop', keyboard = 'keyboard', delay = 'delay',
    content = 'content', target = 'target',
    interval = 'interval', pause = 'pause', animation = 'animation',
    placement = 'placement', container = 'container',
  
    // box model
    offsetTop    = 'offsetTop',      offsetBottom   = 'offsetBottom',
    offsetLeft   = 'offsetLeft',
    scrollTop    = 'scrollTop',      scrollLeft     = 'scrollLeft',
    clientWidth  = 'clientWidth',    clientHeight   = 'clientHeight',
    offsetWidth  = 'offsetWidth',    offsetHeight   = 'offsetHeight',
    innerWidth   = 'innerWidth',     innerHeight    = 'innerHeight',
    scrollHeight = 'scrollHeight',   height         = 'height',
  
    // aria
    ariaExpanded = 'aria-expanded',
    ariaHidden   = 'aria-hidden',
  
    // event names
    clickEvent    = 'click',
    hoverEvent    = 'hover',
    keydownEvent  = 'keydown',
    keyupEvent    = 'keyup',
    resizeEvent   = 'resize',
    scrollEvent   = 'scroll',
    // originalEvents
    showEvent     = 'show',
    shownEvent    = 'shown',
    hideEvent     = 'hide',
    hiddenEvent   = 'hidden',
    closeEvent    = 'close',
    closedEvent   = 'closed',
    slidEvent     = 'slid',
    slideEvent    = 'slide',
    changeEvent   = 'change',
  
    // other
    getAttribute           = 'getAttribute',
    setAttribute           = 'setAttribute',
    hasAttribute           = 'hasAttribute',
    createElement          = 'createElement',
    appendChild            = 'appendChild',
    innerHTML              = 'innerHTML',
    getElementsByTagName   = 'getElementsByTagName',
    preventDefault         = 'preventDefault',
    getBoundingClientRect  = 'getBoundingClientRect',
    querySelectorAll       = 'querySelectorAll',
    getElementsByCLASSNAME = 'getElementsByClassName',
    getComputedStyle       = 'getComputedStyle',  
  
    indexOf      = 'indexOf',
    parentNode   = 'parentNode',
    length       = 'length',
    toLowerCase  = 'toLowerCase',
    Transition   = 'Transition',
    Duration     = 'Duration',
    Webkit       = 'Webkit',
    style        = 'style',
    push         = 'push',
    tabindex     = 'tabindex',
    contains     = 'contains',
  
    active     = 'active',
    showClass  = 'show',
    collapsing = 'collapsing',
    disabled   = 'disabled',
    loading    = 'loading',
    left       = 'left',
    right      = 'right',
    top        = 'top',
    bottom     = 'bottom',
  
    // tooltip / popover
    mouseHover = ('onmouseleave' in DOC) ? [ 'mouseenter', 'mouseleave'] : [ 'mouseover', 'mouseout' ],
    tipPositions = /\b(top|bottom|left|right)+/,
  
    // modal
    modalOverlay = 0,
    fixedTop = 'fixed-top',
    fixedBottom = 'fixed-bottom',
  
    // transitionEnd since 2.0.4
    supportTransitions = Webkit+Transition in HTML[style] || Transition[toLowerCase]() in HTML[style],
    transitionEndEvent = Webkit+Transition in HTML[style] ? Webkit[toLowerCase]()+Transition+'End' : Transition[toLowerCase]()+'end',
    transitionDuration = Webkit+Duration in HTML[style] ? Webkit[toLowerCase]()+Transition+Duration : Transition[toLowerCase]()+Duration,
  
    // set new focus element since 2.0.3
    setFocus = function(element){
      element.focus ? element.focus() : element.setActive();
    },
  
    // class manipulation, since 2.0.0 requires polyfill.js
    addClass = function(element,classNAME) {
      element.classList.add(classNAME);
    },
    removeClass = function(element,classNAME) {
      element.classList.remove(classNAME);
    },
    hasClass = function(element,classNAME){ // since 2.0.0
      return element.classList[contains](classNAME);
    },
  
    // selection methods
    getElementsByClassName = function(element,classNAME) { // returns Array
      return [].slice.call(element[getElementsByCLASSNAME]( classNAME ));
    },
    queryElement = function (selector, parent) {
      var lookUp = parent ? parent : DOC;
      return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
    },
    getClosest = function (element, selector) { //element is the element and selector is for the closest parent element to find
      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
      var firstChar = selector.charAt(0), selectorSubstring = selector.substr(1);
      if ( firstChar === '.' ) {// If selector is a class
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( queryElement(selector,element[parentNode]) !== null && hasClass(element,selectorSubstring) ) { return element; }
        }
      } else if ( firstChar === '#' ) { // If selector is an ID
        for ( ; element && element !== DOC; element = element[parentNode] ) { // Get closest match
          if ( element.id === selectorSubstring ) { return element; }
        }
      }
      return false;
    },
  
    // event attach jQuery style / trigger  since 1.2.0
    on = function (element, event, handler) {
      element.addEventListener(event, handler, false);
    },
    off = function(element, event, handler) {
      element.removeEventListener(event, handler, false);
    },
    one = function (element, event, handler) { // one since 2.0.4
      on(element, event, function handlerWrapper(e){
        handler(e);
        off(element, event, handlerWrapper);
      });
    },
    getTransitionDurationFromElement = function(element) {
      var duration = globalObject[getComputedStyle](element)[transitionDuration];
      duration = parseFloat(duration);
      duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
      return duration + 50; // we take a short offset to make sure we fire on the next frame after animation
    },
    emulateTransitionEnd = function(element,handler){ // emulateTransitionEnd since 2.0.4
      var called = 0, duration = getTransitionDurationFromElement(element);
      supportTransitions && one(element, transitionEndEvent, function(e){ handler(e); called = 1; });
      setTimeout(function() { !called && handler(); }, duration);
    },
    bootstrapCustomEvent = function (eventName, componentName, related) {
      var OriginalCustomEvent = new CustomEvent( eventName + '.bs.' + componentName);
      OriginalCustomEvent.relatedTarget = related;
      this.dispatchEvent(OriginalCustomEvent);
    },
  
    // tooltip / popover stuff
    getScroll = function() { // also Affix and ScrollSpy uses it
      return {
        y : globalObject.pageYOffset || HTML[scrollTop],
        x : globalObject.pageXOffset || HTML[scrollLeft]
      }
    },
    styleTip = function(link,element,position,parent) { // both popovers and tooltips (target,tooltip,placement,elementToAppendTo)
      var elementDimensions = { w : element[offsetWidth], h: element[offsetHeight] },
          windowWidth = (HTML[clientWidth] || DOC[body][clientWidth]),
          windowHeight = (HTML[clientHeight] || DOC[body][clientHeight]),
          rect = link[getBoundingClientRect](),
          scroll = parent === DOC[body] ? getScroll() : { x: parent[offsetLeft] + parent[scrollLeft], y: parent[offsetTop] + parent[scrollTop] },
          linkDimensions = { w: rect[right] - rect[left], h: rect[bottom] - rect[top] },
          isPopover = hasClass(element,'popover'),
          topPosition, leftPosition,
  
          arrow = queryElement('.arrow',element),
          arrowTop, arrowLeft, arrowWidth, arrowHeight,
  
          halfTopExceed = rect[top] + linkDimensions.h/2 - elementDimensions.h/2 < 0,
          halfLeftExceed = rect[left] + linkDimensions.w/2 - elementDimensions.w/2 < 0,
          halfRightExceed = rect[left] + elementDimensions.w/2 + linkDimensions.w/2 >= windowWidth,
          halfBottomExceed = rect[top] + elementDimensions.h/2 + linkDimensions.h/2 >= windowHeight,
          topExceed = rect[top] - elementDimensions.h < 0,
          leftExceed = rect[left] - elementDimensions.w < 0,
          bottomExceed = rect[top] + elementDimensions.h + linkDimensions.h >= windowHeight,
          rightExceed = rect[left] + elementDimensions.w + linkDimensions.w >= windowWidth;
  
      // recompute position
      position = (position === left || position === right) && leftExceed && rightExceed ? top : position; // first, when both left and right limits are exceeded, we fall back to top|bottom
      position = position === top && topExceed ? bottom : position;
      position = position === bottom && bottomExceed ? top : position;
      position = position === left && leftExceed ? right : position;
      position = position === right && rightExceed ? left : position;
  
      // update tooltip/popover class
      element.className[indexOf](position) === -1 && (element.className = element.className.replace(tipPositions,position));
  
      // we check the computed width & height and update here
      arrowWidth = arrow[offsetWidth]; arrowHeight = arrow[offsetHeight];
  
      // apply styling to tooltip or popover
      if ( position === left || position === right ) { // secondary|side positions
        if ( position === left ) { // LEFT
          leftPosition = rect[left] + scroll.x - elementDimensions.w - ( isPopover ? arrowWidth : 0 );
        } else { // RIGHT
          leftPosition = rect[left] + scroll.x + linkDimensions.w;
        }
  
        // adjust top and arrow
        if (halfTopExceed) {
          topPosition = rect[top] + scroll.y;
          arrowTop = linkDimensions.h/2 - arrowWidth;
        } else if (halfBottomExceed) {
          topPosition = rect[top] + scroll.y - elementDimensions.h + linkDimensions.h;
          arrowTop = elementDimensions.h - linkDimensions.h/2 - arrowWidth;
        } else {
          topPosition = rect[top] + scroll.y - elementDimensions.h/2 + linkDimensions.h/2;
          arrowTop = elementDimensions.h/2 - (isPopover ? arrowHeight*0.9 : arrowHeight/2);
        }
      } else if ( position === top || position === bottom ) { // primary|vertical positions
        if ( position === top) { // TOP
          topPosition =  rect[top] + scroll.y - elementDimensions.h - ( isPopover ? arrowHeight : 0 );
        } else { // BOTTOM
          topPosition = rect[top] + scroll.y + linkDimensions.h;
        }
        // adjust left | right and also the arrow
        if (halfLeftExceed) {
          leftPosition = 0;
          arrowLeft = rect[left] + linkDimensions.w/2 - arrowWidth;
        } else if (halfRightExceed) {
          leftPosition = windowWidth - elementDimensions.w*1.01;
          arrowLeft = elementDimensions.w - ( windowWidth - rect[left] ) + linkDimensions.w/2 - arrowWidth/2;
        } else {
          leftPosition = rect[left] + scroll.x - elementDimensions.w/2 + linkDimensions.w/2;
          arrowLeft = elementDimensions.w/2 - arrowWidth/2;
        }
      }
  
      // apply style to tooltip/popover and its arrow
      element[style][top] = topPosition + 'px';
      element[style][left] = leftPosition + 'px';
  
      arrowTop && (arrow[style][top] = arrowTop + 'px');
      arrowLeft && (arrow[style][left] = arrowLeft + 'px');
    };
  
  BSN.version = '2.0.23';
  
  /* Native Javascript for Bootstrap 4 | Alert
  -------------------------------------------*/
  
  // ALERT DEFINITION
  // ================
  var Alert = function( element ) {
    
    // initialization element
    element = queryElement(element);
  
    // bind, target alert, duration and stuff
    var self = this, component = 'alert',
      alert = getClosest(element,'.'+component),
      triggerHandler = function(){ hasClass(alert,'fade') ? emulateTransitionEnd(alert,transitionEndHandler) : transitionEndHandler(); },
      // handlers
      clickHandler = function(e){
        alert = getClosest(e[target],'.'+component);
        element = queryElement('['+dataDismiss+'="'+component+'"]',alert);
        element && alert && (element === e[target] || element[contains](e[target])) && self.close();
      },
      transitionEndHandler = function(){
        bootstrapCustomEvent.call(alert, closedEvent, component);
        off(element, clickEvent, clickHandler); // detach it's listener
        alert[parentNode].removeChild(alert);
      };
    
    // public method
    this.close = function() {
      if ( alert && element && hasClass(alert,showClass) ) {
        bootstrapCustomEvent.call(alert, closeEvent, component);
        removeClass(alert,showClass);
        alert && triggerHandler();
      }
    };
  
    // init
    if ( !(stringAlert in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    element[stringAlert] = self;
  };
  
  // ALERT DATA API
  // ==============
  supports[push]([stringAlert, Alert, '['+dataDismiss+'="alert"]']);
  
  
  /* Native Javascript for Bootstrap 4 | Button
  ---------------------------------------------*/
  
  // BUTTON DEFINITION
  // ===================
  var Button = function( element ) {
  
    // initialization element
    element = queryElement(element);
  
    // constant
    var toggled = false, // toggled makes sure to prevent triggering twice the change.bs.button events
  
        // strings
        component = 'button',
        checked = 'checked',
        reset = 'reset',
        LABEL = 'LABEL',
        INPUT = 'INPUT',
  
      // private methods
      keyHandler = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[target] === DOC.activeElement && toggle(e);
      },
      preventScroll = function(e){ 
        var key = e.which || e.keyCode;
        key === 32 && e[preventDefault]();
      },
      toggle = function(e) {
        var label = e[target].tagName === LABEL ? e[target] : e[target][parentNode].tagName === LABEL ? e[target][parentNode] : null; // the .btn label
        
        if ( !label ) return; //react if a label or its immediate child is clicked
  
        var eventTarget = e[target], // the button itself, the target of the handler function
          labels = getElementsByClassName(eventTarget[parentNode],'btn'), // all the button group buttons
          input = label[getElementsByTagName](INPUT)[0];
  
        if ( !input ) return; //return if no input found
  
        // manage the dom manipulation
        if ( input.type === 'checkbox' ) { //checkboxes
          if ( !input[checked] ) {
            addClass(label,active);
            input[getAttribute](checked);
            input[setAttribute](checked,checked);
            input[checked] = true;
          } else {
            removeClass(label,active);
            input[getAttribute](checked);
            input.removeAttribute(checked);
            input[checked] = false;
          }
  
          if (!toggled) { // prevent triggering the event twice
            toggled = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
          }
        }
  
        if ( input.type === 'radio' && !toggled ) { // radio buttons
          if ( !input[checked] ) { // don't trigger if already active
            addClass(label,active);
            input[setAttribute](checked,checked);
            input[checked] = true;
            bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input
            bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
  
            toggled = true;
            for (var i = 0, ll = labels[length]; i<ll; i++) {
              var otherLabel = labels[i], otherInput = otherLabel[getElementsByTagName](INPUT)[0];
              if ( otherLabel !== label && hasClass(otherLabel,active) )  {
                removeClass(otherLabel,active);
                otherInput.removeAttribute(checked);
                otherInput[checked] = false;
                bootstrapCustomEvent.call(otherInput, changeEvent, component); // trigger the change
              }
            }
          }
        }
        setTimeout( function() { toggled = false; }, 50 );
      };
  
    // init
    if ( !( stringButton in element ) ) { // prevent adding event handlers twice
      on( element, clickEvent, toggle );
      queryElement('['+tabindex+']',element) && on( element, keyupEvent, keyHandler ), 
                                                on( element, keydownEvent, preventScroll );    
    }
  
    // activate items on load
    var labelsToACtivate = getElementsByClassName(element, 'btn'), lbll = labelsToACtivate[length];
    for (var i=0; i<lbll; i++) {
      !hasClass(labelsToACtivate[i],active) && queryElement('input:checked',labelsToACtivate[i]) 
                                            && addClass(labelsToACtivate[i],active);
    }
    element[stringButton] = this;
  };
  
  // BUTTON DATA API
  // =================
  supports[push]( [ stringButton, Button, '['+dataToggle+'="buttons"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Carousel
  ----------------------------------------------*/
  
  // CAROUSEL DEFINITION
  // ===================
  var Carousel = function( element, options ) {
  
    // initialization element
    element = queryElement( element );
  
    // set options
    options = options || {};
  
    // DATA API
    var intervalAttribute = element[getAttribute](dataInterval),
        intervalOption = options[interval],
        intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),  
        pauseData = element[getAttribute](dataPause) === hoverEvent || false,
        keyboardData = element[getAttribute](dataKeyboard) === 'true' || false,
      
        // strings
        component = 'carousel',
        paused = 'paused',
        direction = 'direction',
        carouselItem = 'carousel-item',
        dataSlideTo = 'data-slide-to'; 
  
    this[keyboard] = options[keyboard] === true || keyboardData;
    this[pause] = (options[pause] === hoverEvent || pauseData) ? hoverEvent : false; // false / hover
  
    this[interval] = typeof intervalOption === 'number' ? intervalOption
                   : intervalOption === false || intervalData === 0 || intervalData === false ? 0
                   : 5000; // bootstrap carousel default interval
  
    // bind, event targets
    var self = this, index = element.index = 0, timer = element.timer = 0, 
      isSliding = false, // isSliding prevents click event handlers when animation is running
      slides = getElementsByClassName(element,carouselItem), total = slides[length],
      slideDirection = this[direction] = left,
      leftArrow = getElementsByClassName(element,component+'-control-prev')[0], 
      rightArrow = getElementsByClassName(element,component+'-control-next')[0],
      indicator = queryElement( '.'+component+'-indicators', element ),
      indicators = indicator && indicator[getElementsByTagName]( "LI" ) || [];
  
    // handlers
    var pauseHandler = function () {
        if ( self[interval] !==false && !hasClass(element,paused) ) {
          addClass(element,paused);
          !isSliding && clearInterval( timer );
        }
      },
      resumeHandler = function() {
        if ( self[interval] !== false && hasClass(element,paused) ) {
          removeClass(element,paused);
          !isSliding && clearInterval( timer );
          !isSliding && self.cycle();
        }
      },
      indicatorHandler = function(e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e[target]; // event target | the current active item
  
        if ( eventTarget && !hasClass(eventTarget,active) && eventTarget[getAttribute](dataSlideTo) ) {
          index = parseInt( eventTarget[getAttribute](dataSlideTo), 10 );
        } else { return false; }
  
        self.slideTo( index ); //Do the slide
      },
      controlsHandler = function (e) {
        e[preventDefault]();
        if (isSliding) return;
  
        var eventTarget = e.currentTarget || e.srcElement;
  
        if ( eventTarget === rightArrow ) {
          index++;
        } else if ( eventTarget === leftArrow ) {
          index--;
        }
  
        self.slideTo( index ); //Do the slide
      },
      keyHandler = function (e) {
        if (isSliding) return;
        switch (e.which) {
          case 39:
            index++;
            break;
          case 37:
            index--;
            break;
          default: return;
        }
        self.slideTo( index ); //Do the slide
      },
      // private methods
      isElementInScrollRange = function () {
        var rect = element[getBoundingClientRect](),
          viewportHeight = globalObject[innerHeight] || HTML[clientHeight]
        return rect[top] <= viewportHeight && rect[bottom] >= 0; // bottom && top
      },    
      setActivePage = function( pageIndex ) { //indicators
        for ( var i = 0, icl = indicators[length]; i < icl; i++ ) {
          removeClass(indicators[i],active);
        }
        if (indicators[pageIndex]) addClass(indicators[pageIndex], active);
      };
  
  
    // public methods
    this.cycle = function() {
      timer = setInterval(function() {
        isElementInScrollRange() && (index++, self.slideTo( index ) );
      }, this[interval]);
    };
    this.slideTo = function( next ) {
      if (isSliding) return; // when controled via methods, make sure to check again      
      
      var activeItem = this.getActiveIndex(), // the current active
          orientation;
      
      // determine slideDirection first
      if  ( (activeItem < next ) || (activeItem === 0 && next === total -1 ) ) {
        slideDirection = self[direction] = left; // next
      } else if  ( (activeItem > next) || (activeItem === total - 1 && next === 0 ) ) {
        slideDirection = self[direction] = right; // prev
      }
  
      // find the right next index 
      if ( next < 0 ) { next = total - 1; } 
      else if ( next === total ){ next = 0; }
  
      // update index
      index = next;
  
      orientation = slideDirection === left ? 'next' : 'prev'; //determine type
      bootstrapCustomEvent.call(element, slideEvent, component, slides[next]); // here we go with the slide
  
      isSliding = true;
      clearInterval(timer);
      setActivePage( next );
  
      if ( supportTransitions && hasClass(element,'slide') ) {
  
        addClass(slides[next],carouselItem +'-'+ orientation);
        slides[next][offsetWidth];
        addClass(slides[next],carouselItem +'-'+ slideDirection);
        addClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
        one(slides[next], transitionEndEvent, function(e) {
          var timeout = e[target] !== slides[next] ? e.elapsedTime*1000+100 : 20;
          
          isSliding && setTimeout(function(){
            isSliding = false;
  
            addClass(slides[next],active);
            removeClass(slides[activeItem],active);
  
            removeClass(slides[next],carouselItem +'-'+ orientation);
            removeClass(slides[next],carouselItem +'-'+ slideDirection);
            removeClass(slides[activeItem],carouselItem +'-'+ slideDirection);
  
            bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
  
            if ( !DOC.hidden && self[interval] && !hasClass(element,paused) ) {
              self.cycle();
            }
          }, timeout);
        });
  
      } else {
        addClass(slides[next],active);
        slides[next][offsetWidth];
        removeClass(slides[activeItem],active);
        setTimeout(function() {
          isSliding = false;
          if ( self[interval] && !hasClass(element,paused) ) {
            self.cycle();
          }
          bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
        }, 100 );
      }
    };
    this.getActiveIndex = function () {
      return slides[indexOf](getElementsByClassName(element,carouselItem+' active')[0]) || 0;
    };
  
    // init
    if ( !(stringCarousel in element ) ) { // prevent adding event handlers twice
  
      if ( self[pause] && self[interval] ) {
        on( element, mouseHover[0], pauseHandler );
        on( element, mouseHover[1], resumeHandler );
        on( element, 'touchstart', pauseHandler );
        on( element, 'touchend', resumeHandler );
      }
    
      rightArrow && on( rightArrow, clickEvent, controlsHandler );
      leftArrow && on( leftArrow, clickEvent, controlsHandler );
    
      indicator && on( indicator, clickEvent, indicatorHandler );
      self[keyboard] === true && on( globalObject, keydownEvent, keyHandler );
    }
    if (self.getActiveIndex()<0) {
      slides[length] && addClass(slides[0],active);
      indicators[length] && setActivePage(0);
    }
  
    if ( self[interval] ){ self.cycle(); }
    element[stringCarousel] = self;
  };
  
  // CAROUSEL DATA API
  // =================
  supports[push]( [ stringCarousel, Carousel, '['+dataRide+'="carousel"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Collapse
  -----------------------------------------------*/
  
  // COLLAPSE DEFINITION
  // ===================
  var Collapse = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // event targets and constants
    var accordion = null, collapse = null, self = this, 
      accordionData = element[getAttribute]('data-parent'),
      activeCollapse, activeElement,
  
      // component strings
      component = 'collapse',
      collapsed = 'collapsed',
      isAnimating = 'isAnimating',
  
      // private methods
      openAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, showEvent, component);
        collapseElement[isAnimating] = true;
        addClass(collapseElement,collapsing);
        removeClass(collapseElement,component);
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'true');
          toggle[setAttribute](ariaExpanded,'true');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement, component);
          addClass(collapseElement,showClass);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, shownEvent, component);
        });
      },
      closeAction = function(collapseElement,toggle) {
        bootstrapCustomEvent.call(collapseElement, hideEvent, component);
        collapseElement[isAnimating] = true;
        collapseElement[style][height] = collapseElement[scrollHeight] + 'px'; // set height first
        removeClass(collapseElement,component);
        removeClass(collapseElement,showClass);
        addClass(collapseElement,collapsing);
        collapseElement[offsetWidth]; // force reflow to enable transition
        collapseElement[style][height] = '0px';
        
        emulateTransitionEnd(collapseElement, function() {
          collapseElement[isAnimating] = false;
          collapseElement[setAttribute](ariaExpanded,'false');
          toggle[setAttribute](ariaExpanded,'false');
          removeClass(collapseElement,collapsing);
          addClass(collapseElement,component);
          collapseElement[style][height] = '';
          bootstrapCustomEvent.call(collapseElement, hiddenEvent, component);
        });
      },
      getTarget = function() {
        var href = element.href && element[getAttribute]('href'),
          parent = element[getAttribute](dataTarget),
          id = href || ( parent && parent.charAt(0) === '#' ) && parent;
        return id && queryElement(id);
      };
    
    // public methods
    this.toggle = function(e) {
      e[preventDefault]();
      if (!hasClass(collapse,showClass)) { self.show(); } 
      else { self.hide(); }
    };
    this.hide = function() {
      if ( collapse[isAnimating] ) return;    
      closeAction(collapse,element);
      addClass(element,collapsed);
    };
    this.show = function() {
      if ( accordion ) {
        activeCollapse = queryElement('.'+component+'.'+showClass,accordion);
        activeElement = activeCollapse && (queryElement('['+dataToggle+'="'+component+'"]['+dataTarget+'="#'+activeCollapse.id+'"]',accordion)
                      || queryElement('['+dataToggle+'="'+component+'"][href="#'+activeCollapse.id+'"]',accordion) );
      }
  
      if ( !collapse[isAnimating] || activeCollapse && !activeCollapse[isAnimating] ) {
        if ( activeElement && activeCollapse !== collapse ) {
          closeAction(activeCollapse,activeElement); 
          addClass(activeElement,collapsed);
        }
        openAction(collapse,element);
        removeClass(element,collapsed);
      }
    };
  
    // init
    if ( !(stringCollapse in element ) ) { // prevent adding event handlers twice
      on(element, clickEvent, self.toggle);
    }
    collapse = getTarget();
    collapse[isAnimating] = false;  // when true it will prevent click handlers  
    accordion = queryElement(options.parent) || accordionData && getClosest(element, accordionData);
    element[stringCollapse] = self;
  };
  
  // COLLAPSE DATA API
  // =================
  supports[push]( [ stringCollapse, Collapse, '['+dataToggle+'="collapse"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Dropdown
  ----------------------------------------------*/
  
  // DROPDOWN DEFINITION
  // ===================
  var Dropdown = function( element, option ) {
      
    // initialization element
    element = queryElement(element);
  
    // set option
    this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false;
  
    // constants, event targets, strings
    var self = this, children = 'children',
      parent = element[parentNode],
      component = 'dropdown', open = 'open',
      relatedTarget = null,
      menu = queryElement('.dropdown-menu', parent),
      menuItems = (function(){
        var set = menu[children], newSet = [];
        for ( var i=0; i<set[length]; i++ ){
          set[i][children][length] && (set[i][children][0].tagName === 'A' && newSet[push](set[i][children][0]));
          set[i].tagName === 'A' && newSet[push](set[i]);
        }
        return newSet;
      })(),
  
      // preventDefault on empty anchor links
      preventEmptyAnchor = function(anchor){
        (anchor.href && anchor.href.slice(-1) === '#' || anchor[parentNode] && anchor[parentNode].href 
          && anchor[parentNode].href.slice(-1) === '#') && this[preventDefault]();    
      },
  
      // toggle dismissible events
      toggleDismiss = function(){
        var type = element[open] ? on : off;
        type(DOC, clickEvent, dismissHandler); 
        type(DOC, keydownEvent, preventScroll);
        type(DOC, keyupEvent, keyHandler);
      },
  
      // handlers
      dismissHandler = function(e) {
        var eventTarget = e[target], hasData = eventTarget && (stringDropdown in eventTarget || stringDropdown in eventTarget[parentNode]);
        if ( (eventTarget === menu || menu[contains](eventTarget)) && (self.persist || hasData) ) { return; }
        else {
          relatedTarget = eventTarget === element || element[contains](eventTarget) ? element : null;
          hide();
        }
        preventEmptyAnchor.call(e,eventTarget);
      },
      clickHandler = function(e) {
        relatedTarget = element;
        show();
        preventEmptyAnchor.call(e,e[target]);
      },
      preventScroll = function(e){
        var key = e.which || e.keyCode;
        if( key === 38 || key === 40 ) { e[preventDefault](); }
      },
      keyHandler = function(e){
        var key = e.which || e.keyCode,
          activeItem = DOC.activeElement,
          idx = menuItems[indexOf](activeItem),
          isSameElement = activeItem === element,
          isInsideMenu = menu[contains](activeItem),
          isMenuItem = activeItem[parentNode] === menu || activeItem[parentNode][parentNode] === menu;          
  
        if ( isMenuItem || isSameElement ) { // navigate up | down
          idx = isSameElement ? 0 
                              : key === 38 ? (idx>1?idx-1:0)
                              : key === 40 ? (idx<menuItems[length]-1?idx+1:idx) : idx;
          menuItems[idx] && setFocus(menuItems[idx]);
        }
        if ( (menuItems[length] && isMenuItem // menu has items
              || !menuItems[length] && (isInsideMenu || isSameElement)  // menu might be a form
              || !isInsideMenu ) // or the focused element is not in the menu at all
              && element[open] && key === 27  // menu must be open
        ) {
          self.toggle();
          relatedTarget = null;
        }
      },
  
      // private methods
      show = function() {
        bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
        addClass(menu,showClass);
        addClass(parent,showClass);
        menu[setAttribute](ariaExpanded,true);
        bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
        element[open] = true;
        off(element, clickEvent, clickHandler);
        setTimeout(function(){
          setFocus( menu[getElementsByTagName]('INPUT')[0] || element ); // focus the first input item | element
          toggleDismiss();
        },1);
      },
      hide = function() {
        bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
        removeClass(menu,showClass);
        removeClass(parent,showClass);
        menu[setAttribute](ariaExpanded,false);
        bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
        element[open] = false;
        toggleDismiss();
        setFocus(element);
        setTimeout(function(){ on(element, clickEvent, clickHandler); },1);
      };
  
    // set initial state to closed
    element[open] = false;
  
    // public methods
    this.toggle = function() {
      if (hasClass(parent,showClass) && element[open]) { hide(); } 
      else { show(); }
    };
  
    // init
    if ( !(stringDropdown in element) ) { // prevent adding event handlers twice
      !tabindex in menu && menu[setAttribute](tabindex, '0'); // Fix onblur on Chrome | Safari
      on(element, clickEvent, clickHandler);
    }
  
    element[stringDropdown] = self;
  };
  
  // DROPDOWN DATA API
  // =================
  supports[push]( [stringDropdown, Dropdown, '['+dataToggle+'="dropdown"]'] );
  
  
  /* Native Javascript for Bootstrap 4 | Modal
  -------------------------------------------*/
  
  // MODAL DEFINITION
  // ===============
  var Modal = function(element, options) { // element can be the modal/triggering button
  
    // the modal (both JavaScript / DATA API init) / triggering button element (DATA API)
    element = queryElement(element);
  
    // determine modal, triggering element
    var btnCheck = element[getAttribute](dataTarget)||element[getAttribute]('href'),
      checkModal = queryElement( btnCheck ),
      modal = hasClass(element,'modal') ? element : checkModal,
      overlayDelay,
  
      // strings
      component = 'modal',
      staticString = 'static',
      paddingLeft = 'paddingLeft',
      paddingRight = 'paddingRight',
      modalBackdropString = 'modal-backdrop';
  
    if ( hasClass(element,'modal') ) { element = null; } // modal is now independent of it's triggering element
  
    if ( !modal ) { return; } // invalidate
  
    // set options
    options = options || {};
  
    this[keyboard] = options[keyboard] === false || modal[getAttribute](dataKeyboard) === 'false' ? false : true;
    this[backdrop] = options[backdrop] === staticString || modal[getAttribute](databackdrop) === staticString ? staticString : true;
    this[backdrop] = options[backdrop] === false || modal[getAttribute](databackdrop) === 'false' ? false : this[backdrop];
    this[content]  = options[content]; // JavaScript only
  
    // bind, constants, event targets and other vars
    var self = this, relatedTarget = null,
      bodyIsOverflowing, modalIsOverflowing, scrollbarWidth, overlay,
  
      // also find fixed-top / fixed-bottom items
      fixedItems = getElementsByClassName(HTML,fixedTop).concat(getElementsByClassName(HTML,fixedBottom)),
  
      // private methods
      getWindowWidth = function() {
        var htmlRect = HTML[getBoundingClientRect]();
        return globalObject[innerWidth] || (htmlRect[right] - Math.abs(htmlRect[left]));
      },
      setScrollbar = function () {
        var bodyStyle = globalObject[getComputedStyle](DOC[body]),
            bodyPad = parseInt((bodyStyle[paddingRight]), 10), itemPad;
        if (bodyIsOverflowing) {
          DOC[body][style][paddingRight] = (bodyPad + scrollbarWidth) + 'px';
          if (fixedItems[length]){
            for (var i = 0; i < fixedItems[length]; i++) {
              itemPad = globalObject[getComputedStyle](fixedItems[i])[paddingRight];
              fixedItems[i][style][paddingRight] = ( parseInt(itemPad) + scrollbarWidth) + 'px';
            }
          }
        }
      },
      resetScrollbar = function () {
        DOC[body][style][paddingRight] = '';
        if (fixedItems[length]){
          for (var i = 0; i < fixedItems[length]; i++) {
            fixedItems[i][style][paddingRight] = '';
          }
        }
      },
      measureScrollbar = function () { // thx walsh
        var scrollDiv = DOC[createElement]('div'), scrollBarWidth;
        scrollDiv.className = component+'-scrollbar-measure'; // this is here to stay
        DOC[body][appendChild](scrollDiv);
        scrollBarWidth = scrollDiv[offsetWidth] - scrollDiv[clientWidth];
        DOC[body].removeChild(scrollDiv);
        return scrollBarWidth;
      },
      checkScrollbar = function () {
        bodyIsOverflowing = DOC[body][clientWidth] < getWindowWidth();
        modalIsOverflowing = modal[scrollHeight] > HTML[clientHeight];
        scrollbarWidth = measureScrollbar();
      },
      adjustDialog = function () {
        modal[style][paddingLeft] = !bodyIsOverflowing && modalIsOverflowing ? scrollbarWidth + 'px' : '';
        modal[style][paddingRight] = bodyIsOverflowing && !modalIsOverflowing ? scrollbarWidth + 'px' : '';
      },
      resetAdjustments = function () {
        modal[style][paddingLeft] = '';
        modal[style][paddingRight] = '';
      },
      createOverlay = function() {
        modalOverlay = 1;        
        
        var newOverlay = DOC[createElement]('div');
        overlay = queryElement('.'+modalBackdropString);
  
        if ( overlay === null ) {
          newOverlay[setAttribute]('class',modalBackdropString+' fade');
          overlay = newOverlay;
          DOC[body][appendChild](overlay);
        }
      },
      removeOverlay = function() {
        overlay = queryElement('.'+modalBackdropString);
        if ( overlay && overlay !== null && typeof overlay === 'object' ) {
          modalOverlay = 0;        
          DOC[body].removeChild(overlay); overlay = null;
        }
        bootstrapCustomEvent.call(modal, hiddenEvent, component);      
      },
      keydownHandlerToggle = function() {
        if (hasClass(modal,showClass)) {
          on(DOC, keydownEvent, keyHandler);
        } else {
          off(DOC, keydownEvent, keyHandler);
        }
      },
      resizeHandlerToggle = function() {
        if (hasClass(modal,showClass)) {
          on(globalObject, resizeEvent, self.update);
        } else {
          off(globalObject, resizeEvent, self.update);
        }
      },
      dismissHandlerToggle = function() {
        if (hasClass(modal,showClass)) {
          on(modal, clickEvent, dismissHandler);
        } else {
          off(modal, clickEvent, dismissHandler);
        }
      },
      // triggers
      triggerShow = function() {
        setFocus(modal);
        bootstrapCustomEvent.call(modal, shownEvent, component, relatedTarget);
      },
      triggerHide = function() {
        modal[style].display = '';
        element && (setFocus(element));
        
        (function(){
          if (!getElementsByClassName(DOC,component+' '+showClass)[0]) {
            resetAdjustments();
            resetScrollbar();
            removeClass(DOC[body],component+'-open');
            overlay && hasClass(overlay,'fade') ? (removeClass(overlay,showClass), emulateTransitionEnd(overlay,removeOverlay)) 
            : removeOverlay();
  
            resizeHandlerToggle();
            dismissHandlerToggle();
            keydownHandlerToggle();
          }
        }());
      },
      // handlers
      clickHandler = function(e) {
        var clickTarget = e[target];
        clickTarget = clickTarget[hasAttribute](dataTarget) || clickTarget[hasAttribute]('href') ? clickTarget : clickTarget[parentNode];
        if ( clickTarget === element && !hasClass(modal,showClass) ) {
          modal.modalTrigger = element;
          relatedTarget = element;
          self.show();
          e[preventDefault]();
        }
      },
      keyHandler = function(e) {
        if (self[keyboard] && e.which == 27 && hasClass(modal,showClass)) {
          self.hide();
        }
      },
      dismissHandler = function(e) {
        var clickTarget = e[target];
        if ( hasClass(modal,showClass) && (clickTarget[parentNode][getAttribute](dataDismiss) === component
            || clickTarget[getAttribute](dataDismiss) === component
            || (clickTarget === modal && self[backdrop] !== staticString) ) ) {
          self.hide(); relatedTarget = null;
          e[preventDefault]();
        }
      };
  
    // public methods
    this.toggle = function() {
      if ( hasClass(modal,showClass) ) {this.hide();} else {this.show();}
    };
    this.show = function() {
      bootstrapCustomEvent.call(modal, showEvent, component, relatedTarget);
  
      // we elegantly hide any opened modal
      var currentOpen = getElementsByClassName(DOC,component+' '+showClass)[0];
      currentOpen && currentOpen !== modal && currentOpen.modalTrigger[stringModal].hide();
  
      if ( this[backdrop] ) {
        !modalOverlay && createOverlay();
      }
  
      if ( overlay && modalOverlay && !hasClass(overlay,showClass)) {
        overlay[offsetWidth]; // force reflow to enable trasition
        overlayDelay = getTransitionDurationFromElement(overlay);              
        addClass(overlay, showClass);
      }
  
      setTimeout( function() {
        modal[style].display = 'block';
  
        checkScrollbar();
        setScrollbar();
        adjustDialog();
  
        addClass(DOC[body],component+'-open');
        addClass(modal,showClass);
        modal[setAttribute](ariaHidden, false);
        
        resizeHandlerToggle();
        dismissHandlerToggle();
        keydownHandlerToggle();
  
        hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerShow) : triggerShow();
      }, supportTransitions && overlay ? overlayDelay : 0);
    };
    this.hide = function() {
      bootstrapCustomEvent.call(modal, hideEvent, component);
      overlay = queryElement('.'+modalBackdropString);
      overlayDelay = overlay && getTransitionDurationFromElement(overlay);    
  
      removeClass(modal,showClass);
      modal[setAttribute](ariaHidden, true);
  
      setTimeout(function(){
        hasClass(modal,'fade') ? emulateTransitionEnd(modal, triggerHide) : triggerHide();
      }, supportTransitions && overlay ? overlayDelay : 0);
    };
    this.setContent = function( content ) {
      queryElement('.'+component+'-content',modal)[innerHTML] = content;
    };
    this.update = function() {
      if (hasClass(modal,showClass)) {
        checkScrollbar();
        setScrollbar();
        adjustDialog();
      }
    };
  
    // init
    // prevent adding event handlers over and over
    // modal is independent of a triggering element
    if ( !!element && !(stringModal in element) ) {
      on(element, clickEvent, clickHandler);
    }
    if ( !!self[content] ) { self.setContent( self[content] ); }
    !!element && (element[stringModal] = self);
  };
  
  // DATA API
  supports[push]( [ stringModal, Modal, '['+dataToggle+'="modal"]' ] );
  
  /* Native Javascript for Bootstrap 4 | Popover
  ----------------------------------------------*/
  
  // POPOVER DEFINITION
  // ==================
  var Popover = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var triggerData = element[getAttribute](dataTrigger), // click / hover / focus
        animationData = element[getAttribute](dataAnimation), // true / false
        placementData = element[getAttribute](dataPlacement),
        dismissibleData = element[getAttribute](dataDismissible),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
  
        // internal strings
        component = 'popover',
        template = 'template',
        trigger = 'trigger',
        classString = 'class',
        div = 'div',
        fade = 'fade',
        content = 'content',
        dataContent = 'data-content',
        dismissible = 'dismissible',
        closeBtn = '<button type="button" class="close">×</button>',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),       
        
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[template] = options[template] ? options[template] : null; // JavaScript only
    this[trigger] = options[trigger] ? options[trigger] : triggerData || hoverEvent;
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[dismissible] = options[dismissible] || dismissibleData === 'true' ? true : false;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement 
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
    
    // bind, content
    var self = this, 
      titleString = element[getAttribute](dataTitle) || null,
      contentString = element[getAttribute](dataContent) || null;
  
    if ( !contentString && !this[template] ) return; // invalidate
  
    // constants, vars
    var popover = null, timer = 0, placementSetting = this[placement],
      
      // handlers
      dismissibleHandler = function(e) {
        if (popover !== null && e[target] === queryElement('.close',popover)) {
          self.hide();
        }
      },
  
      // private methods
      removePopover = function() {
        self[container].removeChild(popover);
        timer = null; popover = null; 
      },
      createPopover = function() {
        titleString = element[getAttribute](dataTitle); // check content again
        contentString = element[getAttribute](dataContent);
  
        popover = DOC[createElement](div);
  
        // popover arrow
        var popoverArrow = DOC[createElement](div);
        popoverArrow[setAttribute](classString,'arrow');
        popover[appendChild](popoverArrow);
  
        if ( contentString !== null && self[template] === null ) { //create the popover from data attributes
  
          popover[setAttribute]('role','tooltip');
  
          if (titleString !== null) {
            var popoverTitle = DOC[createElement]('h3');
            popoverTitle[setAttribute](classString,component+'-header');
  
            popoverTitle[innerHTML] = self[dismissible] ? titleString + closeBtn : titleString;
            popover[appendChild](popoverTitle);
          }
  
          //set popover content
          var popoverContent = DOC[createElement](div);
          popoverContent[setAttribute](classString,component+'-body');
          popoverContent[innerHTML] = self[dismissible] && titleString === null ? contentString + closeBtn : contentString;
          popover[appendChild](popoverContent);
  
        } else {  // or create the popover from template
          var popoverTemplate = DOC[createElement](div);
          popoverTemplate[innerHTML] = self[template];
          popover[innerHTML] = popoverTemplate.firstChild[innerHTML];
        }
  
        //append to the container
        self[container][appendChild](popover);
        popover[style].display = 'block';
        popover[setAttribute](classString, component+ ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
      },
      showPopover = function () {
        !hasClass(popover,showClass) && ( addClass(popover,showClass) );
      },
      updatePopover = function() {
        styleTip(element,popover,placementSetting,self[container]);
      },
  
      // event toggle
      dismissHandlerToggle = function(type){
        if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
          !self[dismissible] && type( element, 'blur', self.hide );
        }
        self[dismissible] && type( DOC, clickEvent, dismissibleHandler );     
        type( globalObject, resizeEvent, self.hide );
      },
  
      // triggers
      showTrigger = function() {
        dismissHandlerToggle(on);
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        dismissHandlerToggle(off);
        removePopover();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods / handlers
    this.toggle = function() {
      if (popover === null) { self.show(); } 
      else { self.hide(); }
    };
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          createPopover();
          updatePopover();
          showPopover();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(popover, showTrigger) : showTrigger();
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (popover && popover !== null && hasClass(popover,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(popover,showClass);
          !!self[animation] ? emulateTransitionEnd(popover, hideTrigger) : hideTrigger();
        }
      }, self[delay] );
    };
  
    // init
    if ( !(stringPopover in element) ) { // prevent adding event handlers twice
      if (self[trigger] === hoverEvent) {
        on( element, mouseHover[0], self.show );
        if (!self[dismissible]) { on( element, mouseHover[1], self.hide ); }
      } else if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
        on( element, self[trigger], self.toggle );
      }
    }
    element[stringPopover] = self;
  };
  
  // POPOVER DATA API
  // ================
  supports[push]( [ stringPopover, Popover, '['+dataToggle+'="popover"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | ScrollSpy
  -----------------------------------------------*/
  
  // SCROLLSPY DEFINITION
  // ====================
  var ScrollSpy = function(element, options) {
  
    // initialization element, the element we spy on
    element = queryElement(element); 
  
    // DATA API
    var targetData = queryElement(element[getAttribute](dataTarget)),
        offsetData = element[getAttribute]('data-offset');
  
    // set options
    options = options || {};
    if ( !options[target] && !targetData ) { return; } // invalidate
  
    // event targets, constants
    var self = this, spyTarget = options[target] && queryElement(options[target]) || targetData,
        links = spyTarget && spyTarget[getElementsByTagName]('A'),
        offset = parseInt(offsetData || options['offset']) || 10,      
        items = [], targetItems = [], scrollOffset,
        scrollTarget = element[offsetHeight] < element[scrollHeight] ? element : globalObject, // determine which is the real scrollTarget
        isWindow = scrollTarget === globalObject;  
  
    // populate items and targets
    for (var i=0, il=links[length]; i<il; i++) {
      var href = links[i][getAttribute]('href'), 
          targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);
      if ( !!targetItem ) {
        items[push](links[i]);
        targetItems[push](targetItem);
      }
    }
  
    // private methods
    var updateItem = function(index) {
        var item = items[index],
          targetItem = targetItems[index], // the menu item targets this element
          dropdown = item[parentNode][parentNode],
          dropdownLink = hasClass(dropdown,'dropdown') && dropdown[getElementsByTagName]('A')[0],
          targetRect = isWindow && targetItem[getBoundingClientRect](),
  
          isActive = hasClass(item,active) || false,
  
          topEdge = (isWindow ? targetRect[top] + scrollOffset : targetItem[offsetTop]) - offset,
          bottomEdge = isWindow ? targetRect[bottom] + scrollOffset - offset : targetItems[index+1] ? targetItems[index+1][offsetTop] - offset : element[scrollHeight],
  
          inside = scrollOffset >= topEdge && bottomEdge > scrollOffset;
  
        if ( !isActive && inside ) {
          if ( !hasClass(item,active) ) {
            addClass(item,active);
            if (dropdownLink && !hasClass(dropdownLink,active) ) {
              addClass(dropdownLink,active);
            }
            bootstrapCustomEvent.call(element, 'activate', 'scrollspy', items[index]);
          }
        } else if ( !inside ) {
          if ( hasClass(item,active) ) {
            removeClass(item,active);
            if (dropdownLink && hasClass(dropdownLink,active) && !getElementsByClassName(item[parentNode],active).length  ) {
              removeClass(dropdownLink,active);
            }
          }
        } else if ( !inside && !isActive || isActive && inside ) {
          return;
        }
      },
      updateItems = function(){
        scrollOffset = isWindow ? getScroll().y : element[scrollTop];
        for (var index=0, itl=items[length]; index<itl; index++) {
          updateItem(index)
        }
      };
  
    // public method
    this.refresh = function () {
      updateItems();
    }
  
    // init
    if ( !(stringScrollSpy in element) ) { // prevent adding event handlers twice
      on( scrollTarget, scrollEvent, self.refresh );
      on( globalObject, resizeEvent, self.refresh ); 
    }
    self.refresh();
    element[stringScrollSpy] = self;
  };
  
  // SCROLLSPY DATA API
  // ==================
  supports[push]( [ stringScrollSpy, ScrollSpy, '['+dataSpy+'="scroll"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tab
  -----------------------------------------*/
  
  // TAB DEFINITION
  // ==============
  var Tab = function( element, options ) {
  
    // initialization element
    element = queryElement(element);
  
    // DATA API
    var heightData = element[getAttribute](dataHeight),
      
        // strings
        component = 'tab', height = 'height', float = 'float', isAnimating = 'isAnimating';
        
    // set options
    options = options || {};
    this[height] = supportTransitions ? (options[height] || heightData === 'true') : false;
  
    // bind, event targets
    var self = this, next,
      tabs = getClosest(element,'.nav'),
      tabsContentContainer = false,
      dropdown = tabs && queryElement('.dropdown-toggle',tabs),
      activeTab, activeContent, nextContent, containerHeight, equalContents, nextHeight,
      
      // trigger
      triggerEnd = function(){
        tabsContentContainer[style][height] = '';
        removeClass(tabsContentContainer,collapsing);
        tabs[isAnimating] = false;
      },
      triggerShow = function() {
        if (tabsContentContainer) { // height animation
          if ( equalContents ) {
            triggerEnd();
          } else {
            setTimeout(function(){ // enables height animation
              tabsContentContainer[style][height] = nextHeight + 'px'; // height animation
              tabsContentContainer[offsetWidth];
              emulateTransitionEnd(tabsContentContainer, triggerEnd);
            },50);
          }
        } else {
          tabs[isAnimating] = false; 
        }
        bootstrapCustomEvent.call(next, shownEvent, component, activeTab);
      },
      triggerHide = function() {
        if (tabsContentContainer) {
          activeContent[style][float] = left;
          nextContent[style][float] = left;        
          containerHeight = activeContent[scrollHeight];
        }
          
        addClass(nextContent,active);
        bootstrapCustomEvent.call(next, showEvent, component, activeTab);
  
        removeClass(activeContent,active);
        bootstrapCustomEvent.call(activeTab, hiddenEvent, component, next);
        
        if (tabsContentContainer) {
          nextHeight = nextContent[scrollHeight];
          equalContents = nextHeight === containerHeight;
          addClass(tabsContentContainer,collapsing);
          tabsContentContainer[style][height] = containerHeight + 'px'; // height animation
          tabsContentContainer[offsetHeight];
          activeContent[style][float] = '';
          nextContent[style][float] = '';
        }
  
        if ( hasClass(nextContent, 'fade') ) {
          setTimeout(function(){
            addClass(nextContent,showClass);
            emulateTransitionEnd(nextContent,triggerShow);
          },20);
        } else { triggerShow(); }        
      };
  
    if (!tabs) return; // invalidate
  
    // set default animation state
    tabs[isAnimating] = false;    
          
    // private methods
    var getActiveTab = function() {
        var activeTabs = getElementsByClassName(tabs,active), activeTab;
        if ( activeTabs[length] === 1 && !hasClass(activeTabs[0][parentNode],'dropdown') ) {
          activeTab = activeTabs[0];
        } else if ( activeTabs[length] > 1 ) {
          activeTab = activeTabs[activeTabs[length]-1];
        }
        return activeTab;
      },
      getActiveContent = function() {
        return queryElement(getActiveTab()[getAttribute]('href'));
      },
      // handler 
      clickHandler = function(e) {
        var href = e[target][getAttribute]('href');
        e[preventDefault]();
        next = e[target][getAttribute](dataToggle) === component || (href && href.charAt(0) === '#')
             ? e[target] : e[target][parentNode]; // allow for child elements like icons to use the handler
        !tabs[isAnimating] && !hasClass(next,active) && self.show();
      };
  
    // public method
    this.show = function() { // the tab we clicked is now the next tab
      next = next || element;
      nextContent = queryElement(next[getAttribute]('href')); //this is the actual object, the next tab content to activate
      activeTab = getActiveTab(); 
      activeContent = getActiveContent();
      
      tabs[isAnimating] = true;
      removeClass(activeTab,active);
      addClass(next,active);
  
      if ( dropdown ) {
        if ( !hasClass(element[parentNode],'dropdown-menu') ) {
          if (hasClass(dropdown,active)) removeClass(dropdown,active);
        } else {
          if (!hasClass(dropdown,active)) addClass(dropdown,active);
        }
      }
      
      bootstrapCustomEvent.call(activeTab, hideEvent, component, next);
  
      if (hasClass(activeContent, 'fade')) {
        removeClass(activeContent,showClass);
        emulateTransitionEnd(activeContent, triggerHide);
      } else { triggerHide(); }
    };
  
    // init
    if ( !(stringTab in element) ) { // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }
    if (self[height]) { tabsContentContainer = getActiveContent()[parentNode]; }
    element[stringTab] = self;
  };
  
  // TAB DATA API
  // ============
  supports[push]( [ stringTab, Tab, '['+dataToggle+'="tab"]' ] );
  
  
  /* Native Javascript for Bootstrap 4 | Tooltip
  ---------------------------------------------*/
  
  // TOOLTIP DEFINITION
  // ==================
  var Tooltip = function( element,options ) {
  
    // initialization element
    element = queryElement(element);
  
    // set options
    options = options || {};
  
    // DATA API
    var animationData = element[getAttribute](dataAnimation),
        placementData = element[getAttribute](dataPlacement),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
        
        // strings
        component = 'tooltip',
        classString = 'class',
        title = 'title',
        fade = 'fade',
        div = 'div',
  
        // check container
        containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),      
  
        // maybe the element is inside a modal
        modal = getClosest(element,'.modal'),
        
        // maybe the element is inside a fixed navbar
        navbarFixedTop = getClosest(element,'.'+fixedTop),
        navbarFixedBottom = getClosest(element,'.'+fixedBottom);
  
    // set instance options
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[container] = containerElement ? containerElement 
                    : containerDataElement ? containerDataElement
                    : navbarFixedTop ? navbarFixedTop
                    : navbarFixedBottom ? navbarFixedBottom
                    : modal ? modal : DOC[body];
  
    // bind, event targets, title and constants
    var self = this, timer = 0, placementSetting = this[placement], tooltip = null,
      titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle);
  
    if ( !titleString || titleString == "" ) return; // invalidate
  
    // private methods
    var removeToolTip = function() {
        self[container].removeChild(tooltip);
        tooltip = null; timer = null;
      },
      createToolTip = function() {
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle); // read the title again
        if ( !titleString || titleString == "" ) return false; // invalidate
        tooltip = DOC[createElement](div);
        tooltip[setAttribute]('role',component);
  
        // tooltip arrow
        var tooltipArrow = DOC[createElement](div);
        tooltipArrow[setAttribute](classString,'arrow');
        tooltip[appendChild](tooltipArrow);
    
        var tooltipInner = DOC[createElement](div);
        tooltipInner[setAttribute](classString,component+'-inner');
        tooltip[appendChild](tooltipInner);
        tooltipInner[innerHTML] = titleString;
  
        self[container][appendChild](tooltip);
        tooltip[setAttribute](classString, component + ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
      },
      updateTooltip = function () {
        styleTip(element,tooltip,placementSetting,self[container]);
      },
      showTooltip = function () {
        !hasClass(tooltip,showClass) && ( addClass(tooltip,showClass) );
      },
      // triggers
      showTrigger = function() {
        on( globalObject, resizeEvent, self.hide );
        bootstrapCustomEvent.call(element, shownEvent, component);
      },
      hideTrigger = function() {
        off( globalObject, resizeEvent, self.hide );
        removeToolTip();
        bootstrapCustomEvent.call(element, hiddenEvent, component);
      };
  
    // public methods
    this.show = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip === null) {
          placementSetting = self[placement]; // we reset placement in all cases
          if(createToolTip() == false) return;
          updateTooltip();
          showTooltip();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(tooltip, showTrigger) : showTrigger();
        }
      }, 20 );
    };
    this.hide = function() {
      clearTimeout(timer);
      timer = setTimeout( function() {
        if (tooltip && hasClass(tooltip,showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(tooltip,showClass);
          !!self[animation] ? emulateTransitionEnd(tooltip, hideTrigger) : hideTrigger();
        }
      }, self[delay]);
    };
    this.toggle = function() {
      if (!tooltip) { self.show(); } 
      else { self.hide(); }
    };
  
    // init
    if ( !(stringTooltip in element) ) { // prevent adding event handlers twice
      element[setAttribute](dataOriginalTitle,titleString);
      element.removeAttribute(title);
      on(element, mouseHover[0], self.show);
      on(element, mouseHover[1], self.hide);
    }
    element[stringTooltip] = self;
  };
  
  // TOOLTIP DATA API
  // =================
  supports[push]( [ stringTooltip, Tooltip, '['+dataToggle+'="tooltip"]' ] );
  
  
  
  /* Native Javascript for Bootstrap 4 | Initialize Data API
  --------------------------------------------------------*/
  var initializeDataAPI = function( constructor, collection ){
      for (var i=0, l=collection[length]; i<l; i++) {
        new constructor(collection[i]);
      }
    },
    initCallback = BSN.initCallback = function(lookUp){
      lookUp = lookUp || DOC;
      for (var i=0, l=supports[length]; i<l; i++) {
        initializeDataAPI( supports[i][1], lookUp[querySelectorAll] (supports[i][2]) );
      }
    };
  
  // bulk initialize all components
  DOC[body] ? initCallback() : on( DOC, 'DOMContentLoaded', function(){ initCallback(); } );
  
  return {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Tooltip: Tooltip
  };
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (setImmediate,clearImmediate){
/*!
 * Naja.js
 * v1.5.0
 * 
 * by Jiří Pudil <https://jiripudil.cz>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.naja=t():e.naja=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";var r=e.exports.createUniqueKey="undefined"!=typeof Symbol?Symbol:function(e){return"[["+e+"_"+Math.random().toFixed(8).slice(2)+"]]"},i=e.exports.isObject=function(e){return"object"==typeof e&&null!==e};e.exports.LISTENERS=r("listeners"),e.exports.CAPTURE=1,e.exports.BUBBLE=2,e.exports.ATTRIBUTE=3,e.exports.newNode=function(e,t,n){var r=i(n);return{listener:e,kind:t,once:r&&Boolean(n.once),passive:r&&Boolean(n.passive),next:null}}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):y=-1,h.length&&u())}function u(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,v=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],v=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0),i=n(13),o=n(14),a=r.isObject,u=r.LISTENERS,s=r.CAPTURE,c=r.BUBBLE,l=r.ATTRIBUTE,f=r.newNode,p=i.defineCustomEventTarget,d=o.createEventWrapper,h=o.STOP_IMMEDIATE_PROPAGATION_FLAG,v=o.PASSIVE_LISTENER_FLAG,y="undefined"!=typeof window&&void 0!==window.EventTarget,m=e.exports=function e(){if(!(this instanceof e)){if(1===arguments.length&&Array.isArray(arguments[0]))return p(e,arguments[0]);if(arguments.length>0){for(var t=Array(arguments.length),n=0;n<arguments.length;++n)t[n]=arguments[n];return p(e,t)}throw new TypeError("Cannot call a class as a function")}Object.defineProperty(this,u,{value:Object.create(null)})};m.prototype=Object.create((y?window.EventTarget:Object).prototype,{constructor:{value:m,writable:!0,configurable:!0},addEventListener:{value:function(e,t,n){if(null==t)return!1;if("function"!=typeof t&&"object"!=typeof t)throw new TypeError('"listener" is not an object.');var r=a(n)?Boolean(n.capture):Boolean(n),i=r?s:c,o=this[u][e];if(null==o)return this[u][e]=f(t,i,n),!0;for(var l=null;null!=o;){if(o.listener===t&&o.kind===i)return!1;l=o,o=o.next}return l.next=f(t,i,n),!0},configurable:!0,writable:!0},removeEventListener:{value:function(e,t,n){if(null==t)return!1;for(var r=a(n)?Boolean(n.capture):Boolean(n),i=r?s:c,o=null,l=this[u][e];null!=l;){if(l.listener===t&&l.kind===i)return null==o?this[u][e]=l.next:o.next=l.next,!0;o=l,l=l.next}return!1},configurable:!0,writable:!0},dispatchEvent:{value:function(e){var t=e.type,n=this[u][t];if(null==n)return!0;for(var r=d(e,this),i=null;null!=n&&(n.once?null==i?this[u][t]=n.next:i.next=n.next:i=n,r[v]=n.passive,"function"==typeof n.listener?n.listener.call(this,r):n.kind!==l&&"function"==typeof n.listener.handleEvent&&n.listener.handleEvent(r),!r[h]);)n=n.next;return!r.defaultPrevented},configurable:!0,writable:!0}})},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(21),u=r(a),s=n(22),c=r(s),l=new o.default;l.registerExtension(u.default),l.registerExtension(c.default),t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),f=r(l),p=n(12),d=r(p),h=n(2),v=r(h),y=n(15),m=r(y),b=n(16),w=r(b),g=n(17),T=r(g),E=n(18),j=r(E),x=n(19),O=r(x),k=n(20),_=r(k),L=function(e){function t(e,n,r,i,u,s){o(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return c.initialized=!1,c.uiHandler=null,c.redirectHandler=null,c.snippetHandler=null,c.formsHandler=null,c.historyHandler=null,c.scriptLoader=null,c.extensions=[],c.defaultOptions={},c.uiHandler=e?new e(c):new m.default(c),c.redirectHandler=n?new n(c):new T.default(c),c.snippetHandler=r?new r(c):new j.default(c),c.formsHandler=i?new i(c):new w.default(c),c.historyHandler=u?new u(c):new O.default(c),c.scriptLoader=s?new s(c):new _.default(c),c}return u(t,e),c(t,[{key:"registerExtension",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.extensions.push([e,n])}},{key:"initialize",value:function(){var e=this;if(this.initialized)throw new Error("Cannot initialize Naja, it is already initialized.");this.extensions=this.extensions.map(function(t){var n=s(t,2),r=n[0],o=n[1];return new(Function.prototype.bind.apply(r,[null].concat([e],i(o))))}),this.fireEvent("init"),this.initialized=!0,this.load()}},{key:"load",value:function(){this.fireEvent("load")}},{key:"fireEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,d.default)(t,{type:e,cancelable:!0});return this.dispatchEvent(n)}},{key:"makeRequest",value:function(e,t,n,r){var i=this,o={dataType:"post",responseType:"auto"};r=(0,d.default)({},o,this.defaultOptions,r||{});var a=void 0,u=function(o){a=o,i.fireEvent("before",{xhr:o,method:e,url:t,data:n,options:r})||o.abort(),o.addEventListener("abort",function(){i.fireEvent("abort",{xhr:o}),i.fireEvent("complete",{error:new Error("Request aborted"),xhr:o,response:null,options:r})})},s=f.default.map(e,t,n,r,u).then(function(e,t){return i.fireEvent("success",{xhr:e,response:t,options:r}),i.fireEvent("complete",{error:null,xhr:e,response:t,options:r}),i.load(),t}).catch(function(e,t,n){throw i.fireEvent("error",{error:e,xhr:t,response:n,options:r}),i.fireEvent("complete",{error:e,xhr:t,response:n,options:r}),i.load(),e});return this.fireEvent("start",{request:s,xhr:a}),s}}]),t}(v.default);t.default=L},function(e,t,n){e.exports=function(){var e="undefined"!=typeof window?window:self,t=n(7),r=n(11),i={},o="json",a="post",u=null,s=0,c=[],l=e.XMLHttpRequest?function(){return new e.XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")},f=""===l().responseType,p=function(n,p,d,h,v){n=n.toUpperCase(),d=void 0===d?null:d,h=h||{};for(var y in i)if(!(y in h))if("object"==typeof i[y]&&"object"==typeof h[y])for(var m in i[y])h[y][m]=i[y][m];else h[y]=i[y];var b,w,g,T,E,j=!1,x=!1,O=!1,k=0,_={},L={text:"*/*",xml:"text/xml",json:"application/json",post:"application/x-www-form-urlencoded",document:"text/html"},S={text:"*/*",xml:"application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",json:"application/json; q=1.0, text/*; q=0.8, */*; q=0.1"},P=!1,A=t(function(t){return t.abort=function(){O||(w&&4!=w.readyState&&w.abort(),P&&(--s,P=!1),O=!0)},t.send=function(){if(!P){if(s==u)return void c.push(t);if(O)return void(c.length&&c.shift().send());if(++s,P=!0,w=l(),b&&("withCredentials"in w||!e.XDomainRequest||(w=new XDomainRequest,x=!0,"GET"!=n&&"POST"!=n&&(n="POST"))),x?w.open(n,p):(w.open(n,p,h.async,h.user,h.password),f&&h.async&&(w.withCredentials=h.withCredentials)),!x)for(var r in _)_[r]&&w.setRequestHeader(r,_[r]);if(f&&"auto"!=h.responseType)try{w.responseType=h.responseType,j=w.responseType==h.responseType}catch(e){}f||x?(w.onload=M,w.onerror=C,x&&(w.onprogress=function(){})):w.onreadystatechange=function(){4==w.readyState&&M()},h.async?"timeout"in w?(w.timeout=h.timeout,w.ontimeout=I):g=setTimeout(I,h.timeout):x&&(w.ontimeout=function(){}),"auto"!=h.responseType&&"overrideMimeType"in w&&w.overrideMimeType(L[h.responseType]),v&&v(w),x?setTimeout(function(){w.send("GET"!=n?d:null)},0):w.send("GET"!=n?d:null)}},t}),M=function(){var t;if(P=!1,clearTimeout(g),c.length&&c.shift().send(),!O){--s;try{if(j){if("response"in w&&null===w.response)throw"The request response is empty";E=w.response}else{if("auto"==(t=h.responseType))if(x)t=o;else{var n=w.getResponseHeader("Content-Type")||"";t=n.indexOf(L.json)>-1?"json":n.indexOf(L.xml)>-1?"xml":"text"}switch(t){case"json":if(w.responseText.length)try{E="JSON"in e?JSON.parse(w.responseText):new Function("return ("+w.responseText+")")()}catch(e){throw"Error while parsing JSON body : "+e}break;case"xml":try{e.DOMParser?E=(new DOMParser).parseFromString(w.responseText,"text/xml"):(E=new ActiveXObject("Microsoft.XMLDOM"),E.async="false",E.loadXML(w.responseText))}catch(e){E=void 0}if(!E||!E.documentElement||E.getElementsByTagName("parsererror").length)throw"Invalid XML";break;default:E=w.responseText}}if("status"in w&&!/^2|1223/.test(w.status))throw w.status+" ("+w.statusText+")";A(!0,[w,E])}catch(e){A(!1,[e,w,E])}}},C=function(e){O||(e="string"==typeof e?e:"Connection aborted",A.abort(),A(!1,[new Error(e),w,null]))},I=function(){O||(h.attempts&&++k==h.attempts?C("Timeout ("+p+")"):(w.abort(),P=!1,A.send()))};if(h.async=!("async"in h)||!!h.async,h.cache="cache"in h&&!!h.cache,h.dataType="dataType"in h?h.dataType.toLowerCase():a,h.responseType="responseType"in h?h.responseType.toLowerCase():"auto",h.user=h.user||"",h.password=h.password||"",h.withCredentials=!!h.withCredentials,h.timeout="timeout"in h?parseInt(h.timeout,10):3e4,h.attempts="attempts"in h?parseInt(h.attempts,10):1,T=p.match(/\/\/(.+?)\//),b=T&&!!T[1]&&T[1]!=location.host,"ArrayBuffer"in e&&d instanceof ArrayBuffer?h.dataType="arraybuffer":"Blob"in e&&d instanceof Blob?h.dataType="blob":"Document"in e&&d instanceof Document?h.dataType="document":"FormData"in e&&d instanceof FormData&&(h.dataType="formdata"),null!==d)switch(h.dataType){case"json":d=JSON.stringify(d);break;case"post":case"queryString":d=r(d)}if(h.headers){var R=function(e,t,n){return t+n.toUpperCase()};for(T in h.headers)_[T.replace(/(^|-)([^-])/g,R)]=h.headers[T]}return"Content-Type"in _||"GET"==n||h.dataType in L&&L[h.dataType]&&(_["Content-Type"]=L[h.dataType]),_.Accept||(_.Accept=h.responseType in S?S[h.responseType]:"*/*"),b||"X-Requested-With"in _||(_["X-Requested-With"]="XMLHttpRequest"),h.cache||"Cache-Control"in _||(_["Cache-Control"]="no-cache"),"GET"!=n&&"queryString"!=h.dataType||!d||"string"!=typeof d||(p+=(/\?/.test(p)?"&":"?")+d),h.async&&A.send(),A},d=function(e){var n=[],r=0,i=[];return t(function(t){var o=-1,a=function(e){return function(a,u,s,c){var l=++o;return++r,n.push(p(e,t.base+a,u,s,c).then(function(e,n){i[l]=arguments,--r||t(!0,1==i.length?i[0]:[i])},function(){t(!1,arguments)})),t}};t.get=a("GET"),t.post=a("POST"),t.put=a("PUT"),t.delete=a("DELETE"),t.catch=function(e){return t.then(null,e)},t.complete=function(e){var n=function(){e()};return t.then(n,n)},t.map=function(e,t,n,r,i){return a(e.toUpperCase()).call(this,t,n,r,i)};for(var u in e)u in t||(t[u]=e[u]);return t.send=function(){for(var e=0,r=n.length;e<r;++e)n[e].send();return t},t.abort=function(){for(var e=0,r=n.length;e<r;++e)n[e].abort();return t},t})},h={base:"",get:function(){return d(h).get.apply(this,arguments)},post:function(){return d(h).post.apply(this,arguments)},put:function(){return d(h).put.apply(this,arguments)},delete:function(){return d(h).delete.apply(this,arguments)},map:function(){return d(h).map.apply(this,arguments)},xhr2:f,limit:function(e){return u=e,h},setDefaultOptions:function(e){return i=e,h},setDefaultXdrResponseType:function(e){return o=e.toLowerCase(),h},setDefaultDataType:function(e){return a=e.toLowerCase(),h},getOpenRequests:function(){return s}};return h}()},function(e,t,n){(function(n,r){var i,o,a;!function(n,r){o=[],i=r,void 0!==(a="function"==typeof i?i.apply(t,o):i)&&(e.exports=a)}(0,function(){function e(e){return"function"==typeof e}function t(e){return"object"==typeof e}function i(e){void 0!==n?n(e):void 0!==r&&r.nextTick?r.nextTick(e):setTimeout(e,0)}var o;return function n(r){var a,u=[],s=[],c=function(e,t){return null==a&&null!=e&&(a=e,u=t,s.length&&i(function(){for(var e=0;e<s.length;e++)s[e]()})),a};return c.then=function(c,l){var f=n(r),p=function(){function n(r){var i,a=0;try{if(r&&(t(r)||e(r))&&e(i=r.then)){if(r===f)throw new TypeError;i.call(r,function(){a++||n.apply(o,arguments)},function(e){a++||f(!1,[e])})}else f(!0,arguments)}catch(e){a++||f(!1,[e])}}try{var r=a?c:l;e(r)?n(r.apply(o,u||[])):f(a,u)}catch(e){f(!1,[e])}};return null!=a?i(p):s.push(p),f},r&&(c=r(c)),c}})}).call(t,n(8).setImmediate,n(1))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(9),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[s]=r,u(s),s++}function i(e){delete c[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=c[e];if(t){l=!0;try{o(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var u,s=1,c={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),p.setImmediate=r,p.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(10),n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r,i;!function(n){"use strict";var o=function(e){var t=function(e,t,n){n="function"==typeof n?n():null===n?"":void 0===n?"":n,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)},n=function(e,r,i){var o,a,u;if("[object Array]"===Object.prototype.toString.call(r))for(o=0,a=r.length;o<a;o++)n(e+"["+("object"==typeof r[o]?o:"")+"]",r[o],i);else if(r&&"[object Object]"===r.toString())for(u in r)r.hasOwnProperty(u)&&(e?n(e+"["+u+"]",r[u],i,t):n(u,r[u],i,t));else if(e)t(i,e,r);else for(u in r)t(i,u,r[u]);return i};return n("",e,[]).join("&").replace(/%20/g,"+")};"object"==typeof e&&"object"==typeof e.exports?e.exports=o:(r=[],void 0!==(i=function(){return o}.apply(t,r))&&(e.exports=i))}()},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)o.call(n,l)&&(s[l]=n[l]);if(i){u=i(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";function r(e,t){for(var n=e[a][t];null!=n;){if(n.kind===u)return n.listener;n=n.next}return null}function i(e,t,n){"function"!=typeof n&&"object"!=typeof n&&(n=null);for(var r=null,i=e[a][t];null!=i;)i.kind===u?null==r?e[a][t]=i.next:r.next=i.next:r=i,i=i.next;null!=n&&(null==r?e[a][t]=s(n,u):r.next=s(n,u))}var o=n(0),a=o.LISTENERS,u=o.ATTRIBUTE,s=o.newNode;e.exports.defineCustomEventTarget=function(e,t){function n(){e.call(this)}var o={constructor:{value:n,configurable:!0,writable:!0}};return t.forEach(function(e){o["on"+e]={get:function(){return r(this,e)},set:function(t){i(this,e,t)},configurable:!0,enumerable:!0}}),n.prototype=Object.create(e.prototype,o),n}},function(e,t,n){"use strict";var r=n(0).createUniqueKey,i=r("stop_immediate_propagation_flag"),o=r("canceled_flag"),a=r("passive_listener_flag"),u=r("original_event"),s=Object.freeze({stopPropagation:Object.freeze({value:function(){var e=this[u];"function"==typeof e.stopPropagation&&e.stopPropagation()},writable:!0,configurable:!0}),stopImmediatePropagation:Object.freeze({value:function(){this[i]=!0;var e=this[u];"function"==typeof e.stopImmediatePropagation&&e.stopImmediatePropagation()},writable:!0,configurable:!0}),preventDefault:Object.freeze({value:function(){if(!this[a]){!0===this.cancelable&&(this[o]=!0);var e=this[u];"function"==typeof e.preventDefault&&e.preventDefault()}},writable:!0,configurable:!0}),defaultPrevented:Object.freeze({get:function(){return this[o]},enumerable:!0,configurable:!0})});e.exports.STOP_IMMEDIATE_PROPAGATION_FLAG=i,e.exports.PASSIVE_LISTENER_FLAG=a,e.exports.createEventWrapper=function(e,t){var n="number"==typeof e.timeStamp?e.timeStamp:Date.now(),r={type:{value:e.type,enumerable:!0},target:{value:t,enumerable:!0},currentTarget:{value:t,enumerable:!0},eventPhase:{value:2,enumerable:!0},bubbles:{value:Boolean(e.bubbles),enumerable:!0},cancelable:{value:Boolean(e.cancelable),enumerable:!0},timeStamp:{value:n,enumerable:!0},isTrusted:{value:!1,enumerable:!0}};return r[i]={value:!1,writable:!0},r[o]={value:!1,writable:!0},r[a]={value:!1,writable:!0},r[u]={value:e},void 0!==e.detail&&(r.detail={value:e.detail,enumerable:!0}),Object.create(Object.create(e,s),r)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.selector=".ajax",this.allowedOrigins=[],this.naja=t;var n=this.handleUI.bind(this);t.addEventListener("load",this.bindUI.bind(this,n));var i=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");this.allowedOrigins.push(i)}return i(e,[{key:"bindUI",value:function(e){for(var t=["a"+this.selector,'input[type="submit"]'+this.selector,'input[type="image"]'+this.selector,'button[type="submit"]'+this.selector,"form"+this.selector+' input[type="submit"]',"form"+this.selector+' input[type="image"]',"form"+this.selector+' button[type="submit"]'].join(", "),n=document.querySelectorAll(t),r=0;r<n.length;r++){var i=n.item(r);i.removeEventListener("click",e),i.addEventListener("click",e)}for(var o=document.querySelectorAll("form"+this.selector),a=0;a<o.length;a++){var u=o.item(a);u.removeEventListener("submit",e),u.addEventListener("submit",e)}}},{key:"handleUI",value:function(e){if(!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||e.button)){var t=e.currentTarget,n={};"submit"===e.type?this.submitForm(t,n,e):"click"===e.type&&this.clickElement(t,n,e)}}},{key:"clickElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2],r=void 0,i=void 0,o=void 0;if(!this.naja.fireEvent("interaction",{element:e,originalEvent:n,options:t}))return void(n&&n.preventDefault());if("a"===e.tagName.toLowerCase())r="GET",i=e.href,o=null;else if("input"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()){var a=e.form;if(r=a.method?a.method.toUpperCase():"GET",i=a.action||window.location.pathname+window.location.search,o=new FormData(a),"submit"===e.type||"button"===e.tagName.toLowerCase())o.append(e.name,e.value||"");else if("image"===e.type){var u=e.getBoundingClientRect();o.append(e.name+".x",Math.max(0,Math.floor(n.pageX-u.left))),o.append(e.name+".y",Math.max(0,Math.floor(n.pageY-u.top)))}}this.isUrlAllowed(i)&&(n&&n.preventDefault(),this.naja.makeRequest(r,i,o,t))}},{key:"submitForm",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(!this.naja.fireEvent("interaction",{element:e,originalEvent:n,options:t}))return void(n&&n.preventDefault());var r=e.method?e.method.toUpperCase():"GET",i=e.action||window.location.pathname+window.location.search,o=new FormData(e);this.isUrlAllowed(i)&&(n&&n.preventDefault(),this.naja.makeRequest(r,i,o,t))}},{key:"isUrlAllowed",value:function(e){return!/^(?!https?)[^:\/?#]+:/i.test(e)&&(!/^https?/i.test(e)||this.allowedOrigins.some(function(t){return new RegExp("^"+t,"i").test(e)}))}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),t.addEventListener("load",this.initForms.bind(this)),t.addEventListener("interaction",this.processForm.bind(this))}return i(e,[{key:"initForms",value:function(){var e=this.netteForms||window.Nette;if(e)for(var t=window.document.querySelectorAll("form"),n=0;n<t.length;n++)e.initForm(t.item(n))}},{key:"processForm",value:function(e){var t=e.element,n=e.originalEvent;t.form&&(t.form["nette-submittedBy"]=t);var r=this.netteForms||window.Nette;"form"!==t.tagName&&!t.form||!r||r.validateForm(t)||(n&&(n.stopImmediatePropagation(),n.preventDefault()),e.preventDefault())}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),this.naja=t,t.addEventListener("success",function(e){var t=e.response,r=e.options;t.redirect&&(n.makeRedirect(t.redirect,t.forceRedirect||r.forceRedirect),e.stopImmediatePropagation())}),this.locationAdapter={assign:function(e){return window.location.assign(e)}}}return i(e,[{key:"makeRedirect",value:function(e,t){var n=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),r=/^https?/i.test(e)&&!new RegExp("^"+n,"i").test(e);t||r?this.locationAdapter.assign(e):this.naja.makeRequest("GET",e)}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.addEventListener("success",function(e){var t=e.response;t.snippets&&n.updateSnippets(t.snippets)}),n}return o(t,e),a(t,[{key:"updateSnippets",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(e).forEach(function(r){var i=document.getElementById(r);i&&t.updateSnippet(i,e[r],n)})}},{key:"updateSnippet",value:function(e,t,n){this.dispatchEvent({type:"beforeUpdate",cancelable:!0,snippet:e,content:t})&&("title"===e.tagName.toLowerCase()?document.title=t:!e.hasAttribute("data-naja-snippet-prepend")&&!e.hasAttribute("data-ajax-prepend")||n?!e.hasAttribute("data-naja-snippet-append")&&!e.hasAttribute("data-ajax-append")||n?e.innerHTML=t:e.innerHTML=e.innerHTML+t:e.innerHTML=t+e.innerHTML,this.dispatchEvent({type:"afterUpdate",cancelable:!0,snippet:e,content:t}))}}]),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.href=null,this.naja=t,t.addEventListener("init",this.initialize.bind(this)),t.addEventListener("interaction",this.configureMode.bind(this)),t.addEventListener("before",this.saveUrl.bind(this)),t.addEventListener("success",this.pushNewState.bind(this)),this.popStateHandler=this.handlePopState.bind(this),this.historyAdapter={replaceState:function(e,t,n){return window.history.replaceState(e,t,n)},pushState:function(e,t,n){return window.history.pushState(e,t,n)}}}return i(e,[{key:"initialize",value:function(){window.addEventListener("popstate",this.popStateHandler),this.historyAdapter.replaceState({href:window.location.href,title:window.document.title,ui:this.findSnippets()},window.document.title,window.location.href)}},{key:"handlePopState",value:function(e){e.state&&e.state.ui&&(this.handleSnippets(e.state.ui),this.handleTitle(e.state.title))}},{key:"saveUrl",value:function(e){var t=e.url;this.href=t}},{key:"configureMode",value:function(e){var t=e.element;e.options.history=this.constructor.normalizeMode(t.getAttribute("data-naja-history"))}},{key:"pushNewState",value:function(e){var t=e.response,n=e.options,r=this.constructor.normalizeMode(n.history);if(!1!==r){t.postGet&&t.url&&(this.href=t.url);var i=t.replaceHistory||"replace"===r?"replaceState":"pushState";this.historyAdapter[i]({href:this.href,title:window.document.title,ui:this.findSnippets()},window.document.title,this.href),this.href=null}}},{key:"findSnippets",value:function(){for(var e={},t=window.document.querySelectorAll('[id^="snippet-"]'),n=0;n<t.length;n++){var r=t.item(n);r.hasAttribute("data-naja-history-nocache")||r.hasAttribute("data-history-nocache")||(e[r.id]=r.innerHTML)}return e}},{key:"handleSnippets",value:function(e){this.naja.snippetHandler.updateSnippets(e,!0),this.naja.scriptLoader.loadScripts(e),this.naja.load()}},{key:"handleTitle",value:function(e){window.document.title=e}}],[{key:"normalizeMode",value:function(e){return"off"!==e&&!1!==e&&("replace"!==e||"replace")}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),t.addEventListener("success",function(e){var t=e.response;t.snippets&&n.loadScripts(t.snippets)})}return i(e,[{key:"loadScripts",value:function(e){Object.keys(e).forEach(function(t){var n=e[t];if(/<script/i.test(n)){var r=window.document.createElement("div");r.innerHTML=n;for(var i=r.querySelectorAll("script"),o=0;o<i.length;o++){var a=i.item(o),u=window.document.createElement("script");if(u.innerHTML=a.innerHTML,a.hasAttributes())for(var s=a.attributes,c=0;c<s.length;c++){var l=s[c].name;u[l]=s[c].value}window.document.head.appendChild(u).parentNode.removeChild(u)}}})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.abortable=!0,this.xhr=null,t.addEventListener("init",this.initialize.bind(this)),t.addEventListener("interaction",this.checkAbortable.bind(this)),t.addEventListener("before",this.checkAbortable.bind(this)),t.addEventListener("start",this.saveXhr.bind(this)),t.addEventListener("complete",this.clearXhr.bind(this))}return i(e,[{key:"initialize",value:function(){var e=this;document.addEventListener("keydown",function(t){e.xhr&&("key"in t?"Escape"===t.key:27===t.keyCode)&&!(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)&&e.abortable&&(e.xhr.abort(),e.xhr=null)})}},{key:"checkAbortable",value:function(e){var t=e.element,n=e.options;this.abortable=t?"off"!==t.getAttribute("data-naja-abort"):!1!==n.abort,n.abort=this.abortable}},{key:"saveXhr",value:function(e){var t=e.xhr;this.xhr=t}},{key:"clearXhr",value:function(){this.xhr=null,this.abortable=!0}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.xhr=null,t.addEventListener("interaction",this.checkUniqueness.bind(this)),t.addEventListener("before",this.abortPreviousRequest.bind(this)),t.addEventListener("complete",this.clearRequest.bind(this))}return i(e,[{key:"checkUniqueness",value:function(e){var t=e.element;e.options.unique="off"!==t.getAttribute("data-naja-unique")}},{key:"abortPreviousRequest",value:function(e){var t=e.xhr,n=e.options;this.xhr&&!1!==n.unique&&this.xhr.abort(),this.xhr=t}},{key:"clearRequest",value:function(){this.xhr=null}}]),e}();t.default=o}]).default});

}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"timers":6}],4:[function(require,module,exports){
/**
 * NetteForms - simple form validation.
 *
 * This file is part of the Nette Framework (https://nette.org)
 * Copyright (c) 2004 David Grudl (https://davidgrudl.com)
 */

(function(global, factory) {
	if (!global.JSON) {
		return;
	}

	if (typeof define === 'function' && define.amd) {
		define(function() {
			return factory(global);
		});
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(global);
	} else {
		var init = !global.Nette || !global.Nette.noInit;
		global.Nette = factory(global);
		if (init) {
			global.Nette.initOnLoad();
		}
	}

}(typeof window !== 'undefined' ? window : this, function(window) {

'use strict';

var Nette = {};

Nette.formErrors = [];
Nette.version = '2.4';


/**
 * Attaches a handler to an event for the element.
 */
Nette.addEvent = function(element, on, callback) {
	if (element.addEventListener) {
		element.addEventListener(on, callback);
	} else if (on === 'DOMContentLoaded') {
		element.attachEvent('onreadystatechange', function() {
			if (element.readyState === 'complete') {
				callback.call(this);
			}
		});
	} else {
		element.attachEvent('on' + on, getHandler(callback));
	}
};


function getHandler(callback) {
	return function(e) {
		return callback.call(this, e);
	};
}


/**
 * Returns the value of form element.
 */
Nette.getValue = function(elem) {
	var i;
	if (!elem) {
		return null;

	} else if (!elem.tagName) { // RadioNodeList, HTMLCollection, array
		return elem[0] ? Nette.getValue(elem[0]) : null;

	} else if (elem.type === 'radio') {
		var elements = elem.form.elements; // prevents problem with name 'item' or 'namedItem'
		for (i = 0; i < elements.length; i++) {
			if (elements[i].name === elem.name && elements[i].checked) {
				return elements[i].value;
			}
		}
		return null;

	} else if (elem.type === 'file') {
		return elem.files || elem.value;

	} else if (elem.tagName.toLowerCase() === 'select') {
		var index = elem.selectedIndex,
			options = elem.options,
			values = [];

		if (elem.type === 'select-one') {
			return index < 0 ? null : options[index].value;
		}

		for (i = 0; i < options.length; i++) {
			if (options[i].selected) {
				values.push(options[i].value);
			}
		}
		return values;

	} else if (elem.name && elem.name.match(/\[\]$/)) { // multiple elements []
		var elements = elem.form.elements[elem.name].tagName ? [elem] : elem.form.elements[elem.name],
			values = [];

		for (i = 0; i < elements.length; i++) {
			if (elements[i].type !== 'checkbox' || elements[i].checked) {
				values.push(elements[i].value);
			}
		}
		return values;

	} else if (elem.type === 'checkbox') {
		return elem.checked;

	} else if (elem.tagName.toLowerCase() === 'textarea') {
		return elem.value.replace("\r", '');

	} else {
		return elem.value.replace("\r", '').replace(/^\s+|\s+$/g, '');
	}
};


/**
 * Returns the effective value of form element.
 */
Nette.getEffectiveValue = function(elem) {
	var val = Nette.getValue(elem);
	if (elem.getAttribute) {
		if (val === elem.getAttribute('data-nette-empty-value')) {
			val = '';
		}
	}
	return val;
};


/**
 * Validates form element against given rules.
 */
Nette.validateControl = function(elem, rules, onlyCheck, value, emptyOptional) {
	elem = elem.tagName ? elem : elem[0]; // RadioNodeList
	rules = rules || Nette.parseJSON(elem.getAttribute('data-nette-rules'));
	value = value === undefined ? {value: Nette.getEffectiveValue(elem)} : value;

	for (var id = 0, len = rules.length; id < len; id++) {
		var rule = rules[id],
			op = rule.op.match(/(~)?([^?]+)/),
			curElem = rule.control ? elem.form.elements.namedItem(rule.control) : elem;

		rule.neg = op[1];
		rule.op = op[2];
		rule.condition = !!rule.rules;

		if (!curElem) {
			continue;
		} else if (rule.op === 'optional') {
			emptyOptional = !Nette.validateRule(elem, ':filled', null, value);
			continue;
		} else if (emptyOptional && !rule.condition && rule.op !== ':filled') {
			continue;
		}

		curElem = curElem.tagName ? curElem : curElem[0]; // RadioNodeList
		var curValue = elem === curElem ? value : {value: Nette.getEffectiveValue(curElem)},
			success = Nette.validateRule(curElem, rule.op, rule.arg, curValue);

		if (success === null) {
			continue;
		} else if (rule.neg) {
			success = !success;
		}

		if (rule.condition && success) {
			if (!Nette.validateControl(elem, rule.rules, onlyCheck, value, rule.op === ':blank' ? false : emptyOptional)) {
				return false;
			}
		} else if (!rule.condition && !success) {
			if (Nette.isDisabled(curElem)) {
				continue;
			}
			if (!onlyCheck) {
				var arr = Nette.isArray(rule.arg) ? rule.arg : [rule.arg],
					message = rule.msg.replace(/%(value|\d+)/g, function(foo, m) {
						return Nette.getValue(m === 'value' ? curElem : elem.form.elements.namedItem(arr[m].control));
					});
				Nette.addError(curElem, message);
			}
			return false;
		}
	}

	if (elem.type === 'number' && !elem.validity.valid) {
		if (!onlyCheck) {
			Nette.addError(elem, 'Please enter a valid value.');
		}
		return false;
	}

	return true;
};


/**
 * Validates whole form.
 */
Nette.validateForm = function(sender, onlyCheck) {
	var form = sender.form || sender,
		scope = false;

	Nette.formErrors = [];

	if (form['nette-submittedBy'] && form['nette-submittedBy'].getAttribute('formnovalidate') !== null) {
		var scopeArr = Nette.parseJSON(form['nette-submittedBy'].getAttribute('data-nette-validation-scope'));
		if (scopeArr.length) {
			scope = new RegExp('^(' + scopeArr.join('-|') + '-)');
		} else {
			Nette.showFormErrors(form, []);
			return true;
		}
	}

	var radios = {}, i, elem;

	for (i = 0; i < form.elements.length; i++) {
		elem = form.elements[i];

		if (elem.tagName && !(elem.tagName.toLowerCase() in {input: 1, select: 1, textarea: 1, button: 1})) {
			continue;

		} else if (elem.type === 'radio') {
			if (radios[elem.name]) {
				continue;
			}
			radios[elem.name] = true;
		}

		if ((scope && !elem.name.replace(/]\[|\[|]|$/g, '-').match(scope)) || Nette.isDisabled(elem)) {
			continue;
		}

		if (!Nette.validateControl(elem, null, onlyCheck) && !Nette.formErrors.length) {
			return false;
		}
	}
	var success = !Nette.formErrors.length;
	Nette.showFormErrors(form, Nette.formErrors);
	return success;
};


/**
 * Check if input is disabled.
 */
Nette.isDisabled = function(elem) {
	if (elem.type === 'radio') {
		for (var i = 0, elements = elem.form.elements; i < elements.length; i++) {
			if (elements[i].name === elem.name && !elements[i].disabled) {
				return false;
			}
		}
		return true;
	}
	return elem.disabled;
};


/**
 * Adds error message to the queue.
 */
Nette.addError = function(elem, message) {
	Nette.formErrors.push({
		element: elem,
		message: message
	});
};


/**
 * Display error messages.
 */
Nette.showFormErrors = function(form, errors) {
	var messages = [],
		focusElem;

	for (var i = 0; i < errors.length; i++) {
		var elem = errors[i].element,
			message = errors[i].message;

		if (!Nette.inArray(messages, message)) {
			messages.push(message);

			if (!focusElem && elem.focus) {
				focusElem = elem;
			}
		}
	}

	if (messages.length) {
		alert(messages.join('\n'));

		if (focusElem) {
			focusElem.focus();
		}
	}
};


/**
 * Expand rule argument.
 */
Nette.expandRuleArgument = function(form, arg) {
	if (arg && arg.control) {
		var control = form.elements.namedItem(arg.control),
			value = {value: Nette.getEffectiveValue(control)};
		Nette.validateControl(control, null, true, value);
		arg = value.value;
	}
	return arg;
};


/**
 * Validates single rule.
 */
Nette.validateRule = function(elem, op, arg, value) {
	value = value === undefined ? {value: Nette.getEffectiveValue(elem)} : value;

	if (op.charAt(0) === ':') {
		op = op.substr(1);
	}
	op = op.replace('::', '_');
	op = op.replace(/\\/g, '');

	var arr = Nette.isArray(arg) ? arg.slice(0) : [arg];
	for (var i = 0, len = arr.length; i < len; i++) {
		arr[i] = Nette.expandRuleArgument(elem.form, arr[i]);
	}
	return Nette.validators[op]
		? Nette.validators[op](elem, Nette.isArray(arg) ? arr : arr[0], value.value, value)
		: null;
};


Nette.validators = {
	filled: function(elem, arg, val) {
		if (elem.type === 'number' && elem.validity.badInput) {
			return true;
		}
		return val !== '' && val !== false && val !== null
			&& (!Nette.isArray(val) || !!val.length)
			&& (!window.FileList || !(val instanceof window.FileList) || val.length);
	},

	blank: function(elem, arg, val) {
		return !Nette.validators.filled(elem, arg, val);
	},

	valid: function(elem, arg, val) {
		return Nette.validateControl(elem, null, true);
	},

	equal: function(elem, arg, val) {
		if (arg === undefined) {
			return null;
		}

		function toString(val) {
			if (typeof val === 'number' || typeof val === 'string') {
				return '' + val;
			} else {
				return val === true ? '1' : '';
			}
		}

		val = Nette.isArray(val) ? val : [val];
		arg = Nette.isArray(arg) ? arg : [arg];
		loop:
		for (var i1 = 0, len1 = val.length; i1 < len1; i1++) {
			for (var i2 = 0, len2 = arg.length; i2 < len2; i2++) {
				if (toString(val[i1]) === toString(arg[i2])) {
					continue loop;
				}
			}
			return false;
		}
		return true;
	},

	notEqual: function(elem, arg, val) {
		return arg === undefined ? null : !Nette.validators.equal(elem, arg, val);
	},

	minLength: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.tooShort) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		return val.length >= arg;
	},

	maxLength: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.tooLong) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		return val.length <= arg;
	},

	length: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.tooShort || elem.validity.tooLong) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		arg = Nette.isArray(arg) ? arg : [arg, arg];
		return (arg[0] === null || val.length >= arg[0]) && (arg[1] === null || val.length <= arg[1]);
	},

	email: function(elem, arg, val) {
		return (/^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+\/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+\/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i).test(val);
	},

	url: function(elem, arg, val, value) {
		if (!(/^[a-z\d+.-]+:/).test(val)) {
			val = 'http://' + val;
		}
		if ((/^https?:\/\/((([-_0-9a-z\u00C0-\u02FF\u0370-\u1EFF]+\.)*[0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)?[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-f:]{3,39}\])(:\d{1,5})?(\/\S*)?$/i).test(val)) {
			value.value = val;
			return true;
		}
		return false;
	},

	regexp: function(elem, arg, val) {
		var parts = typeof arg === 'string' ? arg.match(/^\/(.*)\/([imu]*)$/) : false;
		try {
			return parts && (new RegExp(parts[1], parts[2].replace('u', ''))).test(val);
		} catch (e) {}
	},

	pattern: function(elem, arg, val) {
		try {
			return typeof arg === 'string' ? (new RegExp('^(?:' + arg + ')$')).test(val) : null;
		} catch (e) {}
	},

	integer: function(elem, arg, val) {
		if (elem.type === 'number' && elem.validity.badInput) {
			return false;
		}
		return (/^-?[0-9]+$/).test(val);
	},

	'float': function(elem, arg, val, value) {
		if (elem.type === 'number' && elem.validity.badInput) {
			return false;
		}
		val = val.replace(' ', '').replace(',', '.');
		if ((/^-?[0-9]*[.,]?[0-9]+$/).test(val)) {
			value.value = val;
			return true;
		}
		return false;
	},

	min: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.rangeUnderflow) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		return arg === null || parseFloat(val) >= arg;
	},

	max: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.rangeOverflow) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		return arg === null || parseFloat(val) <= arg;
	},

	range: function(elem, arg, val) {
		if (elem.type === 'number') {
			if (elem.validity.rangeUnderflow || elem.validity.rangeOverflow) {
				return false
			} else if (elem.validity.badInput) {
				return null;
			}
		}
		return Nette.isArray(arg) ?
			((arg[0] === null || parseFloat(val) >= arg[0]) && (arg[1] === null || parseFloat(val) <= arg[1])) : null;
	},

	submitted: function(elem, arg, val) {
		return elem.form['nette-submittedBy'] === elem;
	},

	fileSize: function(elem, arg, val) {
		if (window.FileList) {
			for (var i = 0; i < val.length; i++) {
				if (val[i].size > arg) {
					return false;
				}
			}
		}
		return true;
	},

	image: function (elem, arg, val) {
		if (window.FileList && val instanceof window.FileList) {
			for (var i = 0; i < val.length; i++) {
				var type = val[i].type;
				if (type && type !== 'image/gif' && type !== 'image/png' && type !== 'image/jpeg') {
					return false;
				}
			}
		}
		return true;
	}
};


/**
 * Process all toggles in form.
 */
Nette.toggleForm = function(form, elem) {
	var i;
	Nette.toggles = {};
	for (i = 0; i < form.elements.length; i++) {
		if (form.elements[i].tagName.toLowerCase() in {input: 1, select: 1, textarea: 1, button: 1}) {
			Nette.toggleControl(form.elements[i], null, null, !elem);
		}
	}

	for (i in Nette.toggles) {
		Nette.toggle(i, Nette.toggles[i], elem);
	}
};


/**
 * Process toggles on form element.
 */
Nette.toggleControl = function(elem, rules, success, firsttime, value) {
	rules = rules || Nette.parseJSON(elem.getAttribute('data-nette-rules'));
	value = value === undefined ? {value: Nette.getEffectiveValue(elem)} : value;

	var has = false,
		handled = [],
		handler = function () {
			Nette.toggleForm(elem.form, elem);
		},
		curSuccess;

	for (var id = 0, len = rules.length; id < len; id++) {
		var rule = rules[id],
			op = rule.op.match(/(~)?([^?]+)/),
			curElem = rule.control ? elem.form.elements.namedItem(rule.control) : elem;

		if (!curElem) {
			continue;
		}

		curSuccess = success;
		if (success !== false) {
			rule.neg = op[1];
			rule.op = op[2];
			var curValue = elem === curElem ? value : {value: Nette.getEffectiveValue(curElem)};
			curSuccess = Nette.validateRule(curElem, rule.op, rule.arg, curValue);
			if (curSuccess === null) {
				continue;

			} else if (rule.neg) {
				curSuccess = !curSuccess;
			}
			if (!rule.rules) {
				success = curSuccess;
			}
		}

		if ((rule.rules && Nette.toggleControl(elem, rule.rules, curSuccess, firsttime, value)) || rule.toggle) {
			has = true;
			if (firsttime) {
				var oldIE = !document.addEventListener, // IE < 9
					name = curElem.tagName ? curElem.name : curElem[0].name,
					els = curElem.tagName ? curElem.form.elements : curElem;

				for (var i = 0; i < els.length; i++) {
					if (els[i].name === name && !Nette.inArray(handled, els[i])) {
						Nette.addEvent(els[i], oldIE && els[i].type in {checkbox: 1, radio: 1} ? 'click' : 'change', handler);
						handled.push(els[i]);
					}
				}
			}
			for (var id2 in rule.toggle || []) {
				if (Object.prototype.hasOwnProperty.call(rule.toggle, id2)) {
					Nette.toggles[id2] = Nette.toggles[id2] || (rule.toggle[id2] ? curSuccess : !curSuccess);
				}
			}
		}
	}
	return has;
};


Nette.parseJSON = function(s) {
	return (s || '').substr(0, 3) === '{op'
		? eval('[' + s + ']') // backward compatibility with Nette 2.0.x
		: JSON.parse(s || '[]');
};


/**
 * Displays or hides HTML element.
 */
Nette.toggle = function(id, visible, srcElement) {
	var elem = document.getElementById(id);
	if (elem) {
		elem.style.display = visible ? '' : 'none';
	}
};


/**
 * Setup handlers.
 */
Nette.initForm = function(form) {
	Nette.toggleForm(form);

	if (form.noValidate) {
		return;
	}

	form.noValidate = true;

	Nette.addEvent(form, 'submit', function(e) {
		if (!Nette.validateForm(form)) {
			if (e && e.stopPropagation) {
				e.stopPropagation();
				e.preventDefault();
			} else if (window.event) {
				event.cancelBubble = true;
				event.returnValue = false;
			}
		}
	});
};


/**
 * @private
 */
Nette.initOnLoad = function() {
	Nette.addEvent(document, 'DOMContentLoaded', function() {
		for (var i = 0; i < document.forms.length; i++) {
			var form = document.forms[i];
			for (var j = 0; j < form.elements.length; j++) {
				if (form.elements[j].getAttribute('data-nette-rules')) {
					Nette.initForm(form);
					break;
				}
			}
		}

		Nette.addEvent(document.body, 'click', function(e) {
			var target = e.target || e.srcElement;
			while (target) {
				if (target.form && target.type in {submit: 1, image: 1}) {
					target.form['nette-submittedBy'] = target;
					break;
				}
				target = target.parentNode;
			}
		});
	});
};


/**
 * Determines whether the argument is an array.
 */
Nette.isArray = function(arg) {
	return Object.prototype.toString.call(arg) === '[object Array]';
};


/**
 * Search for a specified value within an array.
 */
Nette.inArray = function(arr, val) {
	if ([].indexOf) {
		return arr.indexOf(val) > -1;
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === val) {
				return true;
			}
		}
		return false;
	}
};


/**
 * Converts string to web safe characters [a-z0-9-] text.
 */
Nette.webalize = function(s) {
	s = s.toLowerCase();
	var res = '', i, ch;
	for (i = 0; i < s.length; i++) {
		ch = Nette.webalizeTable[s.charAt(i)];
		res += ch ? ch : s.charAt(i);
	}
	return res.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

Nette.webalizeTable = {\u00e1: 'a', \u00e4: 'a', \u010d: 'c', \u010f: 'd', \u00e9: 'e', \u011b: 'e', \u00ed: 'i', \u013e: 'l', \u0148: 'n', \u00f3: 'o', \u00f4: 'o', \u0159: 'r', \u0161: 's', \u0165: 't', \u00fa: 'u', \u016f: 'u', \u00fd: 'y', \u017e: 'z'};

return Nette;
}));

},{}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":5,"timers":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbnRlcml0dHkuanMiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLm5hdGl2ZS9kaXN0L2Jvb3RzdHJhcC1uYXRpdmUtdjQuanMiLCJub2RlX21vZHVsZXMvbmFqYS9kaXN0L05hamEuanMiLCJub2RlX21vZHVsZXMvbmV0dGUtZm9ybXMvc3JjL2Fzc2V0cy9uZXR0ZUZvcm1zLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE9BQU8sS0FBUCxHQUFlLG9CQUFmO0FBQ0EsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsZUFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLGNBQXJCLENBQTlDOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbHdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYnNuIGZyb20gJ2Jvb3RzdHJhcC5uYXRpdmUvZGlzdC9ib290c3RyYXAtbmF0aXZlLXY0JztcbmltcG9ydCBuYWphIGZyb20gJ25hamEnO1xuaW1wb3J0IG5ldHRlIGZyb20gJ25ldHRlLWZvcm1zJztcblxud2luZG93Lk5ldHRlID0gbmV0dGU7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbmFqYS5pbml0aWFsaXplLmJpbmQobmFqYSkpOyIsIi8vIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB2Mi4wLjIzIHwgwqkgZG5wX3RoZW1lIHwgTUlULUxpY2Vuc2VcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1EIHN1cHBvcnQ6XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIENvbW1vbkpTLWxpa2U6XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICB2YXIgYnNuID0gZmFjdG9yeSgpO1xuICAgIHJvb3QuQWxlcnQgPSBic24uQWxlcnQ7XG4gICAgcm9vdC5CdXR0b24gPSBic24uQnV0dG9uO1xuICAgIHJvb3QuQ2Fyb3VzZWwgPSBic24uQ2Fyb3VzZWw7XG4gICAgcm9vdC5Db2xsYXBzZSA9IGJzbi5Db2xsYXBzZTtcbiAgICByb290LkRyb3Bkb3duID0gYnNuLkRyb3Bkb3duO1xuICAgIHJvb3QuTW9kYWwgPSBic24uTW9kYWw7XG4gICAgcm9vdC5Qb3BvdmVyID0gYnNuLlBvcG92ZXI7XG4gICAgcm9vdC5TY3JvbGxTcHkgPSBic24uU2Nyb2xsU3B5O1xuICAgIHJvb3QuVGFiID0gYnNuLlRhYjtcbiAgICByb290LlRvb2x0aXAgPSBic24uVG9vbHRpcDtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBJbnRlcm5hbCBVdGlsaXR5IEZ1bmN0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICAvLyBnbG9iYWxzXG4gIHZhciBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHRoaXN8fHdpbmRvdyxcbiAgICBET0MgPSBkb2N1bWVudCwgSFRNTCA9IERPQy5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSAnYm9keScsIC8vIGFsbG93IHRoZSBsaWJyYXJ5IHRvIGJlIHVzZWQgaW4gPGhlYWQ+XG4gIFxuICAgIC8vIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgR2xvYmFsIE9iamVjdFxuICAgIEJTTiA9IGdsb2JhbE9iamVjdC5CU04gPSB7fSxcbiAgICBzdXBwb3J0cyA9IEJTTi5zdXBwb3J0cyA9IFtdLFxuICBcbiAgICAvLyBmdW5jdGlvbiB0b2dnbGUgYXR0cmlidXRlc1xuICAgIGRhdGFUb2dnbGUgICAgPSAnZGF0YS10b2dnbGUnLFxuICAgIGRhdGFEaXNtaXNzICAgPSAnZGF0YS1kaXNtaXNzJyxcbiAgICBkYXRhU3B5ICAgICAgID0gJ2RhdGEtc3B5JyxcbiAgICBkYXRhUmlkZSAgICAgID0gJ2RhdGEtcmlkZScsXG4gIFxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBzdHJpbmdBbGVydCAgICAgPSAnQWxlcnQnLFxuICAgIHN0cmluZ0J1dHRvbiAgICA9ICdCdXR0b24nLFxuICAgIHN0cmluZ0Nhcm91c2VsICA9ICdDYXJvdXNlbCcsXG4gICAgc3RyaW5nQ29sbGFwc2UgID0gJ0NvbGxhcHNlJyxcbiAgICBzdHJpbmdEcm9wZG93biAgPSAnRHJvcGRvd24nLFxuICAgIHN0cmluZ01vZGFsICAgICA9ICdNb2RhbCcsXG4gICAgc3RyaW5nUG9wb3ZlciAgID0gJ1BvcG92ZXInLFxuICAgIHN0cmluZ1Njcm9sbFNweSA9ICdTY3JvbGxTcHknLFxuICAgIHN0cmluZ1RhYiAgICAgICA9ICdUYWInLFxuICAgIHN0cmluZ1Rvb2x0aXAgICA9ICdUb29sdGlwJyxcbiAgXG4gICAgLy8gb3B0aW9ucyBEQVRBIEFQSVxuICAgIGRhdGFiYWNrZHJvcCAgICAgID0gJ2RhdGEtYmFja2Ryb3AnLFxuICAgIGRhdGFLZXlib2FyZCAgICAgID0gJ2RhdGEta2V5Ym9hcmQnLFxuICAgIGRhdGFUYXJnZXQgICAgICAgID0gJ2RhdGEtdGFyZ2V0JyxcbiAgICBkYXRhSW50ZXJ2YWwgICAgICA9ICdkYXRhLWludGVydmFsJyxcbiAgICBkYXRhSGVpZ2h0ICAgICAgICA9ICdkYXRhLWhlaWdodCcsXG4gICAgZGF0YVBhdXNlICAgICAgICAgPSAnZGF0YS1wYXVzZScsXG4gICAgZGF0YVRpdGxlICAgICAgICAgPSAnZGF0YS10aXRsZScsXG4gICAgZGF0YU9yaWdpbmFsVGl0bGUgPSAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgZGF0YU9yaWdpbmFsVGV4dCAgPSAnZGF0YS1vcmlnaW5hbC10ZXh0JyxcbiAgICBkYXRhRGlzbWlzc2libGUgICA9ICdkYXRhLWRpc21pc3NpYmxlJyxcbiAgICBkYXRhVHJpZ2dlciAgICAgICA9ICdkYXRhLXRyaWdnZXInLFxuICAgIGRhdGFBbmltYXRpb24gICAgID0gJ2RhdGEtYW5pbWF0aW9uJyxcbiAgICBkYXRhQ29udGFpbmVyICAgICA9ICdkYXRhLWNvbnRhaW5lcicsXG4gICAgZGF0YVBsYWNlbWVudCAgICAgPSAnZGF0YS1wbGFjZW1lbnQnLFxuICAgIGRhdGFEZWxheSAgICAgICAgID0gJ2RhdGEtZGVsYXknLFxuICAgIGRhdGFPZmZzZXRUb3AgICAgID0gJ2RhdGEtb2Zmc2V0LXRvcCcsXG4gICAgZGF0YU9mZnNldEJvdHRvbSAgPSAnZGF0YS1vZmZzZXQtYm90dG9tJyxcbiAgXG4gICAgLy8gb3B0aW9uIGtleXNcbiAgICBiYWNrZHJvcCA9ICdiYWNrZHJvcCcsIGtleWJvYXJkID0gJ2tleWJvYXJkJywgZGVsYXkgPSAnZGVsYXknLFxuICAgIGNvbnRlbnQgPSAnY29udGVudCcsIHRhcmdldCA9ICd0YXJnZXQnLFxuICAgIGludGVydmFsID0gJ2ludGVydmFsJywgcGF1c2UgPSAncGF1c2UnLCBhbmltYXRpb24gPSAnYW5pbWF0aW9uJyxcbiAgICBwbGFjZW1lbnQgPSAncGxhY2VtZW50JywgY29udGFpbmVyID0gJ2NvbnRhaW5lcicsXG4gIFxuICAgIC8vIGJveCBtb2RlbFxuICAgIG9mZnNldFRvcCAgICA9ICdvZmZzZXRUb3AnLCAgICAgIG9mZnNldEJvdHRvbSAgID0gJ29mZnNldEJvdHRvbScsXG4gICAgb2Zmc2V0TGVmdCAgID0gJ29mZnNldExlZnQnLFxuICAgIHNjcm9sbFRvcCAgICA9ICdzY3JvbGxUb3AnLCAgICAgIHNjcm9sbExlZnQgICAgID0gJ3Njcm9sbExlZnQnLFxuICAgIGNsaWVudFdpZHRoICA9ICdjbGllbnRXaWR0aCcsICAgIGNsaWVudEhlaWdodCAgID0gJ2NsaWVudEhlaWdodCcsXG4gICAgb2Zmc2V0V2lkdGggID0gJ29mZnNldFdpZHRoJywgICAgb2Zmc2V0SGVpZ2h0ICAgPSAnb2Zmc2V0SGVpZ2h0JyxcbiAgICBpbm5lcldpZHRoICAgPSAnaW5uZXJXaWR0aCcsICAgICBpbm5lckhlaWdodCAgICA9ICdpbm5lckhlaWdodCcsXG4gICAgc2Nyb2xsSGVpZ2h0ID0gJ3Njcm9sbEhlaWdodCcsICAgaGVpZ2h0ICAgICAgICAgPSAnaGVpZ2h0JyxcbiAgXG4gICAgLy8gYXJpYVxuICAgIGFyaWFFeHBhbmRlZCA9ICdhcmlhLWV4cGFuZGVkJyxcbiAgICBhcmlhSGlkZGVuICAgPSAnYXJpYS1oaWRkZW4nLFxuICBcbiAgICAvLyBldmVudCBuYW1lc1xuICAgIGNsaWNrRXZlbnQgICAgPSAnY2xpY2snLFxuICAgIGhvdmVyRXZlbnQgICAgPSAnaG92ZXInLFxuICAgIGtleWRvd25FdmVudCAgPSAna2V5ZG93bicsXG4gICAga2V5dXBFdmVudCAgICA9ICdrZXl1cCcsXG4gICAgcmVzaXplRXZlbnQgICA9ICdyZXNpemUnLFxuICAgIHNjcm9sbEV2ZW50ICAgPSAnc2Nyb2xsJyxcbiAgICAvLyBvcmlnaW5hbEV2ZW50c1xuICAgIHNob3dFdmVudCAgICAgPSAnc2hvdycsXG4gICAgc2hvd25FdmVudCAgICA9ICdzaG93bicsXG4gICAgaGlkZUV2ZW50ICAgICA9ICdoaWRlJyxcbiAgICBoaWRkZW5FdmVudCAgID0gJ2hpZGRlbicsXG4gICAgY2xvc2VFdmVudCAgICA9ICdjbG9zZScsXG4gICAgY2xvc2VkRXZlbnQgICA9ICdjbG9zZWQnLFxuICAgIHNsaWRFdmVudCAgICAgPSAnc2xpZCcsXG4gICAgc2xpZGVFdmVudCAgICA9ICdzbGlkZScsXG4gICAgY2hhbmdlRXZlbnQgICA9ICdjaGFuZ2UnLFxuICBcbiAgICAvLyBvdGhlclxuICAgIGdldEF0dHJpYnV0ZSAgICAgICAgICAgPSAnZ2V0QXR0cmlidXRlJyxcbiAgICBzZXRBdHRyaWJ1dGUgICAgICAgICAgID0gJ3NldEF0dHJpYnV0ZScsXG4gICAgaGFzQXR0cmlidXRlICAgICAgICAgICA9ICdoYXNBdHRyaWJ1dGUnLFxuICAgIGNyZWF0ZUVsZW1lbnQgICAgICAgICAgPSAnY3JlYXRlRWxlbWVudCcsXG4gICAgYXBwZW5kQ2hpbGQgICAgICAgICAgICA9ICdhcHBlbmRDaGlsZCcsXG4gICAgaW5uZXJIVE1MICAgICAgICAgICAgICA9ICdpbm5lckhUTUwnLFxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lICAgPSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnLFxuICAgIHByZXZlbnREZWZhdWx0ICAgICAgICAgPSAncHJldmVudERlZmF1bHQnLFxuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAgPSAnZ2V0Qm91bmRpbmdDbGllbnRSZWN0JyxcbiAgICBxdWVyeVNlbGVjdG9yQWxsICAgICAgID0gJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuICAgIGdldEVsZW1lbnRzQnlDTEFTU05BTUUgPSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScsXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSAgICAgICA9ICdnZXRDb21wdXRlZFN0eWxlJywgIFxuICBcbiAgICBpbmRleE9mICAgICAgPSAnaW5kZXhPZicsXG4gICAgcGFyZW50Tm9kZSAgID0gJ3BhcmVudE5vZGUnLFxuICAgIGxlbmd0aCAgICAgICA9ICdsZW5ndGgnLFxuICAgIHRvTG93ZXJDYXNlICA9ICd0b0xvd2VyQ2FzZScsXG4gICAgVHJhbnNpdGlvbiAgID0gJ1RyYW5zaXRpb24nLFxuICAgIER1cmF0aW9uICAgICA9ICdEdXJhdGlvbicsXG4gICAgV2Via2l0ICAgICAgID0gJ1dlYmtpdCcsXG4gICAgc3R5bGUgICAgICAgID0gJ3N0eWxlJyxcbiAgICBwdXNoICAgICAgICAgPSAncHVzaCcsXG4gICAgdGFiaW5kZXggICAgID0gJ3RhYmluZGV4JyxcbiAgICBjb250YWlucyAgICAgPSAnY29udGFpbnMnLFxuICBcbiAgICBhY3RpdmUgICAgID0gJ2FjdGl2ZScsXG4gICAgc2hvd0NsYXNzICA9ICdzaG93JyxcbiAgICBjb2xsYXBzaW5nID0gJ2NvbGxhcHNpbmcnLFxuICAgIGRpc2FibGVkICAgPSAnZGlzYWJsZWQnLFxuICAgIGxvYWRpbmcgICAgPSAnbG9hZGluZycsXG4gICAgbGVmdCAgICAgICA9ICdsZWZ0JyxcbiAgICByaWdodCAgICAgID0gJ3JpZ2h0JyxcbiAgICB0b3AgICAgICAgID0gJ3RvcCcsXG4gICAgYm90dG9tICAgICA9ICdib3R0b20nLFxuICBcbiAgICAvLyB0b29sdGlwIC8gcG9wb3ZlclxuICAgIG1vdXNlSG92ZXIgPSAoJ29ubW91c2VsZWF2ZScgaW4gRE9DKSA/IFsgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddIDogWyAnbW91c2VvdmVyJywgJ21vdXNlb3V0JyBdLFxuICAgIHRpcFBvc2l0aW9ucyA9IC9cXGIodG9wfGJvdHRvbXxsZWZ0fHJpZ2h0KSsvLFxuICBcbiAgICAvLyBtb2RhbFxuICAgIG1vZGFsT3ZlcmxheSA9IDAsXG4gICAgZml4ZWRUb3AgPSAnZml4ZWQtdG9wJyxcbiAgICBmaXhlZEJvdHRvbSA9ICdmaXhlZC1ib3R0b20nLFxuICBcbiAgICAvLyB0cmFuc2l0aW9uRW5kIHNpbmNlIDIuMC40XG4gICAgc3VwcG9ydFRyYW5zaXRpb25zID0gV2Via2l0K1RyYW5zaXRpb24gaW4gSFRNTFtzdHlsZV0gfHwgVHJhbnNpdGlvblt0b0xvd2VyQ2FzZV0oKSBpbiBIVE1MW3N0eWxlXSxcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSBXZWJraXQrVHJhbnNpdGlvbiBpbiBIVE1MW3N0eWxlXSA/IFdlYmtpdFt0b0xvd2VyQ2FzZV0oKStUcmFuc2l0aW9uKydFbmQnIDogVHJhbnNpdGlvblt0b0xvd2VyQ2FzZV0oKSsnZW5kJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBXZWJraXQrRHVyYXRpb24gaW4gSFRNTFtzdHlsZV0gPyBXZWJraXRbdG9Mb3dlckNhc2VdKCkrVHJhbnNpdGlvbitEdXJhdGlvbiA6IFRyYW5zaXRpb25bdG9Mb3dlckNhc2VdKCkrRHVyYXRpb24sXG4gIFxuICAgIC8vIHNldCBuZXcgZm9jdXMgZWxlbWVudCBzaW5jZSAyLjAuM1xuICAgIHNldEZvY3VzID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICBlbGVtZW50LmZvY3VzID8gZWxlbWVudC5mb2N1cygpIDogZWxlbWVudC5zZXRBY3RpdmUoKTtcbiAgICB9LFxuICBcbiAgICAvLyBjbGFzcyBtYW5pcHVsYXRpb24sIHNpbmNlIDIuMC4wIHJlcXVpcmVzIHBvbHlmaWxsLmpzXG4gICAgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LGNsYXNzTkFNRSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTkFNRSk7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOQU1FKTtcbiAgICB9LFxuICAgIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlbWVudCxjbGFzc05BTUUpeyAvLyBzaW5jZSAyLjAuMFxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0W2NvbnRhaW5zXShjbGFzc05BTUUpO1xuICAgIH0sXG4gIFxuICAgIC8vIHNlbGVjdGlvbiBtZXRob2RzXG4gICAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGVsZW1lbnQsY2xhc3NOQU1FKSB7IC8vIHJldHVybnMgQXJyYXlcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnRbZ2V0RWxlbWVudHNCeUNMQVNTTkFNRV0oIGNsYXNzTkFNRSApKTtcbiAgICB9LFxuICAgIHF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XG4gICAgICB2YXIgbG9va1VwID0gcGFyZW50ID8gcGFyZW50IDogRE9DO1xuICAgICAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gJ29iamVjdCcgPyBzZWxlY3RvciA6IGxvb2tVcC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9LFxuICAgIGdldENsb3Nlc3QgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2VsZWN0b3IpIHsgLy9lbGVtZW50IGlzIHRoZSBlbGVtZW50IGFuZCBzZWxlY3RvciBpcyBmb3IgdGhlIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgdG8gZmluZFxuICAgICAgLy8gc291cmNlIGh0dHA6Ly9nb21ha2V0aGluZ3MuY29tL2NsaW1iaW5nLXVwLWFuZC1kb3duLXRoZS1kb20tdHJlZS13aXRoLXZhbmlsbGEtamF2YXNjcmlwdC9cbiAgICAgIHZhciBmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCksIHNlbGVjdG9yU3Vic3RyaW5nID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgaWYgKCBmaXJzdENoYXIgPT09ICcuJyApIHsvLyBJZiBzZWxlY3RvciBpcyBhIGNsYXNzXG4gICAgICAgIGZvciAoIDsgZWxlbWVudCAmJiBlbGVtZW50ICE9PSBET0M7IGVsZW1lbnQgPSBlbGVtZW50W3BhcmVudE5vZGVdICkgeyAvLyBHZXQgY2xvc2VzdCBtYXRjaFxuICAgICAgICAgIGlmICggcXVlcnlFbGVtZW50KHNlbGVjdG9yLGVsZW1lbnRbcGFyZW50Tm9kZV0pICE9PSBudWxsICYmIGhhc0NsYXNzKGVsZW1lbnQsc2VsZWN0b3JTdWJzdHJpbmcpICkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCBmaXJzdENoYXIgPT09ICcjJyApIHsgLy8gSWYgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgZm9yICggOyBlbGVtZW50ICYmIGVsZW1lbnQgIT09IERPQzsgZWxlbWVudCA9IGVsZW1lbnRbcGFyZW50Tm9kZV0gKSB7IC8vIEdldCBjbG9zZXN0IG1hdGNoXG4gICAgICAgICAgaWYgKCBlbGVtZW50LmlkID09PSBzZWxlY3RvclN1YnN0cmluZyApIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIFxuICAgIC8vIGV2ZW50IGF0dGFjaCBqUXVlcnkgc3R5bGUgLyB0cmlnZ2VyICBzaW5jZSAxLjIuMFxuICAgIG9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9LFxuICAgIG9mZiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9LFxuICAgIG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCwgaGFuZGxlcikgeyAvLyBvbmUgc2luY2UgMi4wLjRcbiAgICAgIG9uKGVsZW1lbnQsIGV2ZW50LCBmdW5jdGlvbiBoYW5kbGVyV3JhcHBlcihlKXtcbiAgICAgICAgaGFuZGxlcihlKTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGR1cmF0aW9uID0gZ2xvYmFsT2JqZWN0W2dldENvbXB1dGVkU3R5bGVdKGVsZW1lbnQpW3RyYW5zaXRpb25EdXJhdGlvbl07XG4gICAgICBkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24pO1xuICAgICAgZHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gPT09ICdudW1iZXInICYmICFpc05hTihkdXJhdGlvbikgPyBkdXJhdGlvbiAqIDEwMDAgOiAwO1xuICAgICAgcmV0dXJuIGR1cmF0aW9uICsgNTA7IC8vIHdlIHRha2UgYSBzaG9ydCBvZmZzZXQgdG8gbWFrZSBzdXJlIHdlIGZpcmUgb24gdGhlIG5leHQgZnJhbWUgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgfSxcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGVsZW1lbnQsaGFuZGxlcil7IC8vIGVtdWxhdGVUcmFuc2l0aW9uRW5kIHNpbmNlIDIuMC40XG4gICAgICB2YXIgY2FsbGVkID0gMCwgZHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIHN1cHBvcnRUcmFuc2l0aW9ucyAmJiBvbmUoZWxlbWVudCwgdHJhbnNpdGlvbkVuZEV2ZW50LCBmdW5jdGlvbihlKXsgaGFuZGxlcihlKTsgY2FsbGVkID0gMTsgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyAhY2FsbGVkICYmIGhhbmRsZXIoKTsgfSwgZHVyYXRpb24pO1xuICAgIH0sXG4gICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjb21wb25lbnROYW1lLCByZWxhdGVkKSB7XG4gICAgICB2YXIgT3JpZ2luYWxDdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCggZXZlbnROYW1lICsgJy5icy4nICsgY29tcG9uZW50TmFtZSk7XG4gICAgICBPcmlnaW5hbEN1c3RvbUV2ZW50LnJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9yaWdpbmFsQ3VzdG9tRXZlbnQpO1xuICAgIH0sXG4gIFxuICAgIC8vIHRvb2x0aXAgLyBwb3BvdmVyIHN0dWZmXG4gICAgZ2V0U2Nyb2xsID0gZnVuY3Rpb24oKSB7IC8vIGFsc28gQWZmaXggYW5kIFNjcm9sbFNweSB1c2VzIGl0XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5IDogZ2xvYmFsT2JqZWN0LnBhZ2VZT2Zmc2V0IHx8IEhUTUxbc2Nyb2xsVG9wXSxcbiAgICAgICAgeCA6IGdsb2JhbE9iamVjdC5wYWdlWE9mZnNldCB8fCBIVE1MW3Njcm9sbExlZnRdXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZVRpcCA9IGZ1bmN0aW9uKGxpbmssZWxlbWVudCxwb3NpdGlvbixwYXJlbnQpIHsgLy8gYm90aCBwb3BvdmVycyBhbmQgdG9vbHRpcHMgKHRhcmdldCx0b29sdGlwLHBsYWNlbWVudCxlbGVtZW50VG9BcHBlbmRUbylcbiAgICAgIHZhciBlbGVtZW50RGltZW5zaW9ucyA9IHsgdyA6IGVsZW1lbnRbb2Zmc2V0V2lkdGhdLCBoOiBlbGVtZW50W29mZnNldEhlaWdodF0gfSxcbiAgICAgICAgICB3aW5kb3dXaWR0aCA9IChIVE1MW2NsaWVudFdpZHRoXSB8fCBET0NbYm9keV1bY2xpZW50V2lkdGhdKSxcbiAgICAgICAgICB3aW5kb3dIZWlnaHQgPSAoSFRNTFtjbGllbnRIZWlnaHRdIHx8IERPQ1tib2R5XVtjbGllbnRIZWlnaHRdKSxcbiAgICAgICAgICByZWN0ID0gbGlua1tnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCksXG4gICAgICAgICAgc2Nyb2xsID0gcGFyZW50ID09PSBET0NbYm9keV0gPyBnZXRTY3JvbGwoKSA6IHsgeDogcGFyZW50W29mZnNldExlZnRdICsgcGFyZW50W3Njcm9sbExlZnRdLCB5OiBwYXJlbnRbb2Zmc2V0VG9wXSArIHBhcmVudFtzY3JvbGxUb3BdIH0sXG4gICAgICAgICAgbGlua0RpbWVuc2lvbnMgPSB7IHc6IHJlY3RbcmlnaHRdIC0gcmVjdFtsZWZ0XSwgaDogcmVjdFtib3R0b21dIC0gcmVjdFt0b3BdIH0sXG4gICAgICAgICAgaXNQb3BvdmVyID0gaGFzQ2xhc3MoZWxlbWVudCwncG9wb3ZlcicpLFxuICAgICAgICAgIHRvcFBvc2l0aW9uLCBsZWZ0UG9zaXRpb24sXG4gIFxuICAgICAgICAgIGFycm93ID0gcXVlcnlFbGVtZW50KCcuYXJyb3cnLGVsZW1lbnQpLFxuICAgICAgICAgIGFycm93VG9wLCBhcnJvd0xlZnQsIGFycm93V2lkdGgsIGFycm93SGVpZ2h0LFxuICBcbiAgICAgICAgICBoYWxmVG9wRXhjZWVkID0gcmVjdFt0b3BdICsgbGlua0RpbWVuc2lvbnMuaC8yIC0gZWxlbWVudERpbWVuc2lvbnMuaC8yIDwgMCxcbiAgICAgICAgICBoYWxmTGVmdEV4Y2VlZCA9IHJlY3RbbGVmdF0gKyBsaW5rRGltZW5zaW9ucy53LzIgLSBlbGVtZW50RGltZW5zaW9ucy53LzIgPCAwLFxuICAgICAgICAgIGhhbGZSaWdodEV4Y2VlZCA9IHJlY3RbbGVmdF0gKyBlbGVtZW50RGltZW5zaW9ucy53LzIgKyBsaW5rRGltZW5zaW9ucy53LzIgPj0gd2luZG93V2lkdGgsXG4gICAgICAgICAgaGFsZkJvdHRvbUV4Y2VlZCA9IHJlY3RbdG9wXSArIGVsZW1lbnREaW1lbnNpb25zLmgvMiArIGxpbmtEaW1lbnNpb25zLmgvMiA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgdG9wRXhjZWVkID0gcmVjdFt0b3BdIC0gZWxlbWVudERpbWVuc2lvbnMuaCA8IDAsXG4gICAgICAgICAgbGVmdEV4Y2VlZCA9IHJlY3RbbGVmdF0gLSBlbGVtZW50RGltZW5zaW9ucy53IDwgMCxcbiAgICAgICAgICBib3R0b21FeGNlZWQgPSByZWN0W3RvcF0gKyBlbGVtZW50RGltZW5zaW9ucy5oICsgbGlua0RpbWVuc2lvbnMuaCA+PSB3aW5kb3dIZWlnaHQsXG4gICAgICAgICAgcmlnaHRFeGNlZWQgPSByZWN0W2xlZnRdICsgZWxlbWVudERpbWVuc2lvbnMudyArIGxpbmtEaW1lbnNpb25zLncgPj0gd2luZG93V2lkdGg7XG4gIFxuICAgICAgLy8gcmVjb21wdXRlIHBvc2l0aW9uXG4gICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiA9PT0gbGVmdCB8fCBwb3NpdGlvbiA9PT0gcmlnaHQpICYmIGxlZnRFeGNlZWQgJiYgcmlnaHRFeGNlZWQgPyB0b3AgOiBwb3NpdGlvbjsgLy8gZmlyc3QsIHdoZW4gYm90aCBsZWZ0IGFuZCByaWdodCBsaW1pdHMgYXJlIGV4Y2VlZGVkLCB3ZSBmYWxsIGJhY2sgdG8gdG9wfGJvdHRvbVxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gdG9wICYmIHRvcEV4Y2VlZCA/IGJvdHRvbSA6IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gYm90dG9tICYmIGJvdHRvbUV4Y2VlZCA/IHRvcCA6IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gbGVmdCAmJiBsZWZ0RXhjZWVkID8gcmlnaHQgOiBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHJpZ2h0ICYmIHJpZ2h0RXhjZWVkID8gbGVmdCA6IHBvc2l0aW9uO1xuICBcbiAgICAgIC8vIHVwZGF0ZSB0b29sdGlwL3BvcG92ZXIgY2xhc3NcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lW2luZGV4T2ZdKHBvc2l0aW9uKSA9PT0gLTEgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSh0aXBQb3NpdGlvbnMscG9zaXRpb24pKTtcbiAgXG4gICAgICAvLyB3ZSBjaGVjayB0aGUgY29tcHV0ZWQgd2lkdGggJiBoZWlnaHQgYW5kIHVwZGF0ZSBoZXJlXG4gICAgICBhcnJvd1dpZHRoID0gYXJyb3dbb2Zmc2V0V2lkdGhdOyBhcnJvd0hlaWdodCA9IGFycm93W29mZnNldEhlaWdodF07XG4gIFxuICAgICAgLy8gYXBwbHkgc3R5bGluZyB0byB0b29sdGlwIG9yIHBvcG92ZXJcbiAgICAgIGlmICggcG9zaXRpb24gPT09IGxlZnQgfHwgcG9zaXRpb24gPT09IHJpZ2h0ICkgeyAvLyBzZWNvbmRhcnl8c2lkZSBwb3NpdGlvbnNcbiAgICAgICAgaWYgKCBwb3NpdGlvbiA9PT0gbGVmdCApIHsgLy8gTEVGVFxuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IHJlY3RbbGVmdF0gKyBzY3JvbGwueCAtIGVsZW1lbnREaW1lbnNpb25zLncgLSAoIGlzUG9wb3ZlciA/IGFycm93V2lkdGggOiAwICk7XG4gICAgICAgIH0gZWxzZSB7IC8vIFJJR0hUXG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gcmVjdFtsZWZ0XSArIHNjcm9sbC54ICsgbGlua0RpbWVuc2lvbnMudztcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gYWRqdXN0IHRvcCBhbmQgYXJyb3dcbiAgICAgICAgaWYgKGhhbGZUb3BFeGNlZWQpIHtcbiAgICAgICAgICB0b3BQb3NpdGlvbiA9IHJlY3RbdG9wXSArIHNjcm9sbC55O1xuICAgICAgICAgIGFycm93VG9wID0gbGlua0RpbWVuc2lvbnMuaC8yIC0gYXJyb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChoYWxmQm90dG9tRXhjZWVkKSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSAtIGVsZW1lbnREaW1lbnNpb25zLmggKyBsaW5rRGltZW5zaW9ucy5oO1xuICAgICAgICAgIGFycm93VG9wID0gZWxlbWVudERpbWVuc2lvbnMuaCAtIGxpbmtEaW1lbnNpb25zLmgvMiAtIGFycm93V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSAtIGVsZW1lbnREaW1lbnNpb25zLmgvMiArIGxpbmtEaW1lbnNpb25zLmgvMjtcbiAgICAgICAgICBhcnJvd1RvcCA9IGVsZW1lbnREaW1lbnNpb25zLmgvMiAtIChpc1BvcG92ZXIgPyBhcnJvd0hlaWdodCowLjkgOiBhcnJvd0hlaWdodC8yKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcG9zaXRpb24gPT09IHRvcCB8fCBwb3NpdGlvbiA9PT0gYm90dG9tICkgeyAvLyBwcmltYXJ5fHZlcnRpY2FsIHBvc2l0aW9uc1xuICAgICAgICBpZiAoIHBvc2l0aW9uID09PSB0b3ApIHsgLy8gVE9QXG4gICAgICAgICAgdG9wUG9zaXRpb24gPSAgcmVjdFt0b3BdICsgc2Nyb2xsLnkgLSBlbGVtZW50RGltZW5zaW9ucy5oIC0gKCBpc1BvcG92ZXIgPyBhcnJvd0hlaWdodCA6IDAgKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gQk9UVE9NXG4gICAgICAgICAgdG9wUG9zaXRpb24gPSByZWN0W3RvcF0gKyBzY3JvbGwueSArIGxpbmtEaW1lbnNpb25zLmg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRqdXN0IGxlZnQgfCByaWdodCBhbmQgYWxzbyB0aGUgYXJyb3dcbiAgICAgICAgaWYgKGhhbGZMZWZ0RXhjZWVkKSB7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gMDtcbiAgICAgICAgICBhcnJvd0xlZnQgPSByZWN0W2xlZnRdICsgbGlua0RpbWVuc2lvbnMudy8yIC0gYXJyb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChoYWxmUmlnaHRFeGNlZWQpIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSB3aW5kb3dXaWR0aCAtIGVsZW1lbnREaW1lbnNpb25zLncqMS4wMTtcbiAgICAgICAgICBhcnJvd0xlZnQgPSBlbGVtZW50RGltZW5zaW9ucy53IC0gKCB3aW5kb3dXaWR0aCAtIHJlY3RbbGVmdF0gKSArIGxpbmtEaW1lbnNpb25zLncvMiAtIGFycm93V2lkdGgvMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSByZWN0W2xlZnRdICsgc2Nyb2xsLnggLSBlbGVtZW50RGltZW5zaW9ucy53LzIgKyBsaW5rRGltZW5zaW9ucy53LzI7XG4gICAgICAgICAgYXJyb3dMZWZ0ID0gZWxlbWVudERpbWVuc2lvbnMudy8yIC0gYXJyb3dXaWR0aC8yO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gYXBwbHkgc3R5bGUgdG8gdG9vbHRpcC9wb3BvdmVyIGFuZCBpdHMgYXJyb3dcbiAgICAgIGVsZW1lbnRbc3R5bGVdW3RvcF0gPSB0b3BQb3NpdGlvbiArICdweCc7XG4gICAgICBlbGVtZW50W3N0eWxlXVtsZWZ0XSA9IGxlZnRQb3NpdGlvbiArICdweCc7XG4gIFxuICAgICAgYXJyb3dUb3AgJiYgKGFycm93W3N0eWxlXVt0b3BdID0gYXJyb3dUb3AgKyAncHgnKTtcbiAgICAgIGFycm93TGVmdCAmJiAoYXJyb3dbc3R5bGVdW2xlZnRdID0gYXJyb3dMZWZ0ICsgJ3B4Jyk7XG4gICAgfTtcbiAgXG4gIEJTTi52ZXJzaW9uID0gJzIuMC4yMyc7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBBbGVydFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIEFMRVJUIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PVxuICB2YXIgQWxlcnQgPSBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gYmluZCwgdGFyZ2V0IGFsZXJ0LCBkdXJhdGlvbiBhbmQgc3R1ZmZcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNvbXBvbmVudCA9ICdhbGVydCcsXG4gICAgICBhbGVydCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrY29tcG9uZW50KSxcbiAgICAgIHRyaWdnZXJIYW5kbGVyID0gZnVuY3Rpb24oKXsgaGFzQ2xhc3MoYWxlcnQsJ2ZhZGUnKSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFsZXJ0LHRyYW5zaXRpb25FbmRIYW5kbGVyKSA6IHRyYW5zaXRpb25FbmRIYW5kbGVyKCk7IH0sXG4gICAgICAvLyBoYW5kbGVyc1xuICAgICAgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIGFsZXJ0ID0gZ2V0Q2xvc2VzdChlW3RhcmdldF0sJy4nK2NvbXBvbmVudCk7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoJ1snK2RhdGFEaXNtaXNzKyc9XCInK2NvbXBvbmVudCsnXCJdJyxhbGVydCk7XG4gICAgICAgIGVsZW1lbnQgJiYgYWxlcnQgJiYgKGVsZW1lbnQgPT09IGVbdGFyZ2V0XSB8fCBlbGVtZW50W2NvbnRhaW5zXShlW3RhcmdldF0pKSAmJiBzZWxmLmNsb3NlKCk7XG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFsZXJ0LCBjbG9zZWRFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgb2ZmKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7IC8vIGRldGFjaCBpdCdzIGxpc3RlbmVyXG4gICAgICAgIGFsZXJ0W3BhcmVudE5vZGVdLnJlbW92ZUNoaWxkKGFsZXJ0KTtcbiAgICAgIH07XG4gICAgXG4gICAgLy8gcHVibGljIG1ldGhvZFxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggYWxlcnQgJiYgZWxlbWVudCAmJiBoYXNDbGFzcyhhbGVydCxzaG93Q2xhc3MpICkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGFsZXJ0LCBjbG9zZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICByZW1vdmVDbGFzcyhhbGVydCxzaG93Q2xhc3MpO1xuICAgICAgICBhbGVydCAmJiB0cmlnZ2VySGFuZGxlcigpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nQWxlcnQgaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxlbWVudFtzdHJpbmdBbGVydF0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gQUxFUlQgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oW3N0cmluZ0FsZXJ0LCBBbGVydCwgJ1snK2RhdGFEaXNtaXNzKyc9XCJhbGVydFwiXSddKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBCdXR0b25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIEJVVFRPTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgdmFyIEJ1dHRvbiA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gY29uc3RhbnRcbiAgICB2YXIgdG9nZ2xlZCA9IGZhbHNlLCAvLyB0b2dnbGVkIG1ha2VzIHN1cmUgdG8gcHJldmVudCB0cmlnZ2VyaW5nIHR3aWNlIHRoZSBjaGFuZ2UuYnMuYnV0dG9uIGV2ZW50c1xuICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAnYnV0dG9uJyxcbiAgICAgICAgY2hlY2tlZCA9ICdjaGVja2VkJyxcbiAgICAgICAgcmVzZXQgPSAncmVzZXQnLFxuICAgICAgICBMQUJFTCA9ICdMQUJFTCcsXG4gICAgICAgIElOUFVUID0gJ0lOUFVUJyxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICAgICAga2V5ID09PSAzMiAmJiBlW3RhcmdldF0gPT09IERPQy5hY3RpdmVFbGVtZW50ICYmIHRvZ2dsZShlKTtcbiAgICAgIH0sXG4gICAgICBwcmV2ZW50U2Nyb2xsID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgICAgIGtleSA9PT0gMzIgJiYgZVtwcmV2ZW50RGVmYXVsdF0oKTtcbiAgICAgIH0sXG4gICAgICB0b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGVbdGFyZ2V0XS50YWdOYW1lID09PSBMQUJFTCA/IGVbdGFyZ2V0XSA6IGVbdGFyZ2V0XVtwYXJlbnROb2RlXS50YWdOYW1lID09PSBMQUJFTCA/IGVbdGFyZ2V0XVtwYXJlbnROb2RlXSA6IG51bGw7IC8vIHRoZSAuYnRuIGxhYmVsXG4gICAgICAgIFxuICAgICAgICBpZiAoICFsYWJlbCApIHJldHVybjsgLy9yZWFjdCBpZiBhIGxhYmVsIG9yIGl0cyBpbW1lZGlhdGUgY2hpbGQgaXMgY2xpY2tlZFxuICBcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZVt0YXJnZXRdLCAvLyB0aGUgYnV0dG9uIGl0c2VsZiwgdGhlIHRhcmdldCBvZiB0aGUgaGFuZGxlciBmdW5jdGlvblxuICAgICAgICAgIGxhYmVscyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZXZlbnRUYXJnZXRbcGFyZW50Tm9kZV0sJ2J0bicpLCAvLyBhbGwgdGhlIGJ1dHRvbiBncm91cCBidXR0b25zXG4gICAgICAgICAgaW5wdXQgPSBsYWJlbFtnZXRFbGVtZW50c0J5VGFnTmFtZV0oSU5QVVQpWzBdO1xuICBcbiAgICAgICAgaWYgKCAhaW5wdXQgKSByZXR1cm47IC8vcmV0dXJuIGlmIG5vIGlucHV0IGZvdW5kXG4gIFxuICAgICAgICAvLyBtYW5hZ2UgdGhlIGRvbSBtYW5pcHVsYXRpb25cbiAgICAgICAgaWYgKCBpbnB1dC50eXBlID09PSAnY2hlY2tib3gnICkgeyAvL2NoZWNrYm94ZXNcbiAgICAgICAgICBpZiAoICFpbnB1dFtjaGVja2VkXSApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGxhYmVsLGFjdGl2ZSk7XG4gICAgICAgICAgICBpbnB1dFtnZXRBdHRyaWJ1dGVdKGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbc2V0QXR0cmlidXRlXShjaGVja2VkLGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbY2hlY2tlZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhsYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgaW5wdXRbZ2V0QXR0cmlidXRlXShjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShjaGVja2VkKTtcbiAgICAgICAgICAgIGlucHV0W2NoZWNrZWRdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHsgLy8gcHJldmVudCB0cmlnZ2VyaW5nIHRoZSBldmVudCB0d2ljZVxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGlucHV0LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBpbnB1dFxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBjaGFuZ2VFdmVudCwgY29tcG9uZW50KTsgLy90cmlnZ2VyIHRoZSBjaGFuZ2UgZm9yIHRoZSBidG4tZ3JvdXBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmICggaW5wdXQudHlwZSA9PT0gJ3JhZGlvJyAmJiAhdG9nZ2xlZCApIHsgLy8gcmFkaW8gYnV0dG9uc1xuICAgICAgICAgIGlmICggIWlucHV0W2NoZWNrZWRdICkgeyAvLyBkb24ndCB0cmlnZ2VyIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgICAgICAgICBhZGRDbGFzcyhsYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgaW5wdXRbc2V0QXR0cmlidXRlXShjaGVja2VkLGNoZWNrZWQpO1xuICAgICAgICAgICAgaW5wdXRbY2hlY2tlZF0gPSB0cnVlO1xuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChpbnB1dCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgaW5wdXRcbiAgICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgY2hhbmdlRXZlbnQsIGNvbXBvbmVudCk7IC8vdHJpZ2dlciB0aGUgY2hhbmdlIGZvciB0aGUgYnRuLWdyb3VwXG4gIFxuICAgICAgICAgICAgdG9nZ2xlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGwgPSBsYWJlbHNbbGVuZ3RoXTsgaTxsbDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBvdGhlckxhYmVsID0gbGFiZWxzW2ldLCBvdGhlcklucHV0ID0gb3RoZXJMYWJlbFtnZXRFbGVtZW50c0J5VGFnTmFtZV0oSU5QVVQpWzBdO1xuICAgICAgICAgICAgICBpZiAoIG90aGVyTGFiZWwgIT09IGxhYmVsICYmIGhhc0NsYXNzKG90aGVyTGFiZWwsYWN0aXZlKSApICB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Mob3RoZXJMYWJlbCxhY3RpdmUpO1xuICAgICAgICAgICAgICAgIG90aGVySW5wdXQucmVtb3ZlQXR0cmlidXRlKGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIG90aGVySW5wdXRbY2hlY2tlZF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG90aGVySW5wdXQsIGNoYW5nZUV2ZW50LCBjb21wb25lbnQpOyAvLyB0cmlnZ2VyIHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgdG9nZ2xlZCA9IGZhbHNlOyB9LCA1MCApO1xuICAgICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggISggc3RyaW5nQnV0dG9uIGluIGVsZW1lbnQgKSApIHsgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgdHdpY2VcbiAgICAgIG9uKCBlbGVtZW50LCBjbGlja0V2ZW50LCB0b2dnbGUgKTtcbiAgICAgIHF1ZXJ5RWxlbWVudCgnWycrdGFiaW5kZXgrJ10nLGVsZW1lbnQpICYmIG9uKCBlbGVtZW50LCBrZXl1cEV2ZW50LCBrZXlIYW5kbGVyICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24oIGVsZW1lbnQsIGtleWRvd25FdmVudCwgcHJldmVudFNjcm9sbCApOyAgICBcbiAgICB9XG4gIFxuICAgIC8vIGFjdGl2YXRlIGl0ZW1zIG9uIGxvYWRcbiAgICB2YXIgbGFiZWxzVG9BQ3RpdmF0ZSA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCwgJ2J0bicpLCBsYmxsID0gbGFiZWxzVG9BQ3RpdmF0ZVtsZW5ndGhdO1xuICAgIGZvciAodmFyIGk9MDsgaTxsYmxsOyBpKyspIHtcbiAgICAgICFoYXNDbGFzcyhsYWJlbHNUb0FDdGl2YXRlW2ldLGFjdGl2ZSkgJiYgcXVlcnlFbGVtZW50KCdpbnB1dDpjaGVja2VkJyxsYWJlbHNUb0FDdGl2YXRlW2ldKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWRkQ2xhc3MobGFiZWxzVG9BQ3RpdmF0ZVtpXSxhY3RpdmUpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ0J1dHRvbl0gPSB0aGlzO1xuICB9O1xuICBcbiAgLy8gQlVUVE9OIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ0J1dHRvbiwgQnV0dG9uLCAnWycrZGF0YVRvZ2dsZSsnPVwiYnV0dG9uc1wiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IENhcm91c2VsXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gQ0FST1VTRUwgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBpbnRlcnZhbEF0dHJpYnV0ZSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhSW50ZXJ2YWwpLFxuICAgICAgICBpbnRlcnZhbE9wdGlvbiA9IG9wdGlvbnNbaW50ZXJ2YWxdLFxuICAgICAgICBpbnRlcnZhbERhdGEgPSBpbnRlcnZhbEF0dHJpYnV0ZSA9PT0gJ2ZhbHNlJyA/IDAgOiBwYXJzZUludChpbnRlcnZhbEF0dHJpYnV0ZSksICBcbiAgICAgICAgcGF1c2VEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFQYXVzZSkgPT09IGhvdmVyRXZlbnQgfHwgZmFsc2UsXG4gICAgICAgIGtleWJvYXJkRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhS2V5Ym9hcmQpID09PSAndHJ1ZScgfHwgZmFsc2UsXG4gICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAnY2Fyb3VzZWwnLFxuICAgICAgICBwYXVzZWQgPSAncGF1c2VkJyxcbiAgICAgICAgZGlyZWN0aW9uID0gJ2RpcmVjdGlvbicsXG4gICAgICAgIGNhcm91c2VsSXRlbSA9ICdjYXJvdXNlbC1pdGVtJyxcbiAgICAgICAgZGF0YVNsaWRlVG8gPSAnZGF0YS1zbGlkZS10byc7IFxuICBcbiAgICB0aGlzW2tleWJvYXJkXSA9IG9wdGlvbnNba2V5Ym9hcmRdID09PSB0cnVlIHx8IGtleWJvYXJkRGF0YTtcbiAgICB0aGlzW3BhdXNlXSA9IChvcHRpb25zW3BhdXNlXSA9PT0gaG92ZXJFdmVudCB8fCBwYXVzZURhdGEpID8gaG92ZXJFdmVudCA6IGZhbHNlOyAvLyBmYWxzZSAvIGhvdmVyXG4gIFxuICAgIHRoaXNbaW50ZXJ2YWxdID0gdHlwZW9mIGludGVydmFsT3B0aW9uID09PSAnbnVtYmVyJyA/IGludGVydmFsT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgOiBpbnRlcnZhbE9wdGlvbiA9PT0gZmFsc2UgfHwgaW50ZXJ2YWxEYXRhID09PSAwIHx8IGludGVydmFsRGF0YSA9PT0gZmFsc2UgPyAwXG4gICAgICAgICAgICAgICAgICAgOiA1MDAwOyAvLyBib290c3RyYXAgY2Fyb3VzZWwgZGVmYXVsdCBpbnRlcnZhbFxuICBcbiAgICAvLyBiaW5kLCBldmVudCB0YXJnZXRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBpbmRleCA9IGVsZW1lbnQuaW5kZXggPSAwLCB0aW1lciA9IGVsZW1lbnQudGltZXIgPSAwLCBcbiAgICAgIGlzU2xpZGluZyA9IGZhbHNlLCAvLyBpc1NsaWRpbmcgcHJldmVudHMgY2xpY2sgZXZlbnQgaGFuZGxlcnMgd2hlbiBhbmltYXRpb24gaXMgcnVubmluZ1xuICAgICAgc2xpZGVzID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGVtZW50LGNhcm91c2VsSXRlbSksIHRvdGFsID0gc2xpZGVzW2xlbmd0aF0sXG4gICAgICBzbGlkZURpcmVjdGlvbiA9IHRoaXNbZGlyZWN0aW9uXSA9IGxlZnQsXG4gICAgICBsZWZ0QXJyb3cgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY29tcG9uZW50KyctY29udHJvbC1wcmV2JylbMF0sIFxuICAgICAgcmlnaHRBcnJvdyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCxjb21wb25lbnQrJy1jb250cm9sLW5leHQnKVswXSxcbiAgICAgIGluZGljYXRvciA9IHF1ZXJ5RWxlbWVudCggJy4nK2NvbXBvbmVudCsnLWluZGljYXRvcnMnLCBlbGVtZW50ICksXG4gICAgICBpbmRpY2F0b3JzID0gaW5kaWNhdG9yICYmIGluZGljYXRvcltnZXRFbGVtZW50c0J5VGFnTmFtZV0oIFwiTElcIiApIHx8IFtdO1xuICBcbiAgICAvLyBoYW5kbGVyc1xuICAgIHZhciBwYXVzZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICggc2VsZltpbnRlcnZhbF0gIT09ZmFsc2UgJiYgIWhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LHBhdXNlZCk7XG4gICAgICAgICAgIWlzU2xpZGluZyAmJiBjbGVhckludGVydmFsKCB0aW1lciApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzdW1lSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICE9PSBmYWxzZSAmJiBoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCxwYXVzZWQpO1xuICAgICAgICAgICFpc1NsaWRpbmcgJiYgY2xlYXJJbnRlcnZhbCggdGltZXIgKTtcbiAgICAgICAgICAhaXNTbGlkaW5nICYmIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGluZGljYXRvckhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjtcbiAgXG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGVbdGFyZ2V0XTsgLy8gZXZlbnQgdGFyZ2V0IHwgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW1cbiAgXG4gICAgICAgIGlmICggZXZlbnRUYXJnZXQgJiYgIWhhc0NsYXNzKGV2ZW50VGFyZ2V0LGFjdGl2ZSkgJiYgZXZlbnRUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhU2xpZGVUbykgKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludCggZXZlbnRUYXJnZXRbZ2V0QXR0cmlidXRlXShkYXRhU2xpZGVUbyksIDEwICk7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICBcbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xzSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIGlmIChpc1NsaWRpbmcpIHJldHVybjtcbiAgXG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gIFxuICAgICAgICBpZiAoIGV2ZW50VGFyZ2V0ID09PSByaWdodEFycm93ICkge1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50VGFyZ2V0ID09PSBsZWZ0QXJyb3cgKSB7XG4gICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIGtleUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zbGlkZVRvKCBpbmRleCApOyAvL0RvIHRoZSBzbGlkZVxuICAgICAgfSxcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgaXNFbGVtZW50SW5TY3JvbGxSYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50W2dldEJvdW5kaW5nQ2xpZW50UmVjdF0oKSxcbiAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9IGdsb2JhbE9iamVjdFtpbm5lckhlaWdodF0gfHwgSFRNTFtjbGllbnRIZWlnaHRdXG4gICAgICAgIHJldHVybiByZWN0W3RvcF0gPD0gdmlld3BvcnRIZWlnaHQgJiYgcmVjdFtib3R0b21dID49IDA7IC8vIGJvdHRvbSAmJiB0b3BcbiAgICAgIH0sICAgIFxuICAgICAgc2V0QWN0aXZlUGFnZSA9IGZ1bmN0aW9uKCBwYWdlSW5kZXggKSB7IC8vaW5kaWNhdG9yc1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGljbCA9IGluZGljYXRvcnNbbGVuZ3RoXTsgaSA8IGljbDsgaSsrICkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGluZGljYXRvcnNbaV0sYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kaWNhdG9yc1twYWdlSW5kZXhdKSBhZGRDbGFzcyhpbmRpY2F0b3JzW3BhZ2VJbmRleF0sIGFjdGl2ZSk7XG4gICAgICB9O1xuICBcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLmN5Y2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpc0VsZW1lbnRJblNjcm9sbFJhbmdlKCkgJiYgKGluZGV4KyssIHNlbGYuc2xpZGVUbyggaW5kZXggKSApO1xuICAgICAgfSwgdGhpc1tpbnRlcnZhbF0pO1xuICAgIH07XG4gICAgdGhpcy5zbGlkZVRvID0gZnVuY3Rpb24oIG5leHQgKSB7XG4gICAgICBpZiAoaXNTbGlkaW5nKSByZXR1cm47IC8vIHdoZW4gY29udHJvbGVkIHZpYSBtZXRob2RzLCBtYWtlIHN1cmUgdG8gY2hlY2sgYWdhaW4gICAgICBcbiAgICAgIFxuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSB0aGlzLmdldEFjdGl2ZUluZGV4KCksIC8vIHRoZSBjdXJyZW50IGFjdGl2ZVxuICAgICAgICAgIG9yaWVudGF0aW9uO1xuICAgICAgXG4gICAgICAvLyBkZXRlcm1pbmUgc2xpZGVEaXJlY3Rpb24gZmlyc3RcbiAgICAgIGlmICAoIChhY3RpdmVJdGVtIDwgbmV4dCApIHx8IChhY3RpdmVJdGVtID09PSAwICYmIG5leHQgPT09IHRvdGFsIC0xICkgKSB7XG4gICAgICAgIHNsaWRlRGlyZWN0aW9uID0gc2VsZltkaXJlY3Rpb25dID0gbGVmdDsgLy8gbmV4dFxuICAgICAgfSBlbHNlIGlmICAoIChhY3RpdmVJdGVtID4gbmV4dCkgfHwgKGFjdGl2ZUl0ZW0gPT09IHRvdGFsIC0gMSAmJiBuZXh0ID09PSAwICkgKSB7XG4gICAgICAgIHNsaWRlRGlyZWN0aW9uID0gc2VsZltkaXJlY3Rpb25dID0gcmlnaHQ7IC8vIHByZXZcbiAgICAgIH1cbiAgXG4gICAgICAvLyBmaW5kIHRoZSByaWdodCBuZXh0IGluZGV4IFxuICAgICAgaWYgKCBuZXh0IDwgMCApIHsgbmV4dCA9IHRvdGFsIC0gMTsgfSBcbiAgICAgIGVsc2UgaWYgKCBuZXh0ID09PSB0b3RhbCApeyBuZXh0ID0gMDsgfVxuICBcbiAgICAgIC8vIHVwZGF0ZSBpbmRleFxuICAgICAgaW5kZXggPSBuZXh0O1xuICBcbiAgICAgIG9yaWVudGF0aW9uID0gc2xpZGVEaXJlY3Rpb24gPT09IGxlZnQgPyAnbmV4dCcgOiAncHJldic7IC8vZGV0ZXJtaW5lIHR5cGVcbiAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgc2xpZGVFdmVudCwgY29tcG9uZW50LCBzbGlkZXNbbmV4dF0pOyAvLyBoZXJlIHdlIGdvIHdpdGggdGhlIHNsaWRlXG4gIFxuICAgICAgaXNTbGlkaW5nID0gdHJ1ZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgc2V0QWN0aXZlUGFnZSggbmV4dCApO1xuICBcbiAgICAgIGlmICggc3VwcG9ydFRyYW5zaXRpb25zICYmIGhhc0NsYXNzKGVsZW1lbnQsJ3NsaWRlJykgKSB7XG4gIFxuICAgICAgICBhZGRDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIG9yaWVudGF0aW9uKTtcbiAgICAgICAgc2xpZGVzW25leHRdW29mZnNldFdpZHRoXTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICBcbiAgICAgICAgb25lKHNsaWRlc1tuZXh0XSwgdHJhbnNpdGlvbkVuZEV2ZW50LCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHRpbWVvdXQgPSBlW3RhcmdldF0gIT09IHNsaWRlc1tuZXh0XSA/IGUuZWxhcHNlZFRpbWUqMTAwMCsxMDAgOiAyMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpc1NsaWRpbmcgJiYgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXNTbGlkaW5nID0gZmFsc2U7XG4gIFxuICAgICAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGFjdGl2ZSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbYWN0aXZlSXRlbV0sYWN0aXZlKTtcbiAgXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzbGlkZXNbbmV4dF0sY2Fyb3VzZWxJdGVtICsnLScrIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1tuZXh0XSxjYXJvdXNlbEl0ZW0gKyctJysgc2xpZGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVzW2FjdGl2ZUl0ZW1dLGNhcm91c2VsSXRlbSArJy0nKyBzbGlkZURpcmVjdGlvbik7XG4gIFxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzbGlkRXZlbnQsIGNvbXBvbmVudCwgc2xpZGVzW25leHRdKTtcbiAgXG4gICAgICAgICAgICBpZiAoICFET0MuaGlkZGVuICYmIHNlbGZbaW50ZXJ2YWxdICYmICFoYXNDbGFzcyhlbGVtZW50LHBhdXNlZCkgKSB7XG4gICAgICAgICAgICAgIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG4gIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVzW25leHRdLGFjdGl2ZSk7XG4gICAgICAgIHNsaWRlc1tuZXh0XVtvZmZzZXRXaWR0aF07XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlc1thY3RpdmVJdGVtXSxhY3RpdmUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmICggc2VsZltpbnRlcnZhbF0gJiYgIWhhc0NsYXNzKGVsZW1lbnQscGF1c2VkKSApIHtcbiAgICAgICAgICAgIHNlbGYuY3ljbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzbGlkRXZlbnQsIGNvbXBvbmVudCwgc2xpZGVzW25leHRdKTtcbiAgICAgICAgfSwgMTAwICk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdldEFjdGl2ZUluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNsaWRlc1tpbmRleE9mXShnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsY2Fyb3VzZWxJdGVtKycgYWN0aXZlJylbMF0pIHx8IDA7XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdDYXJvdXNlbCBpbiBlbGVtZW50ICkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gIFxuICAgICAgaWYgKCBzZWxmW3BhdXNlXSAmJiBzZWxmW2ludGVydmFsXSApIHtcbiAgICAgICAgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHBhdXNlSGFuZGxlciApO1xuICAgICAgICBvbiggZWxlbWVudCwgbW91c2VIb3ZlclsxXSwgcmVzdW1lSGFuZGxlciApO1xuICAgICAgICBvbiggZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCBwYXVzZUhhbmRsZXIgKTtcbiAgICAgICAgb24oIGVsZW1lbnQsICd0b3VjaGVuZCcsIHJlc3VtZUhhbmRsZXIgKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIHJpZ2h0QXJyb3cgJiYgb24oIHJpZ2h0QXJyb3csIGNsaWNrRXZlbnQsIGNvbnRyb2xzSGFuZGxlciApO1xuICAgICAgbGVmdEFycm93ICYmIG9uKCBsZWZ0QXJyb3csIGNsaWNrRXZlbnQsIGNvbnRyb2xzSGFuZGxlciApO1xuICAgIFxuICAgICAgaW5kaWNhdG9yICYmIG9uKCBpbmRpY2F0b3IsIGNsaWNrRXZlbnQsIGluZGljYXRvckhhbmRsZXIgKTtcbiAgICAgIHNlbGZba2V5Ym9hcmRdID09PSB0cnVlICYmIG9uKCBnbG9iYWxPYmplY3QsIGtleWRvd25FdmVudCwga2V5SGFuZGxlciApO1xuICAgIH1cbiAgICBpZiAoc2VsZi5nZXRBY3RpdmVJbmRleCgpPDApIHtcbiAgICAgIHNsaWRlc1tsZW5ndGhdICYmIGFkZENsYXNzKHNsaWRlc1swXSxhY3RpdmUpO1xuICAgICAgaW5kaWNhdG9yc1tsZW5ndGhdICYmIHNldEFjdGl2ZVBhZ2UoMCk7XG4gICAgfVxuICBcbiAgICBpZiAoIHNlbGZbaW50ZXJ2YWxdICl7IHNlbGYuY3ljbGUoKTsgfVxuICAgIGVsZW1lbnRbc3RyaW5nQ2Fyb3VzZWxdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIENBUk9VU0VMIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ0Nhcm91c2VsLCBDYXJvdXNlbCwgJ1snK2RhdGFSaWRlKyc9XCJjYXJvdXNlbFwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IENvbGxhcHNlXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIENPTExBUFNFIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgQ29sbGFwc2UgPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIGV2ZW50IHRhcmdldHMgYW5kIGNvbnN0YW50c1xuICAgIHZhciBhY2NvcmRpb24gPSBudWxsLCBjb2xsYXBzZSA9IG51bGwsIHNlbGYgPSB0aGlzLCBcbiAgICAgIGFjY29yZGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2RhdGEtcGFyZW50JyksXG4gICAgICBhY3RpdmVDb2xsYXBzZSwgYWN0aXZlRWxlbWVudCxcbiAgXG4gICAgICAvLyBjb21wb25lbnQgc3RyaW5nc1xuICAgICAgY29tcG9uZW50ID0gJ2NvbGxhcHNlJyxcbiAgICAgIGNvbGxhcHNlZCA9ICdjb2xsYXBzZWQnLFxuICAgICAgaXNBbmltYXRpbmcgPSAnaXNBbmltYXRpbmcnLFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgb3BlbkFjdGlvbiA9IGZ1bmN0aW9uKGNvbGxhcHNlRWxlbWVudCx0b2dnbGUpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbXBvbmVudCk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudFtzdHlsZV1baGVpZ2h0XSA9IGNvbGxhcHNlRWxlbWVudFtzY3JvbGxIZWlnaHRdICsgJ3B4JztcbiAgICAgICAgXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGNvbGxhcHNlRWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwndHJ1ZScpO1xuICAgICAgICAgIHRvZ2dsZVtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCwndHJ1ZScpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LHNob3dDbGFzcyk7XG4gICAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gJyc7XG4gICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChjb2xsYXBzZUVsZW1lbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlQWN0aW9uID0gZnVuY3Rpb24oY29sbGFwc2VFbGVtZW50LHRvZ2dsZSkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbaXNBbmltYXRpbmddID0gdHJ1ZTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gY29sbGFwc2VFbGVtZW50W3Njcm9sbEhlaWdodF0gKyAncHgnOyAvLyBzZXQgaGVpZ2h0IGZpcnN0XG4gICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb21wb25lbnQpO1xuICAgICAgICByZW1vdmVDbGFzcyhjb2xsYXBzZUVsZW1lbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgYWRkQ2xhc3MoY29sbGFwc2VFbGVtZW50LGNvbGxhcHNpbmcpO1xuICAgICAgICBjb2xsYXBzZUVsZW1lbnRbb2Zmc2V0V2lkdGhdOyAvLyBmb3JjZSByZWZsb3cgdG8gZW5hYmxlIHRyYW5zaXRpb25cbiAgICAgICAgY29sbGFwc2VFbGVtZW50W3N0eWxlXVtoZWlnaHRdID0gJzBweCc7XG4gICAgICAgIFxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChjb2xsYXBzZUVsZW1lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbGxhcHNlRWxlbWVudFtpc0FuaW1hdGluZ10gPSBmYWxzZTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc2V0QXR0cmlidXRlXShhcmlhRXhwYW5kZWQsJ2ZhbHNlJyk7XG4gICAgICAgICAgdG9nZ2xlW3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLCdmYWxzZScpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGNvbGxhcHNlRWxlbWVudCxjb2xsYXBzaW5nKTtcbiAgICAgICAgICBhZGRDbGFzcyhjb2xsYXBzZUVsZW1lbnQsY29tcG9uZW50KTtcbiAgICAgICAgICBjb2xsYXBzZUVsZW1lbnRbc3R5bGVdW2hlaWdodF0gPSAnJztcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGNvbGxhcHNlRWxlbWVudCwgaGlkZGVuRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHJlZiA9IGVsZW1lbnQuaHJlZiAmJiBlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSxcbiAgICAgICAgICBwYXJlbnQgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRhcmdldCksXG4gICAgICAgICAgaWQgPSBocmVmIHx8ICggcGFyZW50ICYmIHBhcmVudC5jaGFyQXQoMCkgPT09ICcjJyApICYmIHBhcmVudDtcbiAgICAgICAgcmV0dXJuIGlkICYmIHF1ZXJ5RWxlbWVudChpZCk7XG4gICAgICB9O1xuICAgIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgaWYgKCFoYXNDbGFzcyhjb2xsYXBzZSxzaG93Q2xhc3MpKSB7IHNlbGYuc2hvdygpOyB9IFxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggY29sbGFwc2VbaXNBbmltYXRpbmddICkgcmV0dXJuOyAgICBcbiAgICAgIGNsb3NlQWN0aW9uKGNvbGxhcHNlLGVsZW1lbnQpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCxjb2xsYXBzZWQpO1xuICAgIH07XG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIGFjY29yZGlvbiApIHtcbiAgICAgICAgYWN0aXZlQ29sbGFwc2UgPSBxdWVyeUVsZW1lbnQoJy4nK2NvbXBvbmVudCsnLicrc2hvd0NsYXNzLGFjY29yZGlvbik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVDb2xsYXBzZSAmJiAocXVlcnlFbGVtZW50KCdbJytkYXRhVG9nZ2xlKyc9XCInK2NvbXBvbmVudCsnXCJdWycrZGF0YVRhcmdldCsnPVwiIycrYWN0aXZlQ29sbGFwc2UuaWQrJ1wiXScsYWNjb3JkaW9uKVxuICAgICAgICAgICAgICAgICAgICAgIHx8IHF1ZXJ5RWxlbWVudCgnWycrZGF0YVRvZ2dsZSsnPVwiJytjb21wb25lbnQrJ1wiXVtocmVmPVwiIycrYWN0aXZlQ29sbGFwc2UuaWQrJ1wiXScsYWNjb3JkaW9uKSApO1xuICAgICAgfVxuICBcbiAgICAgIGlmICggIWNvbGxhcHNlW2lzQW5pbWF0aW5nXSB8fCBhY3RpdmVDb2xsYXBzZSAmJiAhYWN0aXZlQ29sbGFwc2VbaXNBbmltYXRpbmddICkge1xuICAgICAgICBpZiAoIGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlQ29sbGFwc2UgIT09IGNvbGxhcHNlICkge1xuICAgICAgICAgIGNsb3NlQWN0aW9uKGFjdGl2ZUNvbGxhcHNlLGFjdGl2ZUVsZW1lbnQpOyBcbiAgICAgICAgICBhZGRDbGFzcyhhY3RpdmVFbGVtZW50LGNvbGxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbkFjdGlvbihjb2xsYXBzZSxlbGVtZW50KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCxjb2xsYXBzZWQpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8vIGluaXRcbiAgICBpZiAoICEoc3RyaW5nQ29sbGFwc2UgaW4gZWxlbWVudCApICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgc2VsZi50b2dnbGUpO1xuICAgIH1cbiAgICBjb2xsYXBzZSA9IGdldFRhcmdldCgpO1xuICAgIGNvbGxhcHNlW2lzQW5pbWF0aW5nXSA9IGZhbHNlOyAgLy8gd2hlbiB0cnVlIGl0IHdpbGwgcHJldmVudCBjbGljayBoYW5kbGVycyAgXG4gICAgYWNjb3JkaW9uID0gcXVlcnlFbGVtZW50KG9wdGlvbnMucGFyZW50KSB8fCBhY2NvcmRpb25EYXRhICYmIGdldENsb3Nlc3QoZWxlbWVudCwgYWNjb3JkaW9uRGF0YSk7XG4gICAgZWxlbWVudFtzdHJpbmdDb2xsYXBzZV0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gQ09MTEFQU0UgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nQ29sbGFwc2UsIENvbGxhcHNlLCAnWycrZGF0YVRvZ2dsZSsnPVwiY29sbGFwc2VcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBEcm9wZG93blxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8vIERST1BET1dOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB2YXIgRHJvcGRvd24gPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9uICkge1xuICAgICAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25cbiAgICB0aGlzLnBlcnNpc3QgPSBvcHRpb24gPT09IHRydWUgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdkYXRhLXBlcnNpc3QnKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuICBcbiAgICAvLyBjb25zdGFudHMsIGV2ZW50IHRhcmdldHMsIHN0cmluZ3NcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNoaWxkcmVuID0gJ2NoaWxkcmVuJyxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnRbcGFyZW50Tm9kZV0sXG4gICAgICBjb21wb25lbnQgPSAnZHJvcGRvd24nLCBvcGVuID0gJ29wZW4nLFxuICAgICAgcmVsYXRlZFRhcmdldCA9IG51bGwsXG4gICAgICBtZW51ID0gcXVlcnlFbGVtZW50KCcuZHJvcGRvd24tbWVudScsIHBhcmVudCksXG4gICAgICBtZW51SXRlbXMgPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHNldCA9IG1lbnVbY2hpbGRyZW5dLCBuZXdTZXQgPSBbXTtcbiAgICAgICAgZm9yICggdmFyIGk9MDsgaTxzZXRbbGVuZ3RoXTsgaSsrICl7XG4gICAgICAgICAgc2V0W2ldW2NoaWxkcmVuXVtsZW5ndGhdICYmIChzZXRbaV1bY2hpbGRyZW5dWzBdLnRhZ05hbWUgPT09ICdBJyAmJiBuZXdTZXRbcHVzaF0oc2V0W2ldW2NoaWxkcmVuXVswXSkpO1xuICAgICAgICAgIHNldFtpXS50YWdOYW1lID09PSAnQScgJiYgbmV3U2V0W3B1c2hdKHNldFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1NldDtcbiAgICAgIH0pKCksXG4gIFxuICAgICAgLy8gcHJldmVudERlZmF1bHQgb24gZW1wdHkgYW5jaG9yIGxpbmtzXG4gICAgICBwcmV2ZW50RW1wdHlBbmNob3IgPSBmdW5jdGlvbihhbmNob3Ipe1xuICAgICAgICAoYW5jaG9yLmhyZWYgJiYgYW5jaG9yLmhyZWYuc2xpY2UoLTEpID09PSAnIycgfHwgYW5jaG9yW3BhcmVudE5vZGVdICYmIGFuY2hvcltwYXJlbnROb2RlXS5ocmVmIFxuICAgICAgICAgICYmIGFuY2hvcltwYXJlbnROb2RlXS5ocmVmLnNsaWNlKC0xKSA9PT0gJyMnKSAmJiB0aGlzW3ByZXZlbnREZWZhdWx0XSgpOyAgICBcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gdG9nZ2xlIGRpc21pc3NpYmxlIGV2ZW50c1xuICAgICAgdG9nZ2xlRGlzbWlzcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0eXBlID0gZWxlbWVudFtvcGVuXSA/IG9uIDogb2ZmO1xuICAgICAgICB0eXBlKERPQywgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpOyBcbiAgICAgICAgdHlwZShET0MsIGtleWRvd25FdmVudCwgcHJldmVudFNjcm9sbCk7XG4gICAgICAgIHR5cGUoRE9DLCBrZXl1cEV2ZW50LCBrZXlIYW5kbGVyKTtcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGRpc21pc3NIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBlW3RhcmdldF0sIGhhc0RhdGEgPSBldmVudFRhcmdldCAmJiAoc3RyaW5nRHJvcGRvd24gaW4gZXZlbnRUYXJnZXQgfHwgc3RyaW5nRHJvcGRvd24gaW4gZXZlbnRUYXJnZXRbcGFyZW50Tm9kZV0pO1xuICAgICAgICBpZiAoIChldmVudFRhcmdldCA9PT0gbWVudSB8fCBtZW51W2NvbnRhaW5zXShldmVudFRhcmdldCkpICYmIChzZWxmLnBlcnNpc3QgfHwgaGFzRGF0YSkgKSB7IHJldHVybjsgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZXZlbnRUYXJnZXQgPT09IGVsZW1lbnQgfHwgZWxlbWVudFtjb250YWluc10oZXZlbnRUYXJnZXQpID8gZWxlbWVudCA6IG51bGw7XG4gICAgICAgICAgaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHByZXZlbnRFbXB0eUFuY2hvci5jYWxsKGUsZXZlbnRUYXJnZXQpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcHJldmVudEVtcHR5QW5jaG9yLmNhbGwoZSxlW3RhcmdldF0pO1xuICAgICAgfSxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgICAgICBpZigga2V5ID09PSAzOCB8fCBrZXkgPT09IDQwICkgeyBlW3ByZXZlbnREZWZhdWx0XSgpOyB9XG4gICAgICB9LFxuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGUsXG4gICAgICAgICAgYWN0aXZlSXRlbSA9IERPQy5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgIGlkeCA9IG1lbnVJdGVtc1tpbmRleE9mXShhY3RpdmVJdGVtKSxcbiAgICAgICAgICBpc1NhbWVFbGVtZW50ID0gYWN0aXZlSXRlbSA9PT0gZWxlbWVudCxcbiAgICAgICAgICBpc0luc2lkZU1lbnUgPSBtZW51W2NvbnRhaW5zXShhY3RpdmVJdGVtKSxcbiAgICAgICAgICBpc01lbnVJdGVtID0gYWN0aXZlSXRlbVtwYXJlbnROb2RlXSA9PT0gbWVudSB8fCBhY3RpdmVJdGVtW3BhcmVudE5vZGVdW3BhcmVudE5vZGVdID09PSBtZW51OyAgICAgICAgICBcbiAgXG4gICAgICAgIGlmICggaXNNZW51SXRlbSB8fCBpc1NhbWVFbGVtZW50ICkgeyAvLyBuYXZpZ2F0ZSB1cCB8IGRvd25cbiAgICAgICAgICBpZHggPSBpc1NhbWVFbGVtZW50ID8gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAzOCA/IChpZHg+MT9pZHgtMTowKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrZXkgPT09IDQwID8gKGlkeDxtZW51SXRlbXNbbGVuZ3RoXS0xP2lkeCsxOmlkeCkgOiBpZHg7XG4gICAgICAgICAgbWVudUl0ZW1zW2lkeF0gJiYgc2V0Rm9jdXMobWVudUl0ZW1zW2lkeF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICggKG1lbnVJdGVtc1tsZW5ndGhdICYmIGlzTWVudUl0ZW0gLy8gbWVudSBoYXMgaXRlbXNcbiAgICAgICAgICAgICAgfHwgIW1lbnVJdGVtc1tsZW5ndGhdICYmIChpc0luc2lkZU1lbnUgfHwgaXNTYW1lRWxlbWVudCkgIC8vIG1lbnUgbWlnaHQgYmUgYSBmb3JtXG4gICAgICAgICAgICAgIHx8ICFpc0luc2lkZU1lbnUgKSAvLyBvciB0aGUgZm9jdXNlZCBlbGVtZW50IGlzIG5vdCBpbiB0aGUgbWVudSBhdCBhbGxcbiAgICAgICAgICAgICAgJiYgZWxlbWVudFtvcGVuXSAmJiBrZXkgPT09IDI3ICAvLyBtZW51IG11c3QgYmUgb3BlblxuICAgICAgICApIHtcbiAgICAgICAgICBzZWxmLnRvZ2dsZSgpO1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgc2hvd0V2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICBhZGRDbGFzcyhtZW51LHNob3dDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzKHBhcmVudCxzaG93Q2xhc3MpO1xuICAgICAgICBtZW51W3NldEF0dHJpYnV0ZV0oYXJpYUV4cGFuZGVkLHRydWUpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKHBhcmVudCwgc2hvd25FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgZWxlbWVudFtvcGVuXSA9IHRydWU7XG4gICAgICAgIG9mZihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgc2V0Rm9jdXMoIG1lbnVbZ2V0RWxlbWVudHNCeVRhZ05hbWVdKCdJTlBVVCcpWzBdIHx8IGVsZW1lbnQgKTsgLy8gZm9jdXMgdGhlIGZpcnN0IGlucHV0IGl0ZW0gfCBlbGVtZW50XG4gICAgICAgICAgdG9nZ2xlRGlzbWlzcygpO1xuICAgICAgICB9LDEpO1xuICAgICAgfSxcbiAgICAgIGhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChwYXJlbnQsIGhpZGVFdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobWVudSxzaG93Q2xhc3MpO1xuICAgICAgICByZW1vdmVDbGFzcyhwYXJlbnQsc2hvd0NsYXNzKTtcbiAgICAgICAgbWVudVtzZXRBdHRyaWJ1dGVdKGFyaWFFeHBhbmRlZCxmYWxzZSk7XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwocGFyZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgZWxlbWVudFtvcGVuXSA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVEaXNtaXNzKCk7XG4gICAgICAgIHNldEZvY3VzKGVsZW1lbnQpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7IH0sMSk7XG4gICAgICB9O1xuICBcbiAgICAvLyBzZXQgaW5pdGlhbCBzdGF0ZSB0byBjbG9zZWRcbiAgICBlbGVtZW50W29wZW5dID0gZmFsc2U7XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhwYXJlbnQsc2hvd0NsYXNzKSAmJiBlbGVtZW50W29wZW5dKSB7IGhpZGUoKTsgfSBcbiAgICAgIGVsc2UgeyBzaG93KCk7IH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgaWYgKCAhKHN0cmluZ0Ryb3Bkb3duIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgIXRhYmluZGV4IGluIG1lbnUgJiYgbWVudVtzZXRBdHRyaWJ1dGVdKHRhYmluZGV4LCAnMCcpOyAvLyBGaXggb25ibHVyIG9uIENocm9tZSB8IFNhZmFyaVxuICAgICAgb24oZWxlbWVudCwgY2xpY2tFdmVudCwgY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIFxuICAgIGVsZW1lbnRbc3RyaW5nRHJvcGRvd25dID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIERST1BET1dOIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHN1cHBvcnRzW3B1c2hdKCBbc3RyaW5nRHJvcGRvd24sIERyb3Bkb3duLCAnWycrZGF0YVRvZ2dsZSsnPVwiZHJvcGRvd25cIl0nXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IE1vZGFsXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gTU9EQUwgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT1cbiAgdmFyIE1vZGFsID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykgeyAvLyBlbGVtZW50IGNhbiBiZSB0aGUgbW9kYWwvdHJpZ2dlcmluZyBidXR0b25cbiAgXG4gICAgLy8gdGhlIG1vZGFsIChib3RoIEphdmFTY3JpcHQgLyBEQVRBIEFQSSBpbml0KSAvIHRyaWdnZXJpbmcgYnV0dG9uIGVsZW1lbnQgKERBVEEgQVBJKVxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIGRldGVybWluZSBtb2RhbCwgdHJpZ2dlcmluZyBlbGVtZW50XG4gICAgdmFyIGJ0bkNoZWNrID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpfHxlbGVtZW50W2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSxcbiAgICAgIGNoZWNrTW9kYWwgPSBxdWVyeUVsZW1lbnQoIGJ0bkNoZWNrICksXG4gICAgICBtb2RhbCA9IGhhc0NsYXNzKGVsZW1lbnQsJ21vZGFsJykgPyBlbGVtZW50IDogY2hlY2tNb2RhbCxcbiAgICAgIG92ZXJsYXlEZWxheSxcbiAgXG4gICAgICAvLyBzdHJpbmdzXG4gICAgICBjb21wb25lbnQgPSAnbW9kYWwnLFxuICAgICAgc3RhdGljU3RyaW5nID0gJ3N0YXRpYycsXG4gICAgICBwYWRkaW5nTGVmdCA9ICdwYWRkaW5nTGVmdCcsXG4gICAgICBwYWRkaW5nUmlnaHQgPSAncGFkZGluZ1JpZ2h0JyxcbiAgICAgIG1vZGFsQmFja2Ryb3BTdHJpbmcgPSAnbW9kYWwtYmFja2Ryb3AnO1xuICBcbiAgICBpZiAoIGhhc0NsYXNzKGVsZW1lbnQsJ21vZGFsJykgKSB7IGVsZW1lbnQgPSBudWxsOyB9IC8vIG1vZGFsIGlzIG5vdyBpbmRlcGVuZGVudCBvZiBpdCdzIHRyaWdnZXJpbmcgZWxlbWVudFxuICBcbiAgICBpZiAoICFtb2RhbCApIHsgcmV0dXJuOyB9IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgdGhpc1trZXlib2FyZF0gPSBvcHRpb25zW2tleWJvYXJkXSA9PT0gZmFsc2UgfHwgbW9kYWxbZ2V0QXR0cmlidXRlXShkYXRhS2V5Ym9hcmQpID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXNbYmFja2Ryb3BdID0gb3B0aW9uc1tiYWNrZHJvcF0gPT09IHN0YXRpY1N0cmluZyB8fCBtb2RhbFtnZXRBdHRyaWJ1dGVdKGRhdGFiYWNrZHJvcCkgPT09IHN0YXRpY1N0cmluZyA/IHN0YXRpY1N0cmluZyA6IHRydWU7XG4gICAgdGhpc1tiYWNrZHJvcF0gPSBvcHRpb25zW2JhY2tkcm9wXSA9PT0gZmFsc2UgfHwgbW9kYWxbZ2V0QXR0cmlidXRlXShkYXRhYmFja2Ryb3ApID09PSAnZmFsc2UnID8gZmFsc2UgOiB0aGlzW2JhY2tkcm9wXTtcbiAgICB0aGlzW2NvbnRlbnRdICA9IG9wdGlvbnNbY29udGVudF07IC8vIEphdmFTY3JpcHQgb25seVxuICBcbiAgICAvLyBiaW5kLCBjb25zdGFudHMsIGV2ZW50IHRhcmdldHMgYW5kIG90aGVyIHZhcnNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlbGF0ZWRUYXJnZXQgPSBudWxsLFxuICAgICAgYm9keUlzT3ZlcmZsb3dpbmcsIG1vZGFsSXNPdmVyZmxvd2luZywgc2Nyb2xsYmFyV2lkdGgsIG92ZXJsYXksXG4gIFxuICAgICAgLy8gYWxzbyBmaW5kIGZpeGVkLXRvcCAvIGZpeGVkLWJvdHRvbSBpdGVtc1xuICAgICAgZml4ZWRJdGVtcyA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoSFRNTCxmaXhlZFRvcCkuY29uY2F0KGdldEVsZW1lbnRzQnlDbGFzc05hbWUoSFRNTCxmaXhlZEJvdHRvbSkpLFxuICBcbiAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgICAgZ2V0V2luZG93V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWxSZWN0ID0gSFRNTFtnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCk7XG4gICAgICAgIHJldHVybiBnbG9iYWxPYmplY3RbaW5uZXJXaWR0aF0gfHwgKGh0bWxSZWN0W3JpZ2h0XSAtIE1hdGguYWJzKGh0bWxSZWN0W2xlZnRdKSk7XG4gICAgICB9LFxuICAgICAgc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm9keVN0eWxlID0gZ2xvYmFsT2JqZWN0W2dldENvbXB1dGVkU3R5bGVdKERPQ1tib2R5XSksXG4gICAgICAgICAgICBib2R5UGFkID0gcGFyc2VJbnQoKGJvZHlTdHlsZVtwYWRkaW5nUmlnaHRdKSwgMTApLCBpdGVtUGFkO1xuICAgICAgICBpZiAoYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICBET0NbYm9keV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAoYm9keVBhZCArIHNjcm9sbGJhcldpZHRoKSArICdweCc7XG4gICAgICAgICAgaWYgKGZpeGVkSXRlbXNbbGVuZ3RoXSl7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpeGVkSXRlbXNbbGVuZ3RoXTsgaSsrKSB7XG4gICAgICAgICAgICAgIGl0ZW1QYWQgPSBnbG9iYWxPYmplY3RbZ2V0Q29tcHV0ZWRTdHlsZV0oZml4ZWRJdGVtc1tpXSlbcGFkZGluZ1JpZ2h0XTtcbiAgICAgICAgICAgICAgZml4ZWRJdGVtc1tpXVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICggcGFyc2VJbnQoaXRlbVBhZCkgKyBzY3JvbGxiYXJXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBET0NbYm9keV1bc3R5bGVdW3BhZGRpbmdSaWdodF0gPSAnJztcbiAgICAgICAgaWYgKGZpeGVkSXRlbXNbbGVuZ3RoXSl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXhlZEl0ZW1zW2xlbmd0aF07IGkrKykge1xuICAgICAgICAgICAgZml4ZWRJdGVtc1tpXVtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7IC8vIHRoeCB3YWxzaFxuICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gRE9DW2NyZWF0ZUVsZW1lbnRdKCdkaXYnKSwgc2Nyb2xsQmFyV2lkdGg7XG4gICAgICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBjb21wb25lbnQrJy1zY3JvbGxiYXItbWVhc3VyZSc7IC8vIHRoaXMgaXMgaGVyZSB0byBzdGF5XG4gICAgICAgIERPQ1tib2R5XVthcHBlbmRDaGlsZF0oc2Nyb2xsRGl2KTtcbiAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxEaXZbb2Zmc2V0V2lkdGhdIC0gc2Nyb2xsRGl2W2NsaWVudFdpZHRoXTtcbiAgICAgICAgRE9DW2JvZHldLnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgICAgIHJldHVybiBzY3JvbGxCYXJXaWR0aDtcbiAgICAgIH0sXG4gICAgICBjaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYm9keUlzT3ZlcmZsb3dpbmcgPSBET0NbYm9keV1bY2xpZW50V2lkdGhdIDwgZ2V0V2luZG93V2lkdGgoKTtcbiAgICAgICAgbW9kYWxJc092ZXJmbG93aW5nID0gbW9kYWxbc2Nyb2xsSGVpZ2h0XSA+IEhUTUxbY2xpZW50SGVpZ2h0XTtcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSBtZWFzdXJlU2Nyb2xsYmFyKCk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbFtzdHlsZV1bcGFkZGluZ0xlZnRdID0gIWJvZHlJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IHNjcm9sbGJhcldpZHRoICsgJ3B4JyA6ICcnO1xuICAgICAgICBtb2RhbFtzdHlsZV1bcGFkZGluZ1JpZ2h0XSA9IGJvZHlJc092ZXJmbG93aW5nICYmICFtb2RhbElzT3ZlcmZsb3dpbmcgPyBzY3JvbGxiYXJXaWR0aCArICdweCcgOiAnJztcbiAgICAgIH0sXG4gICAgICByZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbFtzdHlsZV1bcGFkZGluZ0xlZnRdID0gJyc7XG4gICAgICAgIG1vZGFsW3N0eWxlXVtwYWRkaW5nUmlnaHRdID0gJyc7XG4gICAgICB9LFxuICAgICAgY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbE92ZXJsYXkgPSAxOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgbmV3T3ZlcmxheSA9IERPQ1tjcmVhdGVFbGVtZW50XSgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkgPSBxdWVyeUVsZW1lbnQoJy4nK21vZGFsQmFja2Ryb3BTdHJpbmcpO1xuICBcbiAgICAgICAgaWYgKCBvdmVybGF5ID09PSBudWxsICkge1xuICAgICAgICAgIG5ld092ZXJsYXlbc2V0QXR0cmlidXRlXSgnY2xhc3MnLG1vZGFsQmFja2Ryb3BTdHJpbmcrJyBmYWRlJyk7XG4gICAgICAgICAgb3ZlcmxheSA9IG5ld092ZXJsYXk7XG4gICAgICAgICAgRE9DW2JvZHldW2FwcGVuZENoaWxkXShvdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbW92ZU92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLicrbW9kYWxCYWNrZHJvcFN0cmluZyk7XG4gICAgICAgIGlmICggb3ZlcmxheSAmJiBvdmVybGF5ICE9PSBudWxsICYmIHR5cGVvZiBvdmVybGF5ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICBtb2RhbE92ZXJsYXkgPSAwOyAgICAgICAgXG4gICAgICAgICAgRE9DW2JvZHldLnJlbW92ZUNoaWxkKG92ZXJsYXkpOyBvdmVybGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKG1vZGFsLCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTsgICAgICBcbiAgICAgIH0sXG4gICAgICBrZXlkb3duSGFuZGxlclRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIG9uKERPQywga2V5ZG93bkV2ZW50LCBrZXlIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmYoRE9DLCBrZXlkb3duRXZlbnQsIGtleUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzaXplSGFuZGxlclRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIG9uKGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYudXBkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmYoZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi51cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzbWlzc0hhbmRsZXJUb2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykpIHtcbiAgICAgICAgICBvbihtb2RhbCwgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZihtb2RhbCwgY2xpY2tFdmVudCwgZGlzbWlzc0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gdHJpZ2dlcnNcbiAgICAgIHRyaWdnZXJTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEZvY3VzKG1vZGFsKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgc2hvd25FdmVudCwgY29tcG9uZW50LCByZWxhdGVkVGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VySGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbFtzdHlsZV0uZGlzcGxheSA9ICcnO1xuICAgICAgICBlbGVtZW50ICYmIChzZXRGb2N1cyhlbGVtZW50KSk7XG4gICAgICAgIFxuICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBpZiAoIWdldEVsZW1lbnRzQnlDbGFzc05hbWUoRE9DLGNvbXBvbmVudCsnICcrc2hvd0NsYXNzKVswXSkge1xuICAgICAgICAgICAgcmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgICAgICAgcmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKERPQ1tib2R5XSxjb21wb25lbnQrJy1vcGVuJyk7XG4gICAgICAgICAgICBvdmVybGF5ICYmIGhhc0NsYXNzKG92ZXJsYXksJ2ZhZGUnKSA/IChyZW1vdmVDbGFzcyhvdmVybGF5LHNob3dDbGFzcyksIGVtdWxhdGVUcmFuc2l0aW9uRW5kKG92ZXJsYXkscmVtb3ZlT3ZlcmxheSkpIFxuICAgICAgICAgICAgOiByZW1vdmVPdmVybGF5KCk7XG4gIFxuICAgICAgICAgICAgcmVzaXplSGFuZGxlclRvZ2dsZSgpO1xuICAgICAgICAgICAgZGlzbWlzc0hhbmRsZXJUb2dnbGUoKTtcbiAgICAgICAgICAgIGtleWRvd25IYW5kbGVyVG9nZ2xlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgICAgfSxcbiAgICAgIC8vIGhhbmRsZXJzXG4gICAgICBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBjbGlja1RhcmdldCA9IGVbdGFyZ2V0XTtcbiAgICAgICAgY2xpY2tUYXJnZXQgPSBjbGlja1RhcmdldFtoYXNBdHRyaWJ1dGVdKGRhdGFUYXJnZXQpIHx8IGNsaWNrVGFyZ2V0W2hhc0F0dHJpYnV0ZV0oJ2hyZWYnKSA/IGNsaWNrVGFyZ2V0IDogY2xpY2tUYXJnZXRbcGFyZW50Tm9kZV07XG4gICAgICAgIGlmICggY2xpY2tUYXJnZXQgPT09IGVsZW1lbnQgJiYgIWhhc0NsYXNzKG1vZGFsLHNob3dDbGFzcykgKSB7XG4gICAgICAgICAgbW9kYWwubW9kYWxUcmlnZ2VyID0gZWxlbWVudDtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAga2V5SGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHNlbGZba2V5Ym9hcmRdICYmIGUud2hpY2ggPT0gMjcgJiYgaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzbWlzc0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBjbGlja1RhcmdldCA9IGVbdGFyZ2V0XTtcbiAgICAgICAgaWYgKCBoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpICYmIChjbGlja1RhcmdldFtwYXJlbnROb2RlXVtnZXRBdHRyaWJ1dGVdKGRhdGFEaXNtaXNzKSA9PT0gY29tcG9uZW50XG4gICAgICAgICAgICB8fCBjbGlja1RhcmdldFtnZXRBdHRyaWJ1dGVdKGRhdGFEaXNtaXNzKSA9PT0gY29tcG9uZW50XG4gICAgICAgICAgICB8fCAoY2xpY2tUYXJnZXQgPT09IG1vZGFsICYmIHNlbGZbYmFja2Ryb3BdICE9PSBzdGF0aWNTdHJpbmcpICkgKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKCk7IHJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIGVbcHJldmVudERlZmF1bHRdKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgdGhpcy50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICggaGFzQ2xhc3MobW9kYWwsc2hvd0NsYXNzKSApIHt0aGlzLmhpZGUoKTt9IGVsc2Uge3RoaXMuc2hvdygpO31cbiAgICB9O1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgc2hvd0V2ZW50LCBjb21wb25lbnQsIHJlbGF0ZWRUYXJnZXQpO1xuICBcbiAgICAgIC8vIHdlIGVsZWdhbnRseSBoaWRlIGFueSBvcGVuZWQgbW9kYWxcbiAgICAgIHZhciBjdXJyZW50T3BlbiA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoRE9DLGNvbXBvbmVudCsnICcrc2hvd0NsYXNzKVswXTtcbiAgICAgIGN1cnJlbnRPcGVuICYmIGN1cnJlbnRPcGVuICE9PSBtb2RhbCAmJiBjdXJyZW50T3Blbi5tb2RhbFRyaWdnZXJbc3RyaW5nTW9kYWxdLmhpZGUoKTtcbiAgXG4gICAgICBpZiAoIHRoaXNbYmFja2Ryb3BdICkge1xuICAgICAgICAhbW9kYWxPdmVybGF5ICYmIGNyZWF0ZU92ZXJsYXkoKTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoIG92ZXJsYXkgJiYgbW9kYWxPdmVybGF5ICYmICFoYXNDbGFzcyhvdmVybGF5LHNob3dDbGFzcykpIHtcbiAgICAgICAgb3ZlcmxheVtvZmZzZXRXaWR0aF07IC8vIGZvcmNlIHJlZmxvdyB0byBlbmFibGUgdHJhc2l0aW9uXG4gICAgICAgIG92ZXJsYXlEZWxheSA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KG92ZXJsYXkpOyAgICAgICAgICAgICAgXG4gICAgICAgIGFkZENsYXNzKG92ZXJsYXksIHNob3dDbGFzcyk7XG4gICAgICB9XG4gIFxuICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsW3N0eWxlXS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgXG4gICAgICAgIGNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHNldFNjcm9sbGJhcigpO1xuICAgICAgICBhZGp1c3REaWFsb2coKTtcbiAgXG4gICAgICAgIGFkZENsYXNzKERPQ1tib2R5XSxjb21wb25lbnQrJy1vcGVuJyk7XG4gICAgICAgIGFkZENsYXNzKG1vZGFsLHNob3dDbGFzcyk7XG4gICAgICAgIG1vZGFsW3NldEF0dHJpYnV0ZV0oYXJpYUhpZGRlbiwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgcmVzaXplSGFuZGxlclRvZ2dsZSgpO1xuICAgICAgICBkaXNtaXNzSGFuZGxlclRvZ2dsZSgpO1xuICAgICAgICBrZXlkb3duSGFuZGxlclRvZ2dsZSgpO1xuICBcbiAgICAgICAgaGFzQ2xhc3MobW9kYWwsJ2ZhZGUnKSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsLCB0cmlnZ2VyU2hvdykgOiB0cmlnZ2VyU2hvdygpO1xuICAgICAgfSwgc3VwcG9ydFRyYW5zaXRpb25zICYmIG92ZXJsYXkgPyBvdmVybGF5RGVsYXkgOiAwKTtcbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChtb2RhbCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgb3ZlcmxheSA9IHF1ZXJ5RWxlbWVudCgnLicrbW9kYWxCYWNrZHJvcFN0cmluZyk7XG4gICAgICBvdmVybGF5RGVsYXkgPSBvdmVybGF5ICYmIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KG92ZXJsYXkpOyAgICBcbiAgXG4gICAgICByZW1vdmVDbGFzcyhtb2RhbCxzaG93Q2xhc3MpO1xuICAgICAgbW9kYWxbc2V0QXR0cmlidXRlXShhcmlhSGlkZGVuLCB0cnVlKTtcbiAgXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGhhc0NsYXNzKG1vZGFsLCdmYWRlJykgPyBlbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbCwgdHJpZ2dlckhpZGUpIDogdHJpZ2dlckhpZGUoKTtcbiAgICAgIH0sIHN1cHBvcnRUcmFuc2l0aW9ucyAmJiBvdmVybGF5ID8gb3ZlcmxheURlbGF5IDogMCk7XG4gICAgfTtcbiAgICB0aGlzLnNldENvbnRlbnQgPSBmdW5jdGlvbiggY29udGVudCApIHtcbiAgICAgIHF1ZXJ5RWxlbWVudCgnLicrY29tcG9uZW50KyctY29udGVudCcsbW9kYWwpW2lubmVySFRNTF0gPSBjb250ZW50O1xuICAgIH07XG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhtb2RhbCxzaG93Q2xhc3MpKSB7XG4gICAgICAgIGNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHNldFNjcm9sbGJhcigpO1xuICAgICAgICBhZGp1c3REaWFsb2coKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBpbml0XG4gICAgLy8gcHJldmVudCBhZGRpbmcgZXZlbnQgaGFuZGxlcnMgb3ZlciBhbmQgb3ZlclxuICAgIC8vIG1vZGFsIGlzIGluZGVwZW5kZW50IG9mIGEgdHJpZ2dlcmluZyBlbGVtZW50XG4gICAgaWYgKCAhIWVsZW1lbnQgJiYgIShzdHJpbmdNb2RhbCBpbiBlbGVtZW50KSApIHtcbiAgICAgIG9uKGVsZW1lbnQsIGNsaWNrRXZlbnQsIGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmICggISFzZWxmW2NvbnRlbnRdICkgeyBzZWxmLnNldENvbnRlbnQoIHNlbGZbY29udGVudF0gKTsgfVxuICAgICEhZWxlbWVudCAmJiAoZWxlbWVudFtzdHJpbmdNb2RhbF0gPSBzZWxmKTtcbiAgfTtcbiAgXG4gIC8vIERBVEEgQVBJXG4gIHN1cHBvcnRzW3B1c2hdKCBbIHN0cmluZ01vZGFsLCBNb2RhbCwgJ1snK2RhdGFUb2dnbGUrJz1cIm1vZGFsXCJdJyBdICk7XG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBQb3BvdmVyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLy8gUE9QT1ZFUiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICB2YXIgUG9wb3ZlciA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zICkge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50XG4gICAgZWxlbWVudCA9IHF1ZXJ5RWxlbWVudChlbGVtZW50KTtcbiAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgdHJpZ2dlckRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRyaWdnZXIpLCAvLyBjbGljayAvIGhvdmVyIC8gZm9jdXNcbiAgICAgICAgYW5pbWF0aW9uRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQW5pbWF0aW9uKSwgLy8gdHJ1ZSAvIGZhbHNlXG4gICAgICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVBsYWNlbWVudCksXG4gICAgICAgIGRpc21pc3NpYmxlRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGlzbWlzc2libGUpLFxuICAgICAgICBkZWxheURhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YURlbGF5KSxcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGFpbmVyKSxcbiAgXG4gICAgICAgIC8vIGludGVybmFsIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3BvcG92ZXInLFxuICAgICAgICB0ZW1wbGF0ZSA9ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRyaWdnZXIgPSAndHJpZ2dlcicsXG4gICAgICAgIGNsYXNzU3RyaW5nID0gJ2NsYXNzJyxcbiAgICAgICAgZGl2ID0gJ2RpdicsXG4gICAgICAgIGZhZGUgPSAnZmFkZScsXG4gICAgICAgIGNvbnRlbnQgPSAnY29udGVudCcsXG4gICAgICAgIGRhdGFDb250ZW50ID0gJ2RhdGEtY29udGVudCcsXG4gICAgICAgIGRpc21pc3NpYmxlID0gJ2Rpc21pc3NpYmxlJyxcbiAgICAgICAgY2xvc2VCdG4gPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiPsOXPC9idXR0b24+JyxcbiAgXG4gICAgICAgIC8vIGNoZWNrIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJFbGVtZW50ID0gcXVlcnlFbGVtZW50KG9wdGlvbnNbY29udGFpbmVyXSksXG4gICAgICAgIGNvbnRhaW5lckRhdGFFbGVtZW50ID0gcXVlcnlFbGVtZW50KGNvbnRhaW5lckRhdGEpLCAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIG1vZGFsXG4gICAgICAgIG1vZGFsID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcubW9kYWwnKSxcbiAgICAgICAgXG4gICAgICAgIC8vIG1heWJlIHRoZSBlbGVtZW50IGlzIGluc2lkZSBhIGZpeGVkIG5hdmJhclxuICAgICAgICBuYXZiYXJGaXhlZFRvcCA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRUb3ApLFxuICAgICAgICBuYXZiYXJGaXhlZEJvdHRvbSA9IGdldENsb3Nlc3QoZWxlbWVudCwnLicrZml4ZWRCb3R0b20pO1xuICBcbiAgICAvLyBzZXQgaW5zdGFuY2Ugb3B0aW9uc1xuICAgIHRoaXNbdGVtcGxhdGVdID0gb3B0aW9uc1t0ZW1wbGF0ZV0gPyBvcHRpb25zW3RlbXBsYXRlXSA6IG51bGw7IC8vIEphdmFTY3JpcHQgb25seVxuICAgIHRoaXNbdHJpZ2dlcl0gPSBvcHRpb25zW3RyaWdnZXJdID8gb3B0aW9uc1t0cmlnZ2VyXSA6IHRyaWdnZXJEYXRhIHx8IGhvdmVyRXZlbnQ7XG4gICAgdGhpc1thbmltYXRpb25dID0gb3B0aW9uc1thbmltYXRpb25dICYmIG9wdGlvbnNbYW5pbWF0aW9uXSAhPT0gZmFkZSA/IG9wdGlvbnNbYW5pbWF0aW9uXSA6IGFuaW1hdGlvbkRhdGEgfHwgZmFkZTtcbiAgICB0aGlzW3BsYWNlbWVudF0gPSBvcHRpb25zW3BsYWNlbWVudF0gPyBvcHRpb25zW3BsYWNlbWVudF0gOiBwbGFjZW1lbnREYXRhIHx8IHRvcDtcbiAgICB0aGlzW2RlbGF5XSA9IHBhcnNlSW50KG9wdGlvbnNbZGVsYXldIHx8IGRlbGF5RGF0YSkgfHwgMjAwO1xuICAgIHRoaXNbZGlzbWlzc2libGVdID0gb3B0aW9uc1tkaXNtaXNzaWJsZV0gfHwgZGlzbWlzc2libGVEYXRhID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpc1tjb250YWluZXJdID0gY29udGFpbmVyRWxlbWVudCA/IGNvbnRhaW5lckVsZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgIDogY29udGFpbmVyRGF0YUVsZW1lbnQgPyBjb250YWluZXJEYXRhRWxlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZFRvcCA/IG5hdmJhckZpeGVkVG9wXG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRCb3R0b20gPyBuYXZiYXJGaXhlZEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGFsID8gbW9kYWwgOiBET0NbYm9keV07XG4gICAgXG4gICAgLy8gYmluZCwgY29udGVudFxuICAgIHZhciBzZWxmID0gdGhpcywgXG4gICAgICB0aXRsZVN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhVGl0bGUpIHx8IG51bGwsXG4gICAgICBjb250ZW50U3RyaW5nID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250ZW50KSB8fCBudWxsO1xuICBcbiAgICBpZiAoICFjb250ZW50U3RyaW5nICYmICF0aGlzW3RlbXBsYXRlXSApIHJldHVybjsgLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBjb25zdGFudHMsIHZhcnNcbiAgICB2YXIgcG9wb3ZlciA9IG51bGwsIHRpbWVyID0gMCwgcGxhY2VtZW50U2V0dGluZyA9IHRoaXNbcGxhY2VtZW50XSxcbiAgICAgIFxuICAgICAgLy8gaGFuZGxlcnNcbiAgICAgIGRpc21pc3NpYmxlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHBvcG92ZXIgIT09IG51bGwgJiYgZVt0YXJnZXRdID09PSBxdWVyeUVsZW1lbnQoJy5jbG9zZScscG9wb3ZlcikpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXG4gICAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAgIHJlbW92ZVBvcG92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZltjb250YWluZXJdLnJlbW92ZUNoaWxkKHBvcG92ZXIpO1xuICAgICAgICB0aW1lciA9IG51bGw7IHBvcG92ZXIgPSBudWxsOyBcbiAgICAgIH0sXG4gICAgICBjcmVhdGVQb3BvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpdGxlU3RyaW5nID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSk7IC8vIGNoZWNrIGNvbnRlbnQgYWdhaW5cbiAgICAgICAgY29udGVudFN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhQ29udGVudCk7XG4gIFxuICAgICAgICBwb3BvdmVyID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gIFxuICAgICAgICAvLyBwb3BvdmVyIGFycm93XG4gICAgICAgIHZhciBwb3BvdmVyQXJyb3cgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgcG9wb3ZlckFycm93W3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsJ2Fycm93Jyk7XG4gICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJBcnJvdyk7XG4gIFxuICAgICAgICBpZiAoIGNvbnRlbnRTdHJpbmcgIT09IG51bGwgJiYgc2VsZlt0ZW1wbGF0ZV0gPT09IG51bGwgKSB7IC8vY3JlYXRlIHRoZSBwb3BvdmVyIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gIFxuICAgICAgICAgIHBvcG92ZXJbc2V0QXR0cmlidXRlXSgncm9sZScsJ3Rvb2x0aXAnKTtcbiAgXG4gICAgICAgICAgaWYgKHRpdGxlU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcG9wb3ZlclRpdGxlID0gRE9DW2NyZWF0ZUVsZW1lbnRdKCdoMycpO1xuICAgICAgICAgICAgcG9wb3ZlclRpdGxlW3NldEF0dHJpYnV0ZV0oY2xhc3NTdHJpbmcsY29tcG9uZW50KyctaGVhZGVyJyk7XG4gIFxuICAgICAgICAgICAgcG9wb3ZlclRpdGxlW2lubmVySFRNTF0gPSBzZWxmW2Rpc21pc3NpYmxlXSA/IHRpdGxlU3RyaW5nICsgY2xvc2VCdG4gOiB0aXRsZVN0cmluZztcbiAgICAgICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJUaXRsZSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvL3NldCBwb3BvdmVyIGNvbnRlbnRcbiAgICAgICAgICB2YXIgcG9wb3ZlckNvbnRlbnQgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICBwb3BvdmVyQ29udGVudFtzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLGNvbXBvbmVudCsnLWJvZHknKTtcbiAgICAgICAgICBwb3BvdmVyQ29udGVudFtpbm5lckhUTUxdID0gc2VsZltkaXNtaXNzaWJsZV0gJiYgdGl0bGVTdHJpbmcgPT09IG51bGwgPyBjb250ZW50U3RyaW5nICsgY2xvc2VCdG4gOiBjb250ZW50U3RyaW5nO1xuICAgICAgICAgIHBvcG92ZXJbYXBwZW5kQ2hpbGRdKHBvcG92ZXJDb250ZW50KTtcbiAgXG4gICAgICAgIH0gZWxzZSB7ICAvLyBvciBjcmVhdGUgdGhlIHBvcG92ZXIgZnJvbSB0ZW1wbGF0ZVxuICAgICAgICAgIHZhciBwb3BvdmVyVGVtcGxhdGUgPSBET0NbY3JlYXRlRWxlbWVudF0oZGl2KTtcbiAgICAgICAgICBwb3BvdmVyVGVtcGxhdGVbaW5uZXJIVE1MXSA9IHNlbGZbdGVtcGxhdGVdO1xuICAgICAgICAgIHBvcG92ZXJbaW5uZXJIVE1MXSA9IHBvcG92ZXJUZW1wbGF0ZS5maXJzdENoaWxkW2lubmVySFRNTF07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vYXBwZW5kIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgc2VsZltjb250YWluZXJdW2FwcGVuZENoaWxkXShwb3BvdmVyKTtcbiAgICAgICAgcG9wb3ZlcltzdHlsZV0uZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHBvcG92ZXJbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywgY29tcG9uZW50KyAnIGJzLScgKyBjb21wb25lbnQrJy0nK3BsYWNlbWVudFNldHRpbmcgKyAnICcgKyBzZWxmW2FuaW1hdGlvbl0pO1xuICAgICAgfSxcbiAgICAgIHNob3dQb3BvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAhaGFzQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpICYmICggYWRkQ2xhc3MocG9wb3ZlcixzaG93Q2xhc3MpICk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlUG9wb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdHlsZVRpcChlbGVtZW50LHBvcG92ZXIscGxhY2VtZW50U2V0dGluZyxzZWxmW2NvbnRhaW5lcl0pO1xuICAgICAgfSxcbiAgXG4gICAgICAvLyBldmVudCB0b2dnbGVcbiAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlID0gZnVuY3Rpb24odHlwZSl7XG4gICAgICAgIGlmIChjbGlja0V2ZW50ID09IHNlbGZbdHJpZ2dlcl0gfHwgJ2ZvY3VzJyA9PSBzZWxmW3RyaWdnZXJdKSB7XG4gICAgICAgICAgIXNlbGZbZGlzbWlzc2libGVdICYmIHR5cGUoIGVsZW1lbnQsICdibHVyJywgc2VsZi5oaWRlICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZltkaXNtaXNzaWJsZV0gJiYgdHlwZSggRE9DLCBjbGlja0V2ZW50LCBkaXNtaXNzaWJsZUhhbmRsZXIgKTsgICAgIFxuICAgICAgICB0eXBlKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLmhpZGUgKTtcbiAgICAgIH0sXG4gIFxuICAgICAgLy8gdHJpZ2dlcnNcbiAgICAgIHNob3dUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKG9uKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBzaG93bkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGhpZGVUcmlnZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc21pc3NIYW5kbGVyVG9nZ2xlKG9mZik7XG4gICAgICAgIHJlbW92ZVBvcG92ZXIoKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCBoaWRkZW5FdmVudCwgY29tcG9uZW50KTtcbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzIC8gaGFuZGxlcnNcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHBvcG92ZXIgPT09IG51bGwpIHsgc2VsZi5zaG93KCk7IH0gXG4gICAgICBlbHNlIHsgc2VsZi5oaWRlKCk7IH1cbiAgICB9O1xuICAgIHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwb3BvdmVyID09PSBudWxsKSB7XG4gICAgICAgICAgcGxhY2VtZW50U2V0dGluZyA9IHNlbGZbcGxhY2VtZW50XTsgLy8gd2UgcmVzZXQgcGxhY2VtZW50IGluIGFsbCBjYXNlc1xuICAgICAgICAgIGNyZWF0ZVBvcG92ZXIoKTtcbiAgICAgICAgICB1cGRhdGVQb3BvdmVyKCk7XG4gICAgICAgICAgc2hvd1BvcG92ZXIoKTtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHBvcG92ZXIsIHNob3dUcmlnZ2VyKSA6IHNob3dUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwICk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocG9wb3ZlciAmJiBwb3BvdmVyICE9PSBudWxsICYmIGhhc0NsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKSkge1xuICAgICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoZWxlbWVudCwgaGlkZUV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHBvcG92ZXIsc2hvd0NsYXNzKTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHBvcG92ZXIsIGhpZGVUcmlnZ2VyKSA6IGhpZGVUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNlbGZbZGVsYXldICk7XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdQb3BvdmVyIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgaWYgKHNlbGZbdHJpZ2dlcl0gPT09IGhvdmVyRXZlbnQpIHtcbiAgICAgICAgb24oIGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHNlbGYuc2hvdyApO1xuICAgICAgICBpZiAoIXNlbGZbZGlzbWlzc2libGVdKSB7IG9uKCBlbGVtZW50LCBtb3VzZUhvdmVyWzFdLCBzZWxmLmhpZGUgKTsgfVxuICAgICAgfSBlbHNlIGlmIChjbGlja0V2ZW50ID09IHNlbGZbdHJpZ2dlcl0gfHwgJ2ZvY3VzJyA9PSBzZWxmW3RyaWdnZXJdKSB7XG4gICAgICAgIG9uKCBlbGVtZW50LCBzZWxmW3RyaWdnZXJdLCBzZWxmLnRvZ2dsZSApO1xuICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ1BvcG92ZXJdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFBPUE9WRVIgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdQb3BvdmVyLCBQb3BvdmVyLCAnWycrZGF0YVRvZ2dsZSsnPVwicG9wb3ZlclwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFNjcm9sbFNweVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBTQ1JPTExTUFkgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuICB2YXIgU2Nyb2xsU3B5ID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICBcbiAgICAvLyBpbml0aWFsaXphdGlvbiBlbGVtZW50LCB0aGUgZWxlbWVudCB3ZSBzcHkgb25cbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpOyBcbiAgXG4gICAgLy8gREFUQSBBUElcbiAgICB2YXIgdGFyZ2V0RGF0YSA9IHF1ZXJ5RWxlbWVudChlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVRhcmdldCkpLFxuICAgICAgICBvZmZzZXREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKCdkYXRhLW9mZnNldCcpO1xuICBcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmICggIW9wdGlvbnNbdGFyZ2V0XSAmJiAhdGFyZ2V0RGF0YSApIHsgcmV0dXJuOyB9IC8vIGludmFsaWRhdGVcbiAgXG4gICAgLy8gZXZlbnQgdGFyZ2V0cywgY29uc3RhbnRzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBzcHlUYXJnZXQgPSBvcHRpb25zW3RhcmdldF0gJiYgcXVlcnlFbGVtZW50KG9wdGlvbnNbdGFyZ2V0XSkgfHwgdGFyZ2V0RGF0YSxcbiAgICAgICAgbGlua3MgPSBzcHlUYXJnZXQgJiYgc3B5VGFyZ2V0W2dldEVsZW1lbnRzQnlUYWdOYW1lXSgnQScpLFxuICAgICAgICBvZmZzZXQgPSBwYXJzZUludChvZmZzZXREYXRhIHx8IG9wdGlvbnNbJ29mZnNldCddKSB8fCAxMCwgICAgICBcbiAgICAgICAgaXRlbXMgPSBbXSwgdGFyZ2V0SXRlbXMgPSBbXSwgc2Nyb2xsT2Zmc2V0LFxuICAgICAgICBzY3JvbGxUYXJnZXQgPSBlbGVtZW50W29mZnNldEhlaWdodF0gPCBlbGVtZW50W3Njcm9sbEhlaWdodF0gPyBlbGVtZW50IDogZ2xvYmFsT2JqZWN0LCAvLyBkZXRlcm1pbmUgd2hpY2ggaXMgdGhlIHJlYWwgc2Nyb2xsVGFyZ2V0XG4gICAgICAgIGlzV2luZG93ID0gc2Nyb2xsVGFyZ2V0ID09PSBnbG9iYWxPYmplY3Q7ICBcbiAgXG4gICAgLy8gcG9wdWxhdGUgaXRlbXMgYW5kIHRhcmdldHNcbiAgICBmb3IgKHZhciBpPTAsIGlsPWxpbmtzW2xlbmd0aF07IGk8aWw7IGkrKykge1xuICAgICAgdmFyIGhyZWYgPSBsaW5rc1tpXVtnZXRBdHRyaWJ1dGVdKCdocmVmJyksIFxuICAgICAgICAgIHRhcmdldEl0ZW0gPSBocmVmICYmIGhyZWYuY2hhckF0KDApID09PSAnIycgJiYgaHJlZi5zbGljZSgtMSkgIT09ICcjJyAmJiBxdWVyeUVsZW1lbnQoaHJlZik7XG4gICAgICBpZiAoICEhdGFyZ2V0SXRlbSApIHtcbiAgICAgICAgaXRlbXNbcHVzaF0obGlua3NbaV0pO1xuICAgICAgICB0YXJnZXRJdGVtc1twdXNoXSh0YXJnZXRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHZhciB1cGRhdGVJdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpbmRleF0sXG4gICAgICAgICAgdGFyZ2V0SXRlbSA9IHRhcmdldEl0ZW1zW2luZGV4XSwgLy8gdGhlIG1lbnUgaXRlbSB0YXJnZXRzIHRoaXMgZWxlbWVudFxuICAgICAgICAgIGRyb3Bkb3duID0gaXRlbVtwYXJlbnROb2RlXVtwYXJlbnROb2RlXSxcbiAgICAgICAgICBkcm9wZG93bkxpbmsgPSBoYXNDbGFzcyhkcm9wZG93biwnZHJvcGRvd24nKSAmJiBkcm9wZG93bltnZXRFbGVtZW50c0J5VGFnTmFtZV0oJ0EnKVswXSxcbiAgICAgICAgICB0YXJnZXRSZWN0ID0gaXNXaW5kb3cgJiYgdGFyZ2V0SXRlbVtnZXRCb3VuZGluZ0NsaWVudFJlY3RdKCksXG4gIFxuICAgICAgICAgIGlzQWN0aXZlID0gaGFzQ2xhc3MoaXRlbSxhY3RpdmUpIHx8IGZhbHNlLFxuICBcbiAgICAgICAgICB0b3BFZGdlID0gKGlzV2luZG93ID8gdGFyZ2V0UmVjdFt0b3BdICsgc2Nyb2xsT2Zmc2V0IDogdGFyZ2V0SXRlbVtvZmZzZXRUb3BdKSAtIG9mZnNldCxcbiAgICAgICAgICBib3R0b21FZGdlID0gaXNXaW5kb3cgPyB0YXJnZXRSZWN0W2JvdHRvbV0gKyBzY3JvbGxPZmZzZXQgLSBvZmZzZXQgOiB0YXJnZXRJdGVtc1tpbmRleCsxXSA/IHRhcmdldEl0ZW1zW2luZGV4KzFdW29mZnNldFRvcF0gLSBvZmZzZXQgOiBlbGVtZW50W3Njcm9sbEhlaWdodF0sXG4gIFxuICAgICAgICAgIGluc2lkZSA9IHNjcm9sbE9mZnNldCA+PSB0b3BFZGdlICYmIGJvdHRvbUVkZ2UgPiBzY3JvbGxPZmZzZXQ7XG4gIFxuICAgICAgICBpZiAoICFpc0FjdGl2ZSAmJiBpbnNpZGUgKSB7XG4gICAgICAgICAgaWYgKCAhaGFzQ2xhc3MoaXRlbSxhY3RpdmUpICkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoaXRlbSxhY3RpdmUpO1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGluayAmJiAhaGFzQ2xhc3MoZHJvcGRvd25MaW5rLGFjdGl2ZSkgKSB7XG4gICAgICAgICAgICAgIGFkZENsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChlbGVtZW50LCAnYWN0aXZhdGUnLCAnc2Nyb2xsc3B5JywgaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoICFpbnNpZGUgKSB7XG4gICAgICAgICAgaWYgKCBoYXNDbGFzcyhpdGVtLGFjdGl2ZSkgKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLGFjdGl2ZSk7XG4gICAgICAgICAgICBpZiAoZHJvcGRvd25MaW5rICYmIGhhc0NsYXNzKGRyb3Bkb3duTGluayxhY3RpdmUpICYmICFnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW1bcGFyZW50Tm9kZV0sYWN0aXZlKS5sZW5ndGggICkge1xuICAgICAgICAgICAgICByZW1vdmVDbGFzcyhkcm9wZG93bkxpbmssYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoICFpbnNpZGUgJiYgIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIGluc2lkZSApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVJdGVtcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNjcm9sbE9mZnNldCA9IGlzV2luZG93ID8gZ2V0U2Nyb2xsKCkueSA6IGVsZW1lbnRbc2Nyb2xsVG9wXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXg9MCwgaXRsPWl0ZW1zW2xlbmd0aF07IGluZGV4PGl0bDsgaW5kZXgrKykge1xuICAgICAgICAgIHVwZGF0ZUl0ZW0oaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH07XG4gIFxuICAgIC8vIHB1YmxpYyBtZXRob2RcbiAgICB0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdTY3JvbGxTcHkgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbiggc2Nyb2xsVGFyZ2V0LCBzY3JvbGxFdmVudCwgc2VsZi5yZWZyZXNoICk7XG4gICAgICBvbiggZ2xvYmFsT2JqZWN0LCByZXNpemVFdmVudCwgc2VsZi5yZWZyZXNoICk7IFxuICAgIH1cbiAgICBzZWxmLnJlZnJlc2goKTtcbiAgICBlbGVtZW50W3N0cmluZ1Njcm9sbFNweV0gPSBzZWxmO1xuICB9O1xuICBcbiAgLy8gU0NST0xMU1BZIERBVEEgQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuICBzdXBwb3J0c1twdXNoXSggWyBzdHJpbmdTY3JvbGxTcHksIFNjcm9sbFNweSwgJ1snK2RhdGFTcHkrJz1cInNjcm9sbFwiXScgXSApO1xuICBcbiAgXG4gIC8qIE5hdGl2ZSBKYXZhc2NyaXB0IGZvciBCb290c3RyYXAgNCB8IFRhYlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBUQUIgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PVxuICB2YXIgVGFiID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIFxuICAgIC8vIGluaXRpYWxpemF0aW9uIGVsZW1lbnRcbiAgICBlbGVtZW50ID0gcXVlcnlFbGVtZW50KGVsZW1lbnQpO1xuICBcbiAgICAvLyBEQVRBIEFQSVxuICAgIHZhciBoZWlnaHREYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFIZWlnaHQpLFxuICAgICAgXG4gICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgY29tcG9uZW50ID0gJ3RhYicsIGhlaWdodCA9ICdoZWlnaHQnLCBmbG9hdCA9ICdmbG9hdCcsIGlzQW5pbWF0aW5nID0gJ2lzQW5pbWF0aW5nJztcbiAgICAgICAgXG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzW2hlaWdodF0gPSBzdXBwb3J0VHJhbnNpdGlvbnMgPyAob3B0aW9uc1toZWlnaHRdIHx8IGhlaWdodERhdGEgPT09ICd0cnVlJykgOiBmYWxzZTtcbiAgXG4gICAgLy8gYmluZCwgZXZlbnQgdGFyZ2V0c1xuICAgIHZhciBzZWxmID0gdGhpcywgbmV4dCxcbiAgICAgIHRhYnMgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy5uYXYnKSxcbiAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyID0gZmFsc2UsXG4gICAgICBkcm9wZG93biA9IHRhYnMgJiYgcXVlcnlFbGVtZW50KCcuZHJvcGRvd24tdG9nZ2xlJyx0YWJzKSxcbiAgICAgIGFjdGl2ZVRhYiwgYWN0aXZlQ29udGVudCwgbmV4dENvbnRlbnQsIGNvbnRhaW5lckhlaWdodCwgZXF1YWxDb250ZW50cywgbmV4dEhlaWdodCxcbiAgICAgIFxuICAgICAgLy8gdHJpZ2dlclxuICAgICAgdHJpZ2dlckVuZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW3N0eWxlXVtoZWlnaHRdID0gJyc7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRhYnNDb250ZW50Q29udGFpbmVyLGNvbGxhcHNpbmcpO1xuICAgICAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXJTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0YWJzQ29udGVudENvbnRhaW5lcikgeyAvLyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKCBlcXVhbENvbnRlbnRzICkge1xuICAgICAgICAgICAgdHJpZ2dlckVuZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IC8vIGVuYWJsZXMgaGVpZ2h0IGFuaW1hdGlvblxuICAgICAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltzdHlsZV1baGVpZ2h0XSA9IG5leHRIZWlnaHQgKyAncHgnOyAvLyBoZWlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgIHRhYnNDb250ZW50Q29udGFpbmVyW29mZnNldFdpZHRoXTtcbiAgICAgICAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGFic0NvbnRlbnRDb250YWluZXIsIHRyaWdnZXJFbmQpO1xuICAgICAgICAgICAgfSw1MCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYnNbaXNBbmltYXRpbmddID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwobmV4dCwgc2hvd25FdmVudCwgY29tcG9uZW50LCBhY3RpdmVUYWIpO1xuICAgICAgfSxcbiAgICAgIHRyaWdnZXJIaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0YWJzQ29udGVudENvbnRhaW5lcikge1xuICAgICAgICAgIGFjdGl2ZUNvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9IGxlZnQ7XG4gICAgICAgICAgbmV4dENvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9IGxlZnQ7ICAgICAgICBcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQgPSBhY3RpdmVDb250ZW50W3Njcm9sbEhlaWdodF07XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYWRkQ2xhc3MobmV4dENvbnRlbnQsYWN0aXZlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChuZXh0LCBzaG93RXZlbnQsIGNvbXBvbmVudCwgYWN0aXZlVGFiKTtcbiAgXG4gICAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZUNvbnRlbnQsYWN0aXZlKTtcbiAgICAgICAgYm9vdHN0cmFwQ3VzdG9tRXZlbnQuY2FsbChhY3RpdmVUYWIsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQsIG5leHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhYnNDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgbmV4dEhlaWdodCA9IG5leHRDb250ZW50W3Njcm9sbEhlaWdodF07XG4gICAgICAgICAgZXF1YWxDb250ZW50cyA9IG5leHRIZWlnaHQgPT09IGNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgICBhZGRDbGFzcyh0YWJzQ29udGVudENvbnRhaW5lcixjb2xsYXBzaW5nKTtcbiAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltzdHlsZV1baGVpZ2h0XSA9IGNvbnRhaW5lckhlaWdodCArICdweCc7IC8vIGhlaWdodCBhbmltYXRpb25cbiAgICAgICAgICB0YWJzQ29udGVudENvbnRhaW5lcltvZmZzZXRIZWlnaHRdO1xuICAgICAgICAgIGFjdGl2ZUNvbnRlbnRbc3R5bGVdW2Zsb2F0XSA9ICcnO1xuICAgICAgICAgIG5leHRDb250ZW50W3N0eWxlXVtmbG9hdF0gPSAnJztcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCBoYXNDbGFzcyhuZXh0Q29udGVudCwgJ2ZhZGUnKSApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhZGRDbGFzcyhuZXh0Q29udGVudCxzaG93Q2xhc3MpO1xuICAgICAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQobmV4dENvbnRlbnQsdHJpZ2dlclNob3cpO1xuICAgICAgICAgIH0sMjApO1xuICAgICAgICB9IGVsc2UgeyB0cmlnZ2VyU2hvdygpOyB9ICAgICAgICBcbiAgICAgIH07XG4gIFxuICAgIGlmICghdGFicykgcmV0dXJuOyAvLyBpbnZhbGlkYXRlXG4gIFxuICAgIC8vIHNldCBkZWZhdWx0IGFuaW1hdGlvbiBzdGF0ZVxuICAgIHRhYnNbaXNBbmltYXRpbmddID0gZmFsc2U7ICAgIFxuICAgICAgICAgIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHZhciBnZXRBY3RpdmVUYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRhYnMgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhYnMsYWN0aXZlKSwgYWN0aXZlVGFiO1xuICAgICAgICBpZiAoIGFjdGl2ZVRhYnNbbGVuZ3RoXSA9PT0gMSAmJiAhaGFzQ2xhc3MoYWN0aXZlVGFic1swXVtwYXJlbnROb2RlXSwnZHJvcGRvd24nKSApIHtcbiAgICAgICAgICBhY3RpdmVUYWIgPSBhY3RpdmVUYWJzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKCBhY3RpdmVUYWJzW2xlbmd0aF0gPiAxICkge1xuICAgICAgICAgIGFjdGl2ZVRhYiA9IGFjdGl2ZVRhYnNbYWN0aXZlVGFic1tsZW5ndGhdLTFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3RpdmVUYWI7XG4gICAgICB9LFxuICAgICAgZ2V0QWN0aXZlQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcXVlcnlFbGVtZW50KGdldEFjdGl2ZVRhYigpW2dldEF0dHJpYnV0ZV0oJ2hyZWYnKSk7XG4gICAgICB9LFxuICAgICAgLy8gaGFuZGxlciBcbiAgICAgIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBlW3RhcmdldF1bZ2V0QXR0cmlidXRlXSgnaHJlZicpO1xuICAgICAgICBlW3ByZXZlbnREZWZhdWx0XSgpO1xuICAgICAgICBuZXh0ID0gZVt0YXJnZXRdW2dldEF0dHJpYnV0ZV0oZGF0YVRvZ2dsZSkgPT09IGNvbXBvbmVudCB8fCAoaHJlZiAmJiBocmVmLmNoYXJBdCgwKSA9PT0gJyMnKVxuICAgICAgICAgICAgID8gZVt0YXJnZXRdIDogZVt0YXJnZXRdW3BhcmVudE5vZGVdOyAvLyBhbGxvdyBmb3IgY2hpbGQgZWxlbWVudHMgbGlrZSBpY29ucyB0byB1c2UgdGhlIGhhbmRsZXJcbiAgICAgICAgIXRhYnNbaXNBbmltYXRpbmddICYmICFoYXNDbGFzcyhuZXh0LGFjdGl2ZSkgJiYgc2VsZi5zaG93KCk7XG4gICAgICB9O1xuICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kXG4gICAgdGhpcy5zaG93ID0gZnVuY3Rpb24oKSB7IC8vIHRoZSB0YWIgd2UgY2xpY2tlZCBpcyBub3cgdGhlIG5leHQgdGFiXG4gICAgICBuZXh0ID0gbmV4dCB8fCBlbGVtZW50O1xuICAgICAgbmV4dENvbnRlbnQgPSBxdWVyeUVsZW1lbnQobmV4dFtnZXRBdHRyaWJ1dGVdKCdocmVmJykpOyAvL3RoaXMgaXMgdGhlIGFjdHVhbCBvYmplY3QsIHRoZSBuZXh0IHRhYiBjb250ZW50IHRvIGFjdGl2YXRlXG4gICAgICBhY3RpdmVUYWIgPSBnZXRBY3RpdmVUYWIoKTsgXG4gICAgICBhY3RpdmVDb250ZW50ID0gZ2V0QWN0aXZlQ29udGVudCgpO1xuICAgICAgXG4gICAgICB0YWJzW2lzQW5pbWF0aW5nXSA9IHRydWU7XG4gICAgICByZW1vdmVDbGFzcyhhY3RpdmVUYWIsYWN0aXZlKTtcbiAgICAgIGFkZENsYXNzKG5leHQsYWN0aXZlKTtcbiAgXG4gICAgICBpZiAoIGRyb3Bkb3duICkge1xuICAgICAgICBpZiAoICFoYXNDbGFzcyhlbGVtZW50W3BhcmVudE5vZGVdLCdkcm9wZG93bi1tZW51JykgKSB7XG4gICAgICAgICAgaWYgKGhhc0NsYXNzKGRyb3Bkb3duLGFjdGl2ZSkpIHJlbW92ZUNsYXNzKGRyb3Bkb3duLGFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFoYXNDbGFzcyhkcm9wZG93bixhY3RpdmUpKSBhZGRDbGFzcyhkcm9wZG93bixhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJvb3RzdHJhcEN1c3RvbUV2ZW50LmNhbGwoYWN0aXZlVGFiLCBoaWRlRXZlbnQsIGNvbXBvbmVudCwgbmV4dCk7XG4gIFxuICAgICAgaWYgKGhhc0NsYXNzKGFjdGl2ZUNvbnRlbnQsICdmYWRlJykpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoYWN0aXZlQ29udGVudCxzaG93Q2xhc3MpO1xuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChhY3RpdmVDb250ZW50LCB0cmlnZ2VySGlkZSk7XG4gICAgICB9IGVsc2UgeyB0cmlnZ2VySGlkZSgpOyB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdUYWIgaW4gZWxlbWVudCkgKSB7IC8vIHByZXZlbnQgYWRkaW5nIGV2ZW50IGhhbmRsZXJzIHR3aWNlXG4gICAgICBvbihlbGVtZW50LCBjbGlja0V2ZW50LCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoc2VsZltoZWlnaHRdKSB7IHRhYnNDb250ZW50Q29udGFpbmVyID0gZ2V0QWN0aXZlQ29udGVudCgpW3BhcmVudE5vZGVdOyB9XG4gICAgZWxlbWVudFtzdHJpbmdUYWJdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFRBQiBEQVRBIEFQSVxuICAvLyA9PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nVGFiLCBUYWIsICdbJytkYXRhVG9nZ2xlKyc9XCJ0YWJcIl0nIF0gKTtcbiAgXG4gIFxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBUb29sdGlwXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAvLyBUT09MVElQIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09XG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24oIGVsZW1lbnQsb3B0aW9ucyApIHtcbiAgXG4gICAgLy8gaW5pdGlhbGl6YXRpb24gZWxlbWVudFxuICAgIGVsZW1lbnQgPSBxdWVyeUVsZW1lbnQoZWxlbWVudCk7XG4gIFxuICAgIC8vIHNldCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFxuICAgIC8vIERBVEEgQVBJXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YUFuaW1hdGlvbiksXG4gICAgICAgIHBsYWNlbWVudERhdGEgPSBlbGVtZW50W2dldEF0dHJpYnV0ZV0oZGF0YVBsYWNlbWVudCksXG4gICAgICAgIGRlbGF5RGF0YSA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXShkYXRhRGVsYXkpLFxuICAgICAgICBjb250YWluZXJEYXRhID0gZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFDb250YWluZXIpLFxuICAgICAgICBcbiAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICBjb21wb25lbnQgPSAndG9vbHRpcCcsXG4gICAgICAgIGNsYXNzU3RyaW5nID0gJ2NsYXNzJyxcbiAgICAgICAgdGl0bGUgPSAndGl0bGUnLFxuICAgICAgICBmYWRlID0gJ2ZhZGUnLFxuICAgICAgICBkaXYgPSAnZGl2JyxcbiAgXG4gICAgICAgIC8vIGNoZWNrIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJFbGVtZW50ID0gcXVlcnlFbGVtZW50KG9wdGlvbnNbY29udGFpbmVyXSksXG4gICAgICAgIGNvbnRhaW5lckRhdGFFbGVtZW50ID0gcXVlcnlFbGVtZW50KGNvbnRhaW5lckRhdGEpLCAgICAgIFxuICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgbW9kYWxcbiAgICAgICAgbW9kYWwgPSBnZXRDbG9zZXN0KGVsZW1lbnQsJy5tb2RhbCcpLFxuICAgICAgICBcbiAgICAgICAgLy8gbWF5YmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIGEgZml4ZWQgbmF2YmFyXG4gICAgICAgIG5hdmJhckZpeGVkVG9wID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZFRvcCksXG4gICAgICAgIG5hdmJhckZpeGVkQm90dG9tID0gZ2V0Q2xvc2VzdChlbGVtZW50LCcuJytmaXhlZEJvdHRvbSk7XG4gIFxuICAgIC8vIHNldCBpbnN0YW5jZSBvcHRpb25zXG4gICAgdGhpc1thbmltYXRpb25dID0gb3B0aW9uc1thbmltYXRpb25dICYmIG9wdGlvbnNbYW5pbWF0aW9uXSAhPT0gZmFkZSA/IG9wdGlvbnNbYW5pbWF0aW9uXSA6IGFuaW1hdGlvbkRhdGEgfHwgZmFkZTtcbiAgICB0aGlzW3BsYWNlbWVudF0gPSBvcHRpb25zW3BsYWNlbWVudF0gPyBvcHRpb25zW3BsYWNlbWVudF0gOiBwbGFjZW1lbnREYXRhIHx8IHRvcDtcbiAgICB0aGlzW2RlbGF5XSA9IHBhcnNlSW50KG9wdGlvbnNbZGVsYXldIHx8IGRlbGF5RGF0YSkgfHwgMjAwO1xuICAgIHRoaXNbY29udGFpbmVyXSA9IGNvbnRhaW5lckVsZW1lbnQgPyBjb250YWluZXJFbGVtZW50IFxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRhaW5lckRhdGFFbGVtZW50ID8gY29udGFpbmVyRGF0YUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgOiBuYXZiYXJGaXhlZFRvcCA/IG5hdmJhckZpeGVkVG9wXG4gICAgICAgICAgICAgICAgICAgIDogbmF2YmFyRml4ZWRCb3R0b20gPyBuYXZiYXJGaXhlZEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICA6IG1vZGFsID8gbW9kYWwgOiBET0NbYm9keV07XG4gIFxuICAgIC8vIGJpbmQsIGV2ZW50IHRhcmdldHMsIHRpdGxlIGFuZCBjb25zdGFudHNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHRpbWVyID0gMCwgcGxhY2VtZW50U2V0dGluZyA9IHRoaXNbcGxhY2VtZW50XSwgdG9vbHRpcCA9IG51bGwsXG4gICAgICB0aXRsZVN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSh0aXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlKTtcbiAgXG4gICAgaWYgKCAhdGl0bGVTdHJpbmcgfHwgdGl0bGVTdHJpbmcgPT0gXCJcIiApIHJldHVybjsgLy8gaW52YWxpZGF0ZVxuICBcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICB2YXIgcmVtb3ZlVG9vbFRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmW2NvbnRhaW5lcl0ucmVtb3ZlQ2hpbGQodG9vbHRpcCk7XG4gICAgICAgIHRvb2x0aXAgPSBudWxsOyB0aW1lciA9IG51bGw7XG4gICAgICB9LFxuICAgICAgY3JlYXRlVG9vbFRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aXRsZVN0cmluZyA9IGVsZW1lbnRbZ2V0QXR0cmlidXRlXSh0aXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFUaXRsZSkgfHwgZWxlbWVudFtnZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlKTsgLy8gcmVhZCB0aGUgdGl0bGUgYWdhaW5cbiAgICAgICAgaWYgKCAhdGl0bGVTdHJpbmcgfHwgdGl0bGVTdHJpbmcgPT0gXCJcIiApIHJldHVybiBmYWxzZTsgLy8gaW52YWxpZGF0ZVxuICAgICAgICB0b29sdGlwID0gRE9DW2NyZWF0ZUVsZW1lbnRdKGRpdik7XG4gICAgICAgIHRvb2x0aXBbc2V0QXR0cmlidXRlXSgncm9sZScsY29tcG9uZW50KTtcbiAgXG4gICAgICAgIC8vIHRvb2x0aXAgYXJyb3dcbiAgICAgICAgdmFyIHRvb2x0aXBBcnJvdyA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICB0b29sdGlwQXJyb3dbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZywnYXJyb3cnKTtcbiAgICAgICAgdG9vbHRpcFthcHBlbmRDaGlsZF0odG9vbHRpcEFycm93KTtcbiAgICBcbiAgICAgICAgdmFyIHRvb2x0aXBJbm5lciA9IERPQ1tjcmVhdGVFbGVtZW50XShkaXYpO1xuICAgICAgICB0b29sdGlwSW5uZXJbc2V0QXR0cmlidXRlXShjbGFzc1N0cmluZyxjb21wb25lbnQrJy1pbm5lcicpO1xuICAgICAgICB0b29sdGlwW2FwcGVuZENoaWxkXSh0b29sdGlwSW5uZXIpO1xuICAgICAgICB0b29sdGlwSW5uZXJbaW5uZXJIVE1MXSA9IHRpdGxlU3RyaW5nO1xuICBcbiAgICAgICAgc2VsZltjb250YWluZXJdW2FwcGVuZENoaWxkXSh0b29sdGlwKTtcbiAgICAgICAgdG9vbHRpcFtzZXRBdHRyaWJ1dGVdKGNsYXNzU3RyaW5nLCBjb21wb25lbnQgKyAnIGJzLScgKyBjb21wb25lbnQrJy0nK3BsYWNlbWVudFNldHRpbmcgKyAnICcgKyBzZWxmW2FuaW1hdGlvbl0pO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0eWxlVGlwKGVsZW1lbnQsdG9vbHRpcCxwbGFjZW1lbnRTZXR0aW5nLHNlbGZbY29udGFpbmVyXSk7XG4gICAgICB9LFxuICAgICAgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICFoYXNDbGFzcyh0b29sdGlwLHNob3dDbGFzcykgJiYgKCBhZGRDbGFzcyh0b29sdGlwLHNob3dDbGFzcykgKTtcbiAgICAgIH0sXG4gICAgICAvLyB0cmlnZ2Vyc1xuICAgICAgc2hvd1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb24oIGdsb2JhbE9iamVjdCwgcmVzaXplRXZlbnQsIHNlbGYuaGlkZSApO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3duRXZlbnQsIGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgaGlkZVRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb2ZmKCBnbG9iYWxPYmplY3QsIHJlc2l6ZUV2ZW50LCBzZWxmLmhpZGUgKTtcbiAgICAgICAgcmVtb3ZlVG9vbFRpcCgpO1xuICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGRlbkV2ZW50LCBjb21wb25lbnQpO1xuICAgICAgfTtcbiAgXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICB0aGlzLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodG9vbHRpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHBsYWNlbWVudFNldHRpbmcgPSBzZWxmW3BsYWNlbWVudF07IC8vIHdlIHJlc2V0IHBsYWNlbWVudCBpbiBhbGwgY2FzZXNcbiAgICAgICAgICBpZihjcmVhdGVUb29sVGlwKCkgPT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgICB1cGRhdGVUb29sdGlwKCk7XG4gICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIHNob3dFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICAhIXNlbGZbYW5pbWF0aW9uXSA/IGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRvb2x0aXAsIHNob3dUcmlnZ2VyKSA6IHNob3dUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwICk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodG9vbHRpcCAmJiBoYXNDbGFzcyh0b29sdGlwLHNob3dDbGFzcykpIHtcbiAgICAgICAgICBib290c3RyYXBDdXN0b21FdmVudC5jYWxsKGVsZW1lbnQsIGhpZGVFdmVudCwgY29tcG9uZW50KTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0b29sdGlwLHNob3dDbGFzcyk7XG4gICAgICAgICAgISFzZWxmW2FuaW1hdGlvbl0gPyBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0b29sdGlwLCBoaWRlVHJpZ2dlcikgOiBoaWRlVHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgICB9LCBzZWxmW2RlbGF5XSk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0b29sdGlwKSB7IHNlbGYuc2hvdygpOyB9IFxuICAgICAgZWxzZSB7IHNlbGYuaGlkZSgpOyB9XG4gICAgfTtcbiAgXG4gICAgLy8gaW5pdFxuICAgIGlmICggIShzdHJpbmdUb29sdGlwIGluIGVsZW1lbnQpICkgeyAvLyBwcmV2ZW50IGFkZGluZyBldmVudCBoYW5kbGVycyB0d2ljZVxuICAgICAgZWxlbWVudFtzZXRBdHRyaWJ1dGVdKGRhdGFPcmlnaW5hbFRpdGxlLHRpdGxlU3RyaW5nKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRpdGxlKTtcbiAgICAgIG9uKGVsZW1lbnQsIG1vdXNlSG92ZXJbMF0sIHNlbGYuc2hvdyk7XG4gICAgICBvbihlbGVtZW50LCBtb3VzZUhvdmVyWzFdLCBzZWxmLmhpZGUpO1xuICAgIH1cbiAgICBlbGVtZW50W3N0cmluZ1Rvb2x0aXBdID0gc2VsZjtcbiAgfTtcbiAgXG4gIC8vIFRPT0xUSVAgREFUQSBBUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgc3VwcG9ydHNbcHVzaF0oIFsgc3RyaW5nVG9vbHRpcCwgVG9vbHRpcCwgJ1snK2RhdGFUb2dnbGUrJz1cInRvb2x0aXBcIl0nIF0gKTtcbiAgXG4gIFxuICBcclxuICAvKiBOYXRpdmUgSmF2YXNjcmlwdCBmb3IgQm9vdHN0cmFwIDQgfCBJbml0aWFsaXplIERhdGEgQVBJXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIHZhciBpbml0aWFsaXplRGF0YUFQSSA9IGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciwgY29sbGVjdGlvbiApe1xyXG4gICAgICBmb3IgKHZhciBpPTAsIGw9Y29sbGVjdGlvbltsZW5ndGhdOyBpPGw7IGkrKykge1xyXG4gICAgICAgIG5ldyBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYWxsYmFjayA9IEJTTi5pbml0Q2FsbGJhY2sgPSBmdW5jdGlvbihsb29rVXApe1xyXG4gICAgICBsb29rVXAgPSBsb29rVXAgfHwgRE9DO1xyXG4gICAgICBmb3IgKHZhciBpPTAsIGw9c3VwcG9ydHNbbGVuZ3RoXTsgaTxsOyBpKyspIHtcclxuICAgICAgICBpbml0aWFsaXplRGF0YUFQSSggc3VwcG9ydHNbaV1bMV0sIGxvb2tVcFtxdWVyeVNlbGVjdG9yQWxsXSAoc3VwcG9ydHNbaV1bMl0pICk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgLy8gYnVsayBpbml0aWFsaXplIGFsbCBjb21wb25lbnRzXHJcbiAgRE9DW2JvZHldID8gaW5pdENhbGxiYWNrKCkgOiBvbiggRE9DLCAnRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7IGluaXRDYWxsYmFjaygpOyB9ICk7XHJcbiAgXG4gIHJldHVybiB7XG4gICAgQWxlcnQ6IEFsZXJ0LFxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIENhcm91c2VsOiBDYXJvdXNlbCxcbiAgICBDb2xsYXBzZTogQ29sbGFwc2UsXG4gICAgRHJvcGRvd246IERyb3Bkb3duLFxuICAgIE1vZGFsOiBNb2RhbCxcbiAgICBQb3BvdmVyOiBQb3BvdmVyLFxuICAgIFNjcm9sbFNweTogU2Nyb2xsU3B5LFxuICAgIFRhYjogVGFiLFxuICAgIFRvb2x0aXA6IFRvb2x0aXBcbiAgfTtcbn0pKTtcbiIsIi8qIVxuICogTmFqYS5qc1xuICogdjEuNS4wXG4gKiBcbiAqIGJ5IEppxZnDrSBQdWRpbCA8aHR0cHM6Ly9qaXJpcHVkaWwuY3o+XG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMubmFqYT10KCk6ZS5uYWphPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgaT1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmw9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LmQ9ZnVuY3Rpb24oZSxuLHIpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9Myl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZS5leHBvcnRzLmNyZWF0ZVVuaXF1ZUtleT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sP1N5bWJvbDpmdW5jdGlvbihlKXtyZXR1cm5cIltbXCIrZStcIl9cIitNYXRoLnJhbmRvbSgpLnRvRml4ZWQoOCkuc2xpY2UoMikrXCJdXVwifSxpPWUuZXhwb3J0cy5pc09iamVjdD1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWV9O2UuZXhwb3J0cy5MSVNURU5FUlM9cihcImxpc3RlbmVyc1wiKSxlLmV4cG9ydHMuQ0FQVFVSRT0xLGUuZXhwb3J0cy5CVUJCTEU9MixlLmV4cG9ydHMuQVRUUklCVVRFPTMsZS5leHBvcnRzLm5ld05vZGU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWkobik7cmV0dXJue2xpc3RlbmVyOmUsa2luZDp0LG9uY2U6ciYmQm9vbGVhbihuLm9uY2UpLHBhc3NpdmU6ciYmQm9vbGVhbihuLnBhc3NpdmUpLG5leHQ6bnVsbH19fSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gaShlKXtpZihsPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChsPT09bnx8IWwpJiZzZXRUaW1lb3V0KXJldHVybiBsPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbChlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbC5jYWxsKHRoaXMsZSwwKX19fWZ1bmN0aW9uIG8oZSl7aWYoZj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChmPT09cnx8IWYpJiZjbGVhclRpbWVvdXQpcmV0dXJuIGY9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7cmV0dXJuIGYoZSl9Y2F0Y2godCl7dHJ5e3JldHVybiBmLmNhbGwobnVsbCxlKX1jYXRjaCh0KXtyZXR1cm4gZi5jYWxsKHRoaXMsZSl9fX1mdW5jdGlvbiBhKCl7diYmZCYmKHY9ITEsZC5sZW5ndGg/aD1kLmNvbmNhdChoKTp5PS0xLGgubGVuZ3RoJiZ1KCkpfWZ1bmN0aW9uIHUoKXtpZighdil7dmFyIGU9aShhKTt2PSEwO2Zvcih2YXIgdD1oLmxlbmd0aDt0Oyl7Zm9yKGQ9aCxoPVtdOysreTx0OylkJiZkW3ldLnJ1bigpO3k9LTEsdD1oLmxlbmd0aH1kPW51bGwsdj0hMSxvKGUpfX1mdW5jdGlvbiBzKGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gYygpe312YXIgbCxmLHA9ZS5leHBvcnRzPXt9OyFmdW5jdGlvbigpe3RyeXtsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpufWNhdGNoKGUpe2w9bn10cnl7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnJ9Y2F0Y2goZSl7Zj1yfX0oKTt2YXIgZCxoPVtdLHY9ITEseT0tMTtwLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07aC5wdXNoKG5ldyBzKGUsdCkpLDEhPT1oLmxlbmd0aHx8dnx8aSh1KX0scy5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scC50aXRsZT1cImJyb3dzZXJcIixwLmJyb3dzZXI9ITAscC5lbnY9e30scC5hcmd2PVtdLHAudmVyc2lvbj1cIlwiLHAudmVyc2lvbnM9e30scC5vbj1jLHAuYWRkTGlzdGVuZXI9YyxwLm9uY2U9YyxwLm9mZj1jLHAucmVtb3ZlTGlzdGVuZXI9YyxwLnJlbW92ZUFsbExpc3RlbmVycz1jLHAuZW1pdD1jLHAucHJlcGVuZExpc3RlbmVyPWMscC5wcmVwZW5kT25jZUxpc3RlbmVyPWMscC5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119LHAuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scC5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDApLGk9bigxMyksbz1uKDE0KSxhPXIuaXNPYmplY3QsdT1yLkxJU1RFTkVSUyxzPXIuQ0FQVFVSRSxjPXIuQlVCQkxFLGw9ci5BVFRSSUJVVEUsZj1yLm5ld05vZGUscD1pLmRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0LGQ9by5jcmVhdGVFdmVudFdyYXBwZXIsaD1vLlNUT1BfSU1NRURJQVRFX1BST1BBR0FUSU9OX0ZMQUcsdj1vLlBBU1NJVkVfTElTVEVORVJfRkxBRyx5PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJnZvaWQgMCE9PXdpbmRvdy5FdmVudFRhcmdldCxtPWUuZXhwb3J0cz1mdW5jdGlvbiBlKCl7aWYoISh0aGlzIGluc3RhbmNlb2YgZSkpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoJiZBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpcmV0dXJuIHAoZSxhcmd1bWVudHNbMF0pO2lmKGFyZ3VtZW50cy5sZW5ndGg+MCl7Zm9yKHZhciB0PUFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLG49MDtuPGFyZ3VtZW50cy5sZW5ndGg7KytuKXRbbl09YXJndW1lbnRzW25dO3JldHVybiBwKGUsdCl9dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx1LHt2YWx1ZTpPYmplY3QuY3JlYXRlKG51bGwpfSl9O20ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoKHk/d2luZG93LkV2ZW50VGFyZ2V0Ok9iamVjdCkucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6bSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9LGFkZEV2ZW50TGlzdGVuZXI6e3ZhbHVlOmZ1bmN0aW9uKGUsdCxuKXtpZihudWxsPT10KXJldHVybiExO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJlwib2JqZWN0XCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdGVuZXJcIiBpcyBub3QgYW4gb2JqZWN0LicpO3ZhciByPWEobik/Qm9vbGVhbihuLmNhcHR1cmUpOkJvb2xlYW4obiksaT1yP3M6YyxvPXRoaXNbdV1bZV07aWYobnVsbD09bylyZXR1cm4gdGhpc1t1XVtlXT1mKHQsaSxuKSwhMDtmb3IodmFyIGw9bnVsbDtudWxsIT1vOyl7aWYoby5saXN0ZW5lcj09PXQmJm8ua2luZD09PWkpcmV0dXJuITE7bD1vLG89by5uZXh0fXJldHVybiBsLm5leHQ9Zih0LGksbiksITB9LGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0scmVtb3ZlRXZlbnRMaXN0ZW5lcjp7dmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2lmKG51bGw9PXQpcmV0dXJuITE7Zm9yKHZhciByPWEobik/Qm9vbGVhbihuLmNhcHR1cmUpOkJvb2xlYW4obiksaT1yP3M6YyxvPW51bGwsbD10aGlzW3VdW2VdO251bGwhPWw7KXtpZihsLmxpc3RlbmVyPT09dCYmbC5raW5kPT09aSlyZXR1cm4gbnVsbD09bz90aGlzW3VdW2VdPWwubmV4dDpvLm5leHQ9bC5uZXh0LCEwO289bCxsPWwubmV4dH1yZXR1cm4hMX0sY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSxkaXNwYXRjaEV2ZW50Ont2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnR5cGUsbj10aGlzW3VdW3RdO2lmKG51bGw9PW4pcmV0dXJuITA7Zm9yKHZhciByPWQoZSx0aGlzKSxpPW51bGw7bnVsbCE9biYmKG4ub25jZT9udWxsPT1pP3RoaXNbdV1bdF09bi5uZXh0OmkubmV4dD1uLm5leHQ6aT1uLHJbdl09bi5wYXNzaXZlLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4ubGlzdGVuZXI/bi5saXN0ZW5lci5jYWxsKHRoaXMscik6bi5raW5kIT09bCYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5saXN0ZW5lci5oYW5kbGVFdmVudCYmbi5saXN0ZW5lci5oYW5kbGVFdmVudChyKSwhcltoXSk7KW49bi5uZXh0O3JldHVybiFyLmRlZmF1bHRQcmV2ZW50ZWR9LGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH19KX0sZnVuY3Rpb24oZSx0LG4pe2UuZXhwb3J0cz1uKDQpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9big1KSxvPXIoaSksYT1uKDIxKSx1PXIoYSkscz1uKDIyKSxjPXIocyksbD1uZXcgby5kZWZhdWx0O2wucmVnaXN0ZXJFeHRlbnNpb24odS5kZWZhdWx0KSxsLnJlZ2lzdGVyRXh0ZW5zaW9uKGMuZGVmYXVsdCksdC5kZWZhdWx0PWx9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBpKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLG49QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKW5bdF09ZVt0XTtyZXR1cm4gbn1yZXR1cm4gQXJyYXkuZnJvbShlKX1mdW5jdGlvbiBvKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBhKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gdShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPVtdLHI9ITAsaT0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtyPSEwKTt9Y2F0Y2goZSl7aT0hMCxvPWV9ZmluYWxseXt0cnl7IXImJnUucmV0dXJuJiZ1LnJldHVybigpfWZpbmFsbHl7aWYoaSl0aHJvdyBvfX1yZXR1cm4gbn1yZXR1cm4gZnVuY3Rpb24odCxuKXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0O2lmKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCkpcmV0dXJuIGUodCxuKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX19KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLGw9big2KSxmPXIobCkscD1uKDEyKSxkPXIocCksaD1uKDIpLHY9cihoKSx5PW4oMTUpLG09cih5KSxiPW4oMTYpLHc9cihiKSxnPW4oMTcpLFQ9cihnKSxFPW4oMTgpLGo9cihFKSx4PW4oMTkpLE89cih4KSxrPW4oMjApLF89cihrKSxMPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxuLHIsaSx1LHMpe28odGhpcyx0KTt2YXIgYz1hKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcykpO3JldHVybiBjLmluaXRpYWxpemVkPSExLGMudWlIYW5kbGVyPW51bGwsYy5yZWRpcmVjdEhhbmRsZXI9bnVsbCxjLnNuaXBwZXRIYW5kbGVyPW51bGwsYy5mb3Jtc0hhbmRsZXI9bnVsbCxjLmhpc3RvcnlIYW5kbGVyPW51bGwsYy5zY3JpcHRMb2FkZXI9bnVsbCxjLmV4dGVuc2lvbnM9W10sYy5kZWZhdWx0T3B0aW9ucz17fSxjLnVpSGFuZGxlcj1lP25ldyBlKGMpOm5ldyBtLmRlZmF1bHQoYyksYy5yZWRpcmVjdEhhbmRsZXI9bj9uZXcgbihjKTpuZXcgVC5kZWZhdWx0KGMpLGMuc25pcHBldEhhbmRsZXI9cj9uZXcgcihjKTpuZXcgai5kZWZhdWx0KGMpLGMuZm9ybXNIYW5kbGVyPWk/bmV3IGkoYyk6bmV3IHcuZGVmYXVsdChjKSxjLmhpc3RvcnlIYW5kbGVyPXU/bmV3IHUoYyk6bmV3IE8uZGVmYXVsdChjKSxjLnNjcmlwdExvYWRlcj1zP25ldyBzKGMpOm5ldyBfLmRlZmF1bHQoYyksY31yZXR1cm4gdSh0LGUpLGModCxbe2tleTpcInJlZ2lzdGVyRXh0ZW5zaW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1BcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07dGhpcy5leHRlbnNpb25zLnB1c2goW2Usbl0pfX0se2tleTpcImluaXRpYWxpemVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5pbml0aWFsaXplZCl0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5pdGlhbGl6ZSBOYWphLCBpdCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTt0aGlzLmV4dGVuc2lvbnM9dGhpcy5leHRlbnNpb25zLm1hcChmdW5jdGlvbih0KXt2YXIgbj1zKHQsMikscj1uWzBdLG89blsxXTtyZXR1cm4gbmV3KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KHIsW251bGxdLmNvbmNhdChbZV0saShvKSkpKX0pLHRoaXMuZmlyZUV2ZW50KFwiaW5pdFwiKSx0aGlzLmluaXRpYWxpemVkPSEwLHRoaXMubG9hZCgpfX0se2tleTpcImxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZmlyZUV2ZW50KFwibG9hZFwiKX19LHtrZXk6XCJmaXJlRXZlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj0oMCxkLmRlZmF1bHQpKHQse3R5cGU6ZSxjYW5jZWxhYmxlOiEwfSk7cmV0dXJuIHRoaXMuZGlzcGF0Y2hFdmVudChuKX19LHtrZXk6XCJtYWtlUmVxdWVzdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPXRoaXMsbz17ZGF0YVR5cGU6XCJwb3N0XCIscmVzcG9uc2VUeXBlOlwiYXV0b1wifTtyPSgwLGQuZGVmYXVsdCkoe30sbyx0aGlzLmRlZmF1bHRPcHRpb25zLHJ8fHt9KTt2YXIgYT12b2lkIDAsdT1mdW5jdGlvbihvKXthPW8saS5maXJlRXZlbnQoXCJiZWZvcmVcIix7eGhyOm8sbWV0aG9kOmUsdXJsOnQsZGF0YTpuLG9wdGlvbnM6cn0pfHxvLmFib3J0KCksby5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIixmdW5jdGlvbigpe2kuZmlyZUV2ZW50KFwiYWJvcnRcIix7eGhyOm99KSxpLmZpcmVFdmVudChcImNvbXBsZXRlXCIse2Vycm9yOm5ldyBFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiKSx4aHI6byxyZXNwb25zZTpudWxsLG9wdGlvbnM6cn0pfSl9LHM9Zi5kZWZhdWx0Lm1hcChlLHQsbixyLHUpLnRoZW4oZnVuY3Rpb24oZSx0KXtyZXR1cm4gaS5maXJlRXZlbnQoXCJzdWNjZXNzXCIse3hocjplLHJlc3BvbnNlOnQsb3B0aW9uczpyfSksaS5maXJlRXZlbnQoXCJjb21wbGV0ZVwiLHtlcnJvcjpudWxsLHhocjplLHJlc3BvbnNlOnQsb3B0aW9uczpyfSksaS5sb2FkKCksdH0pLmNhdGNoKGZ1bmN0aW9uKGUsdCxuKXt0aHJvdyBpLmZpcmVFdmVudChcImVycm9yXCIse2Vycm9yOmUseGhyOnQscmVzcG9uc2U6bixvcHRpb25zOnJ9KSxpLmZpcmVFdmVudChcImNvbXBsZXRlXCIse2Vycm9yOmUseGhyOnQscmVzcG9uc2U6bixvcHRpb25zOnJ9KSxpLmxvYWQoKSxlfSk7cmV0dXJuIHRoaXMuZmlyZUV2ZW50KFwic3RhcnRcIix7cmVxdWVzdDpzLHhocjphfSksc319XSksdH0odi5kZWZhdWx0KTt0LmRlZmF1bHQ9TH0sZnVuY3Rpb24oZSx0LG4pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnNlbGYsdD1uKDcpLHI9bigxMSksaT17fSxvPVwianNvblwiLGE9XCJwb3N0XCIsdT1udWxsLHM9MCxjPVtdLGw9ZS5YTUxIdHRwUmVxdWVzdD9mdW5jdGlvbigpe3JldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdH06ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX0sZj1cIlwiPT09bCgpLnJlc3BvbnNlVHlwZSxwPWZ1bmN0aW9uKG4scCxkLGgsdil7bj1uLnRvVXBwZXJDYXNlKCksZD12b2lkIDA9PT1kP251bGw6ZCxoPWh8fHt9O2Zvcih2YXIgeSBpbiBpKWlmKCEoeSBpbiBoKSlpZihcIm9iamVjdFwiPT10eXBlb2YgaVt5XSYmXCJvYmplY3RcIj09dHlwZW9mIGhbeV0pZm9yKHZhciBtIGluIGlbeV0paFt5XVttXT1pW3ldW21dO2Vsc2UgaFt5XT1pW3ldO3ZhciBiLHcsZyxULEUsaj0hMSx4PSExLE89ITEsaz0wLF89e30sTD17dGV4dDpcIiovKlwiLHhtbDpcInRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb25cIixwb3N0OlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsZG9jdW1lbnQ6XCJ0ZXh0L2h0bWxcIn0sUz17dGV4dDpcIiovKlwiLHhtbDpcImFwcGxpY2F0aW9uL3htbDsgcT0xLjAsIHRleHQveG1sOyBxPTAuOCwgKi8qOyBxPTAuMVwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uOyBxPTEuMCwgdGV4dC8qOyBxPTAuOCwgKi8qOyBxPTAuMVwifSxQPSExLEE9dChmdW5jdGlvbih0KXtyZXR1cm4gdC5hYm9ydD1mdW5jdGlvbigpe098fCh3JiY0IT13LnJlYWR5U3RhdGUmJncuYWJvcnQoKSxQJiYoLS1zLFA9ITEpLE89ITApfSx0LnNlbmQ9ZnVuY3Rpb24oKXtpZighUCl7aWYocz09dSlyZXR1cm4gdm9pZCBjLnB1c2godCk7aWYoTylyZXR1cm4gdm9pZChjLmxlbmd0aCYmYy5zaGlmdCgpLnNlbmQoKSk7aWYoKytzLFA9ITAsdz1sKCksYiYmKFwid2l0aENyZWRlbnRpYWxzXCJpbiB3fHwhZS5YRG9tYWluUmVxdWVzdHx8KHc9bmV3IFhEb21haW5SZXF1ZXN0LHg9ITAsXCJHRVRcIiE9biYmXCJQT1NUXCIhPW4mJihuPVwiUE9TVFwiKSkpLHg/dy5vcGVuKG4scCk6KHcub3BlbihuLHAsaC5hc3luYyxoLnVzZXIsaC5wYXNzd29yZCksZiYmaC5hc3luYyYmKHcud2l0aENyZWRlbnRpYWxzPWgud2l0aENyZWRlbnRpYWxzKSksIXgpZm9yKHZhciByIGluIF8pX1tyXSYmdy5zZXRSZXF1ZXN0SGVhZGVyKHIsX1tyXSk7aWYoZiYmXCJhdXRvXCIhPWgucmVzcG9uc2VUeXBlKXRyeXt3LnJlc3BvbnNlVHlwZT1oLnJlc3BvbnNlVHlwZSxqPXcucmVzcG9uc2VUeXBlPT1oLnJlc3BvbnNlVHlwZX1jYXRjaChlKXt9Znx8eD8ody5vbmxvYWQ9TSx3Lm9uZXJyb3I9Qyx4JiYody5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7fSkpOncub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09dy5yZWFkeVN0YXRlJiZNKCl9LGguYXN5bmM/XCJ0aW1lb3V0XCJpbiB3Pyh3LnRpbWVvdXQ9aC50aW1lb3V0LHcub250aW1lb3V0PUkpOmc9c2V0VGltZW91dChJLGgudGltZW91dCk6eCYmKHcub250aW1lb3V0PWZ1bmN0aW9uKCl7fSksXCJhdXRvXCIhPWgucmVzcG9uc2VUeXBlJiZcIm92ZXJyaWRlTWltZVR5cGVcImluIHcmJncub3ZlcnJpZGVNaW1lVHlwZShMW2gucmVzcG9uc2VUeXBlXSksdiYmdih3KSx4P3NldFRpbWVvdXQoZnVuY3Rpb24oKXt3LnNlbmQoXCJHRVRcIiE9bj9kOm51bGwpfSwwKTp3LnNlbmQoXCJHRVRcIiE9bj9kOm51bGwpfX0sdH0pLE09ZnVuY3Rpb24oKXt2YXIgdDtpZihQPSExLGNsZWFyVGltZW91dChnKSxjLmxlbmd0aCYmYy5zaGlmdCgpLnNlbmQoKSwhTyl7LS1zO3RyeXtpZihqKXtpZihcInJlc3BvbnNlXCJpbiB3JiZudWxsPT09dy5yZXNwb25zZSl0aHJvd1wiVGhlIHJlcXVlc3QgcmVzcG9uc2UgaXMgZW1wdHlcIjtFPXcucmVzcG9uc2V9ZWxzZXtpZihcImF1dG9cIj09KHQ9aC5yZXNwb25zZVR5cGUpKWlmKHgpdD1vO2Vsc2V7dmFyIG49dy5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKXx8XCJcIjt0PW4uaW5kZXhPZihMLmpzb24pPi0xP1wianNvblwiOm4uaW5kZXhPZihMLnhtbCk+LTE/XCJ4bWxcIjpcInRleHRcIn1zd2l0Y2godCl7Y2FzZVwianNvblwiOmlmKHcucmVzcG9uc2VUZXh0Lmxlbmd0aCl0cnl7RT1cIkpTT05cImluIGU/SlNPTi5wYXJzZSh3LnJlc3BvbnNlVGV4dCk6bmV3IEZ1bmN0aW9uKFwicmV0dXJuIChcIit3LnJlc3BvbnNlVGV4dCtcIilcIikoKX1jYXRjaChlKXt0aHJvd1wiRXJyb3Igd2hpbGUgcGFyc2luZyBKU09OIGJvZHkgOiBcIitlfWJyZWFrO2Nhc2VcInhtbFwiOnRyeXtlLkRPTVBhcnNlcj9FPShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcody5yZXNwb25zZVRleHQsXCJ0ZXh0L3htbFwiKTooRT1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksRS5hc3luYz1cImZhbHNlXCIsRS5sb2FkWE1MKHcucmVzcG9uc2VUZXh0KSl9Y2F0Y2goZSl7RT12b2lkIDB9aWYoIUV8fCFFLmRvY3VtZW50RWxlbWVudHx8RS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCl0aHJvd1wiSW52YWxpZCBYTUxcIjticmVhaztkZWZhdWx0OkU9dy5yZXNwb25zZVRleHR9fWlmKFwic3RhdHVzXCJpbiB3JiYhL14yfDEyMjMvLnRlc3Qody5zdGF0dXMpKXRocm93IHcuc3RhdHVzK1wiIChcIit3LnN0YXR1c1RleHQrXCIpXCI7QSghMCxbdyxFXSl9Y2F0Y2goZSl7QSghMSxbZSx3LEVdKX19fSxDPWZ1bmN0aW9uKGUpe098fChlPVwic3RyaW5nXCI9PXR5cGVvZiBlP2U6XCJDb25uZWN0aW9uIGFib3J0ZWRcIixBLmFib3J0KCksQSghMSxbbmV3IEVycm9yKGUpLHcsbnVsbF0pKX0sST1mdW5jdGlvbigpe098fChoLmF0dGVtcHRzJiYrK2s9PWguYXR0ZW1wdHM/QyhcIlRpbWVvdXQgKFwiK3ArXCIpXCIpOih3LmFib3J0KCksUD0hMSxBLnNlbmQoKSkpfTtpZihoLmFzeW5jPSEoXCJhc3luY1wiaW4gaCl8fCEhaC5hc3luYyxoLmNhY2hlPVwiY2FjaGVcImluIGgmJiEhaC5jYWNoZSxoLmRhdGFUeXBlPVwiZGF0YVR5cGVcImluIGg/aC5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpOmEsaC5yZXNwb25zZVR5cGU9XCJyZXNwb25zZVR5cGVcImluIGg/aC5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKTpcImF1dG9cIixoLnVzZXI9aC51c2VyfHxcIlwiLGgucGFzc3dvcmQ9aC5wYXNzd29yZHx8XCJcIixoLndpdGhDcmVkZW50aWFscz0hIWgud2l0aENyZWRlbnRpYWxzLGgudGltZW91dD1cInRpbWVvdXRcImluIGg/cGFyc2VJbnQoaC50aW1lb3V0LDEwKTozZTQsaC5hdHRlbXB0cz1cImF0dGVtcHRzXCJpbiBoP3BhcnNlSW50KGguYXR0ZW1wdHMsMTApOjEsVD1wLm1hdGNoKC9cXC9cXC8oLis/KVxcLy8pLGI9VCYmISFUWzFdJiZUWzFdIT1sb2NhdGlvbi5ob3N0LFwiQXJyYXlCdWZmZXJcImluIGUmJmQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9oLmRhdGFUeXBlPVwiYXJyYXlidWZmZXJcIjpcIkJsb2JcImluIGUmJmQgaW5zdGFuY2VvZiBCbG9iP2guZGF0YVR5cGU9XCJibG9iXCI6XCJEb2N1bWVudFwiaW4gZSYmZCBpbnN0YW5jZW9mIERvY3VtZW50P2guZGF0YVR5cGU9XCJkb2N1bWVudFwiOlwiRm9ybURhdGFcImluIGUmJmQgaW5zdGFuY2VvZiBGb3JtRGF0YSYmKGguZGF0YVR5cGU9XCJmb3JtZGF0YVwiKSxudWxsIT09ZClzd2l0Y2goaC5kYXRhVHlwZSl7Y2FzZVwianNvblwiOmQ9SlNPTi5zdHJpbmdpZnkoZCk7YnJlYWs7Y2FzZVwicG9zdFwiOmNhc2VcInF1ZXJ5U3RyaW5nXCI6ZD1yKGQpfWlmKGguaGVhZGVycyl7dmFyIFI9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0K24udG9VcHBlckNhc2UoKX07Zm9yKFQgaW4gaC5oZWFkZXJzKV9bVC5yZXBsYWNlKC8oXnwtKShbXi1dKS9nLFIpXT1oLmhlYWRlcnNbVF19cmV0dXJuXCJDb250ZW50LVR5cGVcImluIF98fFwiR0VUXCI9PW58fGguZGF0YVR5cGUgaW4gTCYmTFtoLmRhdGFUeXBlXSYmKF9bXCJDb250ZW50LVR5cGVcIl09TFtoLmRhdGFUeXBlXSksXy5BY2NlcHR8fChfLkFjY2VwdD1oLnJlc3BvbnNlVHlwZSBpbiBTP1NbaC5yZXNwb25zZVR5cGVdOlwiKi8qXCIpLGJ8fFwiWC1SZXF1ZXN0ZWQtV2l0aFwiaW4gX3x8KF9bXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksaC5jYWNoZXx8XCJDYWNoZS1Db250cm9sXCJpbiBffHwoX1tcIkNhY2hlLUNvbnRyb2xcIl09XCJuby1jYWNoZVwiKSxcIkdFVFwiIT1uJiZcInF1ZXJ5U3RyaW5nXCIhPWguZGF0YVR5cGV8fCFkfHxcInN0cmluZ1wiIT10eXBlb2YgZHx8KHArPSgvXFw/Ly50ZXN0KHApP1wiJlwiOlwiP1wiKStkKSxoLmFzeW5jJiZBLnNlbmQoKSxBfSxkPWZ1bmN0aW9uKGUpe3ZhciBuPVtdLHI9MCxpPVtdO3JldHVybiB0KGZ1bmN0aW9uKHQpe3ZhciBvPS0xLGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGEsdSxzLGMpe3ZhciBsPSsrbztyZXR1cm4rK3Isbi5wdXNoKHAoZSx0LmJhc2UrYSx1LHMsYykudGhlbihmdW5jdGlvbihlLG4pe2lbbF09YXJndW1lbnRzLC0tcnx8dCghMCwxPT1pLmxlbmd0aD9pWzBdOltpXSl9LGZ1bmN0aW9uKCl7dCghMSxhcmd1bWVudHMpfSkpLHR9fTt0LmdldD1hKFwiR0VUXCIpLHQucG9zdD1hKFwiUE9TVFwiKSx0LnB1dD1hKFwiUFVUXCIpLHQuZGVsZXRlPWEoXCJERUxFVEVcIiksdC5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdC50aGVuKG51bGwsZSl9LHQuY29tcGxldGU9ZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24oKXtlKCl9O3JldHVybiB0LnRoZW4obixuKX0sdC5tYXA9ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4gYShlLnRvVXBwZXJDYXNlKCkpLmNhbGwodGhpcyx0LG4scixpKX07Zm9yKHZhciB1IGluIGUpdSBpbiB0fHwodFt1XT1lW3VdKTtyZXR1cm4gdC5zZW5kPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAscj1uLmxlbmd0aDtlPHI7KytlKW5bZV0uc2VuZCgpO3JldHVybiB0fSx0LmFib3J0PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAscj1uLmxlbmd0aDtlPHI7KytlKW5bZV0uYWJvcnQoKTtyZXR1cm4gdH0sdH0pfSxoPXtiYXNlOlwiXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGQoaCkuZ2V0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scG9zdDpmdW5jdGlvbigpe3JldHVybiBkKGgpLnBvc3QuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxwdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZChoKS5wdXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkZWxldGU6ZnVuY3Rpb24oKXtyZXR1cm4gZChoKS5kZWxldGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxtYXA6ZnVuY3Rpb24oKXtyZXR1cm4gZChoKS5tYXAuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx4aHIyOmYsbGltaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHU9ZSxofSxzZXREZWZhdWx0T3B0aW9uczpmdW5jdGlvbihlKXtyZXR1cm4gaT1lLGh9LHNldERlZmF1bHRYZHJSZXNwb25zZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG89ZS50b0xvd2VyQ2FzZSgpLGh9LHNldERlZmF1bHREYXRhVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gYT1lLnRvTG93ZXJDYXNlKCksaH0sZ2V0T3BlblJlcXVlc3RzOmZ1bmN0aW9uKCl7cmV0dXJuIHN9fTtyZXR1cm4gaH0oKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihuLHIpe3ZhciBpLG8sYTshZnVuY3Rpb24obixyKXtvPVtdLGk9cix2b2lkIDAhPT0oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkodCxvKTppKSYmKGUuZXhwb3J0cz1hKX0oMCxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiB0KGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGkoZSl7dm9pZCAwIT09bj9uKGUpOnZvaWQgMCE9PXImJnIubmV4dFRpY2s/ci5uZXh0VGljayhlKTpzZXRUaW1lb3V0KGUsMCl9dmFyIG87cmV0dXJuIGZ1bmN0aW9uIG4ocil7dmFyIGEsdT1bXSxzPVtdLGM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09YSYmbnVsbCE9ZSYmKGE9ZSx1PXQscy5sZW5ndGgmJmkoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHMubGVuZ3RoO2UrKylzW2VdKCl9KSksYX07cmV0dXJuIGMudGhlbj1mdW5jdGlvbihjLGwpe3ZhciBmPW4ocikscD1mdW5jdGlvbigpe2Z1bmN0aW9uIG4ocil7dmFyIGksYT0wO3RyeXtpZihyJiYodChyKXx8ZShyKSkmJmUoaT1yLnRoZW4pKXtpZihyPT09Zil0aHJvdyBuZXcgVHlwZUVycm9yO2kuY2FsbChyLGZ1bmN0aW9uKCl7YSsrfHxuLmFwcGx5KG8sYXJndW1lbnRzKX0sZnVuY3Rpb24oZSl7YSsrfHxmKCExLFtlXSl9KX1lbHNlIGYoITAsYXJndW1lbnRzKX1jYXRjaChlKXthKyt8fGYoITEsW2VdKX19dHJ5e3ZhciByPWE/YzpsO2Uocik/bihyLmFwcGx5KG8sdXx8W10pKTpmKGEsdSl9Y2F0Y2goZSl7ZighMSxbZV0pfX07cmV0dXJuIG51bGwhPWE/aShwKTpzLnB1c2gocCksZn0sciYmKGM9cihjKSksY319KX0pLmNhbGwodCxuKDgpLnNldEltbWVkaWF0ZSxuKDEpKX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH12YXIgaT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKGkuY2FsbChzZXRUaW1lb3V0LHdpbmRvdyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LHQuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoaS5jYWxsKHNldEludGVydmFsLHdpbmRvdyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSx0LmNsZWFyVGltZW91dD10LmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24oZSl7ZSYmZS5jbG9zZSgpfSxyLnByb3RvdHlwZS51bnJlZj1yLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LHIucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdyx0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9LHQpKX0sbig5KSx0LnNldEltbWVkaWF0ZT1zZXRJbW1lZGlhdGUsdC5jbGVhckltbWVkaWF0ZT1jbGVhckltbWVkaWF0ZX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGU9bmV3IEZ1bmN0aW9uKFwiXCIrZSkpO2Zvcih2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbisxXTt2YXIgcj17Y2FsbGJhY2s6ZSxhcmdzOnR9O3JldHVybiBjW3NdPXIsdShzKSxzKyt9ZnVuY3Rpb24gaShlKXtkZWxldGUgY1tlXX1mdW5jdGlvbiBvKGUpe3ZhciB0PWUuY2FsbGJhY2sscj1lLmFyZ3M7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6dCgpO2JyZWFrO2Nhc2UgMTp0KHJbMF0pO2JyZWFrO2Nhc2UgMjp0KHJbMF0sclsxXSk7YnJlYWs7Y2FzZSAzOnQoclswXSxyWzFdLHJbMl0pO2JyZWFrO2RlZmF1bHQ6dC5hcHBseShuLHIpfX1mdW5jdGlvbiBhKGUpe2lmKGwpc2V0VGltZW91dChhLDAsZSk7ZWxzZXt2YXIgdD1jW2VdO2lmKHQpe2w9ITA7dHJ5e28odCl9ZmluYWxseXtpKGUpLGw9ITF9fX19aWYoIWUuc2V0SW1tZWRpYXRlKXt2YXIgdSxzPTEsYz17fSxsPSExLGY9ZS5kb2N1bWVudCxwPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO3A9cCYmcC5zZXRUaW1lb3V0P3A6ZSxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwoZS5wcm9jZXNzKT9mdW5jdGlvbigpe3U9ZnVuY3Rpb24oZSl7dC5uZXh0VGljayhmdW5jdGlvbigpe2EoZSl9KX19KCk6ZnVuY3Rpb24oKXtpZihlLnBvc3RNZXNzYWdlJiYhZS5pbXBvcnRTY3JpcHRzKXt2YXIgdD0hMCxuPWUub25tZXNzYWdlO3JldHVybiBlLm9ubWVzc2FnZT1mdW5jdGlvbigpe3Q9ITF9LGUucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksZS5vbm1lc3NhZ2U9bix0fX0oKT9mdW5jdGlvbigpe3ZhciB0PVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsbj1mdW5jdGlvbihuKXtuLnNvdXJjZT09PWUmJlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJjA9PT1uLmRhdGEuaW5kZXhPZih0KSYmYSgrbi5kYXRhLnNsaWNlKHQubGVuZ3RoKSl9O2UuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiwhMSk6ZS5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLG4pLHU9ZnVuY3Rpb24obil7ZS5wb3N0TWVzc2FnZSh0K24sXCIqXCIpfX0oKTplLk1lc3NhZ2VDaGFubmVsP2Z1bmN0aW9uKCl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO2UucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKGUpe2EoZS5kYXRhKX0sdT1mdW5jdGlvbih0KXtlLnBvcnQyLnBvc3RNZXNzYWdlKHQpfX0oKTpmJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIGU9Zi5kb2N1bWVudEVsZW1lbnQ7dT1mdW5jdGlvbih0KXt2YXIgbj1mLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXthKHQpLG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5yZW1vdmVDaGlsZChuKSxuPW51bGx9LGUuYXBwZW5kQ2hpbGQobil9fSgpOmZ1bmN0aW9uKCl7dT1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KGEsMCxlKX19KCkscC5zZXRJbW1lZGlhdGU9cixwLmNsZWFySW1tZWRpYXRlPWl9fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT1lP3RoaXM6ZTpzZWxmKX0pLmNhbGwodCxuKDEwKSxuKDEpKX0sZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7IWZ1bmN0aW9uKG4pe1widXNlIHN0cmljdFwiO3ZhciBvPWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCxuKXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bigpOm51bGw9PT1uP1wiXCI6dm9pZCAwPT09bj9cIlwiOm4sZVtlLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KHQpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChuKX0sbj1mdW5jdGlvbihlLHIsaSl7dmFyIG8sYSx1O2lmKFwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSlmb3Iobz0wLGE9ci5sZW5ndGg7bzxhO28rKyluKGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiByW29dP286XCJcIikrXCJdXCIscltvXSxpKTtlbHNlIGlmKHImJlwiW29iamVjdCBPYmplY3RdXCI9PT1yLnRvU3RyaW5nKCkpZm9yKHUgaW4gcilyLmhhc093blByb3BlcnR5KHUpJiYoZT9uKGUrXCJbXCIrdStcIl1cIixyW3VdLGksdCk6bih1LHJbdV0saSx0KSk7ZWxzZSBpZihlKXQoaSxlLHIpO2Vsc2UgZm9yKHUgaW4gcil0KGksdSxyW3VdKTtyZXR1cm4gaX07cmV0dXJuIG4oXCJcIixlLFtdKS5qb2luKFwiJlwiKS5yZXBsYWNlKC8lMjAvZyxcIitcIil9O1wib2JqZWN0XCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZS5leHBvcnRzP2UuZXhwb3J0cz1vOihyPVtdLHZvaWQgMCE9PShpPWZ1bmN0aW9uKCl7cmV0dXJuIG99LmFwcGx5KHQscikpJiYoZS5leHBvcnRzPWkpKX0oKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7aWYobnVsbD09PWV8fHZvaWQgMD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBPYmplY3QoZSl9dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxvPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksYT1PYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RyeXtpZighT2JqZWN0LmFzc2lnbilyZXR1cm4hMTt2YXIgZT1uZXcgU3RyaW5nKFwiYWJjXCIpO2lmKGVbNV09XCJkZVwiLFwiNVwiPT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSlbMF0pcmV0dXJuITE7Zm9yKHZhciB0PXt9LG49MDtuPDEwO24rKyl0W1wiX1wiK1N0cmluZy5mcm9tQ2hhckNvZGUobildPW47aWYoXCIwMTIzNDU2Nzg5XCIhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KS5qb2luKFwiXCIpKXJldHVybiExO3ZhciByPXt9O3JldHVyblwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JbZV09ZX0pLFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIj09PU9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30scikpLmpvaW4oXCJcIil9Y2F0Y2goZSl7cmV0dXJuITF9fSgpP09iamVjdC5hc3NpZ246ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4sdSxzPXIoZSksYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspe249T2JqZWN0KGFyZ3VtZW50c1tjXSk7Zm9yKHZhciBsIGluIG4pby5jYWxsKG4sbCkmJihzW2xdPW5bbF0pO2lmKGkpe3U9aShuKTtmb3IodmFyIGY9MDtmPHUubGVuZ3RoO2YrKylhLmNhbGwobix1W2ZdKSYmKHNbdVtmXV09blt1W2ZdXSl9fXJldHVybiBzfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtmb3IodmFyIG49ZVthXVt0XTtudWxsIT1uOyl7aWYobi5raW5kPT09dSlyZXR1cm4gbi5saXN0ZW5lcjtuPW4ubmV4dH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBpKGUsdCxuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBuJiZcIm9iamVjdFwiIT10eXBlb2YgbiYmKG49bnVsbCk7Zm9yKHZhciByPW51bGwsaT1lW2FdW3RdO251bGwhPWk7KWkua2luZD09PXU/bnVsbD09cj9lW2FdW3RdPWkubmV4dDpyLm5leHQ9aS5uZXh0OnI9aSxpPWkubmV4dDtudWxsIT1uJiYobnVsbD09cj9lW2FdW3RdPXMobix1KTpyLm5leHQ9cyhuLHUpKX12YXIgbz1uKDApLGE9by5MSVNURU5FUlMsdT1vLkFUVFJJQlVURSxzPW8ubmV3Tm9kZTtlLmV4cG9ydHMuZGVmaW5lQ3VzdG9tRXZlbnRUYXJnZXQ9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7ZS5jYWxsKHRoaXMpfXZhciBvPXtjb25zdHJ1Y3Rvcjp7dmFsdWU6bixjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe29bXCJvblwiK2VdPXtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcih0aGlzLGUpfSxzZXQ6ZnVuY3Rpb24odCl7aSh0aGlzLGUsdCl9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfX0pLG4ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUsbyksbn19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDApLmNyZWF0ZVVuaXF1ZUtleSxpPXIoXCJzdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbl9mbGFnXCIpLG89cihcImNhbmNlbGVkX2ZsYWdcIiksYT1yKFwicGFzc2l2ZV9saXN0ZW5lcl9mbGFnXCIpLHU9cihcIm9yaWdpbmFsX2V2ZW50XCIpLHM9T2JqZWN0LmZyZWV6ZSh7c3RvcFByb3BhZ2F0aW9uOk9iamVjdC5mcmVlemUoe3ZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpc1t1XTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnN0b3BQcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKX0sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOk9iamVjdC5mcmVlemUoe3ZhbHVlOmZ1bmN0aW9uKCl7dGhpc1tpXT0hMDt2YXIgZT10aGlzW3VdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxwcmV2ZW50RGVmYXVsdDpPYmplY3QuZnJlZXplKHt2YWx1ZTpmdW5jdGlvbigpe2lmKCF0aGlzW2FdKXshMD09PXRoaXMuY2FuY2VsYWJsZSYmKHRoaXNbb109ITApO3ZhciBlPXRoaXNbdV07XCJmdW5jdGlvblwiPT10eXBlb2YgZS5wcmV2ZW50RGVmYXVsdCYmZS5wcmV2ZW50RGVmYXVsdCgpfX0sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksZGVmYXVsdFByZXZlbnRlZDpPYmplY3QuZnJlZXplKHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tvXX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX0pO2UuZXhwb3J0cy5TVE9QX0lNTUVESUFURV9QUk9QQUdBVElPTl9GTEFHPWksZS5leHBvcnRzLlBBU1NJVkVfTElTVEVORVJfRkxBRz1hLGUuZXhwb3J0cy5jcmVhdGVFdmVudFdyYXBwZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIm51bWJlclwiPT10eXBlb2YgZS50aW1lU3RhbXA/ZS50aW1lU3RhbXA6RGF0ZS5ub3coKSxyPXt0eXBlOnt2YWx1ZTplLnR5cGUsZW51bWVyYWJsZTohMH0sdGFyZ2V0Ont2YWx1ZTp0LGVudW1lcmFibGU6ITB9LGN1cnJlbnRUYXJnZXQ6e3ZhbHVlOnQsZW51bWVyYWJsZTohMH0sZXZlbnRQaGFzZTp7dmFsdWU6MixlbnVtZXJhYmxlOiEwfSxidWJibGVzOnt2YWx1ZTpCb29sZWFuKGUuYnViYmxlcyksZW51bWVyYWJsZTohMH0sY2FuY2VsYWJsZTp7dmFsdWU6Qm9vbGVhbihlLmNhbmNlbGFibGUpLGVudW1lcmFibGU6ITB9LHRpbWVTdGFtcDp7dmFsdWU6bixlbnVtZXJhYmxlOiEwfSxpc1RydXN0ZWQ6e3ZhbHVlOiExLGVudW1lcmFibGU6ITB9fTtyZXR1cm4gcltpXT17dmFsdWU6ITEsd3JpdGFibGU6ITB9LHJbb109e3ZhbHVlOiExLHdyaXRhYmxlOiEwfSxyW2FdPXt2YWx1ZTohMSx3cml0YWJsZTohMH0sclt1XT17dmFsdWU6ZX0sdm9pZCAwIT09ZS5kZXRhaWwmJihyLmRldGFpbD17dmFsdWU6ZS5kZXRhaWwsZW51bWVyYWJsZTohMH0pLE9iamVjdC5jcmVhdGUoT2JqZWN0LmNyZWF0ZShlLHMpLHIpfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cih0aGlzLGUpLHRoaXMuc2VsZWN0b3I9XCIuYWpheFwiLHRoaXMuYWxsb3dlZE9yaWdpbnM9W10sdGhpcy5uYWphPXQ7dmFyIG49dGhpcy5oYW5kbGVVSS5iaW5kKHRoaXMpO3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLmJpbmRVSS5iaW5kKHRoaXMsbikpO3ZhciBpPXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKyh3aW5kb3cubG9jYXRpb24ucG9ydD9cIjpcIit3aW5kb3cubG9jYXRpb24ucG9ydDpcIlwiKTt0aGlzLmFsbG93ZWRPcmlnaW5zLnB1c2goaSl9cmV0dXJuIGkoZSxbe2tleTpcImJpbmRVSVwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXCJhXCIrdGhpcy5zZWxlY3RvciwnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScrdGhpcy5zZWxlY3RvciwnaW5wdXRbdHlwZT1cImltYWdlXCJdJyt0aGlzLnNlbGVjdG9yLCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScrdGhpcy5zZWxlY3RvcixcImZvcm1cIit0aGlzLnNlbGVjdG9yKycgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXCJmb3JtXCIrdGhpcy5zZWxlY3RvcisnIGlucHV0W3R5cGU9XCJpbWFnZVwiXScsXCJmb3JtXCIrdGhpcy5zZWxlY3RvcisnIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJ10uam9pbihcIiwgXCIpLG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KSxyPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBpPW4uaXRlbShyKTtpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZSl9Zm9yKHZhciBvPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIrdGhpcy5zZWxlY3RvciksYT0wO2E8by5sZW5ndGg7YSsrKXt2YXIgdT1vLml0ZW0oYSk7dS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZSksdS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZSl9fX0se2tleTpcImhhbmRsZVVJXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIShlLmFsdEtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm1ldGFLZXl8fGUuYnV0dG9uKSl7dmFyIHQ9ZS5jdXJyZW50VGFyZ2V0LG49e307XCJzdWJtaXRcIj09PWUudHlwZT90aGlzLnN1Ym1pdEZvcm0odCxuLGUpOlwiY2xpY2tcIj09PWUudHlwZSYmdGhpcy5jbGlja0VsZW1lbnQodCxuLGUpfX19LHtrZXk6XCJjbGlja0VsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj1hcmd1bWVudHNbMl0scj12b2lkIDAsaT12b2lkIDAsbz12b2lkIDA7aWYoIXRoaXMubmFqYS5maXJlRXZlbnQoXCJpbnRlcmFjdGlvblwiLHtlbGVtZW50OmUsb3JpZ2luYWxFdmVudDpuLG9wdGlvbnM6dH0pKXJldHVybiB2b2lkKG4mJm4ucHJldmVudERlZmF1bHQoKSk7aWYoXCJhXCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlyPVwiR0VUXCIsaT1lLmhyZWYsbz1udWxsO2Vsc2UgaWYoXCJpbnB1dFwiPT09ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl8fFwiYnV0dG9uXCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGE9ZS5mb3JtO2lmKHI9YS5tZXRob2Q/YS5tZXRob2QudG9VcHBlckNhc2UoKTpcIkdFVFwiLGk9YS5hY3Rpb258fHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSt3aW5kb3cubG9jYXRpb24uc2VhcmNoLG89bmV3IEZvcm1EYXRhKGEpLFwic3VibWl0XCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlvLmFwcGVuZChlLm5hbWUsZS52YWx1ZXx8XCJcIik7ZWxzZSBpZihcImltYWdlXCI9PT1lLnR5cGUpe3ZhciB1PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7by5hcHBlbmQoZS5uYW1lK1wiLnhcIixNYXRoLm1heCgwLE1hdGguZmxvb3Iobi5wYWdlWC11LmxlZnQpKSksby5hcHBlbmQoZS5uYW1lK1wiLnlcIixNYXRoLm1heCgwLE1hdGguZmxvb3Iobi5wYWdlWS11LnRvcCkpKX19dGhpcy5pc1VybEFsbG93ZWQoaSkmJihuJiZuLnByZXZlbnREZWZhdWx0KCksdGhpcy5uYWphLm1ha2VSZXF1ZXN0KHIsaSxvLHQpKX19LHtrZXk6XCJzdWJtaXRGb3JtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49YXJndW1lbnRzWzJdO2lmKCF0aGlzLm5hamEuZmlyZUV2ZW50KFwiaW50ZXJhY3Rpb25cIix7ZWxlbWVudDplLG9yaWdpbmFsRXZlbnQ6bixvcHRpb25zOnR9KSlyZXR1cm4gdm9pZChuJiZuLnByZXZlbnREZWZhdWx0KCkpO3ZhciByPWUubWV0aG9kP2UubWV0aG9kLnRvVXBwZXJDYXNlKCk6XCJHRVRcIixpPWUuYWN0aW9ufHx3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUrd2luZG93LmxvY2F0aW9uLnNlYXJjaCxvPW5ldyBGb3JtRGF0YShlKTt0aGlzLmlzVXJsQWxsb3dlZChpKSYmKG4mJm4ucHJldmVudERlZmF1bHQoKSx0aGlzLm5hamEubWFrZVJlcXVlc3QocixpLG8sdCkpfX0se2tleTpcImlzVXJsQWxsb3dlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiEvXig/IWh0dHBzPylbXjpcXC8/I10rOi9pLnRlc3QoZSkmJighL15odHRwcz8vaS50ZXN0KGUpfHx0aGlzLmFsbG93ZWRPcmlnaW5zLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBSZWdFeHAoXCJeXCIrdCxcImlcIikudGVzdChlKX0pKX19XSksZX0oKTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cih0aGlzLGUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLmluaXRGb3Jtcy5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnRlcmFjdGlvblwiLHRoaXMucHJvY2Vzc0Zvcm0uYmluZCh0aGlzKSl9cmV0dXJuIGkoZSxbe2tleTpcImluaXRGb3Jtc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5uZXR0ZUZvcm1zfHx3aW5kb3cuTmV0dGU7aWYoZSlmb3IodmFyIHQ9d2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIpLG49MDtuPHQubGVuZ3RoO24rKyllLmluaXRGb3JtKHQuaXRlbShuKSl9fSx7a2V5OlwicHJvY2Vzc0Zvcm1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQsbj1lLm9yaWdpbmFsRXZlbnQ7dC5mb3JtJiYodC5mb3JtW1wibmV0dGUtc3VibWl0dGVkQnlcIl09dCk7dmFyIHI9dGhpcy5uZXR0ZUZvcm1zfHx3aW5kb3cuTmV0dGU7XCJmb3JtXCIhPT10LnRhZ05hbWUmJiF0LmZvcm18fCFyfHxyLnZhbGlkYXRlRm9ybSh0KXx8KG4mJihuLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLG4ucHJldmVudERlZmF1bHQoKSksZS5wcmV2ZW50RGVmYXVsdCgpKX19XSksZX0oKTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIG49dGhpcztyKHRoaXMsZSksdGhpcy5uYWphPXQsdC5hZGRFdmVudExpc3RlbmVyKFwic3VjY2Vzc1wiLGZ1bmN0aW9uKGUpe3ZhciB0PWUucmVzcG9uc2Uscj1lLm9wdGlvbnM7dC5yZWRpcmVjdCYmKG4ubWFrZVJlZGlyZWN0KHQucmVkaXJlY3QsdC5mb3JjZVJlZGlyZWN0fHxyLmZvcmNlUmVkaXJlY3QpLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfSksdGhpcy5sb2NhdGlvbkFkYXB0ZXI9e2Fzc2lnbjpmdW5jdGlvbihlKXtyZXR1cm4gd2luZG93LmxvY2F0aW9uLmFzc2lnbihlKX19fXJldHVybiBpKGUsW3trZXk6XCJtYWtlUmVkaXJlY3RcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKyh3aW5kb3cubG9jYXRpb24ucG9ydD9cIjpcIit3aW5kb3cubG9jYXRpb24ucG9ydDpcIlwiKSxyPS9eaHR0cHM/L2kudGVzdChlKSYmIW5ldyBSZWdFeHAoXCJeXCIrbixcImlcIikudGVzdChlKTt0fHxyP3RoaXMubG9jYXRpb25BZGFwdGVyLmFzc2lnbihlKTp0aGlzLm5hamEubWFrZVJlcXVlc3QoXCJHRVRcIixlKX19XSksZX0oKTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBvKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSx1PW4oMikscz1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19KHUpLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtyKHRoaXMsdCk7dmFyIG49aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMpKTtyZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKFwic3VjY2Vzc1wiLGZ1bmN0aW9uKGUpe3ZhciB0PWUucmVzcG9uc2U7dC5zbmlwcGV0cyYmbi51cGRhdGVTbmlwcGV0cyh0LnNuaXBwZXRzKX0pLG59cmV0dXJuIG8odCxlKSxhKHQsW3trZXk6XCJ1cGRhdGVTbmlwcGV0c1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24ocil7dmFyIGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocik7aSYmdC51cGRhdGVTbmlwcGV0KGksZVtyXSxuKX0pfX0se2tleTpcInVwZGF0ZVNuaXBwZXRcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dGhpcy5kaXNwYXRjaEV2ZW50KHt0eXBlOlwiYmVmb3JlVXBkYXRlXCIsY2FuY2VsYWJsZTohMCxzbmlwcGV0OmUsY29udGVudDp0fSkmJihcInRpdGxlXCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKT9kb2N1bWVudC50aXRsZT10OiFlLmhhc0F0dHJpYnV0ZShcImRhdGEtbmFqYS1zbmlwcGV0LXByZXBlbmRcIikmJiFlLmhhc0F0dHJpYnV0ZShcImRhdGEtYWpheC1wcmVwZW5kXCIpfHxuPyFlLmhhc0F0dHJpYnV0ZShcImRhdGEtbmFqYS1zbmlwcGV0LWFwcGVuZFwiKSYmIWUuaGFzQXR0cmlidXRlKFwiZGF0YS1hamF4LWFwcGVuZFwiKXx8bj9lLmlubmVySFRNTD10OmUuaW5uZXJIVE1MPWUuaW5uZXJIVE1MK3Q6ZS5pbm5lckhUTUw9dCtlLmlubmVySFRNTCx0aGlzLmRpc3BhdGNoRXZlbnQoe3R5cGU6XCJhZnRlclVwZGF0ZVwiLGNhbmNlbGFibGU6ITAsc25pcHBldDplLGNvbnRlbnQ6dH0pKX19XSksdH0ocy5kZWZhdWx0KTt0LmRlZmF1bHQ9Y30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cih0aGlzLGUpLHRoaXMuaHJlZj1udWxsLHRoaXMubmFqYT10LHQuYWRkRXZlbnRMaXN0ZW5lcihcImluaXRcIix0aGlzLmluaXRpYWxpemUuYmluZCh0aGlzKSksdC5hZGRFdmVudExpc3RlbmVyKFwiaW50ZXJhY3Rpb25cIix0aGlzLmNvbmZpZ3VyZU1vZGUuYmluZCh0aGlzKSksdC5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlXCIsdGhpcy5zYXZlVXJsLmJpbmQodGhpcykpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Y2Nlc3NcIix0aGlzLnB1c2hOZXdTdGF0ZS5iaW5kKHRoaXMpKSx0aGlzLnBvcFN0YXRlSGFuZGxlcj10aGlzLmhhbmRsZVBvcFN0YXRlLmJpbmQodGhpcyksdGhpcy5oaXN0b3J5QWRhcHRlcj17cmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGUsdCxuKX0scHVzaFN0YXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGUsdCxuKX19fXJldHVybiBpKGUsW3trZXk6XCJpbml0aWFsaXplXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5wb3BTdGF0ZUhhbmRsZXIpLHRoaXMuaGlzdG9yeUFkYXB0ZXIucmVwbGFjZVN0YXRlKHtocmVmOndpbmRvdy5sb2NhdGlvbi5ocmVmLHRpdGxlOndpbmRvdy5kb2N1bWVudC50aXRsZSx1aTp0aGlzLmZpbmRTbmlwcGV0cygpfSx3aW5kb3cuZG9jdW1lbnQudGl0bGUsd2luZG93LmxvY2F0aW9uLmhyZWYpfX0se2tleTpcImhhbmRsZVBvcFN0YXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdGF0ZSYmZS5zdGF0ZS51aSYmKHRoaXMuaGFuZGxlU25pcHBldHMoZS5zdGF0ZS51aSksdGhpcy5oYW5kbGVUaXRsZShlLnN0YXRlLnRpdGxlKSl9fSx7a2V5Olwic2F2ZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudXJsO3RoaXMuaHJlZj10fX0se2tleTpcImNvbmZpZ3VyZU1vZGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQ7ZS5vcHRpb25zLmhpc3Rvcnk9dGhpcy5jb25zdHJ1Y3Rvci5ub3JtYWxpemVNb2RlKHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYWphLWhpc3RvcnlcIikpfX0se2tleTpcInB1c2hOZXdTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVzcG9uc2Usbj1lLm9wdGlvbnMscj10aGlzLmNvbnN0cnVjdG9yLm5vcm1hbGl6ZU1vZGUobi5oaXN0b3J5KTtpZighMSE9PXIpe3QucG9zdEdldCYmdC51cmwmJih0aGlzLmhyZWY9dC51cmwpO3ZhciBpPXQucmVwbGFjZUhpc3Rvcnl8fFwicmVwbGFjZVwiPT09cj9cInJlcGxhY2VTdGF0ZVwiOlwicHVzaFN0YXRlXCI7dGhpcy5oaXN0b3J5QWRhcHRlcltpXSh7aHJlZjp0aGlzLmhyZWYsdGl0bGU6d2luZG93LmRvY3VtZW50LnRpdGxlLHVpOnRoaXMuZmluZFNuaXBwZXRzKCl9LHdpbmRvdy5kb2N1bWVudC50aXRsZSx0aGlzLmhyZWYpLHRoaXMuaHJlZj1udWxsfX19LHtrZXk6XCJmaW5kU25pcHBldHNcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT17fSx0PXdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwic25pcHBldC1cIl0nKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXQuaXRlbShuKTtyLmhhc0F0dHJpYnV0ZShcImRhdGEtbmFqYS1oaXN0b3J5LW5vY2FjaGVcIil8fHIuaGFzQXR0cmlidXRlKFwiZGF0YS1oaXN0b3J5LW5vY2FjaGVcIil8fChlW3IuaWRdPXIuaW5uZXJIVE1MKX1yZXR1cm4gZX19LHtrZXk6XCJoYW5kbGVTbmlwcGV0c1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMubmFqYS5zbmlwcGV0SGFuZGxlci51cGRhdGVTbmlwcGV0cyhlLCEwKSx0aGlzLm5hamEuc2NyaXB0TG9hZGVyLmxvYWRTY3JpcHRzKGUpLHRoaXMubmFqYS5sb2FkKCl9fSx7a2V5OlwiaGFuZGxlVGl0bGVcIix2YWx1ZTpmdW5jdGlvbihlKXt3aW5kb3cuZG9jdW1lbnQudGl0bGU9ZX19XSxbe2tleTpcIm5vcm1hbGl6ZU1vZGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm5cIm9mZlwiIT09ZSYmITEhPT1lJiYoXCJyZXBsYWNlXCIhPT1lfHxcInJlcGxhY2VcIil9fV0pLGV9KCk7dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXM7cih0aGlzLGUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Y2Nlc3NcIixmdW5jdGlvbihlKXt2YXIgdD1lLnJlc3BvbnNlO3Quc25pcHBldHMmJm4ubG9hZFNjcmlwdHModC5zbmlwcGV0cyl9KX1yZXR1cm4gaShlLFt7a2V5OlwibG9hZFNjcmlwdHNcIix2YWx1ZTpmdW5jdGlvbihlKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuPWVbdF07aWYoLzxzY3JpcHQvaS50ZXN0KG4pKXt2YXIgcj13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyLmlubmVySFRNTD1uO2Zvcih2YXIgaT1yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRcIiksbz0wO288aS5sZW5ndGg7bysrKXt2YXIgYT1pLml0ZW0obyksdT13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZih1LmlubmVySFRNTD1hLmlubmVySFRNTCxhLmhhc0F0dHJpYnV0ZXMoKSlmb3IodmFyIHM9YS5hdHRyaWJ1dGVzLGM9MDtjPHMubGVuZ3RoO2MrKyl7dmFyIGw9c1tjXS5uYW1lO3VbbF09c1tjXS52YWx1ZX13aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh1KS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHUpfX19KX19XSksZX0oKTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cih0aGlzLGUpLHRoaXMuYWJvcnRhYmxlPSEwLHRoaXMueGhyPW51bGwsdC5hZGRFdmVudExpc3RlbmVyKFwiaW5pdFwiLHRoaXMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnRlcmFjdGlvblwiLHRoaXMuY2hlY2tBYm9ydGFibGUuYmluZCh0aGlzKSksdC5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlXCIsdGhpcy5jaGVja0Fib3J0YWJsZS5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFydFwiLHRoaXMuc2F2ZVhoci5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLHRoaXMuY2xlYXJYaHIuYmluZCh0aGlzKSl9cmV0dXJuIGkoZSxbe2tleTpcImluaXRpYWxpemVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmdW5jdGlvbih0KXtlLnhociYmKFwia2V5XCJpbiB0P1wiRXNjYXBlXCI9PT10LmtleToyNz09PXQua2V5Q29kZSkmJiEodC5jdHJsS2V5fHx0LnNoaWZ0S2V5fHx0LmFsdEtleXx8dC5tZXRhS2V5KSYmZS5hYm9ydGFibGUmJihlLnhoci5hYm9ydCgpLGUueGhyPW51bGwpfSl9fSx7a2V5OlwiY2hlY2tBYm9ydGFibGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQsbj1lLm9wdGlvbnM7dGhpcy5hYm9ydGFibGU9dD9cIm9mZlwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hamEtYWJvcnRcIik6ITEhPT1uLmFib3J0LG4uYWJvcnQ9dGhpcy5hYm9ydGFibGV9fSx7a2V5Olwic2F2ZVhoclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUueGhyO3RoaXMueGhyPXR9fSx7a2V5OlwiY2xlYXJYaHJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMueGhyPW51bGwsdGhpcy5hYm9ydGFibGU9ITB9fV0pLGV9KCk7dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3IodGhpcyxlKSx0aGlzLnhocj1udWxsLHQuYWRkRXZlbnRMaXN0ZW5lcihcImludGVyYWN0aW9uXCIsdGhpcy5jaGVja1VuaXF1ZW5lc3MuYmluZCh0aGlzKSksdC5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlXCIsdGhpcy5hYm9ydFByZXZpb3VzUmVxdWVzdC5iaW5kKHRoaXMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLHRoaXMuY2xlYXJSZXF1ZXN0LmJpbmQodGhpcykpfXJldHVybiBpKGUsW3trZXk6XCJjaGVja1VuaXF1ZW5lc3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnQ7ZS5vcHRpb25zLnVuaXF1ZT1cIm9mZlwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hamEtdW5pcXVlXCIpfX0se2tleTpcImFib3J0UHJldmlvdXNSZXF1ZXN0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS54aHIsbj1lLm9wdGlvbnM7dGhpcy54aHImJiExIT09bi51bmlxdWUmJnRoaXMueGhyLmFib3J0KCksdGhpcy54aHI9dH19LHtrZXk6XCJjbGVhclJlcXVlc3RcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMueGhyPW51bGx9fV0pLGV9KCk7dC5kZWZhdWx0PW99XSkuZGVmYXVsdH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmFqYS5qcy5tYXAiLCIvKipcclxuICogTmV0dGVGb3JtcyAtIHNpbXBsZSBmb3JtIHZhbGlkYXRpb24uXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOZXR0ZSBGcmFtZXdvcmsgKGh0dHBzOi8vbmV0dGUub3JnKVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDQgRGF2aWQgR3J1ZGwgKGh0dHBzOi8vZGF2aWRncnVkbC5jb20pXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xyXG5cdGlmICghZ2xvYmFsLkpTT04pIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGZhY3RvcnkoZ2xvYmFsKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGdsb2JhbCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBpbml0ID0gIWdsb2JhbC5OZXR0ZSB8fCAhZ2xvYmFsLk5ldHRlLm5vSW5pdDtcclxuXHRcdGdsb2JhbC5OZXR0ZSA9IGZhY3RvcnkoZ2xvYmFsKTtcclxuXHRcdGlmIChpbml0KSB7XHJcblx0XHRcdGdsb2JhbC5OZXR0ZS5pbml0T25Mb2FkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKHdpbmRvdykge1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIE5ldHRlID0ge307XHJcblxyXG5OZXR0ZS5mb3JtRXJyb3JzID0gW107XHJcbk5ldHRlLnZlcnNpb24gPSAnMi40JztcclxuXHJcblxyXG4vKipcclxuICogQXR0YWNoZXMgYSBoYW5kbGVyIHRvIGFuIGV2ZW50IGZvciB0aGUgZWxlbWVudC5cclxuICovXHJcbk5ldHRlLmFkZEV2ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgb24sIGNhbGxiYWNrKSB7XHJcblx0aWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG9uLCBjYWxsYmFjayk7XHJcblx0fSBlbHNlIGlmIChvbiA9PT0gJ0RPTUNvbnRlbnRMb2FkZWQnKSB7XHJcblx0XHRlbGVtZW50LmF0dGFjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGVsZW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBvbiwgZ2V0SGFuZGxlcihjYWxsYmFjaykpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRIYW5kbGVyKGNhbGxiYWNrKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuXHRcdHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgZm9ybSBlbGVtZW50LlxyXG4gKi9cclxuTmV0dGUuZ2V0VmFsdWUgPSBmdW5jdGlvbihlbGVtKSB7XHJcblx0dmFyIGk7XHJcblx0aWYgKCFlbGVtKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0fSBlbHNlIGlmICghZWxlbS50YWdOYW1lKSB7IC8vIFJhZGlvTm9kZUxpc3QsIEhUTUxDb2xsZWN0aW9uLCBhcnJheVxyXG5cdFx0cmV0dXJuIGVsZW1bMF0gPyBOZXR0ZS5nZXRWYWx1ZShlbGVtWzBdKSA6IG51bGw7XHJcblxyXG5cdH0gZWxzZSBpZiAoZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcblx0XHR2YXIgZWxlbWVudHMgPSBlbGVtLmZvcm0uZWxlbWVudHM7IC8vIHByZXZlbnRzIHByb2JsZW0gd2l0aCBuYW1lICdpdGVtJyBvciAnbmFtZWRJdGVtJ1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChlbGVtZW50c1tpXS5uYW1lID09PSBlbGVtLm5hbWUgJiYgZWxlbWVudHNbaV0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtZW50c1tpXS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdH0gZWxzZSBpZiAoZWxlbS50eXBlID09PSAnZmlsZScpIHtcclxuXHRcdHJldHVybiBlbGVtLmZpbGVzIHx8IGVsZW0udmFsdWU7XHJcblxyXG5cdH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XHJcblx0XHR2YXIgaW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXHJcblx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXHJcblx0XHRcdHZhbHVlcyA9IFtdO1xyXG5cclxuXHRcdGlmIChlbGVtLnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xyXG5cdFx0XHRyZXR1cm4gaW5kZXggPCAwID8gbnVsbCA6IG9wdGlvbnNbaW5kZXhdLnZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0dmFsdWVzLnB1c2gob3B0aW9uc1tpXS52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZXM7XHJcblxyXG5cdH0gZWxzZSBpZiAoZWxlbS5uYW1lICYmIGVsZW0ubmFtZS5tYXRjaCgvXFxbXFxdJC8pKSB7IC8vIG11bHRpcGxlIGVsZW1lbnRzIFtdXHJcblx0XHR2YXIgZWxlbWVudHMgPSBlbGVtLmZvcm0uZWxlbWVudHNbZWxlbS5uYW1lXS50YWdOYW1lID8gW2VsZW1dIDogZWxlbS5mb3JtLmVsZW1lbnRzW2VsZW0ubmFtZV0sXHJcblx0XHRcdHZhbHVlcyA9IFtdO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZWxlbWVudHNbaV0udHlwZSAhPT0gJ2NoZWNrYm94JyB8fCBlbGVtZW50c1tpXS5jaGVja2VkKSB7XHJcblx0XHRcdFx0dmFsdWVzLnB1c2goZWxlbWVudHNbaV0udmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cclxuXHR9IGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0cmV0dXJuIGVsZW0uY2hlY2tlZDtcclxuXHJcblx0fSBlbHNlIGlmIChlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykge1xyXG5cdFx0cmV0dXJuIGVsZW0udmFsdWUucmVwbGFjZShcIlxcclwiLCAnJyk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gZWxlbS52YWx1ZS5yZXBsYWNlKFwiXFxyXCIsICcnKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBlZmZlY3RpdmUgdmFsdWUgb2YgZm9ybSBlbGVtZW50LlxyXG4gKi9cclxuTmV0dGUuZ2V0RWZmZWN0aXZlVmFsdWUgPSBmdW5jdGlvbihlbGVtKSB7XHJcblx0dmFyIHZhbCA9IE5ldHRlLmdldFZhbHVlKGVsZW0pO1xyXG5cdGlmIChlbGVtLmdldEF0dHJpYnV0ZSkge1xyXG5cdFx0aWYgKHZhbCA9PT0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV0dGUtZW1wdHktdmFsdWUnKSkge1xyXG5cdFx0XHR2YWwgPSAnJztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHZhbDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGZvcm0gZWxlbWVudCBhZ2FpbnN0IGdpdmVuIHJ1bGVzLlxyXG4gKi9cclxuTmV0dGUudmFsaWRhdGVDb250cm9sID0gZnVuY3Rpb24oZWxlbSwgcnVsZXMsIG9ubHlDaGVjaywgdmFsdWUsIGVtcHR5T3B0aW9uYWwpIHtcclxuXHRlbGVtID0gZWxlbS50YWdOYW1lID8gZWxlbSA6IGVsZW1bMF07IC8vIFJhZGlvTm9kZUxpc3RcclxuXHRydWxlcyA9IHJ1bGVzIHx8IE5ldHRlLnBhcnNlSlNPTihlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uZXR0ZS1ydWxlcycpKTtcclxuXHR2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB7dmFsdWU6IE5ldHRlLmdldEVmZmVjdGl2ZVZhbHVlKGVsZW0pfSA6IHZhbHVlO1xyXG5cclxuXHRmb3IgKHZhciBpZCA9IDAsIGxlbiA9IHJ1bGVzLmxlbmd0aDsgaWQgPCBsZW47IGlkKyspIHtcclxuXHRcdHZhciBydWxlID0gcnVsZXNbaWRdLFxyXG5cdFx0XHRvcCA9IHJ1bGUub3AubWF0Y2goLyh+KT8oW14/XSspLyksXHJcblx0XHRcdGN1ckVsZW0gPSBydWxlLmNvbnRyb2wgPyBlbGVtLmZvcm0uZWxlbWVudHMubmFtZWRJdGVtKHJ1bGUuY29udHJvbCkgOiBlbGVtO1xyXG5cclxuXHRcdHJ1bGUubmVnID0gb3BbMV07XHJcblx0XHRydWxlLm9wID0gb3BbMl07XHJcblx0XHRydWxlLmNvbmRpdGlvbiA9ICEhcnVsZS5ydWxlcztcclxuXHJcblx0XHRpZiAoIWN1ckVsZW0pIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9IGVsc2UgaWYgKHJ1bGUub3AgPT09ICdvcHRpb25hbCcpIHtcclxuXHRcdFx0ZW1wdHlPcHRpb25hbCA9ICFOZXR0ZS52YWxpZGF0ZVJ1bGUoZWxlbSwgJzpmaWxsZWQnLCBudWxsLCB2YWx1ZSk7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fSBlbHNlIGlmIChlbXB0eU9wdGlvbmFsICYmICFydWxlLmNvbmRpdGlvbiAmJiBydWxlLm9wICE9PSAnOmZpbGxlZCcpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y3VyRWxlbSA9IGN1ckVsZW0udGFnTmFtZSA/IGN1ckVsZW0gOiBjdXJFbGVtWzBdOyAvLyBSYWRpb05vZGVMaXN0XHJcblx0XHR2YXIgY3VyVmFsdWUgPSBlbGVtID09PSBjdXJFbGVtID8gdmFsdWUgOiB7dmFsdWU6IE5ldHRlLmdldEVmZmVjdGl2ZVZhbHVlKGN1ckVsZW0pfSxcclxuXHRcdFx0c3VjY2VzcyA9IE5ldHRlLnZhbGlkYXRlUnVsZShjdXJFbGVtLCBydWxlLm9wLCBydWxlLmFyZywgY3VyVmFsdWUpO1xyXG5cclxuXHRcdGlmIChzdWNjZXNzID09PSBudWxsKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fSBlbHNlIGlmIChydWxlLm5lZykge1xyXG5cdFx0XHRzdWNjZXNzID0gIXN1Y2Nlc3M7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJ1bGUuY29uZGl0aW9uICYmIHN1Y2Nlc3MpIHtcclxuXHRcdFx0aWYgKCFOZXR0ZS52YWxpZGF0ZUNvbnRyb2woZWxlbSwgcnVsZS5ydWxlcywgb25seUNoZWNrLCB2YWx1ZSwgcnVsZS5vcCA9PT0gJzpibGFuaycgPyBmYWxzZSA6IGVtcHR5T3B0aW9uYWwpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCFydWxlLmNvbmRpdGlvbiAmJiAhc3VjY2Vzcykge1xyXG5cdFx0XHRpZiAoTmV0dGUuaXNEaXNhYmxlZChjdXJFbGVtKSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghb25seUNoZWNrKSB7XHJcblx0XHRcdFx0dmFyIGFyciA9IE5ldHRlLmlzQXJyYXkocnVsZS5hcmcpID8gcnVsZS5hcmcgOiBbcnVsZS5hcmddLFxyXG5cdFx0XHRcdFx0bWVzc2FnZSA9IHJ1bGUubXNnLnJlcGxhY2UoLyUodmFsdWV8XFxkKykvZywgZnVuY3Rpb24oZm9vLCBtKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBOZXR0ZS5nZXRWYWx1ZShtID09PSAndmFsdWUnID8gY3VyRWxlbSA6IGVsZW0uZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oYXJyW21dLmNvbnRyb2wpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdE5ldHRlLmFkZEVycm9yKGN1ckVsZW0sIG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChlbGVtLnR5cGUgPT09ICdudW1iZXInICYmICFlbGVtLnZhbGlkaXR5LnZhbGlkKSB7XHJcblx0XHRpZiAoIW9ubHlDaGVjaykge1xyXG5cdFx0XHROZXR0ZS5hZGRFcnJvcihlbGVtLCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgdmFsdWUuJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIHdob2xlIGZvcm0uXHJcbiAqL1xyXG5OZXR0ZS52YWxpZGF0ZUZvcm0gPSBmdW5jdGlvbihzZW5kZXIsIG9ubHlDaGVjaykge1xyXG5cdHZhciBmb3JtID0gc2VuZGVyLmZvcm0gfHwgc2VuZGVyLFxyXG5cdFx0c2NvcGUgPSBmYWxzZTtcclxuXHJcblx0TmV0dGUuZm9ybUVycm9ycyA9IFtdO1xyXG5cclxuXHRpZiAoZm9ybVsnbmV0dGUtc3VibWl0dGVkQnknXSAmJiBmb3JtWyduZXR0ZS1zdWJtaXR0ZWRCeSddLmdldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnKSAhPT0gbnVsbCkge1xyXG5cdFx0dmFyIHNjb3BlQXJyID0gTmV0dGUucGFyc2VKU09OKGZvcm1bJ25ldHRlLXN1Ym1pdHRlZEJ5J10uZ2V0QXR0cmlidXRlKCdkYXRhLW5ldHRlLXZhbGlkYXRpb24tc2NvcGUnKSk7XHJcblx0XHRpZiAoc2NvcGVBcnIubGVuZ3RoKSB7XHJcblx0XHRcdHNjb3BlID0gbmV3IFJlZ0V4cCgnXignICsgc2NvcGVBcnIuam9pbignLXwnKSArICctKScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0TmV0dGUuc2hvd0Zvcm1FcnJvcnMoZm9ybSwgW10pO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciByYWRpb3MgPSB7fSwgaSwgZWxlbTtcclxuXHJcblx0Zm9yIChpID0gMDsgaSA8IGZvcm0uZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGVsZW0gPSBmb3JtLmVsZW1lbnRzW2ldO1xyXG5cclxuXHRcdGlmIChlbGVtLnRhZ05hbWUgJiYgIShlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSBpbiB7aW5wdXQ6IDEsIHNlbGVjdDogMSwgdGV4dGFyZWE6IDEsIGJ1dHRvbjogMX0pKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcblx0XHRcdGlmIChyYWRpb3NbZWxlbS5uYW1lXSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJhZGlvc1tlbGVtLm5hbWVdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoKHNjb3BlICYmICFlbGVtLm5hbWUucmVwbGFjZSgvXVxcW3xcXFt8XXwkL2csICctJykubWF0Y2goc2NvcGUpKSB8fCBOZXR0ZS5pc0Rpc2FibGVkKGVsZW0pKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghTmV0dGUudmFsaWRhdGVDb250cm9sKGVsZW0sIG51bGwsIG9ubHlDaGVjaykgJiYgIU5ldHRlLmZvcm1FcnJvcnMubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0dmFyIHN1Y2Nlc3MgPSAhTmV0dGUuZm9ybUVycm9ycy5sZW5ndGg7XHJcblx0TmV0dGUuc2hvd0Zvcm1FcnJvcnMoZm9ybSwgTmV0dGUuZm9ybUVycm9ycyk7XHJcblx0cmV0dXJuIHN1Y2Nlc3M7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGlucHV0IGlzIGRpc2FibGVkLlxyXG4gKi9cclxuTmV0dGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uKGVsZW0pIHtcclxuXHRpZiAoZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudHMgPSBlbGVtLmZvcm0uZWxlbWVudHM7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZWxlbWVudHNbaV0ubmFtZSA9PT0gZWxlbS5uYW1lICYmICFlbGVtZW50c1tpXS5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBlbGVtLmRpc2FibGVkO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHF1ZXVlLlxyXG4gKi9cclxuTmV0dGUuYWRkRXJyb3IgPSBmdW5jdGlvbihlbGVtLCBtZXNzYWdlKSB7XHJcblx0TmV0dGUuZm9ybUVycm9ycy5wdXNoKHtcclxuXHRcdGVsZW1lbnQ6IGVsZW0sXHJcblx0XHRtZXNzYWdlOiBtZXNzYWdlXHJcblx0fSk7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgZXJyb3IgbWVzc2FnZXMuXHJcbiAqL1xyXG5OZXR0ZS5zaG93Rm9ybUVycm9ycyA9IGZ1bmN0aW9uKGZvcm0sIGVycm9ycykge1xyXG5cdHZhciBtZXNzYWdlcyA9IFtdLFxyXG5cdFx0Zm9jdXNFbGVtO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGVsZW0gPSBlcnJvcnNbaV0uZWxlbWVudCxcclxuXHRcdFx0bWVzc2FnZSA9IGVycm9yc1tpXS5tZXNzYWdlO1xyXG5cclxuXHRcdGlmICghTmV0dGUuaW5BcnJheShtZXNzYWdlcywgbWVzc2FnZSkpIHtcclxuXHRcdFx0bWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuXHJcblx0XHRcdGlmICghZm9jdXNFbGVtICYmIGVsZW0uZm9jdXMpIHtcclxuXHRcdFx0XHRmb2N1c0VsZW0gPSBlbGVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobWVzc2FnZXMubGVuZ3RoKSB7XHJcblx0XHRhbGVydChtZXNzYWdlcy5qb2luKCdcXG4nKSk7XHJcblxyXG5cdFx0aWYgKGZvY3VzRWxlbSkge1xyXG5cdFx0XHRmb2N1c0VsZW0uZm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEV4cGFuZCBydWxlIGFyZ3VtZW50LlxyXG4gKi9cclxuTmV0dGUuZXhwYW5kUnVsZUFyZ3VtZW50ID0gZnVuY3Rpb24oZm9ybSwgYXJnKSB7XHJcblx0aWYgKGFyZyAmJiBhcmcuY29udHJvbCkge1xyXG5cdFx0dmFyIGNvbnRyb2wgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShhcmcuY29udHJvbCksXHJcblx0XHRcdHZhbHVlID0ge3ZhbHVlOiBOZXR0ZS5nZXRFZmZlY3RpdmVWYWx1ZShjb250cm9sKX07XHJcblx0XHROZXR0ZS52YWxpZGF0ZUNvbnRyb2woY29udHJvbCwgbnVsbCwgdHJ1ZSwgdmFsdWUpO1xyXG5cdFx0YXJnID0gdmFsdWUudmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBhcmc7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBzaW5nbGUgcnVsZS5cclxuICovXHJcbk5ldHRlLnZhbGlkYXRlUnVsZSA9IGZ1bmN0aW9uKGVsZW0sIG9wLCBhcmcsIHZhbHVlKSB7XHJcblx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8ge3ZhbHVlOiBOZXR0ZS5nZXRFZmZlY3RpdmVWYWx1ZShlbGVtKX0gOiB2YWx1ZTtcclxuXHJcblx0aWYgKG9wLmNoYXJBdCgwKSA9PT0gJzonKSB7XHJcblx0XHRvcCA9IG9wLnN1YnN0cigxKTtcclxuXHR9XHJcblx0b3AgPSBvcC5yZXBsYWNlKCc6OicsICdfJyk7XHJcblx0b3AgPSBvcC5yZXBsYWNlKC9cXFxcL2csICcnKTtcclxuXHJcblx0dmFyIGFyciA9IE5ldHRlLmlzQXJyYXkoYXJnKSA/IGFyZy5zbGljZSgwKSA6IFthcmddO1xyXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdGFycltpXSA9IE5ldHRlLmV4cGFuZFJ1bGVBcmd1bWVudChlbGVtLmZvcm0sIGFycltpXSk7XHJcblx0fVxyXG5cdHJldHVybiBOZXR0ZS52YWxpZGF0b3JzW29wXVxyXG5cdFx0PyBOZXR0ZS52YWxpZGF0b3JzW29wXShlbGVtLCBOZXR0ZS5pc0FycmF5KGFyZykgPyBhcnIgOiBhcnJbMF0sIHZhbHVlLnZhbHVlLCB2YWx1ZSlcclxuXHRcdDogbnVsbDtcclxufTtcclxuXHJcblxyXG5OZXR0ZS52YWxpZGF0b3JzID0ge1xyXG5cdGZpbGxlZDogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdGlmIChlbGVtLnR5cGUgPT09ICdudW1iZXInICYmIGVsZW0udmFsaWRpdHkuYmFkSW5wdXQpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsICE9PSAnJyAmJiB2YWwgIT09IGZhbHNlICYmIHZhbCAhPT0gbnVsbFxyXG5cdFx0XHQmJiAoIU5ldHRlLmlzQXJyYXkodmFsKSB8fCAhIXZhbC5sZW5ndGgpXHJcblx0XHRcdCYmICghd2luZG93LkZpbGVMaXN0IHx8ICEodmFsIGluc3RhbmNlb2Ygd2luZG93LkZpbGVMaXN0KSB8fCB2YWwubGVuZ3RoKTtcclxuXHR9LFxyXG5cclxuXHRibGFuazogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdHJldHVybiAhTmV0dGUudmFsaWRhdG9ycy5maWxsZWQoZWxlbSwgYXJnLCB2YWwpO1xyXG5cdH0sXHJcblxyXG5cdHZhbGlkOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0cmV0dXJuIE5ldHRlLnZhbGlkYXRlQ29udHJvbChlbGVtLCBudWxsLCB0cnVlKTtcclxuXHR9LFxyXG5cclxuXHRlcXVhbDogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdGlmIChhcmcgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB0b1N0cmluZyh2YWwpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0cmV0dXJuICcnICsgdmFsO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB2YWwgPT09IHRydWUgPyAnMScgOiAnJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhbCA9IE5ldHRlLmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdO1xyXG5cdFx0YXJnID0gTmV0dGUuaXNBcnJheShhcmcpID8gYXJnIDogW2FyZ107XHJcblx0XHRsb29wOlxyXG5cdFx0Zm9yICh2YXIgaTEgPSAwLCBsZW4xID0gdmFsLmxlbmd0aDsgaTEgPCBsZW4xOyBpMSsrKSB7XHJcblx0XHRcdGZvciAodmFyIGkyID0gMCwgbGVuMiA9IGFyZy5sZW5ndGg7IGkyIDwgbGVuMjsgaTIrKykge1xyXG5cdFx0XHRcdGlmICh0b1N0cmluZyh2YWxbaTFdKSA9PT0gdG9TdHJpbmcoYXJnW2kyXSkpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlIGxvb3A7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblxyXG5cdG5vdEVxdWFsOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0cmV0dXJuIGFyZyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6ICFOZXR0ZS52YWxpZGF0b3JzLmVxdWFsKGVsZW0sIGFyZywgdmFsKTtcclxuXHR9LFxyXG5cclxuXHRtaW5MZW5ndGg6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsKSB7XHJcblx0XHRpZiAoZWxlbS50eXBlID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRpZiAoZWxlbS52YWxpZGl0eS50b29TaG9ydCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9IGVsc2UgaWYgKGVsZW0udmFsaWRpdHkuYmFkSW5wdXQpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbC5sZW5ndGggPj0gYXJnO1xyXG5cdH0sXHJcblxyXG5cdG1heExlbmd0aDogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdGlmIChlbGVtLnR5cGUgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdGlmIChlbGVtLnZhbGlkaXR5LnRvb0xvbmcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtLnZhbGlkaXR5LmJhZElucHV0KSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWwubGVuZ3RoIDw9IGFyZztcclxuXHR9LFxyXG5cclxuXHRsZW5ndGg6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsKSB7XHJcblx0XHRpZiAoZWxlbS50eXBlID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRpZiAoZWxlbS52YWxpZGl0eS50b29TaG9ydCB8fCBlbGVtLnZhbGlkaXR5LnRvb0xvbmcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtLnZhbGlkaXR5LmJhZElucHV0KSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGFyZyA9IE5ldHRlLmlzQXJyYXkoYXJnKSA/IGFyZyA6IFthcmcsIGFyZ107XHJcblx0XHRyZXR1cm4gKGFyZ1swXSA9PT0gbnVsbCB8fCB2YWwubGVuZ3RoID49IGFyZ1swXSkgJiYgKGFyZ1sxXSA9PT0gbnVsbCB8fCB2YWwubGVuZ3RoIDw9IGFyZ1sxXSk7XHJcblx0fSxcclxuXHJcblx0ZW1haWw6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsKSB7XHJcblx0XHRyZXR1cm4gKC9eKFwiKFsgISMtW1xcXS1+XXxcXFxcWyAtfl0pK1wifFstYS16MC05ISMkJSYnKitcXC89P15fYHt8fX5dKyhcXC5bLWEtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+XSspKilAKFswLTlhLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKFstMC05YS16XFx1MDBDMC1cXHUwMkZGXFx1MDM3MC1cXHUxRUZGXXswLDYxfVswLTlhLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKT9cXC4pK1thLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKFstMC05YS16XFx1MDBDMC1cXHUwMkZGXFx1MDM3MC1cXHUxRUZGXXswLDE3fVthLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKT8kL2kpLnRlc3QodmFsKTtcclxuXHR9LFxyXG5cclxuXHR1cmw6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsLCB2YWx1ZSkge1xyXG5cdFx0aWYgKCEoL15bYS16XFxkKy4tXSs6LykudGVzdCh2YWwpKSB7XHJcblx0XHRcdHZhbCA9ICdodHRwOi8vJyArIHZhbDtcclxuXHRcdH1cclxuXHRcdGlmICgoL15odHRwcz86XFwvXFwvKCgoWy1fMC05YS16XFx1MDBDMC1cXHUwMkZGXFx1MDM3MC1cXHUxRUZGXStcXC4pKlswLTlhLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKFstMC05YS16XFx1MDBDMC1cXHUwMkZGXFx1MDM3MC1cXHUxRUZGXXswLDYxfVswLTlhLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKT9cXC4pP1thLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKFstMC05YS16XFx1MDBDMC1cXHUwMkZGXFx1MDM3MC1cXHUxRUZGXXswLDE3fVthLXpcXHUwMEMwLVxcdTAyRkZcXHUwMzcwLVxcdTFFRkZdKT98XFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM318XFxbWzAtOWEtZjpdezMsMzl9XFxdKSg6XFxkezEsNX0pPyhcXC9cXFMqKT8kL2kpLnRlc3QodmFsKSkge1xyXG5cdFx0XHR2YWx1ZS52YWx1ZSA9IHZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0cmVnZXhwOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0dmFyIHBhcnRzID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBhcmcubWF0Y2goL15cXC8oLiopXFwvKFtpbXVdKikkLykgOiBmYWxzZTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiBwYXJ0cyAmJiAobmV3IFJlZ0V4cChwYXJ0c1sxXSwgcGFydHNbMl0ucmVwbGFjZSgndScsICcnKSkpLnRlc3QodmFsKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0fSxcclxuXHJcblx0cGF0dGVybjogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyA/IChuZXcgUmVnRXhwKCdeKD86JyArIGFyZyArICcpJCcpKS50ZXN0KHZhbCkgOiBudWxsO1xyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHR9LFxyXG5cclxuXHRpbnRlZ2VyOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0aWYgKGVsZW0udHlwZSA9PT0gJ251bWJlcicgJiYgZWxlbS52YWxpZGl0eS5iYWRJbnB1dCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKC9eLT9bMC05XSskLykudGVzdCh2YWwpO1xyXG5cdH0sXHJcblxyXG5cdCdmbG9hdCc6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsLCB2YWx1ZSkge1xyXG5cdFx0aWYgKGVsZW0udHlwZSA9PT0gJ251bWJlcicgJiYgZWxlbS52YWxpZGl0eS5iYWRJbnB1dCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR2YWwgPSB2YWwucmVwbGFjZSgnICcsICcnKS5yZXBsYWNlKCcsJywgJy4nKTtcclxuXHRcdGlmICgoL14tP1swLTldKlsuLF0/WzAtOV0rJC8pLnRlc3QodmFsKSkge1xyXG5cdFx0XHR2YWx1ZS52YWx1ZSA9IHZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHJcblx0bWluOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0aWYgKGVsZW0udHlwZSA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0aWYgKGVsZW0udmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtLnZhbGlkaXR5LmJhZElucHV0KSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBhcmcgPT09IG51bGwgfHwgcGFyc2VGbG9hdCh2YWwpID49IGFyZztcclxuXHR9LFxyXG5cclxuXHRtYXg6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsKSB7XHJcblx0XHRpZiAoZWxlbS50eXBlID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRpZiAoZWxlbS52YWxpZGl0eS5yYW5nZU92ZXJmbG93KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH0gZWxzZSBpZiAoZWxlbS52YWxpZGl0eS5iYWRJbnB1dCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJnID09PSBudWxsIHx8IHBhcnNlRmxvYXQodmFsKSA8PSBhcmc7XHJcblx0fSxcclxuXHJcblx0cmFuZ2U6IGZ1bmN0aW9uKGVsZW0sIGFyZywgdmFsKSB7XHJcblx0XHRpZiAoZWxlbS50eXBlID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRpZiAoZWxlbS52YWxpZGl0eS5yYW5nZVVuZGVyZmxvdyB8fCBlbGVtLnZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtLnZhbGlkaXR5LmJhZElucHV0KSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBOZXR0ZS5pc0FycmF5KGFyZykgP1xyXG5cdFx0XHQoKGFyZ1swXSA9PT0gbnVsbCB8fCBwYXJzZUZsb2F0KHZhbCkgPj0gYXJnWzBdKSAmJiAoYXJnWzFdID09PSBudWxsIHx8IHBhcnNlRmxvYXQodmFsKSA8PSBhcmdbMV0pKSA6IG51bGw7XHJcblx0fSxcclxuXHJcblx0c3VibWl0dGVkOiBmdW5jdGlvbihlbGVtLCBhcmcsIHZhbCkge1xyXG5cdFx0cmV0dXJuIGVsZW0uZm9ybVsnbmV0dGUtc3VibWl0dGVkQnknXSA9PT0gZWxlbTtcclxuXHR9LFxyXG5cclxuXHRmaWxlU2l6ZTogZnVuY3Rpb24oZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdGlmICh3aW5kb3cuRmlsZUxpc3QpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAodmFsW2ldLnNpemUgPiBhcmcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblxyXG5cdGltYWdlOiBmdW5jdGlvbiAoZWxlbSwgYXJnLCB2YWwpIHtcclxuXHRcdGlmICh3aW5kb3cuRmlsZUxpc3QgJiYgdmFsIGluc3RhbmNlb2Ygd2luZG93LkZpbGVMaXN0KSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHR5cGUgPSB2YWxbaV0udHlwZTtcclxuXHRcdFx0XHRpZiAodHlwZSAmJiB0eXBlICE9PSAnaW1hZ2UvZ2lmJyAmJiB0eXBlICE9PSAnaW1hZ2UvcG5nJyAmJiB0eXBlICE9PSAnaW1hZ2UvanBlZycpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogUHJvY2VzcyBhbGwgdG9nZ2xlcyBpbiBmb3JtLlxyXG4gKi9cclxuTmV0dGUudG9nZ2xlRm9ybSA9IGZ1bmN0aW9uKGZvcm0sIGVsZW0pIHtcclxuXHR2YXIgaTtcclxuXHROZXR0ZS50b2dnbGVzID0ge307XHJcblx0Zm9yIChpID0gMDsgaSA8IGZvcm0uZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChmb3JtLmVsZW1lbnRzW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKSBpbiB7aW5wdXQ6IDEsIHNlbGVjdDogMSwgdGV4dGFyZWE6IDEsIGJ1dHRvbjogMX0pIHtcclxuXHRcdFx0TmV0dGUudG9nZ2xlQ29udHJvbChmb3JtLmVsZW1lbnRzW2ldLCBudWxsLCBudWxsLCAhZWxlbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IgKGkgaW4gTmV0dGUudG9nZ2xlcykge1xyXG5cdFx0TmV0dGUudG9nZ2xlKGksIE5ldHRlLnRvZ2dsZXNbaV0sIGVsZW0pO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogUHJvY2VzcyB0b2dnbGVzIG9uIGZvcm0gZWxlbWVudC5cclxuICovXHJcbk5ldHRlLnRvZ2dsZUNvbnRyb2wgPSBmdW5jdGlvbihlbGVtLCBydWxlcywgc3VjY2VzcywgZmlyc3R0aW1lLCB2YWx1ZSkge1xyXG5cdHJ1bGVzID0gcnVsZXMgfHwgTmV0dGUucGFyc2VKU09OKGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5ldHRlLXJ1bGVzJykpO1xyXG5cdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHt2YWx1ZTogTmV0dGUuZ2V0RWZmZWN0aXZlVmFsdWUoZWxlbSl9IDogdmFsdWU7XHJcblxyXG5cdHZhciBoYXMgPSBmYWxzZSxcclxuXHRcdGhhbmRsZWQgPSBbXSxcclxuXHRcdGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdE5ldHRlLnRvZ2dsZUZvcm0oZWxlbS5mb3JtLCBlbGVtKTtcclxuXHRcdH0sXHJcblx0XHRjdXJTdWNjZXNzO1xyXG5cclxuXHRmb3IgKHZhciBpZCA9IDAsIGxlbiA9IHJ1bGVzLmxlbmd0aDsgaWQgPCBsZW47IGlkKyspIHtcclxuXHRcdHZhciBydWxlID0gcnVsZXNbaWRdLFxyXG5cdFx0XHRvcCA9IHJ1bGUub3AubWF0Y2goLyh+KT8oW14/XSspLyksXHJcblx0XHRcdGN1ckVsZW0gPSBydWxlLmNvbnRyb2wgPyBlbGVtLmZvcm0uZWxlbWVudHMubmFtZWRJdGVtKHJ1bGUuY29udHJvbCkgOiBlbGVtO1xyXG5cclxuXHRcdGlmICghY3VyRWxlbSkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJTdWNjZXNzID0gc3VjY2VzcztcclxuXHRcdGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG5cdFx0XHRydWxlLm5lZyA9IG9wWzFdO1xyXG5cdFx0XHRydWxlLm9wID0gb3BbMl07XHJcblx0XHRcdHZhciBjdXJWYWx1ZSA9IGVsZW0gPT09IGN1ckVsZW0gPyB2YWx1ZSA6IHt2YWx1ZTogTmV0dGUuZ2V0RWZmZWN0aXZlVmFsdWUoY3VyRWxlbSl9O1xyXG5cdFx0XHRjdXJTdWNjZXNzID0gTmV0dGUudmFsaWRhdGVSdWxlKGN1ckVsZW0sIHJ1bGUub3AsIHJ1bGUuYXJnLCBjdXJWYWx1ZSk7XHJcblx0XHRcdGlmIChjdXJTdWNjZXNzID09PSBudWxsKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHJ1bGUubmVnKSB7XHJcblx0XHRcdFx0Y3VyU3VjY2VzcyA9ICFjdXJTdWNjZXNzO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcnVsZS5ydWxlcykge1xyXG5cdFx0XHRcdHN1Y2Nlc3MgPSBjdXJTdWNjZXNzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKChydWxlLnJ1bGVzICYmIE5ldHRlLnRvZ2dsZUNvbnRyb2woZWxlbSwgcnVsZS5ydWxlcywgY3VyU3VjY2VzcywgZmlyc3R0aW1lLCB2YWx1ZSkpIHx8IHJ1bGUudG9nZ2xlKSB7XHJcblx0XHRcdGhhcyA9IHRydWU7XHJcblx0XHRcdGlmIChmaXJzdHRpbWUpIHtcclxuXHRcdFx0XHR2YXIgb2xkSUUgPSAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciwgLy8gSUUgPCA5XHJcblx0XHRcdFx0XHRuYW1lID0gY3VyRWxlbS50YWdOYW1lID8gY3VyRWxlbS5uYW1lIDogY3VyRWxlbVswXS5uYW1lLFxyXG5cdFx0XHRcdFx0ZWxzID0gY3VyRWxlbS50YWdOYW1lID8gY3VyRWxlbS5mb3JtLmVsZW1lbnRzIDogY3VyRWxlbTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChlbHNbaV0ubmFtZSA9PT0gbmFtZSAmJiAhTmV0dGUuaW5BcnJheShoYW5kbGVkLCBlbHNbaV0pKSB7XHJcblx0XHRcdFx0XHRcdE5ldHRlLmFkZEV2ZW50KGVsc1tpXSwgb2xkSUUgJiYgZWxzW2ldLnR5cGUgaW4ge2NoZWNrYm94OiAxLCByYWRpbzogMX0gPyAnY2xpY2snIDogJ2NoYW5nZScsIGhhbmRsZXIpO1xyXG5cdFx0XHRcdFx0XHRoYW5kbGVkLnB1c2goZWxzW2ldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yICh2YXIgaWQyIGluIHJ1bGUudG9nZ2xlIHx8IFtdKSB7XHJcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChydWxlLnRvZ2dsZSwgaWQyKSkge1xyXG5cdFx0XHRcdFx0TmV0dGUudG9nZ2xlc1tpZDJdID0gTmV0dGUudG9nZ2xlc1tpZDJdIHx8IChydWxlLnRvZ2dsZVtpZDJdID8gY3VyU3VjY2VzcyA6ICFjdXJTdWNjZXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGhhcztcclxufTtcclxuXHJcblxyXG5OZXR0ZS5wYXJzZUpTT04gPSBmdW5jdGlvbihzKSB7XHJcblx0cmV0dXJuIChzIHx8ICcnKS5zdWJzdHIoMCwgMykgPT09ICd7b3AnXHJcblx0XHQ/IGV2YWwoJ1snICsgcyArICddJykgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE5ldHRlIDIuMC54XHJcblx0XHQ6IEpTT04ucGFyc2UocyB8fCAnW10nKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogRGlzcGxheXMgb3IgaGlkZXMgSFRNTCBlbGVtZW50LlxyXG4gKi9cclxuTmV0dGUudG9nZ2xlID0gZnVuY3Rpb24oaWQsIHZpc2libGUsIHNyY0VsZW1lbnQpIHtcclxuXHR2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRpZiAoZWxlbSkge1xyXG5cdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogU2V0dXAgaGFuZGxlcnMuXHJcbiAqL1xyXG5OZXR0ZS5pbml0Rm9ybSA9IGZ1bmN0aW9uKGZvcm0pIHtcclxuXHROZXR0ZS50b2dnbGVGb3JtKGZvcm0pO1xyXG5cclxuXHRpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRmb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuXHROZXR0ZS5hZGRFdmVudChmb3JtLCAnc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCFOZXR0ZS52YWxpZGF0ZUZvcm0oZm9ybSkpIHtcclxuXHRcdFx0aWYgKGUgJiYgZS5zdG9wUHJvcGFnYXRpb24pIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cuZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG5cdFx0XHRcdGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICovXHJcbk5ldHRlLmluaXRPbkxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHROZXR0ZS5hZGRFdmVudChkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuZm9ybXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGZvcm0gPSBkb2N1bWVudC5mb3Jtc1tpXTtcclxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBmb3JtLmVsZW1lbnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGZvcm0uZWxlbWVudHNbal0uZ2V0QXR0cmlidXRlKCdkYXRhLW5ldHRlLXJ1bGVzJykpIHtcclxuXHRcdFx0XHRcdE5ldHRlLmluaXRGb3JtKGZvcm0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0TmV0dGUuYWRkRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG5cdFx0XHR3aGlsZSAodGFyZ2V0KSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5mb3JtICYmIHRhcmdldC50eXBlIGluIHtzdWJtaXQ6IDEsIGltYWdlOiAxfSkge1xyXG5cdFx0XHRcdFx0dGFyZ2V0LmZvcm1bJ25ldHRlLXN1Ym1pdHRlZEJ5J10gPSB0YXJnZXQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5LlxyXG4gKi9cclxuTmV0dGUuaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xyXG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufTtcclxuXHJcblxyXG4vKipcclxuICogU2VhcmNoIGZvciBhIHNwZWNpZmllZCB2YWx1ZSB3aXRoaW4gYW4gYXJyYXkuXHJcbiAqL1xyXG5OZXR0ZS5pbkFycmF5ID0gZnVuY3Rpb24oYXJyLCB2YWwpIHtcclxuXHRpZiAoW10uaW5kZXhPZikge1xyXG5cdFx0cmV0dXJuIGFyci5pbmRleE9mKHZhbCkgPiAtMTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFycltpXSA9PT0gdmFsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHN0cmluZyB0byB3ZWIgc2FmZSBjaGFyYWN0ZXJzIFthLXowLTktXSB0ZXh0LlxyXG4gKi9cclxuTmV0dGUud2ViYWxpemUgPSBmdW5jdGlvbihzKSB7XHJcblx0cyA9IHMudG9Mb3dlckNhc2UoKTtcclxuXHR2YXIgcmVzID0gJycsIGksIGNoO1xyXG5cdGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjaCA9IE5ldHRlLndlYmFsaXplVGFibGVbcy5jaGFyQXQoaSldO1xyXG5cdFx0cmVzICs9IGNoID8gY2ggOiBzLmNoYXJBdChpKTtcclxuXHR9XHJcblx0cmV0dXJuIHJlcy5yZXBsYWNlKC9bXmEtejAtOV0rL2csICctJykucmVwbGFjZSgvXi18LSQvZywgJycpO1xyXG59O1xyXG5cclxuTmV0dGUud2ViYWxpemVUYWJsZSA9IHtcXHUwMGUxOiAnYScsIFxcdTAwZTQ6ICdhJywgXFx1MDEwZDogJ2MnLCBcXHUwMTBmOiAnZCcsIFxcdTAwZTk6ICdlJywgXFx1MDExYjogJ2UnLCBcXHUwMGVkOiAnaScsIFxcdTAxM2U6ICdsJywgXFx1MDE0ODogJ24nLCBcXHUwMGYzOiAnbycsIFxcdTAwZjQ6ICdvJywgXFx1MDE1OTogJ3InLCBcXHUwMTYxOiAncycsIFxcdTAxNjU6ICd0JywgXFx1MDBmYTogJ3UnLCBcXHUwMTZmOiAndScsIFxcdTAwZmQ6ICd5JywgXFx1MDE3ZTogJ3onfTtcclxuXHJcbnJldHVybiBOZXR0ZTtcclxufSkpO1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07Il19
//# sourceMappingURL=interitty.js.map
