import { IInnerContent } from "interfaces";
import { menuContentEn, menuContentHb, menuContentRu } from "./menu.content";

const address = "Natalie 23 str, Eilat";
const phone = "972-54-283-07777";
const email = "nataliecakes@gmail.com";
const rights =
  "Natalie Cakes, all rights reserved. Designed and developed by Andrew Shmorhun. 2023";

const contentEn: IInnerContent = {
  // Navigation
  about: "about",
  contacts: "contacts",
  makeSweet: "make sweet!",
  // Hero
  mainHeader: "Make your life sweet!",
  heroTagline:
    "Delight yourself and your loved ones with birthday cakes from famous chefs, as well as from recipes and classic combinations worked out over the years.",
  slogan: "Choose the way",
  heroSelectors: {
    birthdayCake: "birthday cakes",
    cakesAndPies: "cakes & pies",
    cupCakes: "cup cakes",
    gingerBread: "gingerbread",
  },
  /// Info
  infoHeader: "information",
  ingredients: "ingredients",
  ingredientsText: {
    h1: "Only high quality",
    p1: "In our menu you will find cakes, both from famous chefs, as well as our recipes developed over the years and classic combinations. We use only high-quality ingredients - 82% butter, animal origin, high-quality Spanish and Belgian chocolate, German cream cheese and puree of natural berries and fruits.",
    h2: "We don't use",
    p2: "We do not use preservatives, stabilizers, aromatizers, flavor enhancers or emulsifiers.",
  },
  design: "design",
  designText: {
    h1: "Base Decorations",
    p1: "Depending on the wishes, the cake can be of any color or shade, mousse cakes are covered with a mirror glaze, sponge cakes with cream based on cream cheese. The decoration price includes a laconic décor, it can be a small composition of pasta, bizet, a simple chocolate décor(feathers, spheres), an inscription on the cake with white or dark chocolate.",
    h2: "Author's decor",
    p2: "Additional décor is paid separately - fresh flowers, berry décor, thematic images printing, author's gingerbread, glaze drawing etc..",
  },
  order: "order",
  orderText: {
    h1: "How to order?",
    p1: "Orders are accepted 3-7 days in advance, from 10:00 to 18:00, informing in advance the date for which the cake is needed. For a short period of time, we can offer you several free toppings from our menu.",
    h2: "Delivery and pickup.",
    p2: "By prior arrangement, you can pick up cakes from 10:00 to 18:00 or order delivery in Eilat. Delivery is calculated individually.",
  },
  important: "important",
  importantText: {
    h1: "prepayment 50%",
    p1: "If you have chosen dark colors of glaze or cream, be prepared that they can leave marks and stain the tongue. We use quality food coloring, but they are still coloring!",
    p2: "Some décor (balls, pasta), so as not to fall during transportation, can be attached to toothpicks, be careful when cutting and before giving to children!",
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },

  footerOther: {
    contacts: "contacts",
    question: "still have a question?",
    callBack: "We will call you back!",
    follow: "follow",
    menu: "menu",
    cart: ["biscuits cakes", "classical cakes", "cup cakes", "mousse cakes"],
    rights,
  },
  callBackBtn: "Take a call",
  //Menu
  menuTitle: "menu",
  menuContent: menuContentEn,
  sweetness: "sweetness",
  sourness: "sourness",
  taste: "taste accent",
};

///////////////
/// RUSSIAN ///
///////////////

const contentRu: IInnerContent = {
  // Navigation
  about: "про нас",
  contacts: "контакты",
  makeSweet: "подсластить!",
  // Hero
  mainHeader: "Порадуй себя и своих близких!",
  heroTagline:
    "Порадуй себя и своих близких празднечными тортами как от известных шеф-поваров, так и от отработанныч годами рецептами и классическими сочетаниями.",
  slogan: "Сделай себе праздник",
  heroSelectors: {
    birthdayCake: "авторские торты",
    cakesAndPies: "торты & пироги",
    cupCakes: "капкейки",
    gingerBread: "пряники",
  },
  /// Info
  infoHeader: "информация",
  ingredients: "ингредиенты",
  ingredientsText: {
    h1: "Только лучшие продукты",
    p1: "В нашем меню вы найдете торты, как от известных шеф-поваров, так и отработанные годами рецепты и классические сочетания. Мы используем только качественные ингредиенты - 82% сливочного масла животного происхождения, качественный испанский и бельгийский шоколад, немецкий сливочный сыр и пюре из натуральных ягод и фруктов.",
    h2: "Не используем",
    p2: "Мы не используем консерванты, стабилизаторы, ароматизаторы, усилители вкуса и эмульгаторы.",
  },
  design: "дизайн",
  designText: {
    h1: "Базовый декор",
    p1: "В зависимости от пожеланий торт может быть любого цвета и оттенка, муссовые коржи покрываются зеркальной глазурью, бисквитные с кремом на основе сливочного сыра. В стоимость украшения входит лаконичный декор, это может быть небольшая композиция из макарон, бизе, простой шоколадный декор (перья, шары), надпись на торте белым или темным шоколадом.",
    h2: "Авторский декор",
    p2: "Дополнительный декор оплачивается отдельно - живые цветы, ягодный декор, печать тематических изображений, авторские пряники, рисунок глазурью и т.д.",
  },
  order: "Заказ",
  orderText: {
    h1: "Как заказывать?",
    p1: "Заказы принимаются за 3-7 дней, с 10:00 до 18:00, сообщая заранее дату, на которую нужен торт. В течение короткого периода времени мы можем предложить вам несколько доступных начинок из нашего меню.",
    h2: "Доставка и самовывоз.",
    p2: "По предварительной договоренности вы можете забрать торты с 10:00 до 18:00 или заказать доставку в Эйлате. Доставка рассчитывается индивидуально.",
  },
  important: "Важно!",
  importantText: {
    h1: "предоплата 50%",
    p1: "Если вы выбрали темные цвета глазури или крема, будьте готовы, что они могут оставлять следы и окрашивать язык. Мы используем качественные пищевые красители, но они все равно красят!",
    p2: "Некоторый декор (шарики, макароны), чтобы не упасть при транспортировке, можно крепить на зубочистки, будьте осторожны при нарезке и перед тем, как давать детям!",
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },
  footerOther: {
    contacts: "контакты",
    question: "еще есть вопросы?",
    callBack: "Мы перезвоним вам!",
    follow: "подписаться",
    menu: "меню",
    cart: ["бисквитные торты", "классические торты", "чизкейки", "муссы"],
    rights,
  },
  callBackBtn: "обратный вызов",
  //Menu
  menuTitle: "меню",
  menuContent: menuContentRu,
  sweetness: "сладость",
  sourness: "кислинка",
  taste: "вкусовой акцент",
};

