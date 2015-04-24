
$(window).load(function(){
	$(window).resize(function(){
		//slider scaling
		var menuFW = (($('#fixed-top-bar').width())); //Menu Full Width
		var MmenuW = (menuFW - 588);
		// Dla slidera w po�cie
		$('#nav-menu').css('width', MmenuW);
	}).resize();
	$( function() {
		$('#nav-menu > ul').removeClass('children');
		$('#nav-menu').children('ul').children('li').children('a').each(function(){
			var HelpRel = ($(this).attr('data-filter-value')).substring(1);
			$(this).siblings('ul').attr('data-filter-group', HelpRel);
		});
		$('#nav-menu').children('ul').children('li').children('a').removeAttr('data-filter-value');
		$(window).resize(function(){
			var marketWidth = $('#marketplaces').width();
			var marketWidth = marketWidth*0.24;
			var placeGutter = marketWidth*0.05;
			$('.m-space').each(function(){
				$(this).css('height', placeGutter/2);
			});
			// init Isotope
			var filters = {};
			var $filterDisplay = $('#filter-display');
			var imgs = $("img");
			var $container = $('#marketplaces').isotope({
				itemSelector: '.market-element',
				layoutMode: 'masonry',
				masonry: {
					columnWidth : marketWidth,
					gutter : placeGutter
				}
			});
			/*Function Load Visibile*/
			function loadVisible($els, trigger) {
        $els.filter(function () {
            var rect = this.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight;
        }).trigger(trigger);
    }
	
$container.imagesLoaded( function() {
			  $container.isotope('layout');
			});
			 $('.children li a').click(function(){
				// we can gtfo directly if filter disabled
				if ($(this).hasClass('disabled') ){
					return false;
				}
				var $this = $(this);
				var $optionSet = $(this).parents('li').parents('.children');
				group = $optionSet.attr('data-filter-group');
				// store filter value in object
				var filterGroup = filters[ group ];
				if ( !filterGroup ) {
					filterGroup = filters[ group ] = [];
				}
				var isAll = $this.hasClass('all');
				// reset filter group
				if ( isAll ) {
					Array.prototype.remove = function(from, to) {
						var rest = this.slice((to || from) + 1 || this.length);
						this.length = from < 0 ? this.length + from : from;
						return this.push.apply(this, rest);
					};
					filters[ group ].remove(0,-1)
				}
				var index = $.inArray($this.attr('data-filter-value'), filterGroup );
				if ( !isAll && index === -1 ) {
					// push filter to group
					filters[ group ].push($this.attr('data-filter-value') );
				}
				else if ( !isAll ) {
					// remove filter from group
					filters[ group ].splice( index, 1 );
				}
				// class toggling
				if ($this.hasClass('active') ) {
					$this.removeClass('active');
				}
				else {
					$this.addClass('active');
				}
				// let's do some filtering :>
				var comboFilter = getComboFilter( filters );
				$container.isotope({ filter: comboFilter });
				// gotta check and set those disabled filters:
				var $that = $(this);
				
				$("a.material:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("material") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.top:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("top") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.bottom:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("bottom") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.accessories-2:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("accessories-2") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.tech-2:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("tech-2") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.footwear-3:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("footwear-3") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.sex:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("sex") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.color:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("color") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});$("a.price:not(.clone)").each(function() {
				var $this = $(this);
				var getVal = $this.attr("data-filter-value");
				var numItems = $("img"+getVal+":not(.isotope-hidden)").length;
				if(!$(this).hasClass("active") && !$that.hasClass("price") ){
					if(numItems == 0){
						$this.addClass("disabled");
					}
					else {
						$this.removeClass("disabled");
					}
				}
				else if( $this.hasClass("active") && $this.hasClass("disabled") ){
					$this.removeClass("disabled");
				}
				else if(!$(this).hasClass("active") ) {
					if(numItems > 0){
						$this.removeClass("disabled");
					}
				}
			});
				// update filter display
				var arrLbl = [];
				arrLbl = comboFilter.split('.');
				// before iterating we empty previous display vals
				$filterDisplay.empty();
				// clone method for filter display
				var clone = 'clone';
				var cloneId = 0; // because cloning an id attr just wrong :>
				$('a.active').each(function() {
					cloneId++;
					$(this).clone().appendTo($filterDisplay).attr('id',clone+cloneId).addClass('clone');
				});
				$('a.clone').on('click', function() {
					var that = $(this);
					var parent = that.attr('data-filter-value');
					$('.children li').find("[data-filter-value='" + parent + "']").each(function() {
						$(this).trigger('click');
					});
				});
				// resolves any outstanding issues with disableds
				// TODO: Find a way around using indexOf this way. Lots of unneccesary overhead.
				 if (comboFilter.indexOf(material) > 0 && comboFilter.indexOf(top) == -1 && comboFilter.indexOf(bottom) == -1 && comboFilter.indexOf(accessories-2) == -1 && comboFilter.indexOf(tech-2) == -1 && comboFilter.indexOf(footwear-3) == -1 && comboFilter.indexOf(sex) == -1 && comboFilter.indexOf(color) == -1 && comboFilter.indexOf(price) == -1 ){
	   				$("a.material:not(.clone)").removeClass("disabled");
	   		} if (comboFilter.indexOf(top) > 0 && comboFilter.indexOf(material) == -1 && comboFilter.indexOf(bottom) == -1 && comboFilter.indexOf(accessories-2) == -1 && comboFilter.indexOf(tech-2) == -1 && comboFilter.in…