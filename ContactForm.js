var contactFormViewModel = function (){
    var self = this;
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.fullName = ko.computed(function() {
        console.log(self);
        return self.firstName() + " " + self.lastName();
    });
    
}

var contactForm = new contactFormViewModel();
ko.applyBindings(contactFormViewModel);