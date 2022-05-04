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

// $(function () {
//   var mouseX = 0,
//     mouseY = 0,
//     limitX = 15,
//     limitY = 20;
//   // Определяет границы, по которым будет двигаться объект
//   $(window).mousemove(function (e) {
//     var offset = $(".circle1").offset();
//     mouseX = Math.min(e.pageX - offset.left, limitX);
//     mouseY = Math.min(e.pageY - offset.top, limitY);
//     // Ищет координаты курсора
//     if (mouseX < 0) mouseX = 0;
//     // С какого момента (координат) начинать движение за курсором
//     if (mouseY < 0) mouseY = 0;
//     // Если курсор находится вне веб-страницы на момент загрузки, то установит объект в координатах x=0, y=0.
//   });

//   var follower = $(".indicator1");
//   var xp = 0,
//     yp = 0; // Начальные координаты объекта на момент загрузки страницы
//   var loop = setInterval(function () {
//     // Далее определяется скорость, с которой будет двигаться объект.
//     // Изменить значение 20, для изменения скорости. Чем больше это значение, тем медленнее движется объект.

//     xp += (mouseX - xp) / 40;
//     yp += (mouseY - yp) / 40;
//     follower.css({ marginLeft: xp, marginTop: yp });
//     // Изменение позиционирования объекта с помощью css
//   }, 10);
//   //В данном случае это значение определяет, насколько плавно и быстро будет происходить движение
// });

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
