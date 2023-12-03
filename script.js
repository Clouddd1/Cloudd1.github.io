document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.getElementById('playButton');
  var birthdaySong = document.getElementById('birthdaySong');

  playButton.addEventListener('click', function () {
    if (birthdaySong.paused) {
      birthdaySong.play();
      playButton.innerHTML = 'Pause';
    } else {
      birthdaySong.pause();
      playButton.innerHTML = 'Play Birthday Song';
    }
  });
});
