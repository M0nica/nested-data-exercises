/*
> 🚀 Before you begin:
> Review the shape of the sample data in README.md: https://github.com/justsml/nested-data-exercises#data

// Then, complete the functions below!


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
 */
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name;
}

/**
 * ### Challenge `getFilmCount`
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  return character.films.length;
}

/**
 * ### Challenge `getFirstStarshipName`
 * @instructions
 * Return first starship's name from `starships` property.
 * If length is 0. Return 'none'
 */
function getFirstStarshipName(character) {
  return character.starships.length ? character.starships[0].name : "none";
}

/**
 * ### Challenge `getSummary`
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  const { name, height, mass, films } = character;
  return `${name}, ${height}cm, ${mass}kg. Featured in ${films.length} films.`;
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
 */
function getVehiclesCostInCreditsSumTotal(character) {
  return character.vehicles.reduce((acc, { cost_in_credits }) => {
    return acc + cost_in_credits;
  }, 0);
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
 */
function getStarshipPassengerAndCrewSumTotal(character) {
  return character.starships.reduce((acc, { crew, passengers }) => {
    return acc + crew + passengers;
  }, 0);
}

/**
 * ### Challenge `getNthFilm`
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
 */
function getNthFilm(character, filmNumber) {
  return character.films[filmNumber - 1];
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
 */
function getCargoCapacityTotal(character) {
  const vehicleCargoCapacity = character.vehicles.reduce(
    (acc, { cargo_capacity }) => {
      return acc + parseInt(cargo_capacity || 0);
    },
    0
  );
  const starshipCargoCapacity = character.starships.reduce(
    (acc, { cargo_capacity }) => {
      return acc + parseInt(cargo_capacity || 0);
    },
    0
  );

  return vehicleCargoCapacity + starshipCargoCapacity;
}

/**
 * ### Challenge `getFastestStarshipName`
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
 */
function getFastestStarshipName(character) {
  let fastest_starship = character.starships.length
    ? character.starships[0]
    : {};

  character.starships.forEach(starship => {
    if (
      parseInt(starship.max_atmosphering_speed) >
      parseInt(fastest_starship.max_atmosphering_speed)
    ) {
      fastest_starship = starship;
    }
  });

  return fastest_starship.name || "none";
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
 */
function getLargestCargoStarshipModelName(character) {
  if (!character.starships.length) {
    return "none";
  }

  let max_cargo = character.starships[0] || {};
  character.starships.forEach(starship => {
    if (
      parseInt(starship.cargo_capacity) > parseInt(max_cargo.cargo_capacity)
    ) {
      max_cargo = starship;
    }
  });

  return max_cargo.model;
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 * Difficulty: _Tricky_
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
 */
function getSlowestVehicleOrStarshipName(character) {
  if (!character.vehicles.length && !character.starships.length) {
    return "none";
  }

  let slowest_vehicle = character.vehicles[0] || character.starships[0];
  character.vehicles.forEach(vehicle => {
    if (
      parseInt(vehicle.max_atmosphering_speed) <
      parseInt(slowest_vehicle.max_atmosphering_speed)
    ) {
      slowest_vehicle = vehicle;
    }
  });

  character.starships.forEach(starship => {
    if (
      parseInt(starship.max_atmosphering_speed) <
      parseInt(slowest_vehicle.max_atmosphering_speed)
    ) {
      slowest_vehicle = starship;
    }
  });

  return slowest_vehicle.name;
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (getName) {
    module.exports.getName = getName;
  }
  if (getFilmCount) {
    module.exports.getFilmCount = getFilmCount;
  }
  if (getFirstStarshipName) {
    module.exports.getFirstStarshipName = getFirstStarshipName;
  }
  if (getSummary) {
    module.exports.getSummary = getSummary;
  }
  if (getVehiclesCostInCreditsSumTotal) {
    module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal;
  }
  if (getStarshipPassengerAndCrewSumTotal) {
    module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal;
  }
  if (getNthFilm) {
    module.exports.getNthFilm = getNthFilm;
  }
  if (getCargoCapacityTotal) {
    module.exports.getCargoCapacityTotal = getCargoCapacityTotal;
  }
  if (getFastestStarshipName) {
    module.exports.getFastestStarshipName = getFastestStarshipName;
  }
  if (getLargestCargoStarshipModelName) {
    module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName;
  }
  if (getSlowestVehicleOrStarshipName) {
    module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName;
  }
}
