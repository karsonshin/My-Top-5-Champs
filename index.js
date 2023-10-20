/**
 * This index.js file will hold the various coding to add functionality and functions to the
 * frontend of the lol.html file. This will include changes onclick and buttons.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /** Initiator function */
  function init() {
    let loadImage = qs("#load-image-1 img");
    loadImage.addEventListener("click", switchImage);
  }

  /**
   * Switches main image to halloween image, switches blockquote
   * @param {event} event - passes in event
   */
  function switchImage(event) {
    event.currentTarget.src = "./pictures/image2.jpg";
    let section = qs("#load-image-1");
    let contents = qs("#load-image-1 blockquote");
    let newContent = document.createElement("blockquote");
    newContent.textContent = "These are the Bewitched skins🎃 Happy Halloween!";
    section.appendChild(contents);
    section.replaceChild(newContent, contents);

    let mainImage = qs(".main-image");
    mainImage.classList.remove("main-image"); // changes to pumpkin border!
    mainImage.classList.add("main-image-2");
  }

  let button1 = getClass("lol-website"); // returns array
  let button2 = getClass("drop-btn");

  button1[0].addEventListener("click", buttonColor); // access 1st element of array
  button2[0].addEventListener("click", dropDown);

  /** Changes button color to blue when clicked */
  function buttonColor() {
    window.open("https://www.leagueoflegends.com/en-gb/champions/");
    let web = qs(".lol-website");
    web.classList.replace("lol-website", "lol-website-2");
  }

  /** Dropdown function, hide and show content */
  function dropDown() {
    document.getElementById("drop-down").classList.toggle("show");
  }

  window.onclick = function(event) { // when user clicks button, hide and show content
    if (!event.target.matches(".drop-btn")) {
      const dropdowns = document.getElementsByClassName("all-champ-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  /**
   * Helper functions
   * @param {selector} selector - selector of querySelector
   * @returns {Element} query of selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helper function
   * @param {name} name - name of Id
   * @returns {Element} element by Id
   */
  function getClass(name) {
    return document.getElementsByClassName(name);
  }
})();