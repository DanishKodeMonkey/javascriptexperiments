// In order to edit a CSS property, first select the element, and assign it
//to a constant variable for easy reference
const title = document.getElementById("myTitle");
//Then fetch the variable(title), access the CSS properties(style), 
//and make your changes in camelback format(backgroundColor = "blue")
title.style.backgroundColor = "blue";
title.style.color = "rgb(50, 200, 250)";
title.style.fontFamily = "Mononoki Nerd Font";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";