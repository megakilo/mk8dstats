/* sort.js
  Provides functions used to sort part lists.
  
  sortAll - the only function that should need to be called manually. Handles all sort functions based on the user's settings.
  byDefault - sort by default ordering, as displayed in-game
  byName - sort part lists by name of the part
  
  */
  
var sort = {
  currentSort:"chara",
  byDefault(a,b){
    if(a[0] == b[0]) return 0;
    else return (a[0] < b[0])?-1:1;
  },

  byName(a,b){
    var n1 = str.get(sort.currentSort,a[0]);
    var n2 = str.get(sort.currentSort,b[0]);
    if(n1 == n2) return 0;
    else return (n1<n2)?-1:1;
  },

  sortAll:function(){
    var sortType = [sort.byDefault,sort.byName];
    for(var i=0;i<ui.lists.length;i++){
      sort.currentSort = ui.lists[i];
      parts[ui.lists[i]].sort(sortType[settings.sortOrder]);
    }
  }
};
