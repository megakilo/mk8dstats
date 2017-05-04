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
    for(var i=0;i<lists.length;i++)
      ui.selected[i] = parts[ui.lists[i%4]][lists[i].selectedIndex][0];
    display.updateStatDisplay();
  },

  getSelectedIndex:function(listIndex){
    var index = ui.selected[listIndex];
    var type = ui.lists[listIndex%4];
    if(index == -1){
      index = parts[type][0][0];
      ui.selected[listIndex] = index;
    }
    for(var i=0;i<parts[type].length;i++)
      if(parts[type][i][0] == ui.selected[listIndex]){
        return i;
      }
    return -1;
  },

  init:function(){
    var partLists = document.querySelectorAll(".partSelect");
    for(var i=0;i<partLists.length;i++)
      partLists[i].onchange = ui.onPartChange;
      display.updateStatDisplay();
  }
};
