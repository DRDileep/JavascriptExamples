 function SimpleListModel (tasks) {
    this.tasks = ko.observableArray(tasks);
    this.taskToAdd = ko.observable("");
    this.addTask = function() {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};//this has just created a reference to a function. to use it we need an instance
//which we can get using the new operator
 
ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));