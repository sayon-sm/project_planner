class Projects {
  constructor(id) {
    this[id] = {
      element: document.getElementById(id),
      moreInfoButton: document.getElementById(id).querySelector('button'),
      button: document.getElementById(id).lastElementChild,
    };
  }
}
class ActiveProjects {
  activeProjects = document.getElementById('active-projects').lastElementChild;
  componentList = [new Projects('p1'), new Projects('p2')];
}
class FinishedProjects {
  finishedProjects =
    document.getElementById('finished-projects').lastElementChild;
  componentList = [new Projects('p3')];
}

class app {
  static activated = new ActiveProjects();
  static finished = new FinishedProjects();

  static button() {
    for (const projects in app) {
      // console.log(this[projects]);
      for (const arr in this[projects]) {
        let p = this[projects];
        // console.log(p[arr]);
        if (Array.isArray(p[arr])) {
          // console.log(p[arr]);
          for (const idx of p[arr]) {
            // console.log(idx);
            for (const key in idx) {
              // console.log(idx[key]);
              for (const k in idx[key]) {
                let q = idx[key];
                let button = q[k];
                // console.log(q[k], k);
                if (k === 'moreInfoButton') {
                  // console.log(k);
                  button.addEventListener('click', this.moreInfo);
                } else if (k === 'button') {
                  let text = button.textContent;
                  console.log(text);
                  if (text === 'Finish') {
                    button.addEventListener('click', this.finish);
                  } else if (text === 'Activate') {
                    button.addEventListener('click', this.active);
                  }
                }
              }
              // console.log(key);
              // }
              //         idx[key].addEventListner('click', this.abc);
              //         console.log(idx, key, idx[key]);
              //         alert('hi');
            }
          }
        }
      }
    }
  }

  static moreInfo() {
    alert(this.parentElement.dataset.extraInfo);
  }

  static finish() {
    console.log(this);
    app.finished.finishedProjects.appendChild(this.parentElement);
    this.textContent = 'Activate';
    this.removeEventListener('click', app.finish);
    this.addEventListener('click', app.active);
  }

  static active() {
    console.log(this);
    app.activated.activeProjects.appendChild(this.parentElement);
    this.textContent = 'Finish';
    this.removeEventListener('click', app.active);
    this.addEventListener('click', app.finish);
  }
}

// const func = new app();
// func.button();
app.button();

// activated.finishFC.addEventListener('click', finish);
// activated.MoreInfoFC.addEventListener('click', moreInfo);
// activated.finishBG.addEventListener('click', finish);
// activated.MoreInfoBG.addEventListener('click', moreInfo);
// finished.finishBH.addEventListener('click', active);
// finished.MoreInfoBH.addEventListener('click', moreInfo);
