// https://youtu.be/rRgD1yVwIvE

var Tuesday = '12-13-2022';

var companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEACH


for (var i = 0; i < companies.length; i++) {
  // console.log(companies[i]);
}

companies.forEach(function(company) {
  // console.log(company);
});

// FILTER =========FILTER =========FILTER =========FILTER =========FILTER =========FILTER =========FILTER =========

//return true if item is matches

var canDrink = [];
for (var i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  };
};
// console.log(canDrink);



var drinker = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

var tieOneOn = ages.filter(age => age >= 21);

// console.log('Tie One On: ', tieOneOn);

// console.log(drinker);

var retailCompanies = companies.filter(function(company) {
  if (company.category === 'Retail') {
    return true;
  }
})

// console.log(retailCompanies);

var retComp = companies.filter(comp => comp.category === 'Retail');
// console.log(retComp);


var eightComp = companies.filter(function(company) {
  if (company.start >= 1980 && company.start < 1990) {
    return true;
  }
});


// console.log(eightComp);

var eComp = companies.filter(comp => comp.start >= 1980 && comp.start < 1990);

// console.log(eComp);


// MAP ===========MAP ===========MAP ===========MAP ===========MAP ===========MAP ===========MAP ===========
// returns array of each item modified as instructed


// create array of company names

var companyNames = companies.map(function(company) {
  return company.name;
});

// console.log(companyNames);

var youth = ages.map(function(age) {
  return age - 5;
});

// console.log(youth);


// SORT =======================================================================


// this will sort companies by start date

var sorted = companies.sort(function(a, b) {
  if (a.start > b.start) {
    return 1;
  } else {
    return -1;
  }
});

// console.log(sorted)

var sortComp = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortComp === sorted);

// sort ages

var sortAges = ages.sort((a, b) => a - b);

//console.log(sortAges);

// [5, 12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 54, 61, 64]


//  reduce

var sum = ages.reduce(function(total, age) {
  return total + age;
}, 0);
// console.log(sum);

var ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);


var totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);

// console.log(totalYears);

var totYears = companies.reduce((total, company) => total + (company.end - company.start), 0);


 // console.log(totYears);


var combined = ages
  .map(age => age * 2) // Multiply Ages by 2
  .filter(age => age >= 40) // filter out ages under 40
  .reduce((a, b) => a + b, 0);  // add all of the ages together
  // console.log(combined);  // 798



  var robots = [
    {
      name: "x13",
      canFly: true,
      canCook: false,
      yearsInspected: [2002],
      fueledBy: "cookies",
      bestFriend: { name: "z09", yearsKnown: 4, isCharging: true },
    },
    {
      name: "z09",
      canFly: false,
      canCook: true,
      yearsInspected: [1998, 2005, 2018],
      fueledBy: "jealousy",
      bestFriend: { name: "r04", yearsKnown: 12, isCharging: false },
    },
    {
      name: "r3d2",
      canFly: true,
      canCook: true,
      yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
      fueledBy: "beep-boop",
      bestFriend: { name: "c4p0", yearsKnown: 2, isCharging: true },
    },
  ];

  fucntion robotNamesInspectedAtLeastTwice() {

  };


