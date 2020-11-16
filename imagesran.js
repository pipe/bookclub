//$images = glob('/images/icons/{*.jpg,*.png,*.gif}', GLOB_BRACE); need to imporove this 

var theImages = new Array()

theImages[0] = 'images/icons/RM_Layout-13.png'
theImages[1] = 'images/icons/RM_Layout-14.png'
theImages[2] = 'images/icons/RM_Layout-15.png'
theImages[3] = 'images/icons/RM_Layout-16.png'
theImages[4] = 'images/icons/RM_Layout-17.png'
theImages[5] = 'images/icons/RM_Layout-18.png'
theImages[6] = 'images/icons/RM_Layout-19.png'
theImages[7] = 'images/icons/RM_Layout-20.png'
theImages[8] = 'images/icons/RM_Layout-21.png'
theImages[8] = 'images/icons/RM_Layout-22.png'
theImages[8] = 'images/icons/RM_Layout-23.png'


// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
return theImages[whichImage];
}


