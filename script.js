const heroes = [
  {
    name: "Iron Man",
    universe: "Marvel",
    power: "Powered armor",
    emoji: "🤖",
    bio: "Genius inventor in a high tech suit that gives flight weapons and defense."
  },
  {
    name: "Captain America",
    universe: "Marvel",
    power: "Super soldier",
    emoji: "🛡️",
    bio: "Enhanced strength speed "
  },
{
    name: "Spider Man",
    universe: "Marvel",
    power: "Spider abilities",
    emoji: "🕷️",
    bio: "Wall crawling super strength "
},
  {
    name: "Thor",
    universe: "Marvel",
    power: "God of thunder",
    emoji: "⚡",
    bio: "Asgardian warrior who controls lightning and fights with a legendary hammer."
  },
  {
    name: "Hulk",
    universe: "Marvel",
    power: "Rage strength",
    emoji: "💪",
    bio: "Gets stronger as he gets angrier super stregnth"
  },
  {
    name: "Superman",
    universe: "DC",
    power: "Kryptonian powers",
    emoji: "🦸",
    bio: "Super strength flight heat vision and near invulnerability powered by the sun."
  },
  {
    name: "Batman",
    universe: "DC",
    power: "Strategy and tech",
    emoji: "🦇",
    bio: "Master detective with top training gadgets and planning to take on anyone."
  },
  {
    name: "Wonder Woman",
    universe: "DC",
    power: "Amazon warrior",
    emoji: "🏛️",
    bio: "Super strength speed and combat skill with iconic tools and strong morals."
  },
  {
    name: "The Flash",
    universe: "DC",
    power: "Super speed",
    emoji: "💨",
    bio: "Moves at extreme speed with fast reflexes "
  }
];

var grid = document.getElementById("grid");
var html = "";
var i = 0;

while (i < heroes.length) {
  html += '<article class="card">';
  html +=   '<div class="thumb" aria-hidden="true">' + heroes[i].emoji + '</div>';
  html +=   '<div class="content">';
  html +=     '<h2 class="name">' + heroes[i].name + '</h2>';
  html +=     '<div class="tags">';
  html +=       '<span class="tag">' + heroes[i].universe + '</span>';
  html +=       '<span class="tag">' + heroes[i].power + '</span>';
  html +=     '</div>';
  html +=     '<p class="desc">' + heroes[i].bio + '</p>';
  html +=   '</div>';
  html += '</article>';
  i = i + 1;
}

grid.innerHTML = html;