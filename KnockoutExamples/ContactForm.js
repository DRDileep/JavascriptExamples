var contactFormViewModel = function (){
    var self = this;
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.fullName = ko.computed(function() {
        console.log(self);
        return self.firstName() + " " + self.lastName();
    });

    self.addItems = function(){
    	console.log("logic to add items");
    }
    
}

var contactForm = new contactFormViewModel();
ko.applyBindings(contactForm);