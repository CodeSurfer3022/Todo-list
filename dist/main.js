!function(e){var t={};function o(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)o.d(n,d,function(t){return e[t]}.bind(null,d));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getName()===t);e[o].getTodos().forEach(e=>r.remove(e.getTitle())),e.splice(o,1)},getProject:function(t){return e.find(e=>e.getName()===t)},getList:function(){return e}}}(),d=function(e){let t,o=e;const n=[];return{edit:function(e){o=e},addNotes:function(e){t=e},addTodo:function(e){n.push(e)},getName:function(){return o},getNotes:function(){return t},getTodos:function(){return n},getProject:function(){return{name:o,todos:n}}}},r=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getTitle()===t);e.splice(o,1)},getTodo:function(t){return e.find(e=>e.getTitle()===t)},getList:function(){return e}}}();function c(e,t,o,d="Home"){let r,c=e,l=t,s=o,i=d,a=[],u=!1;function p(e){if(i===e)return;console.log(i);let t=n.getProject(i);console.log(t.getTodos());let o=t.getTodos().findIndex(e=>e.getTitle()===c);console.log(o),t.getTodos().splice(o,1),i=e;let d=n.getProject(i);d.getTodos().push(this),console.log(d.getTodos())}return{edit:function(e,t,o,n){c=e,l=t,s=o,p(n)},moveToProject:p,addNotes:function(e){r=e},reschedule:function(e){l=e},setPriority:function(e){s=e},addToChecklist:function(e){a.push(e)},markAsCompleted:function(){console.log(a),a.every(e=>e.isCompleted())?(u=!0,console.log(`marked ${this} as completed`)):console.log("please complete all todos in checklist before marking the todo as complete")},getTitle:function(){return c},getNotes:function(){return r},getDueDate:function(){return l},getPriority:function(){return s},getProjectName:function(){return i},getCheckList:function(){return a},isCompleted:function(){return u},getTodo:function(){return{title:c,notes:r,dueDate:l,priority:s,projectName:i,checkList:a,completed:u}}}}const l={edit:(()=>{let e=document.createElement("p");return e.classList.add("edit-todo"),e.textContent="Edit Todo",e})(),del:(()=>{let e=document.createElement("p");return e.classList.add("delete-todo"),e.textContent="Delete Todo",e})(),notes:(()=>{let e=document.createElement("p");return e.classList.add("todo-notes"),e.textContent="Add notes",e})(),move:(()=>{let e=document.createElement("p");return e.classList.add("todo-move"),e.textContent="Move to project",e})(),reschedule:(()=>{let e=document.createElement("p");return e.classList.add("todo-reschedule"),e.textContent="Reschedule",e})(),priority:(()=>{let e=document.createElement("p");return e.classList.add("todo-priority"),e.textContent="Set priority",e})(),checklist:(()=>{let e=document.createElement("p");return e.classList.add("todo-checklist"),e.textContent="Add to checklist",e})(),mark:(()=>{let e=document.createElement("p");return e.classList.add("todo-mark"),e.textContent="Mark as completed",e})()};var s={title(e){const t=document.createElement("label");t.setAttribute("for","title"),t.textContent="Title",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="title",o.id="title",e.appendChild(o)},dueDate(e){const t=document.createElement("label");t.setAttribute("for","dueDate"),t.textContent="Due Date",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="dueDate",o.id="dueDate",e.appendChild(o)},priority(e){const t=document.createElement("label");t.setAttribute("for","priority"),t.textContent="Priority",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="priority",o.id="priority",e.appendChild(o)},project(e){const t=document.createElement("label");t.setAttribute("for","projectName"),t.textContent="Project Name",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="projectName",o.id="projectName",e.appendChild(o)},save(e){const t=document.createElement("input");t.type="button",t.value="Save",e.appendChild(t)}};var i={editForm:(()=>{const e=document.createElement("form");e.name="todoEditForm";const t=document.createElement("br");return s.title(e),e.appendChild(t),s.dueDate(e),e.appendChild(t),s.priority(e),e.appendChild(t),s.project(e),e.appendChild(t),s.save(e),e})(),projectForm:(()=>{const e=document.createElement("form");e.name="todoProjectNameForm";const t=document.createElement("br");return s.project(e),e.appendChild(t),s.save(e),e.appendChild(t),e})(),duedateForm:(()=>{const e=document.createElement("form");e.name="todoDuedateForm";const t=document.createElement("br");return s.dueDate(e),e.appendChild(t),s.save(e),e.appendChild(t),e})(),priorityForm:(()=>{const e=document.createElement("form");e.name="todoPriorityForm";const t=document.createElement("br");return s.priority(e),e.appendChild(t),s.save(e),e.appendChild(t),e})()};const a={add(e,t){console.log("add"),console.log(this,e);const o=document.todoEditForm,d=o.title.value,l=o.dueDate.value,s=o.priority.value,i=o.projectName.value;let a=c(d,l,s,i);if(r.add(a),e.matches(".checklist")){const e=document.querySelector("#task-title").textContent,t=r.getTodo(e);console.log(t),t.addToChecklist(a)}const u=n.getProject(i);u.addTodo(a),e.removeChild(t),S.render(a,e),console.log(t),console.log(r.getList()),console.log(u.getTodos())},update(e,t){console.log(e,t);const o=document.todoEditForm,n=o.title.value,d=o.dueDate.value,c=o.priority.value,l=o.projectName.value;e.edit(n,d,c,l),r.getList().forEach(e=>console.log(e.getTitle())),S.updateTodoElement(t,n)},addNotes(e){console.log("saving notes");const t=document.popupForm.notes.value;console.log(t),e.addNotes(t),S.hideNotesPopup(),r.getList().forEach(e=>console.log(e.getNotes()))},moveToProject(e,t,o){console.log("in move");const n=o.projectName.value;n!==e.getProjectName()&&S.removeTodoElement(t),e.moveToProject(n);const d=o.parentNode;d.removeChild(o);this.parentNode.removeChild(d),S.hideDropdown(),console.log(n)},reschedule(e,t){const o=t.dueDate.value;console.log(o),e.reschedule(o);const n=t.parentNode;n.removeChild(t);this.parentNode.removeChild(n),S.hideDropdown()},prioritize(e,t){const o=t.priority.value;console.log(o),e.reschedule(o);const n=t.parentNode;n.removeChild(t);this.parentNode.removeChild(n),S.hideDropdown()}};var u=function(e){console.log("add Todo"),console.log(e);const t=document.createElement("div");t.classList.add("todo");const o=i.editForm;t.appendChild(o),o.querySelector('input[type="button"]').addEventListener("click",a.add.bind(this,e,t)),e.insertBefore(t,e.lastElementChild)};const p=document.querySelector(".checklistContainer"),m=p.querySelector("#project-name"),h=p.querySelector("#task-title"),g=p.querySelector(".checklist"),C=g.querySelector(".add-todo");var v={renderContainer(e){const t=e.getProjectName(),o=e.getTitle(),n=e.getCheckList();!function(e){console.log(e),m.textContent=e}(t),function(e){console.log(e),h.textContent=e}(o),function(e){console.log(e)}(n),C.addEventListener("click",u.bind(this,g))}};const f=document.createElement("div");f.classList.add("formDiv");var E=function(){const e=this.parentNode,t=this.parentNode.parentNode.parentNode,o=t.querySelector("h3").textContent;let n=r.getTodo(o);switch(this.textContent){case"Edit Todo":for(console.log("edit");t.lastElementChild;)t.removeChild(t.lastElementChild);const d=i.editForm;t.appendChild(d),console.log(d.scrollHeight);d.querySelector('input[type="button"]').addEventListener("click",a.update.bind(this,n,t));break;case"Delete Todo":console.log("delete"),console.log(n),r.remove(o),S.removeTodoElement(t),console.log(r.getList());break;case"Add notes":console.log("add notes"),S.hideDropdown(),S.renderNotesPopup();document.querySelector(".popup").querySelector('input[type="button"]').addEventListener("click",a.addNotes.bind(this,n));break;case"Move to project":console.log("move to project");const c=i.projectForm;f.appendChild(c),console.log(c),console.log(e),e.insertBefore(f,this.nextElementSibling);c.querySelector('input[type="button"]').addEventListener("click",a.moveToProject.bind(this,n,t,c));break;case"Reschedule":console.log("reshedule");const l=i.duedateForm;f.appendChild(l),e.insertBefore(f,this.nextElementSibling);l.querySelector('input[type="button"]').addEventListener("click",a.reschedule.bind(this,n,l));break;case"Set priority":console.log("set priority");const s=i.priorityForm;f.appendChild(s),e.insertBefore(f,this.nextElementSibling);s.querySelector('input[type="button"]').addEventListener("click",a.prioritize.bind(this,n,s));break;case"Add to checklist":console.log("add to checklist"),S.renderChecklistPopup(),v.renderContainer(n);break;case"Mark as completed":console.log("mark as completed"),console.log(n),n.markAsCompleted()}};var y=function(){let e=document.createElement("div");return e.classList.add("dropdown"),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("dropbtn"),e.textContent="...",e.addEventListener("click",S.renderDropdown),e}()),e.appendChild(function(){let e=document.createElement("div");e.classList.add("dropdown-content"),e.id="todoDropdown";for(let t in l){const o=l[t];e.appendChild(o),o.addEventListener("click",E)}return e}()),e};const j=document.querySelector("#todos"),L=document.querySelector("#notesPopupContainer"),b=document.querySelector("#checklistPopupContainer"),N=document.querySelector("#checklistClosePopup");function P(){let e=document.createElement("p");return e.classList.add("todo-circle"),e.textContent="o",e}function k(e){let t=document.createElement("h3");return t.classList.add("project-name"),t.textContent=e,t}const S={renderProjectHeading(e){console.log(e);const t=document.createElement("h2");t.classList.add("todo-heading"),t.textContent=e,j.appendChild(t)},renderAddTodo(){const e=document.createElement("div");e.classList.add("add-todo");const t=document.createElement("p");t.classList.add("todo-plus"),t.textContent="+",e.appendChild(t);const o=document.createElement("p");o.classList.add("todo-text"),o.textContent="Add todo",e.appendChild(o),j.appendChild(e)},render(e,t){if(document.querySelector(".active-project").querySelector(".project-name").textContent!==e.getProjectName())return;const o=t.querySelector(".add-todo");console.log("todo is rendering"),console.log(e),console.log(t);let n=document.createElement("div");n.classList.add("todo"),n.appendChild(P()),n.appendChild(k(e.getTitle())),n.appendChild(y()),t.insertBefore(n,o)},updateTodoElement(e,t){console.log(e,t),e.removeChild(e.lastElementChild),e.appendChild(P()),e.appendChild(k(t)),e.appendChild(y())},removeTodoElement(e){e.parentNode.removeChild(e)},renderNotesPopup(){console.log(L),L.classList.toggle("show")},hideNotesPopup(){L.classList.toggle("show")},renderChecklistPopup(){b.classList.add("show")},hideChecklistPopup(){b.classList.remove("show")},renderDropdown(){console.log("ok");const e=j.querySelector("#todoDropdown");console.log(e),e.classList.toggle("show")},hideDropdown(){console.log("hide drop");let e=document.querySelector("#todoDropdown");e.classList.contains("show")&&e.classList.remove("show")}};N.addEventListener("click",S.hideChecklistPopup);const x={edit:(()=>{let e=document.createElement("p");return e.classList.add("edit-project"),e.textContent="Edit Project",e})(),del:(()=>{let e=document.createElement("p");return e.classList.add("delete-project"),e.textContent="Delete Project",e})(),notes:(()=>{let e=document.createElement("p");return e.classList.add("project-notes"),e.textContent="Add notes",e})()};var w={editForm:(()=>{const e=document.createElement("form");e.name="editProjectForm";const t=document.createElement("label");t.setAttribute("for","projectName"),t.textContent="Name",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="projectName",o.id="projectName",e.appendChild(o);const n=document.createElement("input");return n.type="button",n.value="Save",e.appendChild(n),e})()};const T=document.querySelector(".content"),q={select(e,t){console.log(e,t),e.addEventListener("click",$.selectProject.bind(this,e,t))}},D={add(){console.log("add project");const e=this.parentNode.parentNode,t=document.editProjectForm,o=t.projectName.value;console.log(t);const r=d(o);n.add(r),$.updateProjectElement(e,o),T.appendChild(e)},update(e,t){console.log(e,t);const o=document.editForm.projectName.value;e.edit(o),$.updateProjectElement(t,o)},addNotes(e){console.log("saving notes");const t=document.popupForm.notes.value;e.addNotes(t),$.hideNotesPopup()}};var F=function(){const e=this.parentNode.parentNode.parentNode,t=e.querySelector("h3").textContent;let o=n.getProject(t);const d=document.querySelector("#projectDropdown");switch(this.textContent){case"Edit Project":for(console.log(e.children);e.lastElementChild;)e.removeChild(e.lastElementChild);const t=w.editForm;e.appendChild(t);t.querySelector('input[type="button"]').addEventListener("click",D.update.bind(this,o,e));break;case"Delete Project":console.log("delete"),$.removeProjectElement(e),n.remove(o.getName()),console.log(n.getList());break;case"Add notes":console.log("add Notes"),$.renderNotesPopup();document.querySelector(".popup").querySelector('input[type="button"]').addEventListener("click",D.addNotes.bind(this,o))}$.hideDropdown(d)};var A=function(){let e=document.createElement("div");return e.classList.add("dropdown"),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("dropbtn"),e.textContent="...",e}()),e.appendChild(function(){let e=document.createElement("div");e.classList.add("dropdown-content"),e.id="projectDropdown";for(let t in x){const o=x[t];e.appendChild(o),o.addEventListener("click",F)}return e}()),e};const H=document.querySelector("#todos"),M=document.querySelector("#projects"),O=M.querySelector(".collapsible"),B=M.querySelector(".content"),_=document.querySelector("#notesPopupContainer"),I=document.querySelector("#notesClosePopup");function z(){let e=document.createElement("p");return e.classList.add("project-circle"),e.textContent="o",e}function R(e){let t=document.createElement("h3");return t.classList.add("project-name"),console.log(e),t.textContent=e,t}const $={render(e){console.log("project is rendering"),console.log(e);let t=document.createElement("div");t.classList.add("project"),q.select(t,e),t.appendChild(z()),t.appendChild(R(e.getName())),t.appendChild(A());const o=t.querySelector(".dropbtn");o.addEventListener("click",$.renderDropdown.bind(this,o.nextElementSibling)),B.appendChild(t)},renderProjects(){let e=window.getComputedStyle(B).maxHeight;this.classList.toggle("active"),"0px"===e?(console.log(e),B.style.maxHeight=B.scrollHeight+"px"):B.style.maxHeight=null},renderNotesPopup(){console.log(_),_.classList.toggle("show")},hideNotesPopup(){_.classList.toggle("show")},removeProjectElement(e){e.parentNode.removeChild(e)},updateProjectElement(e,t){console.log(e),e.removeChild(e.lastElementChild),console.log(t),e.appendChild(z()),e.appendChild(R(t)),e.appendChild(A())},selectProject(e,t){if(e.classList.contains("active-project"))return;e.classList.add("active-project"),console.log("todos of current project are rendering"),S.renderProjectHeading(t.getName()),S.renderAddTodo(),t.getTodos().forEach(e=>S.render(e,H))},renderDropdown(e){e.classList.toggle("show")},hideDropdown(){console.log("hide drop");let e=document.querySelector("#projectDropdown");e.classList.contains("show")&&e.classList.remove("show")}};I.addEventListener("click",$.hideNotesPopup),O.addEventListener("click",$.renderProjects);const G=document.querySelector("#projects");var J=function(){const e=document.createElement("div");e.classList.add("project");const t=w.editForm;e.appendChild(t),t.querySelector('input[type="button"]').addEventListener("click",D.add),G.insertBefore(e,G.lastElementChild)};var K=function(e){if(console.log("in window"),console.log(e.target.matches(".dropbtn")),e.target.matches(".dropbtn"))return;console.log("crossed");const t=document.querySelectorAll(".dropdown-content");for(let e of t)e.classList.contains("show")&&e.classList.remove("show")};let Q=d("Home");Q.addNotes("this is a default project"),n.add(Q);let U=c("todo1","today","high");U.addNotes("this is notes"),U.setPriority("low"),r.add(U),console.log(U.getPriority()),console.log(r.getList()),console.log(r.getTodo("todo1")),Q.addTodo(U),$.render(Q);const V=document.querySelector(".project");$.selectProject(V,Q);const W=document.querySelector("#todos");document.querySelector(".add-todo").addEventListener("click",u.bind(void 0,W));document.querySelector(".add-project").addEventListener("click",J),window.addEventListener("click",K)}]);