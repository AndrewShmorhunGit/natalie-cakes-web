export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
}

export interface IInnerContent {
  about: string;
  contacts: string;
  makeSweet: string;
  mainHeader: string;
  text: string;
  menu: string;
  birthdayCake: string;
  cakesAndPies: string;
  cupCakes: string;
  gingerBread: string;
  ingredients: string;
  igrText: {
    p1: string;
    p2: string;
  };
  design: string;
}

export interface IActiveBtnStyle {
  backgroundColor: string;
  color: string;
}

export interface IContentBox {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  en: string;
  ru: string;
  activeCheck: any;
  activeStyle: IActiveBtnStyle;
}