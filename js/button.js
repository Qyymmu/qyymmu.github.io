(function () {
    var count = 0;

    $('#pressMe').click(function () {
      count += 1;
      if (count == 1000) {
        window.location= ("http://www.odyneft.com/indexwow.html");
      }
    });
  })();