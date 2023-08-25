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
export const rooms = [
  {
    image:
      "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ",
    category: "Standard Room",
    noOfBeds: 1,
    bedSize: 140,
    tvSize: 40,
    roomService: true,
    description:
      "Enjoy your stay in our cozy Standard Room, perfect for solo travelers or couples. Unwind in a comfortable queen-sized bed, watch your favorite shows on a 40-inch TV, and take advantage of our room service for a delightful stay. This room is designed to provide all the essentials for a relaxing experience.",
    price: 100.0,
    seaView: false,
    sauna: false,
    complimentaryMeal: false,
  },
  {
    image:
      "https://www.thetranshotel.com/images/editor/images/presidential2.jpg",
    category: "Presidential Suite",
    noOfBeds: 2,
    bedSize: 180,
    tvSize: 55,
    roomService: true,
    description:
      "Indulge in luxury with our Presidential Suite, offering a spacious and elegant living space. The suite features two comfortable king-sized beds, a 55-inch TV for entertainment, and the convenience of room service. Whether you're traveling for business or leisure, this suite promises a lavish experience with a touch of sophistication.",
    price: 250.75,
    seaView: false,
    sauna: true,
    complimentaryMeal: true,
  },
  {
    image:
      "https://www.lujurevillas.com/2015/photos/Bedroom-cropped_REV_23.jpg",
    category: "Premium Villa",
    noOfBeds: 3,
    bedSize: 200,
    tvSize: 65,
    roomService: true,
    description:
      "Experience unparalleled luxury in our Premium Villa, a private oasis nestled within our resort. This spacious villa features three large beds, a sprawling 65-inch TV, and top-notch room service. Enjoy breathtaking sea views and the tropical rain forest behind, right from your villa and unwind in your private sauna after a day of exploration. This is the ultimate escape for those seeking the best of both worlds.",
    price: 500.0,
    seaView: true,
    sauna: true,
    complimentaryMeal: false,
  },
  {
    image:
      "https://dtla.intercontinental.com/wp-content/uploads/2016/12/InterContinental-LA-Downtown_Presidential_Suite_Living_Room_A7116_jpg.jpg",
    category: "Executive Suite",
    noOfBeds: 1,
    bedSize: 160,
    tvSize: 50,
    roomService: true,
    description:
      "Elevate your stay in our Executive Suite, a harmonious blend of comfort and sophistication. This suite features a plush queen-sized bed, a 50-inch TV, and prompt room service. Immerse yourself in the serene sea views right from your suite and rejuvenate in our sauna facilities. With thoughtful amenities and an elegant atmosphere, this suite is designed for discerning travelers.",
    price: 350.5,
    seaView: true,
    sauna: false,
    complimentaryMeal: true,
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200745634.jpg?k=6c0c0e87d1d06c94f0ab6b44c805abd52a869fafb1c2ef30fc5458f27d2fad15&o=&hp=1",
    category: "Family Room",
    noOfBeds: 2,
    bedSize: 120,
    tvSize: 50,
    roomService: true,
    description:
      "Create lasting memories in our Family Room, a spacious haven for your loved ones. With four cozy beds, a 50-inch TV, and convenient room service, this room is perfect for families. Unwind after a day of adventure and take in the captivating resort views. Plus, enjoy complimentary meals that cater to both kids and adults, making your family vacation truly special.",
    price: 180.25,
    seaView: false,
    sauna: false,
    complimentaryMeal: true,
  },
];

console.log(rooms);



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
