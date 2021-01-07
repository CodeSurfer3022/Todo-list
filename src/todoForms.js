import formFields from './todoFormFields';

const forms = {
  editForm: (() => {
    const form = document.createElement('form');
    form.name = 'todoEditForm';
    const br = document.createElement('br');

    formFields.title(form);
    form.appendChild(br);

    formFields.dueDate(form);
    form.appendChild(br);

    formFields.priority(form);
    form.appendChild(br);

    formFields.project(form);
    form.appendChild(br);

    formFields.save(form);
    return form;
  })(),
  projectForm: (() => {
    const form = document.createElement('form');
    form.name = 'todoProjectNameForm';
    const br = document.createElement('br');

    formFields.project(form);
    form.appendChild(br);

    formFields.save(form);
    form.appendChild(br);

    return form;
  })(),
  duedateForm: (() => {
    const form = document.createElement('form');
    form.name = 'todoDuedateForm';
    const br = document.createElement('br');

    formFields.dueDate(form);
    form.appendChild(br);

    formFields.save(form);
    form.appendChild(br);

    return form;
  })(),
  priorityForm: (() => {
    const form = document.createElement('form');
    form.name = 'todoPriorityForm';
    const br = document.createElement('br');

    formFields.priority(form);
    form.appendChild(br);

    formFields.save(form);
    form.appendChild(br);

    return form;
  })(),
};

export default forms;
