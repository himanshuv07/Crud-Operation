# Crud-Operation

This script provides functionality to manage a list of users and display them in an HTML table. It fetches user data from a JSON file, dynamically populates the table, and includes functionality for adding new users through a popup form. Here's a breakdown of how it works:

1. Variables and DOM Selections:
displayUpdateForm: Selects the "Add+++" button, which triggers the display of the popup form.
containerPopUp: Refers to the popup form container, which is hidden by default but shown when the "Add+++" button is clicked.
cancelBtn: Optional element (the cancel button) for closing the popup form.
addForm: Selects the form element used for adding new data (users).
2. fetchData Function:
This function fetches data from a db.json file asynchronously using the fetch API.
The data is expected to be in JSON format with a users array, which contains user objects with properties: id, name, phone, and email.
It clears the current table body (<tbody>) and loops through the users array to populate the table with each user's information using template literals.
If the users array doesn't exist or is not an array, it logs an error message.
3. Displaying the Form:
When the "Add+++" button is clicked, the form popup becomes visible by changing the display style property of containerPopUp to "block".
4. Closing the Form:
If the cancel button (cancelBtn) exists, clicking it hides the popup form by changing the display style of containerPopUp back to "none".
5. Handling Form Submission (Adding a User):
The form submission is handled by preventing the default action (e.preventDefault()), so the page doesn't refresh.
The values entered into the form's input fields (ID, name, phone, and email) are captured using document.getElementById.
A new row is added to the table with the captured data, using a template literal.
The form is reset to clear the input fields using addForm.reset(), and the popup form is hidden again.
6. Initial Call to Fetch Data:
fetchData() is called at the beginning to load the data and populate the table when the page loads.
Summary:
This code allows users to dynamically fetch and display a list of users, add new users through a popup form, and insert the new data into the table. Additionally, there are buttons in each row for future actions like reading, updating, or deleting the user (though these buttons currently have no functionality).
