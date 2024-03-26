$(document).ready(function() {
    // Reemplaza "enlace-mega" con el enlace real de tu video en Mega
    const megaLink = "enlace-mega";
    const videoContainer = $("#video-container");
  
    // Función para obtener la URL del video desde el enlace de Mega
    function getVideoUrl(megaLink) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "https://mega.nz/c46b6076-5816-4c35-a5c9-287fc8ba2fd2",
          method: "POST",
          data: {
            link: megaLink,
          },
          success: function(response) {
            resolve(response.url);
          },
          error: function(error) {
            reject(error);
          },
        });
      });
    }
  
    // Función para reproducir el video
    function playVideo(videoUrl) {
      const videoElement = `<video controls width="640" height="480">
        <source src="${videoUrl}" type="video/mp4">
      </video>`;
      videoContainer.html(videoElement);
    }
  
    // Obtener la URL del video y reproducirlo
    getVideoUrl(megaLink)
      .then(videoUrl => playVideo(videoUrl))
      .catch(error => console.error(error));
  
    // Centrar el video en la página
    videoContainer.css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });
  });