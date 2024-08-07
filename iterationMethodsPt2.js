const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

const result = temperatures.filter((temp) => {
  return temp >= 25;
});

console.log(result);

const result2 = temperatures.filter((temp) => {
  return temp < 20;
});

console.log(result2);

const result3 = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});

console.log(result3);

const result4 = temperatures.map((temp) => {
  if (temp >= 25) {
    return "Warm";
  } else if (temp > 20) {
    return "Mild";
  } else {
    return "cool";
  }
});

console.log(result4);

let highesttemp = 0;

temperatures.forEach((temp) => {
  if (temp > highesttemp) {
    highesttemp = temp;
  }
});

console.log(highesttemp);

let lowesttemp = temperatures[0];

temperatures.forEach((temp) => {
  if (temp < lowesttemp) {
    lowesttemp = temp;
  }
});

console.log(lowesttemp);
