/* groups.js
  Contains lists of all parts belonging to a unique group (i.e. each group contains parts with the same stats.)
  The lists are generated when the init function is called.
  */
  
var groups = {
  chara:[],
  kart:[],
  tire:[],
  glider:[],
  
  init: function(){
    //Populate group lists
    for(var i=0;i<ui.lists.length;i++){ //for each list (chara/kart/tire/glider)
      var type = ui.lists[i];
      for(var j=0;j<stats[type].length;j++){ //for each unique set of stats of that type (e.g. 4 for gliders)
        groups[type][j] = [];
        for(var k=0;k<parts[type].length;k++){ //for each part...
          if(parts[type][k][1] == j) //If the part belongs to the current stat set
            groups[type][j].push(parts[type][k][0]); //add it to the list
        }
      }
    }
  }
};
