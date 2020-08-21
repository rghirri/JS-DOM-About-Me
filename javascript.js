/*** Body tag's style */
var Body_style = document.querySelector("body");
Body_style.style.fontFamily = "Arial, sans-serif";
/*** End Body tag's style */
//************************************** */
//************************************** */
/*** Span tag's style */
var Nick_Name = document.querySelector("#nickname");
var Favorites = document.querySelector("#favorites");
var Home_Town = document.querySelector("#hometown");
Nick_Name.innerHTML = "Rayaa";
Favorites.innerHTML = "Pizza";
Home_Town.innerHTML = "London";
/*** End Span tag's style */
//************************************** */
//************************************** */
/*** List New Class style */
var List_items = document.getElementsByTagName('li');
   for (var i = 0; i < List_items.length; i++) {
      List_items[i].className = 'listitem';
   }
/*** End List New Class style */
//************************************** */
//************************************** */
/*** Image style */
var Pic_me = document.createElement('img');
    Pic_me.src = 'http://file_with_image';
    document.body.appendChild(Pic_me);
/*** End image style */
//************************************** */
//************************************** */