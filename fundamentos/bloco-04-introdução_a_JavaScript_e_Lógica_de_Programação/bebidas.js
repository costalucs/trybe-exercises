let str = "1 cachaça, 5 cervejas e 1 copo de vinho";
function hydrate(str) {
  // seu código aqui
  let regEx = /\d+/g;
  let nums = str.match(regEx);
  //   console.log(nums);
  var numberArray = nums.map(Number);
  //   console.log(numberArray);
  let agua = numberArray.reduce(function (agua, i) {
    //   console.log((agua+=i));
    return agua + i;
  });
}
hydrate(str);
