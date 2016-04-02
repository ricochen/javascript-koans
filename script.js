$(document).ready(function(){
  var turn = 1;
  var win = false;

  $('td').on('click', function () {

    if ($(this).text() === '' && !win) {
      if (turn % 2 !== 0) {
        $(this).text('X');
        turn++;
      } else {
        $(this).text('O');
        turn++;
      }
    }

    if (win === false && winner() !== -1 && winner() !== '') {
      alert ('Player ' + winner() + ' wins');
      win = true;
    } else if (win === false && turn === 10) {
      alert("It's a tie");
      win = true;
    }
  });

  function winner() {
    if ($('.1').text() === $('.2').text() && $('.2').text() === $('.3').text()) {
      return $('.1').text();
    } if ($('.4').text() === $('.5').text() && $('.5').text() === $('.6').text()) {
      return $('.4').text();
    } if ($('.7').text() === $('.8').text() && $('.8').text() === $('.9').text()) {
      return $('.7').text();
    } if ($('.1').text() === $('.4').text() && $('.4').text() === $('.7').text()) {
      return $('.1').text();
    } if ($('.2').text() === $('.5').text() && $('.5').text() === $('.8').text()) {
      return $('.2').text();
    } if ($('.3').text() === $('.6').text() && $('.6').text() === $('.9').text()) {
      return $('.3').text();
    } if ($('.1').text() === $('.5').text() && $('.5').text() === $('.9').text()) {
      return $('.1').text();
    } if ($('.3').text() === $('.5').text() && $('.5').text() === $('.7').text()) {
      return $('.3').text();
    }
    return -1;
  }
});