class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
  }

  start = () => {
    console.log(this);
    this.another();
  };

  another() {
    console.log("ANOTHER METHOD");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);

/*

// timer.start();
// Object timer & 'another method'

//! 'this' in Arrow function
//: Same with first line of outside function

// 1)

console.log(this);
//=> Window
const printThis = () => {
  console.log(this);
};
printThis();
//=> Window

// 2)

const colors = {
  printColor() {
    console.log(this);

    const printThis = () => {
      console.log(this);
    };

    printThis();
  },
};

colors.printColor();
//=> Object colors & Object colors

//! bind, call and apply
//: First argument becomds value of 'this'

const printThis2 = function () {
  console.log(this);
};

printThis2.call({ color: "red" });
//=> Object { color: "red" }
printThis2.apply({ color: "red" });
//=> Object { color: "red" }
printThis2();
//=> window

//! All other cases
//: Whatever is to the left of the '.'

const colors2 = {
  printColor() {
    console.log(this);
  },
};

colors2.printColor();
//=> Object { printColor: printColor() }

const randomObject = { a: 1 };

randomObject.printColor = colors2.printColor;

randomObject.printColor();
//=> Object { a: 1, printColor: printColor() }

*/
