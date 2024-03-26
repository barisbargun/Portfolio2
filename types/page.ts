interface IPageInfo {
  creatorName: string;
}


/**
 * 
 * For navbar
 * 
 */
interface IMenuLink {
  name: string;
  link: string;
}


/**
 * 
 * For home page
 * 
 */
interface IHomePage {
  img:string;
  title:string;
  btn1:IMenuLink;
  btn2:IMenuLink;
  behindText:string;
}


/**
 * 
 * For service page
 * 
 */
interface IServicePage {
  desc:string;
  img:string;
  title1:string;
  title2:string;
  btnText:string;
  ideas:IIdea[];
}

interface IIdea {
  title:string;
  desc:string;
}


/**
 * 
 * For portfolio page
 * 
 */
interface IPortfolioPage {
  title:string;
  projects:IProject[];
}

interface IProject {
  img:string;
  title:string;
  desc:string;
  source:string;
  url:string;
}


/**
 * 
 * For contact page
 * 
 */
interface IContactPage {
  email:string;
  address:string;
  phone:string;
  github:string;
  linkedin:string;
  svg:string;
}