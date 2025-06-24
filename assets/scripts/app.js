'use strict';
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
      for (const arr in this[projects]) {
        const p = this[projects];
        if (Array.isArray(p[arr])) {
          for (const idx of p[arr]) {
            for (const key in idx) {
              for (const k in idx[key]) {
                const q = idx[key];
                const button = q[k];
                if (k === 'moreInfoButton') {
                  button.addEventListener('click', this.moreInfo);
                } else if (k === 'button') {
                  const text = button.textContent;
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
    // const index = app.activated.componentList.findIndex(
    //   (Projects, idx, componentList) => {
    //     let boolean;
    //     for (const id in Projects) {
    //       if (id === key) {
    //         boolean = true;
    //       }
    //     }
    //     return boolean;
    //   }
    // );
    // app.activated.componentList.splice(index, 1);
    // if (app.activated.componentList.length === 0) {
    //   app.activated.activeProjects.remove();
    // }
    // if (app.finished.componentList.length === 0) {
    //   app.finished.finishedProjects.previousElementSibling.after(
    //     app.finished.finishedProjects
    //   );
    // }
    app.finished.finishedProjects.appendChild(this.parentElement);
    this.textContent = 'Activate';
    this.removeEventListener('click', app.finish);
    this.addEventListener('click', app.active);
  }

  static active(key) {
    // const index = app.finished.componentList.findIndex(
    //   (Projects, idx, componentList) => {
    //     let boolean;
    //     for (const id in Projects) {
    //       if (id === key) {
    //         boolean = true;
    //       }
    //     }
    //     return boolean;
    //   }
    // );
    // app.finished.componentList.splice(index, 1);
    // if (app.finished.componentList.length === 0) {
    //   app.finished.finishedProjects.remove();
    // }
    // if (app.activated.componentList.length === 0) {
    //   app.activated.activeProjects.previousElementSibling.after(
    //     app.activated.activeProjects
    //   );
    // }
    app.activated.activeProjects.appendChild(this.parentElement);
    this.textContent = 'Finish';
    this.removeEventListener('click', app.active);
    this.addEventListener('click', app.finish);
  }
}

app.button();
