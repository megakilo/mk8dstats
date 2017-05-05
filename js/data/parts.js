/* parts.js
  Contains lists of individual part data references.
  Format: [partIndex, groupIndex]
  
  A part's partIndex is used to associate the part with a name and image. Example:
    -Let partIndex = parts.chara[0][0] (value: 0)
    -str.get("chara",partIndex) will return "Mario" in the user's selected language
    -An image with source "img/chara_[partIndex].png" is a valid image linking to Mario's portrait
    
  A part's groupIndex is used to associate the part with a group and an array of stats for the part. Example:
    -Let groupIndex = parts.chara[0][1] (value: 9)
    -groups.chara[groupIndex] is an array containing all characters with the same stats as Mario
    -stats.chara[groupIndex] is an array of all stats for Mario
  */

var parts = {
  getList:function(type){
    var end = (settings.partOptions == 0?"":"_unique");
    var list = parts[type+end];
    return list;
  },

  chara: [[ 0, 9], //E.g. str.chara[0][language] = "Mario", stats.chara[9] = Mario's stats
          [ 1,10], [ 2, 7], [ 3, 7], [ 4,11], [ 5, 8], [ 6, 6],
          [ 7, 7], [ 8, 5], [ 9, 3], [10, 5], [11, 3], [12, 4], [13,11],
          [14, 2], [15, 2], [16, 0], [17, 0], [18, 1], [19,14], [20,14],
          [21,13], [22,12], [23,12], [24,15], [25, 2], [26, 3], [27,13],
          [28, 1], [29, 5], [30, 4], [31, 9], [32,10], [33,12], [34,15],
          [35, 6], [36, 8], [37,11], [38, 8], [39, 6], [40, 4],
          [41, 2], [42, 9], [43,15]],

  kart: [[ 0, 0], [ 1, 1], [ 2, 2], [ 3, 3], [ 4, 4],
         [ 5, 5], [ 6, 3], [ 7, 6], [ 8, 7], [ 9, 8],
         [10, 9], [11,10], [12, 2], [13,10], [14, 6],
         [15,11], [16, 0], [17,12], [18,13], [19, 5],
         [20, 9], [21, 5], [22,13],
         [23,11], [24, 4], [25, 7], [26, 0], [27,11],
         [28, 1], [29, 8], [30, 7], [31, 4], [32,10],
         [33, 1],
         [34, 6], [35,11], [36, 4], [37, 3], [38, 2],
         [39,12]],

  tire: [[ 0, 0], [ 1, 1], [ 2, 2], [ 3, 3], [ 4, 4],
         [ 5, 5], [ 6, 6], [ 7, 7], [ 8, 8], [ 9, 3],
         [10, 8], [11, 0], [12, 1], [13, 2], [14, 3],
         [15, 4], [16, 7], [17, 5], [18, 0], [19, 7],
         [20, 6]],

  glider: [[ 0, 0], [ 1, 1], [ 2, 2], [ 3, 0], [ 4, 3],
           [ 5, 1], [ 6, 3], [ 7, 1], [ 8, 3], [ 9, 2],
           [10, 3], [11, 2], [12, 0], [13, 1]],

  chara_unique: [],
  kart_unique: [],
  tire_unique: [],
  glider_unique: [],

  init: function(){
    //Initialize the unique part lists, for use when populating the UI lists.
    for(var i=0;i<ui.lists.length;i++){
      var type = ui.lists[i];
      for(var j=0;j<stats[type].length;j++){
        for(var k=0;k<parts[type].length && parts[type][k][1] != j;k++);
        parts[type+"_unique"].push(parts[type][k]);
      }
    }
  }
};
