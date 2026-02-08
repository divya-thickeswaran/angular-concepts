import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
   title = "My first componnent - Test";
   subTitle = "Code Evolution";
   siteUrl = window.location.href;

   // Style Binding
   styleBindingTitle = 'Style Binding';
   highlightColor = 'orange';
   titlestyles = {
    color: 'blue',
    fontStyle: 'italic'
   }

   public greet() {
    return "Greetings!"
   }

   // Property Binding 
   id = "testId";
   isDisabled = false;

   // Class Binding
   classBindingTitle = "Class Binding";
   successClass = "text-success";
   hasError = true;
   isSpecial = true;
   messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "special-text": this.isSpecial
   };

   // Event Binding
   eventBindingTitle = 'Event Binding';
   greetings = "";
   greetingDirect = "";
   public onClick(event: any) {
      console.log('Welcome to Codevolution');
      console.log(event);
      alert(event.type);
      this.greetings = "Welcome to Codevolution";
   }

   // Template Reference Variable
   templateReferenceVariableTitle = 'Template Refernce Variable';
   public logMessage(value: any) {
    console.log(value);
   }

   // Two way binding
   twoBindingTitle = "Two way Binding";
   name="";
  
   // Structural Directive
   displayName= true;
   displayTitle= false;
   
   // Switch Directive
   color="orange";

   // ngFor Directive
   colors = ['red', 'blue', 'green', 'yellow'];

   // // parentData from app component(parent component)
   // @Input()
   // public parentData!: String; // Tells TS it will be set later

   @Input('parentData')
   public appName!: String; // Tells TS it will be set later

   @Output() 
   public childEvent = new EventEmitter();

   fireEvent() {
      console.log("fire event called");
      this.childEvent.emit("Hey Codevolution from test component");
   }

   // Pipes for String property type
   namePipe = "Codevolution";
   messagePipe = "Welcome to codevolution";
   person = {
      firstName: "Divya",
      lastName: "T"
   }
   public date = new Date();

  }
