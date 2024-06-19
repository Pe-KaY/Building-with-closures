const btn = document.querySelector("button")

// display btn properties variables
const displayBtninfo = document.querySelector(".displayBtn")
const displayIdone = document.querySelector(".displayBtn > span:nth-child(1)")
const displayIdtwo = document.querySelector(".displayBtn > span:nth-child(2)")

// countdown variables
const countDowndisplay = document.querySelector(".countdowndisplay")
const secondsInput = document.getElementById("inputId")

// const countDown
// function to display information about the btn using this

function handleClick() {
  console.log(this.getAttribute("id"))
  console.log(this.textContent)
  displayIdone.textContent = `id: ${this.getAttribute("id")}`
  displayIdtwo.textContent = `textContent: ${this.innerText}`
}

// attach event listener  to button
btn.addEventListener("click", handleClick)

// function for countDown
function createTimer(duration, elementId) {
  let remainingSec = duration
  let intervalId
  const displayelement = document.getElementById(elementId)

  // the setinterVal function gain closure over the raminingSec variable
  intervalId = setInterval(() => {
    if (remainingSec > 0) {
      remainingSec--
      displayelement.textContent = `${remainingSec} seconds`
    } else {
      clearInterval(intervalId)
      document.getElementById("endmessage").textContent = "Timer Ended"
      secondsInput.disabled = false
    }
  }, 1000)
}

secondsInput.addEventListener("change", function () {
  document.getElementById("endmessage").textContent = ""
  secondsInput.disabled = true

  // here this is used to refer to the input element which the eventlistener is attached
  // the countdowndisplay refers to the id of the elementId that will display the
  // seconds
  createTimer(this.value, "countdowndisplay")
})
