const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const guestList = document.getElementById("guest-list");

let guestCount = 0;
const MAX_GUESTS = 10;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 🔐 Stop page refresh
  const name = input.value.trim();

  if (!name) return; // Prevent empty input

  if (guestCount >= MAX_GUESTS) {
    alert("Guest limit reached (10 people max)");
    return;
  }

  addGuest(name);
  input.value = "";
});

function addGuest(name) {
  guestCount++;

  const li = document.createElement("li");
  li.textContent = name + " - ";

  const rsvpBtn = document.createElement("button");
  rsvpBtn.textContent = "Attending";
  rsvpBtn.className = "attending";

  rsvpBtn.addEventListener("click", () => {
    if (rsvpBtn.classList.contains("attending")) {
      rsvpBtn.textContent = "Not Attending";
      rsvpBtn.className = "not-attending";
    } else {
      rsvpBtn.textContent = "Attending";
      rsvpBtn.className = "attending";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    guestCount--;
  });

  li.appendChild(rsvpBtn);
  li.appendChild(deleteBtn);
  guestList.appendChild(li);
}
