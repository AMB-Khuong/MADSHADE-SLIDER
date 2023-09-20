jQuery(document).ready(function () {
  if (jQuery(".wpgis-slider-for").length > 0) {
    if (object_name.wpgis_arrowdisable == 1) {
      var slider_arrow = false;
    } else {
      var slider_arrow = true;
    }

    if (object_name.wpgis_show_lightbox != 1) {
      jQuery("a.wpgis-popup").remove();
    }

    if (object_name.wpgis_sliderautoplay == 1) {
      var slider_autoplay = true;
    } else {
      var slider_autoplay = false;
    }

    var slidetoshow = object_name.wpgis_slidetoshow;
    var arrowinfinite = object_name.wpgis_arrowinfinite;
    var sliderlayout = object_name.wpgis_slider_layout;
    var slidetoscrol = object_name.wpgis_slidetoscroll;

    if (arrowinfinite == 1 && arrowinfinite != "") {
      var infinitescroll = true;
    } else {
      var infinitescroll = false;
    }

    if (sliderlayout != "horizontal" && sliderlayout != " ") {
      var verticalslider = true;
    } else {
      var verticalslider = false;
    }

    jQuery(".wpgis-slider-for").slick({
      fade: false,
      dots: false,
      lazyLoad: "progressive",
      autoplay: slider_autoplay,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
		arrows: false,
      swipe: true,
      asNavFor: ".wpgis-slider-nav",
   
        
      verticalSwiping: true,
		responsive: [
        {
          breakpoint: 780,
          settings: {
            vertical: false,
			  arrows:true,
			  dots:true,
			  prevArrow: '<i class="btn-prev dashicons dashicons-arrow-left-alt2"></i>',
              nextArrow:'<i class="btn-next dashicons dashicons-arrow-right-alt2"></i>',
          },
        },
        
      ],
		
    });

    jQuery(".wpgis-slider-nav").slick({
      dots: false,
     prevArrow:
      '<button type="button" class="slick-prev"><ion-icon name="chevron-up-outline"></ion-icon></button>',
    nextArrow:
      '<button type="button" class="slick-next"><ion-icon name="chevron-down-outline"></ion-icon></button>',
      centerMode: false,
      focusOnSelect: true,
      vertical: verticalslider,
      infinite: true,
		arrows: true,
      slidesToShow:MADSHADE_LENGTH_GALLERY,
      slidesToScroll: 1,
      asNavFor: ".wpgis-slider-for",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
          },
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 3,
            slidesToShow: 3,
          },
        },
      ],
    });

    if (sliderlayout == "left") {
      jQuery(".slider.wpgis-slider-for").addClass("vertical-img-left");
    } else if (sliderlayout == "right") {
      jQuery(".slider.wpgis-slider-for").addClass("vertical-img-right");
    } else {
      jQuery(".slider.wpgis-slider-for").removeClass("vertical-img-left");
      jQuery(".slider.wpgis-slider-for").removeClass("vertical-img-right");
    }

    if (object_name.wpgis_arrowcolor != "") {
      jQuery(".btn-prev, .btn-next").css("color", object_name.wpgis_arrowcolor);
    }
    if (object_name.wpgis_arrowbgcolor != "") {
      jQuery(".btn-prev, .btn-next").css(
        "background",
        object_name.wpgis_arrowbgcolor
      );
    }

    if (object_name.wpgis_show_zoom == 1) {
      jQuery(".wpgis-slider-for .slick-slide").zoom();
    }
    jQuery(".wpgis-slider-for .slick-track").addClass(
      "woocommerce-product-gallery__image single-product-main-image"
    );
    jQuery(".wpgis-slider-nav .slick-track").addClass("flex-control-nav");
    jQuery(".wpgis-slider-nav .slick-track li img").removeAttr("srcset");

    jQuery(".variations select").change(function () {
      jQuery(".wpgis-slider-nav").slick("slickGoTo", 0);
      window.setTimeout(function () {
        if (object_name.wpgis_zoom == "true") {
          jQuery(".wpgis-slider-for .slick-track .slick-current").zoom();
        }
      }, 20);
    });

    jQuery('[data-fancybox="product-gallery"]').fancybox({
      slideShow: true,
      fullScreen: false,
      transitionEffect: "slide",
      arrows: true,
      thumbs: false,
      infobar: false,
    });
  }
});


