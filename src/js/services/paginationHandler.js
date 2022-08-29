export class PaginationHandler {
  rootElement = '';
  totalPages = null;
  currentPage = null;
  currentItem = '';
  previousPage = null;
  paginationObservers = [];
  pageItems = [0];
  itemsCarrouselElement = '';
  arrowLeftElement = '';
  arrowRightElement = '';
  dotsLeftElement = '';
  dotsRightElement = '';
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

    this.arrowLeftElement = this.root.querySelector(
      '.pagination__item--arrow-left'
    );
    this.arrowRightElement = this.root.querySelector(
      '.pagination__item--arrow-right'
    );

    this.addingListenerToItems();
    this.addingListenerToArrowButton();

    if (this.totalPages > 9) {
      this.itemsCarrouselElement = this.root.querySelector(
        '.pagination__carrousel'
      );
      this.addingListenerToMoveItems();
      this.dotsLeftElement = this.root.querySelector('.pagination__dots--left');
      this.dotsRightElement = this.root.querySelector(
        '.pagination__dots--right'
      );
      console.log('carrouselElement: ', this.itemsCarrouselElement);
    }
  }

  setViewPagination = () => {
    if (this.currentPage === 1) {
      this.arrowLeftElement.classList.add('invisible');
    } else {
      this.arrowLeftElement.classList.remove('invisible');
    }
    if (this.currentPage === this.totalPages) {
      this.arrowRightElement.classList.add('invisible');
    } else {
      this.arrowRightElement.classList.remove('invisible');
    }
    if (this.currentPage > 5) {
      this.dotsLeftElement.classList.remove('invisible');
    } else {
      this.dotsLeftElement.classList.add('invisible');
    }
    if (this.totalPages - this.currentPage >= 5) {
      this.dotsRightElement.classList.remove('invisible');
    } else {
      this.dotsRightElement.classList.add('invisible');
    }
  };

  changePageUp = () => {
    this.resetCurrentItem();
    this.currentItem = this.pageItems[this.currentPage + 1];
    this.makeItemIsCurrent(this.currentItem);
    this.moveItemsCarrousel();
    this.setViewPagination();
    this.pageChanged(this.currentPage);
  };

  changePageDown = () => {
    this.resetCurrentItem();
    this.currentItem = this.pageItems[this.currentPage - 1];
    this.makeItemIsCurrent(this.currentItem);
    this.moveItemsCarrousel();
    this.setViewPagination();
    this.pageChanged(this.currentPage);
  };

  apdateCurrentPage = event => {
    this.resetCurrentItem();
    this.makeItemIsCurrent(event.target);
    this.setViewPagination();
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
    this.arrowLeftElement.addEventListener('click', this.changePageDown);
    this.arrowRightElement.addEventListener('click', this.changePageUp);
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
    this.setViewPagination();
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
