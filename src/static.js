import axios from "axios";

export const bodyTxt =
  'It\'s not just another gourmet cuisine. We dont just use "recipes" to cook. In Luce restaurant we follow the heart that loves tradition and our mind, which loves creativity. Sit at the table and smack your lips, we have prepared something good for you.';
export const aquaTxt =
  "A garden of Eden without grass, a wellness center that covers an area of 240sqm on the pristine beachfront of Lagos. You will find yourself walking under a soft veil of humidity, in areas that smell of leaves and petals.";
export const hotelTxt =
  "Everything seems to lead you to this moment. The choiciest rooms await you. Choose one that best suits yours personality. Here you can, indded you must, dare.";
export const roofTxt =
  "Our amazing rooftop lounge is the summit of true hospitality. Let your gaze point towards the vast, beautiful Atlantic Ocean or the Lagos Lagoon behind you and discover that to be part of our world is an extraordinary experience. ";

export const textArr = [
  "S",
  "C",
  "R",
  "O",
  "L",
  "L",
  " ",
  "T",
  "O",
  " ",
  "S",
  "T",
  "A",
  "R",
  "T",
  " ",
  "E",
  "X",
  "P",
  "E",
  "R",
  "I",
  "E",
  "N",
  "C",
  "E",
  " ",
];


export const getDrinks = () => {
  let drinks = [];
  for(let i=0; i<9; i++){
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        const drink = res.data.drinks[0];
        drinks.push({
          drinkName: drink.strDrink,
          drinkImage: drink.strDrinkThumb,
        });
      });
  }
  console.log(drinks);
  return drinks;
  
}
 export const rooms = [
   {
     category: "Presidential Suite",
     image:
       "https://www.thetranshotel.com/images/editor/images/presidential2.jpg",
   },
   {
     category: "Executive Suite",
     image:
       "https://dtla.intercontinental.com/wp-content/uploads/2016/12/InterContinental-LA-Downtown_Presidential_Suite_Living_Room_A7116_jpg.jpg",
   },
   {
     category: "Double Suite",
     image:
       "https://d1dzqwexhp5ztx.cloudfront.net/imageRepo/5/0/94/472/31/IL263_Double_Suite_R.jpg",
   },
   {
     category: "Single Room",
     image:
       "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ",
   },
 ];


 export const dishes = [
  
 ]

