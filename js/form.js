const scriptURL = 'https://script.google.com/macros/s/AKfycbzmKxTWNY-r03Vu7sLwasDk1mPtWPb0RCzqihG6_MT7l3nPq97dPGfMp48MIWCEro10/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function () {
            msg.innerHTML= ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})