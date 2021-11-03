import "./styles.css";

const numbers = {
  0: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: false
  },
  1: {
    a: false,
    b: true,
    c: true,
    d: false,
    e: false,
    f: false,
    g: false
  },
  2: {
    a: true,
    b: true,
    c: false,
    d: true,
    e: true,
    f: false,
    g: true
  },
  3: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: false,
    f: false,
    g: true
  },
  4: {
    a: false,
    b: true,
    c: true,
    d: false,
    e: false,
    f: true,
    g: true
  },
  5: {
    a: true,
    b: false,
    c: true,
    d: true,
    e: false,
    f: true,
    g: true
  },
  6: {
    a: true,
    b: false,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true
  },
  7: {
    a: true,
    b: true,
    c: true,
    d: false,
    e: false,
    f: false,
    g: false
  },
  8: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true
  },
  9: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: false,
    f: true,
    g: true
  }
};

const buttonStartTimer = document.getElementById("btn-start-timer");

buttonStartTimer.addEventListener("click", (e) => {
  startTimer();
});

function startTimer() {
  let startingNumber = 0;

  const timer = setInterval(() => {
    if (startingNumber > 9) {
      clearInterval(timer);
      return;
    }

    const selectedDigit = numbers[startingNumber];

    const topDigitPart = document.getElementById("top-digit-part");
    const bottomDigitPart = document.getElementById("bottom-digit-part");

    topDigitPart.classList.remove("bt", "bl", "br", "bb");
    bottomDigitPart.classList.remove("bt", "bl", "br", "bb");

    if (selectedDigit.a) {
      topDigitPart.classList.add("bt");
    }

    if (selectedDigit.b) {
      topDigitPart.classList.add("br");
    }

    if (selectedDigit.c) {
      bottomDigitPart.classList.add("br");
    }

    if (selectedDigit.d) {
      bottomDigitPart.classList.add("bb");
    }

    if (selectedDigit.e) {
      bottomDigitPart.classList.add("bl");
    }

    if (selectedDigit.f) {
      topDigitPart.classList.add("bl");
    }

    if (selectedDigit.g) {
      topDigitPart.classList.add("bb");
    }

    startingNumber++;
  }, 1000);
}
