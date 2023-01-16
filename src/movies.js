// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const moviesArr = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
];

function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const stevenDramaMovies = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return movie;
    }
  });
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avrgScores = 0;

  if (moviesArray.length === 0) {
    return 0;
  }

  avrgScores = moviesArray.reduce((acc, curr) => {
    if (!curr.score) {
      curr.score = 0;
    }
    return acc + curr.score / moviesArray.length;
  }, 0);

  return Number(avrgScores.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const scoresDrama = dramaMovies.reduce((acc, curr) => acc + curr.score, 0);
  const average = scoresDrama / dramaMovies.length;

  return Number(average.toFixed(2));
}

dramaMoviesScore(moviesArr);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  orderedArr = moviesArray
    .filter((movie) => movie)
    .sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else return 0;
    });
  return orderedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    });

  if (sortedTitles.length > 20) {
    return sortedTitles.slice(0, 20);
  }
  return sortedTitles;
}

orderAlphabetically(moviesArr);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

turnHoursToMinutes(moviesArr);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
