export class PaginationHandler {
  rootElement = '';
  totalPages = null;
  currentPage = null;
  currentItem = '';
  previousPage = null;
  paginationObservers = [];
  pageItems = [0];
  itemsCarrouselElement = '';
  positionOfCarrousel = 0;

  constructor(totalPages, root) {
    this.totalPages = totalPages;
    this.root = root;
  }

  markupPagination = () => {
    if (this.totalPages <= 9) {
      let markup = `<div class="pagination__wrap">
              <div class="pagination__item--arrow-left"><--</div>`;
      for (let i = 1; i <= this.totalPages; i += 1) {
        markup =
          markup +
          `<div class="pagination__item pagination__item--first">${i}</div>`;
      }
      markup =
        markup +
        `<div class="pagination__item--arrow-right">--></div>
    </div>`;
      return markup;
    } else {
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
    }
  };

  renderPagination() {
    this.root.innerHTML = this.markupPagination();

    this.addingListenerToItems();
    this.addingListenerToArrowButton();

    if (this.totalPages > 9) {
      this.itemsCarrouselElement = this.root.querySelector(
        '.pagination__carrousel'
      );
      this.addingListenerToMoveItems();
      console.log('carrouselElement: ', this.itemsCarrouselElement);
    }
  }

  changePageUp = () => {
    this.resetCurrentItem();
    this.currentItem = this.pageItems[this.currentPage + 1];
    this.makeItemIsCurrent(this.currentItem);
    this.moveItemsCarrousel();
    this.pageChanged(this.currentPage);
  };

  changePageDown = () => {
    this.resetCurrentItem();
    this.currentItem = this.pageItems[this.currentPage - 1];
    this.makeItemIsCurrent(this.currentItem);
    this.moveItemsCarrousel();
    this.pageChanged(this.currentPage);
  };

  apdateCurrentPage = event => {
    this.resetCurrentItem();
    this.makeItemIsCurrent(event.target);
    this.pageChanged(this.currentPage);
  };

  calculateStep() {
    if (Number(this.currentPage) === 1) {
      console.log('first', this.currentPage, this.totalPages);
      return (this.positionOfCarrousel = 0);
    }

    if (Number(this.currentPage) === this.totalPages) {
      console.log('total', this.currentPage, this.totalPages);
      return (this.positionOfCarrousel = -(this.totalPages - 9) * 45);
    }

    if (this.currentPage - this.previousPage === 1) {
      if (
        Number(
          this.currentPage <= 5 ||
            Number(this.totalPages - this.currentPage) < 4
        )
      ) {
        console.log('no movement', this.currentPage, this.totalPages);
        return this.positionOfCarrousel;
      }

      return (this.positionOfCarrousel -= 45);
    }

    if (this.currentPage - this.previousPage === -1) {
      if (
        Number(
          this.currentPage < 5 ||
            Number(this.totalPages - this.currentPage) <= 4
        )
      ) {
        console.log('no movement', this.currentPage, this.totalPages);
        return this.positionOfCarrousel;
      }

      console.log('<0', this.currentPage, this.totalPages);
      return (this.positionOfCarrousel += 45);
    }

    if (this.currentPage - this.previousPage > 1) {
      if (
        Number(
          this.currentPage <= 5 ||
            Number(this.totalPages - this.currentPage) < 3
        )
      ) {
        console.log('>1 no movement', this.currentPage, this.totalPages);
        return this.positionOfCarrousel;
      }

      console.log('>1', this.currentPage, this.totalPages);
      return Number(this.totalPages - this.currentPage) === 6 ||
        Number(this.totalPages - this.currentPage) === 3
        ? (this.positionOfCarrousel -= 45)
        : (this.positionOfCarrousel -= 90);
    }

    if (this.currentPage - this.previousPage < -1) {
      if (
        Number(
          this.currentPage < 4 ||
            Number(this.totalPages - this.currentPage) <= 4
        )
      ) {
        console.log('<-1 no movement', this.currentPage, this.totalPages);
        return this.positionOfCarrousel;
      }

      console.log('<-1', this.currentPage, this.totalPages);
      return Number(this.currentPage) === 4 ||
        Number(this.totalPages - this.currentPage) === 5
        ? (this.positionOfCarrousel += 45)
        : (this.positionOfCarrousel += 90);
    }
  }

  moveItemsCarrousel = () => {
    this.itemsCarrouselElement.style.transform = `translatex(${this.calculateStep()}px)`;
    console.log('move!');
  };

  addingListenerToItems = () => {
    document.querySelectorAll('.pagination__item').forEach(item => {
      this.pageItems.push(item);
      item.addEventListener('click', this.apdateCurrentPage);
    });
  };

  addingListenerToMoveItems = () => {
    document.querySelectorAll('.pagination__item').forEach(item => {
      item.addEventListener('click', this.moveItemsCarrousel);
    });
  };

  addingListenerToArrowButton = () => {
    document
      .querySelector('.pagination__item--arrow-left')
      .addEventListener('click', this.changePageDown);
    document
      .querySelector('.pagination__item--arrow-right')
      .addEventListener('click', this.changePageUp);
  };

  makeItemIsCurrent = item => {
    this.previousPage = this.currentPage;
    this.currentPage = Number(item.innerHTML);
    item.style.backgroundColor = 'yellow';
  };

  resetCurrentItem = () => {
    this.pageItems[this.currentPage].style.backgroundColor = 'tomato';
  };

  initPagination = () => {
    this.renderPagination();
    this.currentItem = this.pageItems[1];
    this.makeItemIsCurrent(this.currentItem);
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
