/**This file is for the rating stars*/
function StarRating() {
  this.init();
};

StarRating.prototype.init = function() {
  this.stars = document.querySelectorAll('#rating span');
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].setAttribute('data-count', i);
    this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

StarRating.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};


StarRating.prototype.leaveStarListener = function() {
  this.fillStarsUpToElement(null);
};


StarRating.prototype.fillStarsUpToElement = function(el) {
  for (var i = 0; i < this.stars.length; i++) {
    if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      this.stars[i].classList.remove('hover');
    } else {
      this.stars[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating();
