/* display.js
  Provides functions that are primarily used for updating visual aspects of the screen for the user.
    -updateLocale() - Updates all strings to reflect a change in the user's language settings.
    -updateStatDisplay() - Updates the "stat areas" which display build information.
    -populatePartLists() - Should probably only run once during init phase, populates the part selection list.
  */

var display = {
  updateLocale: function(){
    var labels = document.querySelectorAll(".statLabel");
    for(var i=0;i<12;i++){
      labels[i].innerHTML = str.get("stat",i);
      labels[i+12].innerHTML = str.get("stat",i);
    }

    labels = document.querySelectorAll(".partListHeader,.partSelectHeader");
    for(i=0;i<4;i++){
      for(var j=0;j<=12;j+=4)
        labels[i+j].innerHTML = str.get("label",i);
    }

    labels = document.querySelectorAll("#sortOptions option");
    for(var i=0;i<labels.length;i++){
      labels[i].innerHTML = str.get("sortOptions",i);
    }
  },

  updateStatDisplay:function(){
    var display_stats = []; //Using an array in the event I need all stats readily available
    var order = [0,2,4,1,5,3,6,8,10,7,11,9]; //Order of stat categories
    var partLists = document.querySelectorAll(".partSelect");
    var valueOut = document.querySelectorAll(".statValue");
    var fillOut = document.querySelectorAll(".statFill");
    var partsOut = document.querySelectorAll(".buildParts");
    var indices = [];
    for(var i=0;i<partLists.length;i++){
      indices[i] = partLists[i].selectedIndex;
      //Set Part Images
      var html = "";
      var type = [ui.lists[i%4]];
      var group = groups[type][parts[type][indices[i]][1]];
      var height = (i%4==0)?32:32;
      var width = (i%4==0)?32:50;
      for(var j=0;j<group.length;j++){
        if(j%2==0 && j > 0) html += "<br>";
        html+="<img src=\"img/"+type+"_"+group[j]+".png\" height=\""+height+"\" width=\""+width+"\"> ";
      }
      partsOut[i].innerHTML = html;
    }

    for(i=0;i<24;i++){
      display_stats[i] = 0;
      for(j=(i<12?0:4);j<(i<12?4:8);j++){
        var type = [ui.lists[j%4]];
        var statIndex = parts[type][indices[j]][1];
        display_stats[i] += stats[type][statIndex][order[i%12]];
      }
      var value = display_stats[i]*0.25+0.75;
      valueOut[i].innerHTML = value;
      fillOut[i].style.width = (value/6*108)+"px";
    }
  },

 
  populatePartLists:function(){
    sort.sortAll();
    var lists = document.querySelectorAll(".partSelect");
    for(var i=0;i<2;i++){
      for(var j=0;j<4;j++){
        var html = "";
        for(var k=0;k<parts[ui.lists[j]].length;k++)
          html += "<option>"+str.get(ui.lists[j],parts[ui.lists[j]][k][0])+"</option>";
        lists[i*4+j].innerHTML = html;
        lists[i*4+j].selectedIndex = ui.getSelectedIndex(i*4+j);
      }
    }
  },

  init:function(){
    //Init Stat Bars
    var statContainerArea = document.querySelectorAll(".statContainerArea");
      display.updateLocale();
      display.populatePartLists();
  }
};
