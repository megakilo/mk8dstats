/* stats.js
  Hardcoded list of stats for each unique part group (chara,kart,tire,glider.)
  */
var stats = {
  //       SPD (W) (A) (AG) Ac  Wt Hnd (W) (A) (AG) Tr. MT
  chara: [[  0,  0,  0,  0,  4,  0, 10, 10, 10, 10,  5,  5], //Light (1): Baby Peach, Baby Daisy
          [  0,  0,  0,  0,  5,  0,  9,  9,  9,  9,  3,  5], //Light (2): Baby Rosa, Lemmy
          [  1,  1,  1,  1,  5,  1,  8,  8,  8,  8,  4,  4], //Light (3): Baby Mario, Baby Luigi, Dry Bones, Mii
          [  2,  2,  2,  2,  4,  2,  8,  8,  8,  8,  5,  4], //Light (4): Koopa, Lakitu, Bowser Jr.
          [  2,  2,  2,  2,  5,  2,  7,  7,  7,  7,  2,  4], //Light (5): Toadette, Wendy, Isabelle
          [  3,  3,  3,  3,  4,  3,  7,  7,  7,  7,  4,  3], //Light (6): Toad, Shy Guy, Larry
          [  4,  4,  4,  4,  4,  3,  6,  6,  6,  6,  3,  3], //Medium (1): Cat Peach, Inkling(F), Villager(F)
          [  5,  5,  5,  5,  3,  4,  5,  5,  5,  5,  3,  3], //Medium (2): Peach, Daisy, Yoshi
          [  5,  5,  5,  5,  3,  5,  5,  5,  5,  5,  1,  3], //Medium (3): Tanooki Mario, Inkling(M), Villager(M)
          [  6,  6,  6,  6,  2,  6,  4,  4,  4,  4,  2,  2], //Medium (4): Mario, Ludwig, Mii
          [  6,  6,  6,  6,  2,  6,  5,  5,  5,  5,  1,  2], //Medium (5): Luigi, Iggy
          [  7,  7,  7,  7,  1,  7,  3,  3,  3,  3,  3,  2], //Heavy (1): Rosalina, King Boo, Link
          [  9,  9,  9,  9,  1,  8,  2,  2,  2,  2,  0,  1], //Heavy (2): Waluigi, DK, Roy
          [ 10, 10, 10, 10,  0,  9,  1,  1,  1,  1,  1,  0], //Heavy (3): Wario, Dry Bowser
          [  8,  8,  8,  8,  1, 10,  3,  3,  3,  3,  1,  1], //Heavy (4): Metal Mario, Pink Gold Peach
          [ 10, 10, 10, 10,  0, 10,  0,  0,  0,  0,  0,  0]],//Heavy (5): Bowser, Morton, Mii
 
  //       SPD (W) (A) (AG) Ac  Wt Hnd (W) (A) (AG) Tr. MT
  kart:  [[  3,  3,  3,  3,  4,  2,  3,  2,  3,  3,  3,  4], //Standard, 300 SL Roadster, The Duke
          [  1,  3,  1,  1,  6,  1,  5,  4,  2,  4,  4,  6], //Pipe Frame, City Tripper, Varmint
          [  3,  3,  4,  5,  3,  3,  2,  2,  2,  4,  4,  4], //Mach 8, Sports Coupe, Inkstriker
          [  4,  5,  0,  2,  1,  4,  1,  5,  1,  1,  3,  2], //Steel Driver, Tri-Speeder, Bone Rattler
          [  2,  2,  4,  3,  5,  2,  4,  2,  4,  3,  3,  5], //Cat Cruiser, Comet, Yoshi Bike, Teddy Buggy
          [  5,  1,  2,  4,  1,  3,  1,  1,  0,  2,  1,  1], //Circuit Special, B Dasher, P-Wing
          [  5,  2,  1,  3,  0,  4,  0,  1,  0,  1,  5,  0], //Badwagon, GLA, Standard ATV
          [  4,  3,  3,  3,  2,  1,  3,  3,  3,  2,  2,  3], //Prancer, Sport Bike, Jet Bike
          [  0,  1,  1,  2,  7,  0,  5,  4,  4,  5,  4,  7], //Biddybuggy, Mr. Scooty
          [  1,  5,  2,  0,  6,  0,  4,  5,  3,  2,  6,  6], //Landship, Streetle
          [  4,  2,  3,  3,  2,  2,  3,  2,  2,  3,  0,  3], //Sneeker, Gold Standard, Master Cycle
          [  2,  2,  3,  4,  5,  1,  4,  3,  3,  4,  5,  5], //W 25 Silver Arrow, Standard Bike, Flame Rider, Wild Wiggler 
          [  4,  2,  3,  4,  3,  0,  2,  3,  1,  5,  3,  3], //Blue Falcon, Splat Buggy
          [  2,  4,  3,  3,  2,  3,  4,  4,  3,  3,  7,  3]],//Tanooki Kart, Koopa Clown

  //       SPD (W) (A) (AG) Ac  Wt Hnd (W) (A) (AG) Tr. MT
  tire:  [[  2,  3,  3,  2,  4,  2,  3,  3,  3,  3,  5,  3], //Standard, Blue Standard, GLA Tires
          [  2,  2,  1,  2,  2,  4,  0,  1,  1,  0,  7,  2], //Monster, Hot Monster
          [  0,  3,  3,  0,  6,  0,  4,  4,  4,  4,  4,  6], //Roller, Azure Roller
          [  3,  2,  2,  4,  2,  2,  4,  4,  4,  3,  1,  2], //Slim, Wood, Crimson Slim
          [  4,  0,  0,  4,  1,  3,  2,  0,  1,  2,  0,  0], //Slick, Cyber Slick
          [  4,  3,  2,  1,  0,  4,  2,  2,  0,  1,  2,  0], //Metal, Gold Tires
          [  1,  2,  2,  2,  5,  0,  3,  3,  2,  4,  3,  5], //Button, Leaf
          [  3,  4,  1,  2,  3,  3,  1,  1,  1,  2,  6,  1], //Off-Road, Retro Off-Road, Triforce Tires
          [  1,  1,  4,  1,  4,  1,  2,  1,  3,  3,  6,  4]],//Sponge, Cushion

  //       SPD (W) (A) (AG) Ac  Wt Hnd (W) (A) (AG) Tr. MT
  glider:[[  1,  1,  2,  0,  1,  1,  1,  0,  1,  1,  1,  1], //SuperGlider/etc
          [  0,  1,  1,  1,  2,  0,  1,  0,  2,  1,  1,  2], //Cloud Glider/etc
          [  1,  0,  2,  1,  1,  2,  1,  1,  1,  0,  0,  1], //Wario Wing/etc
          [  0,  0,  1,  1,  2,  1,  1,  1,  2,  0,  0,  2]], //Peach Parasol/etc
};
