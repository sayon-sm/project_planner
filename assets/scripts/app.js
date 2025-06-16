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

const active = new ActiveProjects();
const finish = new FinishedProjects();

active.finishFC.addEventListener('click', remove);
active.MoreInfoFC.addEventListener('click', moreInfo);
active.finishBG.addEventListener('click', remove);
active.MoreInfoBG.addEventListener('click', moreInfo);
finish.finishBH.addEventListener('click', remove);
finish.MoreInfoBH.addEventListener('click', moreInfo);

function remove() {
  finish.finishedProjects.appendChild(this.parentElement);
  this.textContent = 'Activate';
  console.log(this);
}

function moreInfo() {
  alert(this.parentElement.dataset.extraInfo);
  console.log(this);
}
