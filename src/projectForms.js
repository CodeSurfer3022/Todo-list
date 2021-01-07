const forms = {
  editForm: (() => {
    const form = document.createElement("form");
    form.name = "editProjectForm";

    const label = document.createElement("label");
    label.setAttribute("for", "projectName");
    label.textContent = "Name";
    form.appendChild(label);

    const name = document.createElement("input");
    name.type = "text";
    name.name = "projectName";
    name.id = "projectName";
    form.appendChild(name);

    const save = document.createElement("input");
    save.type = "button";
    save.value = "Save";
    form.appendChild(save);

    return form;
  })(),
};

export default forms;
