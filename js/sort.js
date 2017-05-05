/* sort.js
  Provides functions used to sort part lists.
  
  sortAll - the only function that should need to be called manually. Handles all sort functions based on the user's settings.
  byDefault - sort by default ordering, as displayed in-game
  byName - sort part lists by name of the part
  
  */
  
var sort = {
  statToSort:0,
  currentSort:"chara",
  byDefault(a,b){
    var asc = settings.sortOrder == 0;
    var outA = asc?-1:1;
    var outB = asc?1:-1;
    if(a[0] == b[0]) return 0;
    else return (a[0] < b[0])?outA:outB;
  },

  byName(a,b){
    var asc = settings.sortOrder == 0;
    var outA = asc?-1:1;
    var outB = asc?1:-1;
    var n1 = str.get(sort.currentSort,a[0]);
    var n2 = str.get(sort.currentSort,b[0]);
    if(n1 == n2) return 0;
    else return (n1<n2)?outA:outB;
  },

  byStat(a,b){
    var asc = settings.sortOrder == 0;
    var outA = asc?-1:1;
    var outB = asc?1:-1;
    var statOrder = [0,4,5,6,10,11,2,1,3,8,7,9,12];
    var s1 = stats[sort.currentSort][a[1]][statOrder[sort.statToSort]];
    var s2 = stats[sort.currentSort][b[1]][statOrder[sort.statToSort]];
    if(s1 == s2){
      return(a[0] < b[0])?outA:outB;
    }
    else return (s1<s2)?outA:outB;
  },

  sortAll:function(){
    var sortType = [sort.byDefault,sort.byName,sort.byStat];
    var s = settings.sortOptions;
    if(s == 0) sortType = sort.byDefault;
    else if(s == 1) sortType = sort.byName;
    else{
      sort.statToSort = s-2;
      sortType = sort.byStat;
    }
    for(var i=0;i<ui.lists.length;i++){
      sort.currentSort = ui.lists[i];
      parts[ui.lists[i]].sort(sortType);
      parts[ui.lists[i]+"_unique"].sort(sortType);
    }
  }
};
