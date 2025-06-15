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

// console.log(
//   active.activeProjects,
//   finish.finishedProjects,
//   active.finishCourse,
//   active.MoreInfoFC,
//   active.finishFC,
//   active.buyGroceries,
//   active.MoreInfoBG,
//   active.finishBG,
//   finish.bookHotel,
//   finish.MoreInfoBH,
//   finish.finishBH
// );
