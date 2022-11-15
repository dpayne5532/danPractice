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

// FILTER =====================================================================

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


// MAP ====================================================================




