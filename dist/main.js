!(function (e) {
  var t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (e, t, o) {
    "use strict";
    o.r(t);
    const n = (function () {
        const e = [];
        return {
          add: function (t) {
            e.push(t);
          },
          remove: function (t) {
            let o = e.findIndex((e) => e.getName() === t);
            e[o].getTodos().forEach((e) => c.remove(e.getTitle())),
              e.splice(o, 1);
          },
          getProject: function (t) {
            return e.find((e) => e.getName() === t);
          },
          getList: function () {
            return e;
          },
        };
      })(),
      r = function (e) {
        let t,
          o = e;
        const n = [];
        return {
          edit: function (e) {
            o = e;
          },
          addNotes: function (e) {
            t = e;
          },
          addTodo: function (e) {
            n.push(e);
          },
          getName: function () {
            return o;
          },
          getNotes: function () {
            return t;
          },
          getTodos: function () {
            return n;
          },
          getProject: function () {
            return { name: o, todos: n };
          },
        };
      },
      c = (function () {
        const e = [];
        return {
          add: function (t) {
            e.push(t);
          },
          remove: function (t) {
            let o = e.findIndex((e) => e.getTitle() === t);
            e.splice(o, 1);
          },
          getTodo: function (t) {
            return e.find((e) => e.getTitle() === t);
          },
          getList: function () {
            return e;
          },
        };
      })();
    function d(e, t, o, r = "Home") {
      let c,
        d = e,
        l = t,
        i = o,
        s = r,
        a = [],
        u = !1;
      function p(e) {
        if (s === e) return;
        console.log(s);
        let t = n.getProject(s);
        console.log(t.getTodos());
        let o = t.getTodos().findIndex((e) => e.getTitle() === d);
        console.log(o), t.getTodos().splice(o, 1), (s = e);
        let r = n.getProject(s);
        r.getTodos().push(this), console.log(r.getTodos());
      }
      return {
        edit: function (e, t, o, n) {
          (d = e), (l = t), (i = o), p(n);
        },
        moveToProject: p,
        addNotes: function (e) {
          c = e;
        },
        reschedule: function (e) {
          l = e;
        },
        setPriority: function (e) {
          i = e;
        },
        addToChecklist: function (e) {
          a.push(e);
        },
        markAsCompleted: function () {
          console.log(a),
            a.every((e) => e.isCompleted())
              ? ((u = !0), console.log(`marked ${this} as completed`))
              : console.log(
                  "please complete all todos in checklist before marking the todo as complete"
                );
        },
        getTitle: function () {
          return d;
        },
        getNotes: function () {
          return c;
        },
        getDueDate: function () {
          return l;
        },
        getPriority: function () {
          return i;
        },
        getProjectName: function () {
          return s;
        },
        getCheckList: function () {
          return a;
        },
        isCompleted: function () {
          return u;
        },
        getTodo: function () {
          return {
            title: d,
            notes: c,
            dueDate: l,
            priority: i,
            projectName: s,
            checkList: a,
            completed: u,
          };
        },
      };
    }
    var l = {
      title(e) {
        const t = document.createElement("label");
        t.setAttribute("for", "title"),
          (t.textContent = "Title"),
          e.appendChild(t);
        const o = document.createElement("input");
        (o.type = "text"),
          (o.name = "title"),
          (o.id = "title"),
          e.appendChild(o);
      },
      dueDate(e) {
        const t = document.createElement("label");
        t.setAttribute("for", "dueDate"),
          (t.textContent = "Due Date"),
          e.appendChild(t);
        const o = document.createElement("input");
        (o.type = "text"),
          (o.name = "dueDate"),
          (o.id = "dueDate"),
          e.appendChild(o);
      },
      priority(e) {
        const t = document.createElement("label");
        t.setAttribute("for", "priority"),
          (t.textContent = "Priority"),
          e.appendChild(t);
        const o = document.createElement("input");
        (o.type = "text"),
          (o.name = "priority"),
          (o.id = "priority"),
          e.appendChild(o);
      },
      project(e) {
        const t = document.createElement("label");
        t.setAttribute("for", "projectName"),
          (t.textContent = "Project Name"),
          e.appendChild(t);
        const o = document.createElement("input");
        (o.type = "text"),
          (o.name = "projectName"),
          (o.id = "projectName"),
          e.appendChild(o);
      },
      save(e) {
        const t = document.createElement("input");
        (t.type = "button"), (t.value = "Save"), e.appendChild(t);
      },
    };
    var i = {
      editForm: (() => {
        const e = document.createElement("form");
        e.name = "todoEditForm";
        const t = document.createElement("br");
        return (
          l.title(e),
          e.appendChild(t),
          l.dueDate(e),
          e.appendChild(t),
          l.priority(e),
          e.appendChild(t),
          l.project(e),
          e.appendChild(t),
          l.save(e),
          e
        );
      })(),
      projectForm: (() => {
        const e = document.createElement("form");
        e.name = "todoProjectNameForm";
        const t = document.createElement("br");
        return l.project(e), e.appendChild(t), l.save(e), e.appendChild(t), e;
      })(),
      duedateForm: (() => {
        const e = document.createElement("form");
        e.name = "todoDuedateForm";
        const t = document.createElement("br");
        return l.dueDate(e), e.appendChild(t), l.save(e), e.appendChild(t), e;
      })(),
      priorityForm: (() => {
        const e = document.createElement("form");
        e.name = "todoPriorityForm";
        const t = document.createElement("br");
        return l.priority(e), e.appendChild(t), l.save(e), e.appendChild(t), e;
      })(),
    };
    const s = {
      add(e, t) {
        console.log("add"), console.log(this, e);
        const o = document.todoEditForm,
          r = o.title.value,
          l = o.dueDate.value,
          i = o.priority.value,
          s = o.projectName.value;
        let a = d(r, l, i, s);
        if ((c.add(a), e.matches(".checklist"))) {
          const e = document.querySelector("#task-title").textContent,
            t = c.getTodo(e);
          console.log(t), t.addToChecklist(a);
        }
        const u = n.getProject(s);
        u.addTodo(a),
          e.removeChild(t),
          x.render(a, e),
          console.log(t),
          console.log(c.getList()),
          console.log(u.getTodos());
      },
      update(e, t) {
        console.log(e, t);
        const o = document.todoEditForm,
          n = o.title.value,
          r = o.dueDate.value,
          d = o.priority.value,
          l = o.projectName.value;
        e.edit(n, r, d, l),
          c.getList().forEach((e) => console.log(e.getTitle())),
          x.updateTodoElement(t, n);
      },
      addNotes(e) {
        console.log("saving notes");
        const t = document.popupForm.notes.value;
        console.log(t),
          e.addNotes(t),
          x.hideNotesPopup(),
          c.getList().forEach((e) => console.log(e.getNotes()));
      },
      moveToProject(e, t, o) {
        console.log("in move");
        const n = o.projectName.value;
        n !== e.getProjectName() && x.removeTodoElement(t), e.moveToProject(n);
        const r = o.parentNode;
        r.removeChild(o);
        this.parentNode.removeChild(r), x.hideDropdown(), console.log(n);
      },
      reschedule(e, t) {
        const o = t.dueDate.value;
        console.log(o), e.reschedule(o);
        const n = t.parentNode;
        n.removeChild(t);
        this.parentNode.removeChild(n), x.hideDropdown();
      },
      prioritize(e, t) {
        const o = t.priority.value;
        console.log(o), e.reschedule(o);
        const n = t.parentNode;
        n.removeChild(t);
        this.parentNode.removeChild(n), x.hideDropdown();
      },
    };
    var a = function (e) {
      console.log("add Todo"), console.log(e);
      const t = document.createElement("div");
      t.classList.add("todo");
      const o = i.editForm;
      t.appendChild(o),
        o
          .querySelector('input[type="button"]')
          .addEventListener("click", s.add.bind(this, e, t)),
        e.insertBefore(t, e.lastElementChild);
    };
    const u = document.querySelector(".checklistContainer"),
      p = u.querySelector("#project-name"),
      m = u.querySelector("#task-title"),
      h = u.querySelector(".checklist"),
      g = h.querySelector(".add-todo");
    var C = {
      renderContainer(e) {
        const t = e.getProjectName(),
          o = e.getTitle(),
          n = e.getCheckList();
        !(function (e) {
          console.log(e), (p.textContent = e);
        })(t),
          (function (e) {
            console.log(e), (m.textContent = e);
          })(o),
          (function (e) {
            console.log(e);
          })(n),
          g.addEventListener("click", a.bind(this, h));
      },
    };
    const f = document.createElement("div");
    f.classList.add("formDiv");
    var v = function () {
      const e = this.parentNode,
        t = this.parentNode.parentNode.parentNode,
        o = t.querySelector("h3").textContent;
      let n = c.getTodo(o);
      switch (this.textContent) {
        case "Edit Todo":
          for (console.log("edit"); t.lastElementChild; )
            t.removeChild(t.lastElementChild);
          const r = i.editForm;
          t.appendChild(r), console.log(r.scrollHeight);
          r.querySelector('input[type="button"]').addEventListener(
            "click",
            s.update.bind(this, n, t)
          );
          break;
        case "Delete Todo":
          console.log("delete"),
            console.log(n),
            c.remove(o),
            x.removeTodoElement(t),
            console.log(c.getList());
          break;
        case "Add notes":
          console.log("add notes"), x.hideDropdown(), x.renderNotesPopup();
          document
            .querySelector(".popup")
            .querySelector('input[type="button"]')
            .addEventListener("click", s.addNotes.bind(this, n));
          break;
        case "Move to project":
          console.log("move to project");
          const d = i.projectForm;
          f.appendChild(d),
            console.log(d),
            console.log(e),
            e.insertBefore(f, this.nextElementSibling);
          d.querySelector('input[type="button"]').addEventListener(
            "click",
            s.moveToProject.bind(this, n, t, d)
          );
          break;
        case "Reschedule":
          console.log("reshedule");
          const l = i.duedateForm;
          f.appendChild(l), e.insertBefore(f, this.nextElementSibling);
          l.querySelector('input[type="button"]').addEventListener(
            "click",
            s.reschedule.bind(this, n, l)
          );
          break;
        case "Set priority":
          console.log("set priority");
          const a = i.priorityForm;
          f.appendChild(a), e.insertBefore(f, this.nextElementSibling);
          a.querySelector('input[type="button"]').addEventListener(
            "click",
            s.prioritize.bind(this, n, a)
          );
          break;
        case "Add to checklist":
          console.log("add to checklist"),
            x.renderChecklistPopup(),
            C.renderContainer(n);
          break;
        case "Mark as completed":
          console.log("mark as completed"), console.log(n), n.markAsCompleted();
      }
    };
    var y = function () {
      let e = document.createElement("div");
      return (
        e.classList.add("dropdown"),
        e.appendChild(
          (function () {
            let e = document.createElement("p");
            return (
              e.classList.add("dropbtn"),
              (e.textContent = "..."),
              e.addEventListener("click", x.renderDropdown),
              e
            );
          })()
        ),
        e
      );
    };
    const E = document.querySelector(".todos-container"),
      j = document.querySelector("#notesPopupContainer"),
      N = document.querySelector("#checklistPopupContainer"),
      L = document.querySelector("#checklistClosePopup"),
      P = document.querySelector("#todoPopupContainer"),
      S = document.querySelector("#todoClosePopup"),
      b = document.querySelector("#todoDropdown");
    function k() {
      let e = document.createElement("i");
      return (
        (e.className += "todo-circle fas fa-info-circle"),
        e.addEventListener("click", x.renderDetails),
        e
      );
    }
    function q(e) {
      let t = document.createElement("h3");
      return t.classList.add("todo-name"), (t.textContent = e), t;
    }
    const x = {
      renderProjectHeading(e) {
        console.log(e);
        const t = document.createElement("h2");
        t.classList.add("todo-heading"), (t.textContent = e), E.appendChild(t);
      },
      renderAddTodo() {
        const e = document.createElement("div");
        e.classList.add("add-todo");
        const t = document.createElement("i");
        (t.className += "todo-plus fas fa-plus"), e.appendChild(t);
        const o = document.createElement("p");
        o.classList.add("todo-text"),
          (o.textContent = "Add todo"),
          e.appendChild(o),
          e.addEventListener("click", a.bind(this, E)),
          E.appendChild(e);
      },
      render(e, t) {
        if (
          document
            .querySelector(".active-project")
            .querySelector(".project-name").textContent !== e.getProjectName()
        )
          return;
        const o = t.querySelector(".add-todo");
        console.log("todo is rendering"), console.log(e), console.log(t);
        let n = document.createElement("div");
        n.classList.add("todo"),
          n.appendChild(k()),
          n.appendChild(q(e.getTitle())),
          n.appendChild(y()),
          t.insertBefore(n, o);
      },
      renderDetails() {
        console.log("in render details"), console.log(this);
        const e = this.nextElementSibling.textContent,
          t = c.getTodo(e);
        P.classList.add("show");
        const o = P.querySelector("#todoDetails");
        o.querySelector("h3").textContent = t.getTitle();
        o.querySelector("#project").textContent = t.getProjectName();
        o.querySelector("#dueDate").textContent = t.getDueDate();
        o.querySelector("#priority").textContent = t.getPriority();
        o.querySelector("#notesDiv").textContent = t.getNotes();
        const n = o.querySelector("#checklist"),
          r = t.getCheckList();
        for (let e of r) {
          const t = document.createElement("p");
          (t.textContent = e.getTitle()), n.appendChild(t);
        }
      },
      hideDetails() {
        P.classList.remove("show");
      },
      updateTodoElement(e, t) {
        console.log(e, t),
          e.removeChild(e.lastElementChild),
          e.appendChild(k()),
          e.appendChild(q(t)),
          e.appendChild(y());
      },
      removeTodoElement(e) {
        e.parentNode.removeChild(e);
      },
      renderNotesPopup() {
        console.log(j), j.classList.toggle("show");
      },
      hideNotesPopup() {
        j.classList.toggle("show");
      },
      renderChecklistPopup() {
        N.classList.add("show");
      },
      hideChecklistPopup() {
        N.classList.remove("show");
      },
      renderDropdown() {
        console.log("in render dd");
        this.parentNode.appendChild(b), b.classList.add("show");
      },
      hideDropdown() {
        console.log("in hide"),
          b.classList.contains("show") && b.classList.remove("show");
      },
    };
    L.addEventListener("click", x.hideChecklistPopup),
      S.addEventListener("click", x.hideDetails);
    var T = function () {
      let e = document.createElement("div");
      return (
        e.classList.add("dropdown"),
        e.appendChild(
          (function () {
            let e = document.createElement("p");
            return (
              e.classList.add("dropbtn"),
              (e.textContent = "..."),
              e.addEventListener("click", J.renderDropdown),
              e
            );
          })()
        ),
        e
      );
    };
    const D = document.querySelector(".content"),
      w = {
        select(e, t) {
          console.log(e, t),
            e.addEventListener("click", J.selectProject.bind(this, e, t));
        },
      },
      F = {
        add() {
          console.log("add project");
          const e = this.parentNode.parentNode,
            t = document.editProjectForm,
            o = t.projectName.value;
          console.log(t);
          const c = r(o);
          n.add(c), J.updateProjectElement(e, o), D.appendChild(e);
        },
        update(e, t) {
          console.log(e, t);
          const o = document.editForm.projectName.value;
          e.edit(o), J.updateProjectElement(t, o);
        },
        addNotes(e) {
          console.log("saving notes");
          const t = document.popupForm.notes.value;
          e.addNotes(t), J.hideNotesPopup();
        },
      },
      A = document.querySelector(".todos-container"),
      H = document.querySelector(".projects-container"),
      O = H.querySelector(".collapsible"),
      B = H.querySelector(".content"),
      M = document.querySelector("#notesPopupContainer"),
      _ = document.querySelector("#notesClosePopup"),
      I = document.querySelector("#projectPopupContainer"),
      z = document.querySelector("#projectClosePopup"),
      R = document.querySelector("#projectDropdown");
    function $() {
      let e = document.createElement("i");
      return (
        (e.className += "project-circle fas fa-info-circle"),
        e.addEventListener("click", J.renderDetails),
        e
      );
    }
    function G(e) {
      let t = document.createElement("h3");
      return (
        t.classList.add("project-name"), console.log(e), (t.textContent = e), t
      );
    }
    const J = {
      render(e) {
        console.log("project is rendering"), console.log(e);
        let t = document.createElement("div");
        t.classList.add("project"),
          w.select(t, e),
          t.appendChild($()),
          t.appendChild(G(e.getName())),
          t.appendChild(T()),
          B.appendChild(t);
      },
      renderDetails() {
        console.log("in render details"), console.log(this);
        const e = this.nextElementSibling.textContent,
          t = n.getProject(e);
        I.classList.add("show");
        const o = I.querySelector("#projectDetails");
        o.querySelector("h3").textContent = t.getName();
        o.querySelector("#projectNotes").textContent = t.getNotes();
        const r = o.querySelector("#todosDiv"),
          c = t.getTodos();
        for (let e of c) {
          const t = document.createElement("p");
          (t.textContent = e.getTitle()), r.appendChild(t);
        }
      },
      hideDetails() {
        I.classList.remove("show");
      },
      renderProjects() {
        let e = window.getComputedStyle(B).maxHeight;
        this.classList.toggle("active"),
          "0px" === e
            ? (console.log(e), (B.style.maxHeight = B.scrollHeight + "px"))
            : (B.style.maxHeight = null);
      },
      renderNotesPopup() {
        console.log(M), M.classList.toggle("show");
      },
      hideNotesPopup() {
        M.classList.toggle("show");
      },
      removeProjectElement(e) {
        e.parentNode.removeChild(e);
      },
      updateProjectElement(e, t) {
        console.log("in update proj ele" + e),
          e.removeChild(e.lastElementChild),
          console.log(t),
          e.appendChild($()),
          e.appendChild(G(t)),
          e.appendChild(T()),
          e.addEventListener("click", () => w.select(e, n.getProject(t)));
      },
      selectProject(e, t) {
        if (
          (console.log("this is being called"),
          e.classList.contains("active-project"))
        )
          return;
        e.classList.add("active-project"),
          console.log("todos of current project are rendering"),
          (A.textContent = ""),
          x.renderProjectHeading(t.getName()),
          x.renderAddTodo(),
          t.getTodos().forEach((e) => x.render(e, A));
      },
      renderDropdown() {
        this.parentNode.appendChild(R), R.classList.add("show");
      },
      hideDropdown() {
        R.classList.contains("show") && R.classList.remove("show");
      },
    };
    _.addEventListener("click", J.hideNotesPopup),
      z.addEventListener("click", J.hideDetails),
      O.addEventListener("click", J.renderProjects);
    var K = {
      editForm: (() => {
        const e = document.createElement("form");
        e.name = "editProjectForm";
        const t = document.createElement("label");
        t.setAttribute("for", "projectName"),
          (t.textContent = "Name"),
          e.appendChild(t);
        const o = document.createElement("input");
        (o.type = "text"),
          (o.name = "projectName"),
          (o.id = "projectName"),
          e.appendChild(o);
        const n = document.createElement("input");
        return (n.type = "button"), (n.value = "Save"), e.appendChild(n), e;
      })(),
    };
    const Q = document.querySelector(".projects-container");
    var U = function () {
      const e = document.createElement("div");
      e.classList.add("project");
      const t = K.editForm;
      e.appendChild(t),
        t
          .querySelector('input[type="button"]')
          .addEventListener("click", F.add),
        Q.insertBefore(e, Q.lastElementChild);
    };
    const V = document.querySelector("#todoDropdown");
    var W = function () {
      console.log("in dd oel");
      for (let e of V.children) e.addEventListener("click", v);
    };
    var X = function () {
      const e = this.parentNode.parentNode.parentNode,
        t = e.querySelector("h3").textContent;
      let o = n.getProject(t);
      switch (this.textContent) {
        case "Edit Project":
          for (console.log(e.children); e.lastElementChild; )
            e.removeChild(e.lastElementChild);
          const t = K.editForm;
          e.appendChild(t);
          t.querySelector('input[type="button"]').addEventListener(
            "click",
            F.update.bind(this, o, e)
          );
          break;
        case "Delete Project":
          console.log("delete"),
            J.removeProjectElement(e),
            n.remove(o.getName()),
            console.log(n.getList());
          break;
        case "Add notes":
          console.log("add Notes"), J.renderNotesPopup();
          document
            .querySelector(".popup")
            .querySelector('input[type="button"]')
            .addEventListener("click", F.addNotes.bind(this, o));
      }
      J.hideDropdown();
    };
    const Y = document.querySelector("#projectDropdown");
    var Z = function () {
      console.log("in project oel");
      for (let e of Y.children) e.addEventListener("click", X);
    };
    let ee = r("Home");
    ee.addNotes("this is a default project"), n.add(ee);
    let te = d("todo1", "today", "high");
    te.addNotes("this is notes"),
      te.setPriority("low"),
      c.add(te),
      console.log(te.getPriority()),
      console.log(c.getList()),
      console.log(c.getTodo("todo1")),
      ee.addTodo(te),
      W(),
      J.render(ee),
      Z();
    const oe = document.querySelector(".project");
    J.selectProject(oe, ee);
    document.querySelector(".add-project").addEventListener("click", U);
  },
]);
