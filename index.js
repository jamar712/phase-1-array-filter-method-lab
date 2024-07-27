const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, driversName) {
  console.log(drivers);
  return drivers.filter((driver) => {

  // driver main array and name / type and age are elements within the object 
  return driver.toLowerCase() === driversName.toLowerCase()
  //filtering through driver array for string argument and re
});
}

function fuzzyMatch(drivers, driversLetters){
  console.log(drivers);
  console.log(driversLetters);
  return drivers.filter((driver) => { return driver.slice(0,2) ==  driversLetters})
  
};
console.log(fuzzyMatch(drivers,'Bo'))


//matchName();

console.log(findMatching(drivers, "Sammy"))

const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers2, driversString){
  return drivers2.filter((driversObject) => { return driversObject.name.toLowerCase() === driversString.toLowerCase()
})
}
console.log (matchName(drivers2, "bobby"));console.log (matchName(drivers2, "Sammy")) 
matchName(drivers2, driversString);