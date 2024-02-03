/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
	name: "Jennifer C Gonzalez P",
	photo: "images/kitty_sposa_300.jpg",
	favoriteFoods: ["apple", "banana", "orange", "blueberry", "watermelon"],
	hobbies: ["baseball", "football", "basketball"],
	placesLived: [],

}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
	{
		place: "Sao Paulo , Brazil",
		length: "8 months"
	}
)

myProfile.placesLived.push(
	{
		place: "Sao Bernardo do Campo, Brazil",
		length: "4 years"
	}
	)
	
myProfile.placesLived.push(
	{
		place: "Caracas, Venezuela",
		length: "40 years"
	}
	)
	

/* DOM Manipulation - Output */

/* Name */
const Name = document.getElementById("name")
Name.textContent= myProfile.name

/* Photo with attributes */
const Photo = document.getElementById("photo")
Photo.src = myProfile.photo
Photo.alt = myProfile.name

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
	const newLi = document.createElement('li')
	newLi.textContent = food
	document.getElementById("favorite-foods").appendChild(newLi)
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
	const newLi = document.createElement('li')
	newLi.textContent = hobby
	document.getElementById("hobbies").appendChild(newLi)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
	const newDt = document.createElement('dt')
	newDt.textContent = placeLived.place
	document.getElementById("places-lived").appendChild(newDt)
	const newDd = document.createElement('dd')
	newDd.textContent = placeLived.length
	document.getElementById("places-lived").appendChild(newDd)
});