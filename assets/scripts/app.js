'use strict';

// one single task ie. Finish the Course
class Projects {
  constructor(id) {
    this[id] = {
      element: document.getElementById(id),
      moreInfoButton: document.getElementById(id).querySelector('button'),
      button: document.getElementById(id).lastElementChild,
    };
  }
}

// box that holds the active tasks
class ActiveProjects {
  activeProjects = document.getElementById('active-projects').lastElementChild;
  componentList = [new Projects('p1'), new Projects('p2')];
}

// box that holds the finished tasks
class FinishedProjects {
  finishedProjects =
    document.getElementById('finished-projects').lastElementChild;
  componentList = [new Projects('p3')];
}

class app {
  static activated = new ActiveProjects();
  static finished = new FinishedProjects();

  // method to make buttons functional
  static button() {
    for (const projects in app) {
      // to cycle through class app
      for (const arr in this[projects]) {
        // to cycle through instance of class ActiveProjects & FinishedProjects
        const p = this[projects];
        if (Array.isArray(p[arr])) {
          for (const idx of p[arr]) {
            // to cycle through componentList of ActiveProjects & FinishedProjects
            for (const key in idx) {
              // to cycle through instances of class Projects
              for (const k in idx[key]) {
                // to cycle through object named p1, p2, p3
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

  // functionality of More Info button
  static moreInfo() {
    const tooltip = document.createElement('div');
    tooltip.textContent = this.parentElement.dataset.extraInfo;
    tooltip.classList.add('card');
    const list = this.closest('ul');
    list.append(tooltip);
    tooltip.addEventListener('click', app.clear);
  }

  static clear() {
    this.remove();
  }

  // functionality of Finish button
  static finish(key) {
    app.finished.finishedProjects.appendChild(this.parentElement);
    this.textContent = 'Activate';
    this.removeEventListener('click', app.finish);
    this.addEventListener('click', app.active);
  }

  // functionality of Activate button
  static active(key) {
    app.activated.activeProjects.appendChild(this.parentElement);
    this.textContent = 'Finish';
    this.removeEventListener('click', app.active);
    this.addEventListener('click', app.finish);
  }
}

app.button();
