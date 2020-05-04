var images = ["image/image.jpg", "image/image1.jpg", "image/image2.jpg"];
var imageHead = document.getElementById("img");
var i = 0;
setInterval(function() 
{
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) 
      {
      	i =  0;
      }
}, 1000);