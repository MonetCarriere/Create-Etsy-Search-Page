

// Now, you're creating a function that takes specific items and creates the templete for you. You can call this function however many items you have to and when you get the data you can call makeItem for every-single item you pass.

//example:

//<div class="item">
//<//img src="http://placehold.it/200x175">
//<p class="title">Personalized Wine Barrel, Bourbon Barrel, Whiskey Barrel, Gifts for Groomsmen, Groomsman Gift, Personalized Whiskey Barrel 1 or 2 or 3 Liter</p>
//<p class="seller">My Personal Memories</p>
//<p class="price">$49.99</p>
//</div>


document.querySelector("#items").innerHTML = ''
let htmlStr = ''
items.results.forEach(function(item,index){
    console.log(item)
    document.querySelector("#items").innerHTML  += `<div class="item"> 
    <div class='item_image' style='background-image:url(${item.Images[0].url_570xN});'>
    <div class="heart"></div></div>
    <div class="title">${item.title}</div>
    <div class="seller">${item.Shop.shop_name}</div>
    <div class="price">${item.price}</div>
</div>`
   
})
