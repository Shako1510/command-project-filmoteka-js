export class PaginationHandler {
  rootElement = '';
  totalPages = null;
  currentPage = null;
  paginationObservers = [];
  pageItems = [0];
  itemsCarrouselElement = '';
  positionOfCarrousel = 0;

  constructor(totalPages, root) {
    this.totalPages = totalPages;
    this.root = root;
  }

  markupPagination = () => {
    return `<div class="pagination__wrap">
      <div class="pagination__item--arrow-left"><--</div>
      <div class="pagination__item pagination__item--first">1</div>
      <div class="pagination__wrap--dots">
        <div class="pagination__item pagination__item--second">2</div>
        <div class="pagination__dots pagination__dots--left invisible">...</div>
        <div class="pagination__wrap--carrousel">
            
            <div class="pagination__carrousel">
            <div class="pagination__item pagination__item--carrousel">3</div>
            <div class="pagination__item pagination__item--carrousel">4</div>
            <div class="pagination__item pagination__item--carrousel">5</div>
            <div class="pagination__item pagination__item--carrousel">6</div>
            <div class="pagination__item pagination__item--carrousel">7</div>
            <div class="pagination__item pagination__item--carrousel">8</div>
            <div class="pagination__item pagination__item--carrousel">9</div>
            <div class="pagination__item pagination__item--carrousel">10</div>
            </div>
  
      </div>
      <div class="pagination__dots pagination__dots--right">...</div>
      <div class="pagination__item pagination__item--prelast">11</div>
      </div>
      <div class="pagination__item pagination__item--last">12</div>
      <div class="pagination__item--arrow-right">--></div>
    </div>`;
  };

  renderPagination() {
    this.root.innerHTML = this.markupPagination();
    if (this.totalPages > 9)
      this.itemsCarrouselElement = this.root.querySelector(
        '.pagination__carrousel'
      );
    console.log('carrouselElement: ', this.itemsCarrouselElement);
  }

  apdateCurrentPage = event => {
    this.resetCurrentItem();
    this.makeItemIsCurrent(event.target);
    this.pageChanged(event.target.innerHTML);
  };

  moveItemsCarrousel = () => {
    this.positionOfCarrousel += 1;
    let step = this.positionOfCarrousel;
    this.itemsCarrouselElement.style.transform = `translatex(-${45 * step}px)`;
    console.log('move!');
  };

  addingListenerToItems = () => {
    document.querySelectorAll('.pagination__item').forEach(item => {
      this.pageItems.push(item);
      item.addEventListener('click', this.apdateCurrentPage);
      item.addEventListener('click', this.moveItemsCarrousel);
    });
  };

  makeItemIsCurrent = item => {
    this.currentPage = item.innerHTML;
    item.style.backgroundColor = 'yellow';
  };

  resetCurrentItem = () => {
    this.pageItems[this.currentPage].style.backgroundColor = 'tomato';
  };

  initPagination = () => {
    this.renderPagination();
    this.addingListenerToItems();
    this.makeItemIsCurrent(this.pageItems[1]);
  };

  pageChanged(pageNumber) {
    for (let i = 0; i < this.paginationObservers.length; i++) {
      if (this.paginationObservers[i].eventName === 'pageChanged') {
        this.paginationObservers[i].listener(pageNumber);
      }
    }
  }

  addEventListener = (eventName, listener) => {
    this.paginationObservers.push({ eventName, listener });
  };
}
