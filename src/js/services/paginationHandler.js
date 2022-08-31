export class PaginationHandler {
  rootElement = '';
  totalPages = 1;
  currentPage = 1;
  currentItem = '';
  paginationObservers = [];
  pageItems = [0];
  itemsCarrouselElement = '';
  arrowLeftElement = '';
  arrowRightElement = '';
  dotsLeftElement = '';
  dotsRightElement = '';
  positionOfCarrousel = 0;

  constructor(currentPage = 1, totalPages, root) {
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.root = root;
  }

  markupPagination = () => {
    let markup = '';

    if (this.totalPages <= 9) {
      markup = `<div class="pagination__wrap">
              <div class="pagination__item-arrow pagination__item-arrow--left"></div>`;
      for (let i = 1; i <= this.totalPages; i += 1) {
        markup = markup + `<div class="pagination__item">${i}</div>`;
      }
      markup =
        markup +
        `<div class="pagination__item-arrow pagination__item-arrow--right"></div>
    </div>`;
    } else {
      markup = `<div class="pagination__wrap">
      <div class="pagination__item-arrow pagination__item-arrow--left"></div>
      <div class="pagination__item pagination__item--first">1</div>
      <div class="pagination__wrap--dots">
        <div class="pagination__item pagination__item--second">2</div>
        <div class="pagination__dots pagination__dots--left invisible">...</div>
        <div class="pagination__wrap--carrousel">
          <div class="pagination__carrousel">`;

      for (let i = 3; i <= this.totalPages - 2; i += 1) {
        markup =
          markup +
          `<div class="pagination__item pagination__item--carrousel">${i}</div>`;
      }

      markup =
        markup +
        `</div>
      </div>
      <div class="pagination__dots pagination__dots--right">...</div>
      <div class="pagination__item pagination__item--prelast">${
        this.totalPages - 1
      }</div>
      </div>
      <div class="pagination__item pagination__item--last">${
        this.totalPages
      }</div>
      <div class="pagination__item-arrow pagination__item-arrow--right"></div>
    </div>`;
    }
    return markup;
  };

  renderPagination() {
    console.log('render with currentPage: ', this.currentPage);
    this.root.innerHTML = this.markupPagination();

    this.arrowLeftElement = this.root.querySelector(
      '.pagination__item-arrow--left'
    );
    this.arrowRightElement = this.root.querySelector(
      '.pagination__item-arrow--right'
    );

    this.addingListenerToItems();
    this.addingListenerToArrowButton();

    if (this.totalPages > 9) {
      this.itemsCarrouselElement = this.root.querySelector(
        '.pagination__carrousel'
      );
      this.dotsLeftElement = this.root.querySelector('.pagination__dots--left');
      this.dotsRightElement = this.root.querySelector(
        '.pagination__dots--right'
      );
    }
  }

  setViewPagination = () => {
    if (this.currentPage === 1) {
      this.arrowLeftElement.classList.add('hidden');
    } else {
      this.arrowLeftElement.classList.remove('hidden');
    }
    if (this.currentPage === this.totalPages) {
      this.arrowRightElement.classList.add('hidden');
    } else {
      this.arrowRightElement.classList.remove('hidden');
    }

    if (this.totalPages <= 9) return;

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
    this.currentPage += 1;
    this.currentItem = this.pageItems[this.currentPage];
    this.makeItemIsCurrent(this.currentItem);
    this.pageChanged(this.currentPage);
  };

  changePageDown = () => {
    this.resetCurrentItem();
    this.currentPage -= 1;
    this.currentItem = this.pageItems[this.currentPage];
    this.makeItemIsCurrent(this.currentItem);
    this.pageChanged(this.currentPage);
  };

  apdateCurrentPage = event => {
    this.resetCurrentItem();
    this.currentPage = Number(event.target.innerHTML);
    this.makeItemIsCurrent(event.target);
    this.setViewPagination();
    this.pageChanged(this.currentPage);
  };

  calculateCarrouselPosition = () => {
    if (this.currentPage < 5) return 0;
    if (this.totalPages - this.currentPage < 4)
      return -(this.totalPages - 9) * 45;
    return 135 - (this.currentPage - 2) * 45;
  };

  moveItemsCarrousel = () => {
    this.itemsCarrouselElement.style.transform = `translatex(${this.calculateCarrouselPosition()}px)`;
  };

  addingListenerToItems = () => {
    document.querySelectorAll('.pagination__item').forEach(item => {
      this.pageItems.push(item);
      item.addEventListener('click', this.apdateCurrentPage);
    });
  };

  addingListenerToArrowButton = () => {
    this.arrowLeftElement.addEventListener('click', this.changePageDown);
    this.arrowRightElement.addEventListener('click', this.changePageUp);
  };

  makeItemIsCurrent = item => {
    item.style.backgroundColor = '#FF6B08';
    item.style.borderRadius = '5px';
    item.style.color = '#ffffff';
  };

  resetCurrentItem = () => {
    this.pageItems[this.currentPage].style.backgroundColor = '#ffffff';
    this.pageItems[this.currentPage].style.color = '#000000';
  };

  initPagination = () => {
    if (this.totalPages === 1) return;

    this.renderPagination();
    this.currentItem = this.pageItems[this.currentPage];
    this.makeItemIsCurrent(this.currentItem);
    if (this.totalPages > 9) this.moveItemsCarrousel();
    this.setViewPagination();
  };

  pageChanged(currentPage) {
    for (let i = 0; i < this.paginationObservers.length; i++) {
      if (this.paginationObservers[i].eventName === 'pageChanged') {
        this.paginationObservers[i].listener(currentPage);
      }
    }
  }

  addEventListener = (eventName, listener) => {
    this.paginationObservers.push({ eventName, listener });
  };
}
