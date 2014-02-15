var treefinger= {

  addTask: function(el){
    var project   = angular.element($('#project')).scope(),
        $el       = $(el.parentNode),
        tasks     = project.tasks,
        id        = $el.data('task-id'),
        task      = tasks.find({id: id}),
        taskIndex = tasks.findIndexFrom({id: id}),
        newTask = {
          name: el.textContent,
          active: true
        }

    project.reloadActiveTasks()

    if (!task){
      tasks.add(newTask, taskIndex);
      project.reloadActiveTasks()
    }

  }
}
