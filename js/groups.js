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
    for(var i=0;i<ui.lists.length;i++){
      var type = ui.lists[i];
      for(var j=0;j<stats[type].length;j++){
        groups[type][j] = [];
        for(var k=0;k<parts[type].length;k++){
          if(parts[type][k][1] == j)
            groups[type][j].push(parts[type][k][0]);
        }
      }
    }
  }
};
