class ActiveProjects {
  activeProjects = document.getElementById('active-projects').lastElementChild;
  constructor() {
    this.components = [
      {
        finishCouse: document.getElementById('p1'),
        MoreInfo: document.getElementById('p1').querySelector('button'),
        finish: document.getElementById('p1').lastElementChild,
      },
      {
        buyGroceries: document.getElementById('p2'),
        moreInfo: document.getElementById('p2').querySelector('button'),
        finish: document.getElementById('p2').lastElementChild,
      },
    ];
  }

  finish() {
    finished.finishedProjects.appendChild(this.parentElement);
    this.textContent = 'Activate';
    this.removeEventListener('click', finish);
    this.addEventListener('click', active);
  }
}
class FinishedProjects {
  finishedProjects =
    document.getElementById('finished-projects').lastElementChild;
  bookHotel = document.getElementById('p3');
  MoreInfoBH = this.bookHotel.querySelector('button');
  finishBH = this.bookHotel.lastElementChild;
}

const activated = new ActiveProjects();
const finished = new FinishedProjects();

activated.finishFC.addEventListener('click', finish);
activated.MoreInfoFC.addEventListener('click', moreInfo);
activated.finishBG.addEventListener('click', finish);
activated.MoreInfoBG.addEventListener('click', moreInfo);
finished.finishBH.addEventListener('click', active);
finished.MoreInfoBH.addEventListener('click', moreInfo);

function finish() {
  finished.finishedProjects.appendChild(this.parentElement);
  this.textContent = 'Activate';
  this.removeEventListener('click', finish);
  this.addEventListener('click', active);
}

function moreInfo() {
  alert(this.parentElement.dataset.extraInfo);
}

function active() {
  activated.activeProjects.appendChild(this.parentElement);
  this.textContent = 'Finish';
  this.removeEventListener('click', active);
  this.addEventListener('click', finish);
}
