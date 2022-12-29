jQuery(document).ready(function ($) {
  $(".cd-filter-trigger").on("click", function () {
    triggerFilter(true);
  });
  $(".cd-filter .cd-close").on("click", function () {
    triggerFilter(false);
  });

  function triggerFilter($bool) {
    var elementsToTrigger = $([$(".cd-filter-trigger"), $(".cd-filter"), $(".cd-tab-filter"), $(".cd-gallery")]);
    elementsToTrigger.each(function () {
      $(this).toggleClass("filter-is-visible", $bool);
    });
  }

  var filter_tab_placeholder = $(".cd-tab-filter .placeholder a"),
    filter_tab_placeholder_default_value = "Select",
    filter_tab_placeholder_text = filter_tab_placeholder.text();

  $(".cd-tab-filter li").on("click", function (event) {
    var selected_filter = $(event.target).data("type");

    if ($(event.target).is(filter_tab_placeholder)) {
      filter_tab_placeholder_default_value == filter_tab_placeholder.text() ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value);
      $(".cd-tab-filter").toggleClass("is-open");

    } else if (filter_tab_placeholder.data("type") == selected_filter) {
      filter_tab_placeholder.text($(event.target).text());
      $(".cd-tab-filter").removeClass("is-open");
    } else {
      $(".cd-tab-filter").removeClass("is-open");
      filter_tab_placeholder.text($(event.target).text()).data("type", selected_filter);
      filter_tab_placeholder_text = $(event.target).text();

      $(".cd-tab-filter .selected").removeClass("selected");
      $(event.target).addClass("selected");
    }
  });

  $(".cd-filter-block h4").on("click", function () {
    $(this).toggleClass("closed").siblings(".cd-filter-content").slideToggle(300);
  });
/* 
  $(window).on("scroll", function () {
    !window.requestAnimationFrame ? fixGallery() : window.requestAnimationFrame(fixGallery);
  });

  function fixGallery() {
    var offsetTop = $(".cd-main-content").offset().top,
      scrollTop = $(window).scrollTop();
    scrollTop+100 >= offsetTop ? $(".cd-main-content").addClass("is-fixed") : $(".cd-main-content").removeClass("is-fixed");
  }
 */
  buttonFilter.init();
  $(".cd-gallery ul").mixItUp({
    controls: {
      enable: false,
    },
    callbacks: {
      onMixStart: function () {
        $(".cd-fail-message").fadeOut(200);
      },
      onMixFail: function () {
        $(".cd-fail-message").fadeIn(200);
      },
    },
  });

  var inputText;
  var $matching = $();

  var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $(".cd-filter-content input[type='search']").keyup(function () {
    delay(function () {
      inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
      if (inputText.length > 0) {
        $(".mix").each(function () {
          var $this = $(this);

          if ($this.attr("class").toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          } else {
            $matching = $matching.not(this);
          }
        });
        $(".cd-gallery ul").mixItUp("filter", $matching);
      } else {
        $(".cd-gallery ul").mixItUp("filter", "all");
      }
    }, 200);
  });
});

var buttonFilter = {
  $filters: null,
  groups: [],
  outputArray: [],
  outputString: "",

  init: function () {
    var self = this;

    self.$filters = $(".cd-main-content");
    self.$container = $(".cd-gallery ul");

    self.$filters.find(".cd-filters").each(function () {
      var $this = $(this);

      self.groups.push({
        $inputs: $this.find(".filter"),
        active: "",
        tracker: false,
      });
    });

    self.bindHandlers();
  },

  bindHandlers: function () {
    var self = this;

    self.$filters.on("click", "a", function (e) {
      self.parseFilters();
    });
    self.$filters.on("change", function () {
      self.parseFilters();
    });
  },

  parseFilters: function () {
    var self = this;

    for (var i = 0, group; (group = self.groups[i]); i++) {
      group.active = [];
      group.$inputs.each(function () {
        var $this = $(this);
        if ($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
          if ($this.is(":checked")) {
            group.active.push($this.attr("data-filter"));
          }
        } else if ($this.is("select")) {
          group.active.push($this.val());
        } else if ($this.find(".selected").length > 0) {
          group.active.push($this.attr("data-filter"));
        }
      });
    }
    self.concatenate();
  },

  concatenate: function () {
    var self = this;

    self.outputString = "";

    for (var i = 0, group; (group = self.groups[i]); i++) {
      self.outputString += group.active;
    }

    !self.outputString.length && (self.outputString = "all");

    if (self.$container.mixItUp("isLoaded")) {
      self.$container.mixItUp("filter", self.outputString);
    }
  },
};
