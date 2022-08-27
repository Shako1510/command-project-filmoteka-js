export class PaginationHandler {
  totalPages = null;
  paginationObservers = [];

  constructor(totalPages) {
    this.totalPages = totalPages;
  }

  markupPagination = () => {
    return `<div class="pagination__wrap">
      <div class="pagination__item pagination__item--arrow-left"></div>
      <div class="pagination__item pagination__item--first">1</div>
      <div class="pagination__item pagination__item--second">2</div>

      <div class="pagination__wrap--carrousel">
        <div class="pagination__carrousel">
          <div
            class="pagination__item pagination__item--carrousel"
            data-carrouselid="01"
          >
            3
          </div>
          <div class="pagination__item pagination__item--carrousel">4</div>
          <div class="pagination__item pagination__item--carrousel">5</div>
          <div class="pagination__item pagination__item--carrousel">6</div>
          <div class="pagination__item pagination__item--carrousel">7</div>
          <div class="pagination__item pagination__item--carrousel">8</div>
          <div class="pagination__item pagination__item--carrousel">9</div>
          <div class="pagination__item pagination__item--carrousel">10</div>
          <div class="pagination__item pagination__item--carrousel">11</div>
        </div>
      </div>

      <div class="pagination__item pagination__item--prelast">...</div>
      <div class="pagination__item pagination__item--last">12</div>
      <div class="pagination__item pagination__item--arrow-right"></div>
    </div>`;
  };

  renderPagination(root) {
    root.innerHTML = this.markupPagination();
  }

  addingListenerToItems = () => {
    document.querySelectorAll('.pagination__item').forEach(item =>
      item.addEventListener('click', event => {
        event.target.style.backgroundColor = 'yellow';
        this.pageChanged(event.target.innerHTML);
      })
    );
  };

  initPagination = root => {
    this.renderPagination(root);
    this.addingListenerToItems();
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
