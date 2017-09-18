This is an AngularJS project to showcase features of AngularJS incorporated to create this web application. The application is being divided into two screens to store the desired information of the employee in the company database using angularjs technology as explained below.

Add Information screen  :  Containing the 5 Mandatory fields such as Name of the employee , Province , Telephone , Postal code and Salary.

Every field is being validated depending upon the requirement of the form. Here the validations are :

1. Name : Should not be less than 2 length.
2. Province : Selection should be made.
3. Telephone : (123)-456-7890 , (123) 456-7890, 123-456-7890 , 123-456 7890 and 123 456 7890 are valid phone numbers.
4. Postal code : "T2X 1V4" or "T2X1V4" are valida postal code.
5. Salary : For Quebec province - 40000 , 40 000 and 40 000,00 are valid.
            For province other than Quebec - 40000 and 40,000.00 are valid.
            
To validate the pattern's, i have used "ng-pattern". 

ngPattern - adds the pattern validator to ngModel. It is most often used for text-based input controls, but can also be applied to custom text-based controls.

To validate the name, i have used  "ng-minlength"

ngMinlength - adds the minlength validator to ngModel. It is most often used for text-based input controls, but can also be applied to custom text-based controls.

Once, the data will be saved we can see the result over the screen and added inside the DB for future reference.

Listing Page : This screen is being used to show the records being added in the DB in the table format using "ng-repeat".

The ngRepeat directive  - instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

