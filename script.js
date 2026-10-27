/* Week 8: The DOM, Events & Browser APIs */

// selecting the button
const btnEnd = document.querySelector("#btn_end");
const txtArea = document.querySelector("#spot-description");

// 1. textContent — Reads or writes pure text (Safe & Fast)
// btnEnd.textContent = "<b>I love Coding!</b>"

// 2. innerHTML — Reads or parses HTML tags (Use carefully!)
// btnEnd.innerHTML = "<b>I love Coding!</b>"

// 3. .value — Reads or writes the text inside input fields & textareas
txtArea.value =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic culpa tenetur dignissimos harum ipsam sed facere reprehenderit ratione praesentium labore? Numquam, eos velit tenetur unde temporibus assumenda quibusdam delectus fugiat!";

// add a class
btnEnd.classList.add("active");

// removing a class
// btnEnd.classList.remove('innert')

// btnEnd.classList.toggle("innert")

// 4. Check if a class exists (Returns true or false)
// if (btnEnd.classList.contains('active')) {
//     alert('This is an ACTIVE prompt!')
// } else if (btnEnd.classList.contains('innert')) {
//     alert('This is an INNERT prompt!')
// } else {
//     alert('No classes added!')
// }

// const progressBar = document.querySelector('.review-progress')
// progressBar.style.width = "80%"
// progressBar.style.backgroundColor = "tomato"


/* Events & User Interaction */

// Target:
const faveBtn = document.querySelector('#fave');

// Event
faveBtn.addEventListener("click", faveCallback)

// Handler (Callback)
function faveCallback() {
    // alert("User clicked favourite");
    faveBtn.textContent = "🖤 Favourited";
}