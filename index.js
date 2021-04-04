/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str){
  const hr = parseInt(str.split(':')[0], 10);

  if (hr < 12) {
    return "Good Morning";
  } else if (hr > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }

}

function displayMessage(str){
  document.getElementById("greeting").innerText = str
}