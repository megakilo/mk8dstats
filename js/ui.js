/* ui.js
  Provides functions that allow the user to interact with the calculator, and keeps track of various states the calculator is in.
    -lists - A hardcoded array of the various parts that make up a build.
    -selected - The partIndex values of each selected part in the Part Select area (see: parts.js.)
    
    -onPartChange() - Called when the user selects a new part in the Part Select area.
    -getSelectedIndex(listIndex) - returns the selctedIndex of the part currently selected in the list indicated by listIndex.
  */

var ui = {
  lists:["chara","kart","tire","glider"],
  selected:[-1,-1,-1,-1,-1,-1,-1,-1],

  onPartChange:function(){
    var lists = document.querySelectorAll(".partSelect");
    for(var i=0;i<lists.length;i++){
      var partList = parts.getList(ui.lists[i%4]);
      ui.selected[i] = partList[lists[i].selectedIndex][0];
    }
    display.updateStatDisplay();
  },

  onPartListKeyDown:function(e){
    var direction = 0;
    if(false && event.key !== undefined){
      if(event.key === "ArrowLeft") direction = 1;
      else if(event.key === "ArrowRight") direction = 2;
    }
    else if (event.keyCode !== undefined){
      if(event.keyCode == 37) direction = 1;
      else if(event.keyCode == 39) direction = 2;
    }
    if(direction != 0){
      var lists = document.querySelectorAll(".partSelect");
      for(var i=0;i<lists.length;i++){
        if(lists[i] === document.activeElement){
          if(i > 0 && direction == 1)
            lists[i-1].focus();
          else if(i<7 && direction == 2){
            lists[i+1].focus(); 
            break;
          }
        }
      }
    }
  },

  onPartOptionsChange:function(e){
    if(settings.partOptions == 0){
      //Some parts have been removed, change the selection to one that still exists
      ui.fixSelection();
    }
    settings.set("partOptions",e.target.selectedIndex);
  },

  fixSelection:function(){
    var lists = document.querySelectorAll(".partSelect");
    for(var i=0;i<lists.length;i++){
      var partIndex = ui.getSelectedIndex(i);
      var partSet = parts[ui.lists[i%4]][partIndex][1];
      for(var j=0;j<parts[ui.lists[i%4]+"_unique"].length;j++){
        if(parts[ui.lists[i%4]+"_unique"][j][1] == partSet){
          ui.selected[i] = parts[ui.lists[i%4]+"_unique"][j][0];
          break;
        }
      }
    }
  },

  onSortOptionsChange:function(e){
    settings.set("sortOptions",e.target.selectedIndex);
  },

  onSortOrderChange:function(e){
    settings.set("sortOrder",e.target.selectedIndex);
  },

  getSelectedIndex:function(listIndex){
    var index = ui.selected[listIndex];
    var type = ui.lists[listIndex%4];
    var liveList = document.querySelectorAll(".partSelect")[listIndex];

    if(index == -1){
      index = parts[type][0][0];
      ui.selected[listIndex] = index;
    }

    var name = str.get(type,ui.selected[listIndex]);
    var list = parts.getList(type);
    for(var i=0;i<list.length;i++)
      if(list[i][0] == ui.selected[listIndex]){
        return i;
      }
    return -1;
  },

  init:function(){
    var partLists = document.querySelectorAll(".partSelect");
    for(var i=0;i<partLists.length;i++){
      partLists[i].onchange = ui.onPartChange;
      partLists[i].onkeydown = ui.onPartListKeyDown;
    }
    document.getElementById("partOptions").onchange = ui.onPartOptionsChange;
    document.getElementById("sortOptions").onchange = ui.onSortOptionsChange;
    document.getElementById("sortOrder").onchange = ui.onSortOrderChange;
    display.updateStatDisplay();
  }
};
