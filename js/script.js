function y() {
  let elem = $(".indicator");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y();

function y1() {
  let elem = $(".indicator1");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y1();

function y2() {
  let elem = $(".indicator2");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y2();

function y3() {
  let elem = $(".indicator3");
  let x1 = elem.offset().left,
    y1 = elem.offset().top;
  let r = 6,
    x,
    y,
    isProcessed = false;
  $("body").mousemove(function (e) {
    if (!isProcessed) {
      isProcessed = true;
      var x2 = e.pageX,
        y2 = e.pageY;
      y =
        (r * (y2 - y1)) /
          Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) +
        y1;
      x = ((y - y1) * (x2 - x1)) / (y2 - y1) + x1;
      elem.css({
        marginTop: y - y1 + 1 + "px",
        marginLeft: x - x1 + "px",
      });
      isProcessed = false;
    }
  });
}
y3();

$(document).ready(function () {
  var header = $(".header"),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass("out");
    } else {
      header.removeClass("out");
    }
    scrollPrev = scrolled;
  });
});

jQuery(document).ready(function () {
  jQuery(".form").submit(function () {
    var Name = jQuery("#Name").val();
    var Phone = jQuery("#Phone").val();
    var Mail = jQuery("#Mail").val();
    var Quession = jQuery("#Quession").val();
    var http = new XMLHttpRequest();
    var url =
      "https://script.google.com/macros/s/AKfycbx157NFq4kcKuc7Pg1O885COnK4Pwjs8GCHXb7f7GKWOP8Nmn9XBSFf9XAW-yOhpgnj/exec";
    var params =
      "p1=" + Name + "&p2=" + Phone + "&p3=" + Mail + "&p4=" + Quession;
    http.open("GET", url + "?" + params, true);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        //alert(http.responseText);
      }
    };
    http.send(null);
  });
});
