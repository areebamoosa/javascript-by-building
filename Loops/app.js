// Array of movies

let movies = [
  "The Vampire Diaries",
  "Money Heist",
  "Flower of Evil",
  "Weak Hero",
  "Queen of Tears",
];

// Usage of For Loop

let list = document.getElementById("for-loop");

for (let i = 0; i < movies.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = movies[i];
  list.appendChild(li);
}

//Usage of While Loop

let list2 = document.getElementById("while-loop");

let y = 0;

while (y < movies.length) {
  let li = document.createElement("li");
  li.innerHTML = movies[y];
  list2.appendChild(li);
  y++;
}

// Usage of Do-while Loop

let list3 = document.getElementById("do-while-loop");

let z = 0;

do {
  let li = document.createElement("li");
  li.innerHTML = movies[z];
  list3.appendChild(li);
  z++;
} while (z < movies.length);

// Usage of For of Loop

// let j = 0; and j++ — are not needed because in  for-of & for-in loops, JavaScript does everything automatically

let list4 = document.getElementById("for-of-loop");

for (let j of movies) {
  // j is not an index — it's already the movie itself.
  let li = document.createElement("li");
  li.innerHTML = j;
  list4.appendChild(li);
}

// Usage of For in Loop

let list5 = document.getElementById("for-in-loop");

const series = {
  movie1: "The Vampire Diaries",
  movie2: "Money Heist",
  movie3: "Flower of Evil",
  movie4: "Weak Hero",
  movie5: "Queen of Tears",
};

for (let key in series) {
  let li = document.createElement("li");
  li.innerHTML = series[key];
  list5.appendChild(li);
}
