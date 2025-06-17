class ActiveProjects {
  activeProjects = document.getElementById('active-projects').lastElementChild;
  finishCourse = document.getElementById('p1');
  MoreInfoFC = this.finishCourse.querySelector('button');
  finishFC = this.finishCourse.lastElementChild;
  buyGroceries = document.getElementById('p2');
  MoreInfoBG = this.buyGroceries.querySelector('button');
  finishBG = this.buyGroceries.lastElementChild;
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
  console.log(this);
}

function moreInfo() {
  alert(this.parentElement.dataset.extraInfo);
  console.log(this);
}

function active() {
  activated.activeProjects.appendChild(this.parentElement);
  this.textContent = 'Finish';
  console.log(this);
}
