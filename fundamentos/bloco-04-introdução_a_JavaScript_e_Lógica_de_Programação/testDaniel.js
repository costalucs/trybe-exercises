function techList(array, name) {
  let sortedArray = array.sort();
  console.log("sorted array:", sortedArray);
  let i = 0;
  let techObject = [{}];
  let testArray = [];
  techObject[i].tech = "";
  techObject[i].name = name;
  console.log("techObject:", techObject);
  for (i = 0; i < sortedArray.length; i += 1) {
    techOject[i]["tech"].push(techOject[0]);
  }
  console.log("techObject.tech", techObject[i].tech);
  console.log("techObject.name", techObject[i].name);
  return techObject;
}
console.log(
  "result4:",
  techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
);
