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
        const p = this[projects];
        // console.log(p[arr]);
        if (Array.isArray(p[arr])) {
          // console.log(p[arr]);
          for (const idx of p[arr]) {
            // console.log(idx);
            for (const key in idx) {
              console.log(idx[key], key);
              for (const k in idx[key]) {
                const q = idx[key];
                const button = q[k];
                // console.log(q[k], k);
                if (k === 'moreInfoButton') {
                  // console.log(k);
                  button.addEventListener('click', this.moreInfo);
                } else if (k === 'button') {
                  const text = button.textContent;
                  // console.log(text);
                  if (text === 'Finish') {
                    button.addEventListener(
                      'click',
                      this.finish.bind(button, key)
                    );
                  } else if (text === 'Activate') {
                    button.addEventListener(
                      'click',
                      this.active.bind(button, key)
                    );
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

  static finish(key) {
    const index = app.activated.componentList.findIndex(
      (Projects, idx, componentList) => {
        let boolean;
        for (const id in Projects) {
          if (id === key) {
            boolean = true;
          }
        }
        return boolean;
      }
    );
    app.activated.componentList.splice(index, 1);
    if (app.activated.componentList.length === 0) {
      app.activated.activeProjects.remove();
    }
    // console.log(index, this, key);
    // console.log(app.activated.componentList);
    app.finished.finishedProjects.appendChild(this.parentElement);
    this.textContent = 'Activate';
    this.removeEventListener('click', app.finish);
    this.addEventListener('click', app.active);
  }

  static active(key) {
    const index = app.finished.componentList.findIndex(
      (Projects, idx, componentList) => {
        let boolean;
        for (const id in Projects) {
          if (id === key) {
            boolean = true;
          }
        }
        return boolean;
      }
    );
    app.finished.componentList.splice(index, 1);
    if (app.finished.componentList.length === 0) {
      app.finished.finishedProjects.remove();
    }
    // console.log(this, key);
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
