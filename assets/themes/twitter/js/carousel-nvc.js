var CarouselNVC = function(element, indicators, header) {

	this.$element = $(element);
	this.$indicators = $(indicators);
	this.$header = $(header);
	var that = this;

	this.next = function() {
      if (this.sliding) {
      	return;
      }      
      return slide('next');
	};

	this.prev = function() {
      if (this.sliding) {
      	return;
      }
      return slide('prev');
	};

	this.to = function(pos) {
		var activeIndex = getActiveIndex();
		if (pos === undefined) return;
		if (activeIndex === pos) return;

		return slide(activeIndex < pos ? 'next' : 'prev', $(this.$items[pos]));
	};	

	var getActiveIndex = function() {
		that.$active = that.$element.find('li.active');
     	that.$items = that.$active.parent().children();
      	return that.$items.index(that.$active);
	};

	var slide = function(type, next) {
		var activeIndex = getActiveIndex(),
			$active = that.$active,
			nextIndex = type === 'next' ? activeIndex + 1 : activeIndex - 1,
			$next = next || $(that.$items[nextIndex]),		
			direction = type == 'next' ? 'left' : 'right',
			fallback  = type == 'next' ? 'first' : 'last';		

		nextIndex = that.$items.index($next);
		if (nextIndex < 0 || nextIndex >= that.$items.length) return;

		if ($next.hasClass('active')) return;

		if(that.$indicators) {
			that.$indicators.find('li.active').removeClass('active');
			$(that.$indicators.children()[nextIndex]).addClass('active');
		}
		if(that.$header) {
			that.$header.find('div.active').removeClass('active');
			$(that.$header.children()[nextIndex]).addClass('active');
		}

      	if ($.support.transition) {
        	$next.addClass(type);
        	$next[0].offsetWidth; // force reflow
        	$active.addClass(direction);
        	$next.addClass(direction);
        	that.$element.one($.support.transition.end, function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active');
	          $active.removeClass(['active', direction].join(' '));
	          that.sliding = false;
	          that.$element.trigger('slid');
	        })
	    } else {
	        $active.removeClass('active');
	        $next.addClass('active');
	        that.sliding = false;
	        that.$element.trigger('slid');
	    }

      	return that;
	};
}