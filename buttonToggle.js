// declare multi-platform games (using id)
const multiPlatform = ["fortniteButton", "overwatchButton"];

// if a game button element is clicked
$(document).on('click', '[name = "gameButton"]', function(event) {
  // stop default behavior
  event.stopPropagation();
  // if the game is multi-platform
  for(let i = 0 ; i < multiPlatform.length; i++) {
    // check id, if true turn on console buttons
    if($(this).attr('id') == multiPlatform[i] && !$(this).hasClass("active")) {
      enableConsoles(true);
      break;
    }
    // otherwise, disable buttons
    else
      enableConsoles(false);
  }
  // remove focus from button
  $(this).blur();
  // toggle (activate) current button and un-toggle (deactivate) all other siblings
  $(this).toggleClass('active').siblings().not(this).removeClass('active');
});

// if a game button element is clicked
$(document).on('click', '[name = "systemButton"]', function(event) {
  // stop default behavior
  event.stopPropagation();
  // remove focus from button
  $(this).blur();
  // toggle (activate) current button and un-toggle (deactivate) all other siblings
  $(this).toggleClass('active').siblings().not(this).removeClass('active');
});

// if back is pressed
$(document).on('click', '[name = "backButton"]', function(event) {
  // show stats
  $("#statDisplay").fadeOut(500, function() {
    // display game window after animation
    $("#gameSelect").css("display", "inline-block");
  });
  // go through each game button
  $('[name = "gameButton"]').each(function() {
    // if they are active
    if($(this).hasClass("active"))
      // deactivate
      $(this).removeClass("active");
  });
  // disable console select
  enableConsoles(false);
});

// if refresh is pressed
$(document).on('click', '[name = "refreshButton"]', function(event) {
});

function enableConsoles(multiPlatform) {
  // get the platform buttons
  let systemButtons = $(".systemButton");
  // iterate through them
  for(let i = 0; i < systemButtons.length; i++) {
    // enable the console buttons
    if(multiPlatform) {
      $(systemButtons[i]).removeClass('disabled');
      $(systemButtons[i]).prop("disabled", false);
    }
    // else disable and deactivate them
    else {
      $(systemButtons[i]).removeClass('active');
      $(systemButtons[i]).prop("disabled", true);
    }
  }
}
