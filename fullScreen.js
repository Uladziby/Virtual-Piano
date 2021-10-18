const btnFullScreen = document.querySelector('.btnFullScreen')

function fullScreen(event){
   
        toggleFullScreen();
      
}
btnFullScreen.addEventListener('click', (event) => fullScreen(event),false)


  function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  