//////////////
/// HEBREW ///
//////////////

const contentHb: IInnerContent = {
  // Navigation
  about: "אודות",
  contacts: "צור קשר",
  makeSweet: "תמתיקו!",
  // Hero
  mainHeader: "העניגו את עצמכם ואת יקיריכם!",
  heroTagline:
    "העניגו את עצמכם ואת יקיריכם עם עוגות חגיגיות מכל השף המוכרים ומתכונים קלאסיים עם שנים של התמחות ושילובים קלאסיים.",
  slogan: "צרו לעצמכם חגיגה",
  heroSelectors: {
    birthdayCake: "עוגות מעצבים",
    cakesAndPies: "עוגות ופאי",
    cupCakes: "קאפקייקים",
    gingerBread: "עוגות בזנבות",
  },
  /// Info
  infoHeader: "מידע",
  ingredients: "חומרי גלם",
  ingredientsText: {
    h1: "רק מוצרים מעולים",
    p1: "בתפריט שלנו תמצאו עוגות מכל השף המוכרים ומתכונים קלאסיים. אנחנו משתמשים רק בחומרי גלם איכותיים - 82% חמאת בעלי חיים, שוקולד איכותי מספרד ובלגיה, גבינת שמנת גרמנית ופיורה מפירות ועשבים טבעיים.",
    h2: "אין בשימוש",
    p2: "אנחנו לא משתמשים בשומרים, יציבנים, חומרי טעם, מחזיקי טעם ואמולגטורים.",
  },
  design: "עיצוב",
  designText: {
    h1: "עיצוב בסיסי",
    p1: "לפי צורכים העוגה יכולה להיות בכל צבע וגוון, גבי המוס מכוסה בציפוי מראה, עוגת ביסקוויט עם קרם מבוסס על גבינת שמנת. בעלות העיצוב המינימליסטי כולל קישוט פשוט של מאקרון, ביזה, קישוט שוקולד פשוט (נוצות, כדורים), כיתוב על העוגה בשוקולד לבן או כהה.",
    h2: "עיצוב מעוצב",
    p2: "העיצוב הנוסף נשלם בנפרד - פרחים חיים, קישוט פרי, הדפסת תמונות תמציתיות, עוגיות מעצבות, ציור על התפריט וכו '",
  },
  order: "הזמנה",
  orderText: {
    h1: "איך להזמין?",
    p1: "ההזמנות מתקבלות בימים 3-7, בין השעות 10:00 עד 18:00, עם הזמנה מראש לתאריך שתרצו שהעוגה תהיה זמינה. בתקופה זו נוכל להציע לך כמה תפריטים זמינים מתוך התפריט שלנו.",
    h2: "משלוח ואיסוף עצמי.",
    p2: "בהסכמה מראש תוכלו לאסוף עוגות בין השעות 10:00 עד 18:00 או להזמין משלוח באילת. מחיר המשלוח מחושב באופן אישי.",
  },
  important: "חשוב!",
  importantText: {
    h1: "הפיקדון 50%",
    p1: "אם בחרת בגווני ציפוי או קרם כהים, התכוננו לעוברים ומיוחדים שהם יכולים להשאיר כתמים ולצבוע את הלשון. אנחנו משתמשים בצבעי מזון איכותיים, אך הם עדיין מצביעים!",
    p2: "חלק מהעיצוב (בלונים, מקרונים), כדי שלא ייפלו בתהליך ההובלה, ניתן להתקין על קיסם, הסתכלות זהירה בתהליך החיתוך ולפני שאתה נותן לילדים!",
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },
  footerOther: {
    contacts: "צור קשר",
    question: "עוד שאלות?",
    callBack: "נחזור אליך!",
    follow: "הירשם",
    menu: "תפריט",
    cart: ["עוגות ביסקוויט", "עוגות קלאסיות", "גביניות", "מוסים"],
    rights,
  },
  callBackBtn: "התקשרו אליי",
  //Menu
  menuTitle: "תפריט",
  menuContent: menuContentHb,
  sweetness: "מתיקות",
  sourness: "חמיצות",
  taste: "תוספת טעם",
};

export const contentsData = { contentEn, contentRu, contentHb };
