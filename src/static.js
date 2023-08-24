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
  for (let i = 0; i < 9; i++) {
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

  return drinks;
};

console.log(getDrinks);
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
  {
    name: "Pan-Fried Kobe Beef Top Sirloin",
    image:
      "https://howtocookmeat.com/wp-content/uploads/2018/05/header-27-768x512.jpg",
  },
  {
    name: "Foie Gras",
    image:
      "https://downtonabbeycooks.com/wp-content/uploads/2019/03/FoisGras-1024x1024.jpg",
  },
  {
    name: "Truffle Risotto",
    image:
      "https://img.delicious.com.au/nDDuOSZm/del/2019/06/baked-camembert-with-truffles-at-the-gantry-109053-3.jpg",
  },
  {
    name: "Caviar Et Sushi",
    image:
      "https://eatfish.ca/cdn/shop/products/Untitleddesign_1_800x.png?v=1648067687",
  },
  {
    name: "Lobster Thermidor",
    image:
      "https://st.depositphotos.com/8546036/57557/i/450/depositphotos_575578718-stock-photo-big-lobster-grilled-fried-lobster.jpg",
  },
  {
    name: "Peking Duck",
    image:
      "https://img.freepik.com/premium-photo/traditional-served-peking-duck-with-cucumber-green-onion-wheaten-chinese-pancakes-black-background-top-view_89816-40609.jpg",
  },
  {
    name: "Oysters Rockefeller",
    image:
      "https://howtofeedaloon.com/wp-content/uploads/2015/09/Oysters-Rockefeller-IG-500x500.jpg",
  },
  {
    name: "Sushi Omakase",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/10/20172948/mahmoud-fawzy-YnVaHqgpPLA-unsplash-1600x900.jpg",
  },
  {
    name: "Escargot",
    image:
      "https://st4.depositphotos.com/4590583/41356/i/450/depositphotos_413569036-stock-photo-escargots-bourgogne-baked-snails-garlic.jpg",
  },
  {
    name: "Chateaubriand Steak",
    image:
      "https://newyorksteak.com/cdn/shop/products/CHATEAIMAGE.jpg?v=1670464818&width=1946",
  },
];

export const spaServices = [
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/372364790.jpg?k=2f54ef94c8b41a1e1b6b53d8190a7a4e321019726273262be0eecbe831095dce&o=&hp=1",
    name: "Oasis Pool",
  },
  {
    image:
      "https://www.compasspools.com.au/wp-content/uploads/Compass-Pools-Australia-Building-Infinity-Pools-6.jpg",
    name: "Infinity Horizon Pool",
  },
  {
    image: "https://www.thermea.ca/uploads/sites/3/2022/03/Artboard-2-1.jpg",
    name: "Spa Treatments and Wellness",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/interior-of-finnish-sauna-classic-wooden-sauna-royalty-free-image-1677879860.jpg",
    name: "Traditional Banya Saunas",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/E5QUmRJs6zUwiVyEzvXupm.jpg",
    name: "Baths",
  },
];
