function disablePastDates() {
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const today = new Date().toISOString().split("T")[0];
  checkin.min = today;
  checkout.min = today;
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("a").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  function validateForm() {
    const guestsInput = document.getElementById("guests");
    const enteredValue = guestsInput.value;

    if (!isValidNumber(enteredValue)) {
      alert("Please enter a valid number");
      return false;
    }
    return true;
  }

  function isValidNumber(value) {
    return !isNaN(+value);
  }
  console.log(localStorage);

  function getItemFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  const retrievedData = getItemFromLocalStorage("searchData");
  if (retrievedData) {
    console.log(retrievedData);
    document.getElementById("location").value = retrievedData.location;
    document.getElementById("checkin").value = retrievedData.checkin;
    document.getElementById("checkout").value = retrievedData.checkout;
    document.getElementById("guests").value = retrievedData.guests;
  }

  document
    .getElementById("searchButton")
    .addEventListener("click", function (e) {
      const location = document.getElementById("location").value;
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      const guests = document.getElementById("guests").value;

      const searchData = {
        location: location,
        checkin: checkin,
        checkout: checkout,
        guests: guests,
      };

      localStorage.setItem("searchData", JSON.stringify(searchData));

      const retrievedData = JSON.parse(localStorage.getItem("searchData"));
      console.log(retrievedData);
    });
});

let currentImageIndex = 0;

function showImageAndParagraph(index) {
  const previousIndex = currentImageIndex;
  currentImageIndex = index;
  displayCurrentImageAndParagraph(previousIndex);
}

function displayCurrentImageAndParagraph(previousIndex) {
  const avatars = document.querySelectorAll(".avatar img");
  const paragraphs = document.querySelectorAll(".test-p");

  if (previousIndex !== undefined) {
    const previousAvatar = avatars[previousIndex];
    const previousParagraph = paragraphs[previousIndex];
    previousAvatar.classList.remove("active");
    previousParagraph.style.display = "none";
  }

  const currentAvatar = avatars[currentImageIndex];
  const currentParagraph = paragraphs[currentImageIndex];

  currentAvatar.classList.add("active");
  currentParagraph.style.display = "block";
}

$(document).ready(function () {
  $(".select").select2();
});

// function getCurrentDate() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = (today.getMonth() + 1).toString().padStart(2, "0");
//   const day = today.getDate().toString().padStart(2, "0");
//   return `${year}-${month}-${day}`;
// }

// let currentImageIndex = 0;
// function showImageAndParagraph(index) {
//   currentImageIndex = index;
//   displayCurrentImageAndParagraph();
// }
// function displayCurrentImageAndParagraph() {

//   // document.querySelectorAll(".avatar img").forEach((img) => {
//   //   img.style.transform = "none";
//   // });

//   // const currentAvatar = document.getElementById(
//   //   `avatar${currentImageIndex + 1}`
//   // );
//   // currentAvatar.style.transform = "scale(1.3)";

//   document.querySelectorAll(".test-p").forEach((paragraph) => {
//     paragraph.style.display = "none";
//   });

//   const currentParagraph = document.getElementById(
//     `paragraph${currentImageIndex}`
//   );
//   currentParagraph.style.display = "block";
// }
