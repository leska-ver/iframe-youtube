//document.addEventListener используется для отслеживания только после полностью загруженной страницы html
document.addEventListener('DOMContentLoaded', function() {
  //console.log(); находит в js-ce ошибку. Deftools
  // alert('работает'); Ищет построчно ошибки


  //Код для Ютюб видео video-iframe
  const videoOb = document.querySelector(".video-iframe")// Для обёртки if
  if (videoOb) { // Обёртка if. Спасение Gulp-а от null в браузере*/

    // Массив с id видео
    const videos = [{id: "zOF8VOS9jtA"}];
    const tag = document.createElement('script');
    const players = [];

    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const pVideo = document.querySelector(".mVideos");
    for(var i = 0; videos.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", videos[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideo.appendChild(newDiv);

      item = document.querySelector("#"+videos[i].id).getAttribute("id");
      var player;
      players.push(item);
    }

    /*Для Маши*/
    const videosTwo = [{id: "GEPIsgsnAuE"}];
    const pVideoTwo = document.querySelector(".mVideosTwo");
    for(var i = 0; videosTwo.length > i; i++) {
      // Создаем дочерние элементы с id
      const newDivTwo = document.createElement("div");
      newDivTwo.setAttribute("id", videosTwo[i].id);
      
      // Добавление элементов видео в родительских контейнер        
      pVideoTwo.appendChild(newDivTwo);

      item = document.querySelector("#"+videosTwo[i].id).getAttribute("id");
      var player;
      players.push(item);
    } 

    /*Общая функция для всех видео стили*/
    // function onYouTubeIframeAPIReady() { 
      window.onYouTubeIframeAPIReady = function() { /* С document.addEventListener('DOMContentLoaded', function() {}*/
   
      for(var k = 0; players.length > k; k++) {
        players[k] = new YT.Player(players[k], {
                  height: '315',
                  width: '560',
                  videoId: players[k],
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
              });
      }
    }

    function onPlayerReady(event) {
      event.target.stopVideo();
    }

    /*Общая функция для всех видео стоп*/
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
          const temp = event.target.getVideoUrl();
          for (var i = 0; i < players.length; i++) {
              if (players[i].getVideoUrl() != temp) players[i].stopVideo();
          }
      }
    }

  }; //Обёртка if.



});
