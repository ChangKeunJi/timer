class Timer {
  intervalId;

  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Callbacks are fully optional
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) this.onStart(this.timeRemaining);
    this.tick();
    this.intervalId = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  // setInterval() method returns an ID which can be used by the clearInterval() method to stop the interval.

  tick = () => {
    //1)
    // const timeRemaining = parseFloat(this.durationInput.value);
    // this.durationInput.value = timeRemaining - 1;

    //2)
    //   const timeRemaining = this.timeRemaining;
    //   this.timeRemaining = timeRemaining - 1;

    //3) setter = getter - 1
    // this.timeRemaining = this.timeRemaining - 1;

    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
