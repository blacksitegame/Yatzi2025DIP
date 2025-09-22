document.addEventListener("DOMContentLoaded", function () {
  // Top Section
  const topDiv = document.createElement("div");
  topDiv.id = "dice-container";
  document.body.appendChild(topDiv);

  // Game state
  let rollCount = 0;
  let maxRolls = 3;

  // Dice Buttons
  const buttonOne = document.createElement("button");
  let numberOne = 1;
  let lockedOne = false;
  buttonOne.textContent = numberOne;
  buttonOne.className = "button dice-one";
  topDiv.appendChild(buttonOne);

  const buttonTwo = document.createElement("button");
  let numberTwo = 2;
  let lockedTwo = false;
  buttonTwo.textContent = numberTwo;
  buttonTwo.className = "button dice-two";
  topDiv.appendChild(buttonTwo);

  const buttonThree = document.createElement("button");
  let numberThree = 3;
  let lockedThree = false;
  buttonThree.textContent = numberThree;
  buttonThree.className = "button dice-three";
  topDiv.appendChild(buttonThree);

  const buttonFour = document.createElement("button");
  let numberFour = 4;
  let lockedFour = false;
  buttonFour.textContent = numberFour;
  buttonFour.className = "button dice-four";
  topDiv.appendChild(buttonFour);

  const buttonFive = document.createElement("button");
  let numberFive = 5;
  let lockedFive = false;
  buttonFive.textContent = numberFive;
  buttonFive.className = "button dice-five";
  topDiv.appendChild(buttonFive);

  const buttonSix = document.createElement("button");
  let numberSix = 6;
  let lockedSix = false;
  buttonSix.textContent = numberSix;
  buttonSix.className = "button dice-six";
  topDiv.appendChild(buttonSix);

  // Roll Button
  const rollButton = document.createElement("button");
  rollButton.textContent = rollButton.textContent =
    "Roll (" + rollCount + "/" + maxRolls + ")";
  rollButton.className = "roll-button";
  topDiv.appendChild(rollButton);

  // Dice click handlers for locking
  buttonOne.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedOne = !lockedOne;
      buttonOne.style.backgroundColor = lockedOne ? "gold" : "white";
    }
  });

  buttonTwo.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedTwo = !lockedTwo;
      buttonTwo.style.backgroundColor = lockedTwo ? "gold" : "white";
    }
  });

  buttonThree.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedThree = !lockedThree;
      buttonThree.style.backgroundColor = lockedThree ? "gold" : "white";
    }
  });

  buttonFour.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedFour = !lockedFour;
      buttonFour.style.backgroundColor = lockedFour ? "gold" : "white";
    }
  });

  buttonFive.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedFive = !lockedFive;
      buttonFive.style.backgroundColor = lockedFive ? "gold" : "white";
    }
  });

  buttonSix.addEventListener("click", function () {
    if (rollCount > 0) {
      lockedSix = !lockedSix;
      buttonSix.style.backgroundColor = lockedSix ? "gold" : "white";
    }
  });

  rollButton.addEventListener("click", function () {
    if (rollCount < maxRolls) {
      rollCount++;

      if (!lockedOne) {
        numberOne = Math.floor(Math.random() * 6) + 1;
        buttonOne.textContent = numberOne;
      }
      if (!lockedTwo) {
        numberTwo = Math.floor(Math.random() * 6) + 1;
        buttonTwo.textContent = numberTwo;
      }
      if (!lockedThree) {
        numberThree = Math.floor(Math.random() * 6) + 1;
        buttonThree.textContent = numberThree;
      }
      if (!lockedFour) {
        numberFour = Math.floor(Math.random() * 6) + 1;
        buttonFour.textContent = numberFour;
      }
      if (!lockedFive) {
        numberFive = Math.floor(Math.random() * 6) + 1;
        buttonFive.textContent = numberFive;
      }
      if (!lockedSix) {
        numberSix = Math.floor(Math.random() * 6) + 1;
        buttonSix.textContent = numberSix;
      }

      rollButton.textContent = `Roll (${rollCount}/${maxRolls})`;

      if (rollCount >= maxRolls) {
        rollButton.disabled = true;
        rollButton.style.backgroundColor = "gray";
      }
    }
  });

  // Bottom Section - ScoreBoard

  const bottomDiv = document.createElement("div");
  bottomDiv.id = "scorecard-container";
  document.body.appendChild(bottomDiv);

  const categories = [
    { name: "Ones", id: "ones" },
    { name: "Twos", id: "twos" },
    { name: "Threes", id: "threes" },
    { name: "Fours", id: "fours" },
    { name: "Fives", id: "fives" },
    { name: "Sixes", id: "sixes" },
    { name: "Three of a Kind", id: "three-kind" },
    { name: "Four of a Kind", id: "four-kind" },
    { name: "Full House", id: "full-house" },
    { name: "Small Straight", id: "small-straight" },
    { name: "Large Straight", id: "large-straight" },
    { name: "Yatzi", id: "yatzi" },
    { name: "Chance", id: "chance" },
  ];

  // Create scoreboard
  categories.forEach((category) => {
    const scoreRow = document.createElement("div");
    scoreRow.className = "score-row";

    const label = document.createElement("span");
    label.textContent = category.name;
    label.className = "score-label";

    const scoreButton = document.createElement("button");
    scoreButton.textContent = "-";
    scoreButton.className = "score-button";
    scoreButton.id = category.id;

    scoreRow.appendChild(label);
    scoreRow.appendChild(scoreButton);
    bottomDiv.appendChild(scoreRow);
  });

  // Add total score section
  const totalRow = document.createElement("div");
  totalRow.className = "score-row total-row";

  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Total Score";
  totalLabel.className = "score-label total-label";

  const totalScore = document.createElement("span");
  totalScore.textContent = "0";
  totalScore.className = "total-score";
  totalScore.id = "total-score";

  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalScore);
  bottomDiv.appendChild(totalRow);

  // Score calculation functions
  function calculateScore(category, dice) {
    const counts = [0, 0, 0, 0, 0, 0];
    dice.forEach((die) => counts[die - 1]++);

    switch (category) {
      case "ones":
        return counts[0] * 1;
      case "twos":
        return counts[1] * 2;
      case "threes":
        return counts[2] * 3;
      case "fours":
        return counts[3] * 4;
      case "fives":
        return counts[4] * 5;
      case "sixes":
        return counts[5] * 6;
      case "three-kind":
        for (let i = 1; i <= 6; i++) {
          if (counts[i] >= 3) return dice.reduce((sum, die) => sum + die, 0);
        }
        return 0;
      case "four-kind":
        for (let i = 1; i <= 6; i++) {
          if (counts[i] >= 4) return dice.reduce((sum, die) => sum + die, 0);
        }
        return 0;
      case "full-house":
        const hasThree = counts.some((count) => count === 3);
        const hasTwo = counts.some((count) => count === 2);
        if (hasThree && hasTwo) {
          return 25;
        }
        return 0;
      case "small-straight":
        const smallStraights = [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ];
        for (let straight of smallStraights) {
          if (straight.every((num) => counts[num] > 0)) return 30;
        }
        return 0;
      case "large-straight":
        const largeStraights = [
          [1, 2, 3, 4, 5],
          [2, 3, 4, 5, 6],
        ];
        for (let straight of largeStraights) {
          if (straight.every((num) => counts[num] > 0)) return 40;
        }
        return 0;
      case "yatzi":
        if (counts.some((count) => count === 5)) {
          return 50;
        }
        return 0;
      case "chance":
        return dice.reduce((sum, die) => sum + die, 0);
      default:
        return 0;
    }
  }

  // Function to calculate total score
  function updateTotalScore() {
    let total = 0;
    categories.forEach((category) => {
      const button = document.getElementById(category.id);
      if (button.textContent !== "-") {
        total += parseInt(button.textContent);
      }
    });
    document.getElementById("total-score").textContent = total;
  }

  // Add click handlers to score buttons
  categories.forEach((category) => {
    const button = document.getElementById(category.id);
    button.addEventListener("click", function () {
      if (button.textContent === "-" && rollCount > 0) {
        const dice = [
          numberOne,
          numberTwo,
          numberThree,
          numberFour,
          numberFive,
          numberSix,
        ];
        const score = calculateScore(category.id, dice);
        button.textContent = score;
        button.disabled = true;
        button.style.backgroundColor = "lightgreen";

        // Update total score
        updateTotalScore();

        // Reset for next turn
        rollCount = 0;
        lockedOne =
          lockedTwo =
          lockedThree =
          lockedFour =
          lockedFive =
          lockedSix =
            false;

        // Reset dice appearance
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "white";
        buttonFour.style.backgroundColor = "white";
        buttonFive.style.backgroundColor = "white";
        buttonSix.style.backgroundColor = "white";

        // Reset roll button
        rollButton.disabled = false;
        rollButton.style.backgroundColor = "lightgreen";
        rollButton.textContent = `Roll (${rollCount}/${maxRolls})`;
      }
    });
  });
});
