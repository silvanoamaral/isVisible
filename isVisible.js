function isVisible() {
       var nomeElemento = 'footer';
    var elem = document.querySelector(nomeElemento);
  
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    var style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 0) {
        return false;
    }
    var elemCenterX = elem.getBoundingClientRect().left + (elem.offsetWidth == 0 ?  elem.getBoundingClientRect().width : elem.offsetWidth) / 2;
    var elemCenterY = elem.getBoundingClientRect().top + (elem.offsetHeight == 0 ?  elem.getBoundingClientRect().height : elem.offsetHeight) / 2;
    if (elemCenterX < 0) return false;
    if (elemCenterX > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenterY < 0) return false;
    if (elemCenterY > (document.documentElement.clientHeight || window.innerHeight)) return false;
    var pointContainer = document.elementFromPoint(elemCenterX, elemCenterY);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
  }

   window.addEventListener('scroll', function() {
    if(isVisible()) {
      $('.grid.product__infos.grid__col--sm-6').css('bottom','90px');
    } else {
      $('.grid.product__infos.grid__col--sm-6').css('bottom','0px');
    }
  });
