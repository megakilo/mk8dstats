/* preloader.js
  Discreetly loads all images on startup for later use.
  */
  
var preloader = {
  images:[],
  
  init:function(){
    for(var i=0;i<ui.lists.length;i++){
      var type = ui.lists[i];
      for(var j=0;j<parts[type].length;j++){
        var img = new Image();
        img.src = "img/"+type+"_"+j+".png";
        preloader.images.push(img);
      }
    }
  }
};
