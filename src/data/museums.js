
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
    nameAr: "المتحف المصري الكبير",
    city: "Giza",
    cityAr: "الجيزة",
    type: "National Museum",
    typeAr: "متحف قومي",
    popularity: 100,
    description:
      "A world-class museum featuring ancient Egyptian artifacts and the complete collection of King Tutankhamun's treasures.",
    descriptionAr:
      "متحف عالمي يضم مجموعة متميزة من الآثار المصرية القديمة ومجموعة كنوز الملك توت عنخ آمون الكاملة.",
    image: grandMuseum,
  },
  {
    id: 2,
    name: "The Egyptian Museum",
    nameAr: "المتحف المصري",
    city: "Cairo",
    cityAr: "القاهرة",
    type: "National Museum",
    typeAr: "متحف قومي",
    popularity: 95,
    description:
      "One of the most famous museums in Egypt, housing thousands of ancient Egyptian artifacts from different historical periods.",
    descriptionAr:
      "واحد من أشهر المتاحف في مصر، ويضم آلاف القطع الأثرية المصرية القديمة من عصور تاريخية مختلفة.",
    image: egyptianMuseum,
  },
  {
    id: 3,
    name: "National Museum of Egyptian Civilization",
    nameAr: "المتحف القومي للحضارة المصرية",
    city: "Cairo",
    cityAr: "القاهرة",
    type: "National Museum",
    typeAr: "متحف قومي",
    popularity: 92,
    description:
      "A museum presenting the history of Egyptian civilization from prehistoric times to the modern era, including the Royal Mummies Hall.",
    descriptionAr:
      "متحف يعرض تاريخ الحضارة المصرية من عصور ما قبل التاريخ وحتى العصر الحديث، ويضم قاعة المومياوات الملكية.",
    image: civilizationMuseum,
  },
  {
    id: 4,
    name: "Luxor Museum",
    nameAr: "متحف الأقصر",
    city: "Luxor",
    cityAr: "الأقصر",
    type: "Archaeological Museum",
    typeAr: "متحف أثري",
    popularity: 84,
    description:
      "A distinguished museum displaying ancient Egyptian statues, royal artifacts, and archaeological discoveries from Luxor.",
    descriptionAr:
      "متحف متميز يعرض تماثيل مصرية قديمة وقطعًا أثرية ملكية واكتشافات أثرية من مدينة الأقصر.",
    image: luxorMuseum,
  },
  {
    id: 5,
    name: "Museum of Islamic Art",
    nameAr: "متحف الفن الإسلامي",
    city: "Cairo",
    cityAr: "القاهرة",
    type: "Specialized Museum",
    typeAr: "متحف متخصص",
    popularity: 78,
    description:
      "A remarkable collection of Islamic art, including manuscripts, ceramics, textiles, metalwork, and historical objects.",
    descriptionAr:
      "مجموعة مميزة من الفنون الإسلامية، تشمل المخطوطات والخزف والمنسوجات والأعمال المعدنية والقطع التاريخية.",
    image: islamicArtMuseum,
  },
  {
    id: 6,
    name: "Nubian Museum",
    nameAr: "متحف النوبة",
    city: "Aswan",
    cityAr: "أسوان",
    type: "Specialized Museum",
    typeAr: "متحف متخصص",
    popularity: 75,
    description:
      "A museum dedicated to Nubian history, culture, traditions, and archaeological heritage.",
    descriptionAr:
      "متحف مخصص لتاريخ النوبة وثقافتها وتقاليدها وتراثها الأثري.",
    image: nubianMuseum,
  },
];

export default museums;
