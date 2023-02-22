// 1. Create a Navbar & change its first Elememt colour to Red?
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// <!-- 3.Create a Element with 3 Children and Change its First & Last Element Colour to Green? -->
// document.body.firstElementChild.firstElementChild.style.color ="green"
// document.body.firstElementChild.lastElementChild.style.color ="green"

// <!-- 4. Use JS Code to change bgColor to cyan of all LI tag? -->
Array.from(document.body.getElementsByTagName("li")).forEach(element =>{
    element.style.background= "cyan"
})