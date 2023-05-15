// This function adds a click event listener to the "Projects" h2 element.
// When the element is clicked, it will show a list of projects.
function showProjects() {
    var projects = document.getElementById("projects");
    projects.style.display = "block";
  }
  
  // This function adds a click event listener to the "About Me" h2 element.
  // When the element is clicked, it will show a paragraph about the user.
  function showAboutMe() {
    var aboutMe = document.getElementById("aboutMe");
    aboutMe.style.display = "block";
  }
  
  // This function initializes the website.
  // It adds click event listeners to the "Projects" and "About Me" h2 elements.
  window.onload = function() {
    showProjects();
    showAboutMe();
  };
  