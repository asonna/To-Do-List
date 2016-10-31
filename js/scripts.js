// business logic
function ToDoList(entry) {
  this.newEntry = entry;
}

function DeleteTask(removalEntry) {
  this.newRemovalEntry = removalEntry;
}

// user interface logic
$(document).ready(function() {
  $("form#task-entry").submit(function(event) {
    event.preventDefault();

    var inputtedEntry = $("input#newTaskEntry").val();

    var newToDoList = new ToDoList(inputtedEntry);

    $("ol#entry-list").append("<li><span class=show-entry>" + newToDoList.newEntry + "</span></li>");
  });

  $("form#task-remove").submit(function(event) {
    event.preventDefault();

    var inputtedRemovalEntry = parseInt($("input#newRemovalEntry").val());

    var newDeleteTask = new DeleteTask(inputtedRemovalEntry);

    $("ol#entry-list").children().last().remove();
  });
});
