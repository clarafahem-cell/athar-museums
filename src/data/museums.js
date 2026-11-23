
import grandMuseum from "../assets/images/grand-museum.jpg";
import egyptianMuseum from "../assets/images/egyptian-museum.jpg";
import civilizationMuseum from "../assets/images/civilization-museum.jpg";
import luxorMuseum from "../assets/images/luxor-museum.jpg";
import islamicArtMuseum from "../assets/images/islamic-art-museum.jpg";
import nubianMuseum from "../assets/images/nubian-museum.jpg";

const museums = [
  {
    id: 1,
    name: "Grand Egyptian Museum",
    city: "Giza",
    type: "National Museum",
    popularity: 100,
    description:
      "A world-class museum featuring ancient Egyptian artifacts and the complete collection of King Tutankhamun's treasures.",
    image: grandMuseum,
  },
  {
    id: 2,
    name: "The Egyptian Museum",
    city: "Cairo",
    type: "National Museum",
    popularity: 95,
    description:
      "One of the most famous museums in Egypt, housing thousands of ancient Egyptian artifacts from different historical periods.",
    image: egyptianMuseum,
  },
  {
    id: 3,
    name: "National Museum of Egyptian Civilization",
    city: "Cairo",
    type: "National Museum",
    popularity: 92,
    description:
      "A museum presenting the history of Egyptian civilization from prehistoric times to the modern era, including the Royal Mummies Hall.",
    image: civilizationMuseum,
  },
  {
    id: 4,
    name: "Luxor Museum",
    city: "Luxor",
    type: "Archaeological Museum",
    popularity: 84,
    description:
      "A distinguished museum displaying ancient Egyptian statues, royal artifacts, and archaeological discoveries from Luxor.",
    image: luxorMuseum,
  },
  {
    id: 5,
    name: "Museum of Islamic Art",
    city: "Cairo",
    type: "Specialized Museum",
    popularity: 78,
    description:
      "A remarkable collection of Islamic art, including manuscripts, ceramics, textiles, metalwork, and historical objects.",
    image: islamicArtMuseum,
  },
  {
    id: 6,
    name: "Nubian Museum",
    city: "Aswan",
    type: "Specialized Museum",
    popularity: 75,
    description:
      "A museum dedicated to Nubian history, culture, traditions, and archaeological heritage.",
    image: nubianMuseum,
  },
];

export default museums;
