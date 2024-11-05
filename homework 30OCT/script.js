//Define data for both(Mark and John) in array
let markWeights = [78, 95];
let markHeights = [1.69, 1.88];

let johnWeights = [92, 85];
let johnHeights = [1.95, 1.76];

//Calculate both BMI for each of one

const calculateBMI = (mass, height) => mass / height ** 2;

for (let i = 0; i < markHeights.length; i++) {
  const markBMI = calculateBMI(markWeights[i], markHeights[i]);
  const johnBMI = calculateBMI(johnWeights[i], johnHeights[i]);

  // Mark > John ?!
  const markHigherBMI = markBMI > johnBMI;

  // Explanation
  console.log(`Value ${i + 1}:`);
  console.log("Mark's BMI:", markBMI.toFixed(2));
  console.log("John's BMI:", johnBMI.toFixed(2));
  console.log("Does Mark have a higher BMI than John?", markHigherBMI);

  // exe 2
  if (markBMI > johnBMI) {
    console.log(
      `Value ${i + 1}: Mark's BMI (${markBMI.toFixed(
        2
      )}) is higher than John's BMI (${johnBMI.toFixed(2)})! `
    );
  } else {
    console.log(
      `Data ${i + 1}: John's BMI (${johnBMI.toFixed(
        2
      )}) is higher than Mark's (${markBMI.toFixed(2)})!`
    );
  }
}

// exe 3

let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

let dolphinsScore2 = [97, 112, 101];
let koalasScore2 = [109, 95, 123];

let dolphinsScore3 = [97, 112, 101];
let koalasScore3 = [109, 95, 106];


function avgScore(score) {
  let initialValue = 0;
  return (
    score.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    ) / score.length
  );
}

const whoWins = (dolphins, koalas) => {
  const dolphAvgScore = avgScore(dolphins).toFixed(2);
  console.log(dolphAvgScore);
  const koalAvgScore = avgScore(koalas).toFixed(2);
  console.log(koalAvgScore);
  let minScore = 100;

  if (dolphAvgScore > koalAvgScore && dolphAvgScore >= minScore) {
    console.log("Dolphins WINS!");
  } else if (dolphAvgScore < koalAvgScore && koalAvgScore >= minScore) {
    console.log("Koala WINS!");
  } else if (dolphAvgScore === koalAvgScore && dolphAvgScore >= minScore) {
    console.log("Draw!");
  } else {
    console.log("No winner!");
  }
};

whoWins(dolphinsScore, koalasScore);
whoWins(dolphinsScore2, koalasScore2);
whoWins(dolphinsScore3, koalasScore3);
