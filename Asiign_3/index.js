$(document).ready(function() {
  $('.dropdown-item').click(function() {
    console.log(this)
    // Hide all divs with the class 'hiddenDiv'
    $('.hiddenDiv').hide();

    // Get the target div id from the clicked menu item's ID
    var targetDivId = $(this).attr('id');

    // Show the target div
    $('#' + targetDivId).show();
  });
});