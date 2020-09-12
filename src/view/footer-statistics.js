import AbstractView from "./abstract.js";

const createSiteFooterStatistics = () =>{
  return (
    `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`
  );
};


export default class FooterStatistics extends AbstractView  {

  getTemplate() {
    return createSiteFooterStatistics();
  }
}
