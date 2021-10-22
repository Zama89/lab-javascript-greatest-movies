// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


const movies = require("./data");


function getAllDirectors(movies) {
  const directors = movies.map(function (directorPerson){
    return directorPerson.director;
  });
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramasMovies = movies.filter (function(movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")) {
      return movie
    }
  }); return dramasMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if ( movies.length === 0) {
    return 0;
  }
  let promedio = movies.reduce (function(sum,movie) {
    return sum + movie.score;
  } ,0);
  let totalPromedio = promedio / movies.length;
  return Math.round(totalPromedio * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaCompilation = movies.filter (function(dramote) {
    if (dramote.genre.includes ("Drama")) {
      return dramote;
    }
  }); if ( dramaCompilation.length === 0) {
      return 0
    }

  let promedioDrama = dramaCompilation.reduce (function(sum, dramatizacion ){
    return sum + dramatizacion.score
  } ,0);
  
  let averageDrama = promedioDrama / dramaCompilation.length;
  return Math.round(averageDrama * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let order = [];
  for ( let i=0; i < movies.length ; i++ ) {
    order.push(movies[i])
  }
  order.sort(function(first, second){
    if (first.year === second.year) {
      if (first.title < second.title) {
        return -1;
      } else (first.title > second.title) {
        return 1;
      }
    }
    return first.year - second.year;
  }); return order; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.sort(function(a, b){
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
    return titles.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
