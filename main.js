

// Write your JavaScript code here!


var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// Bonus challenge 8 here:
 var reversed = planets.reverse();





// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

var select = document.getElementById("planets");
var optionsArray = []

for(var i = 0; i < planets.length; i++) {
  var posInList = planets [i];
  var newElementInList = document.createElement("option");
  var justName = planets[i][0];
  newElementInList.textContent = (justName);
  optionsArray.push(newElementInList);
  select.appendChild(newElementInList);
}

// initializing select element from Materialize
  var instances = M.FormSelect.init(select, optionsArray);


  /*
  Other way to do it with .forEach here

  planets.forEach(function(value, i) {
    var newElementInList = document.createElement("option");
    var justName = planets[i][0];
    newElementInList.textContent = (justName);
    select.appendChild(newElementInList);
  }) 
  */

  
  function calculateWeight(weight, selectionIndex) {
    // 2. Write the code to return the correct weight 
    // I changed from (weight, planetName) to (weight, selectionIndex)
    var selectPlanetRate = planets[selectionIndex][1];
    return selectPlanetRate * weight;
   }


  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById("user-weight").value;

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById("planets").value;
    var itemSelected = document.getElementById("planets").selectedIndex;
  
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight,itemSelected);
    
    // 6. Write code to display the message shown in the screenshot.
    var message = document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    return message;
  }

  

  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  document.getElementById("calculate-button").onclick = handleClickEvent;
  

  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
      // DONE - see line 19

  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
  
  // From OCA Bonus Challenge 1
  // There is a divide between the users of this application. 
  // Some hold that Pluto is indeed a planet in our solar system, while others do not. 
  // Add a checkbox to the application that when checked will remove Pluto as an option in the dropdown list.

  
  



function removePluto() {
    var noPlutoArray = optionsArray.splice(0, 10);
    select.options.remove(10);
    instances = M.FormSelect.init(select, noPlutoArray);
  }

  function addPluto() {
    var theSelect = document.getElementById("planets");
    var option = document.createElement("option");
    option.text = "Pluto";
    theSelect.add(option);
    optionsArray.push(option);
    instances = M.FormSelect.init(select, optionsArray);
  }

  function toAddOrRemove() {
    if (document.getElementById("pluto-check").checked == true) {
      removePluto();
      return document.getElementById("output-pluto").innerHTML = "Pluto has been removed :( ";;
    }

    else {
      addPluto();
      return document.getElementById("output-pluto").innerHTML = "Pluto is now restored! :) ";
    }
  }
  
  document.getElementById("pluto-check").onchange = toAddOrRemove


 

  // From OCA Bonus Challenge 2
  // NASA has expressed concerns that this tool is only useful if expeditions are made to planets within our solar system, 
  // and that they would like the option to add a custom planet with it's multiplier to the dropdown. 
  // Add two input fields (one for name, one for multiplier) 
  // and a button that once clicked will push a new planet to the dropdown.
  

  function addCustom() {
    var theSelect = document.getElementById("planets");
    var option = document.createElement("option");
    option.textContent = (document.getElementById("custom-planet-name").value);
    theSelect.add(option);
    planets.push([document.getElementById("custom-planet-name").value,document.getElementById("custom-planet-rate").value]);
    optionsArray.push(document.getElementById("custom-planet-name").value);
    instances = M.FormSelect.init(select, optionsArray);
  }



  document.getElementById("custom-button").onclick = function() {
    if (document.getElementById("custom-planet-name").value === "")  {
      return alert("Error - Please fill in both custom fields before submitting");
    }
    else if (document.getElementById("custom-planet-rate").value === "") {
      return alert("Error - Please fill in both custom fields before submitting");
    }
    else {
      addCustom();
    }
  }
  

  



  






  