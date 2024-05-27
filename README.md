# Contact Form
Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

## Requirements
### Form
The form should contain the following elements:
- Name field (required, 255 max length).
- Email field (required, valid email).
- Message field (required). Can contain long text.
- Submit button
  - Contains the text "Send".
  - Clicking on the submit button submits the form.

### Behavior
- The form should be implemented as an Angular Reactive form.
- The form fields should be validated on client side. 
- Disable submit button if form is invalid. Optionally you can show error messages
- When a user clicks "Send" button the application should send a POST http request:
```
/api/questions
```
with the following JSON payload
```json
{
  "name": "user's name", 
  "email": "valid email",
  "message": "user's message"
}
```
- Navigate user to an error page when API responds with error, the page should contain the following text and a link which navigates a user back to Contact Form page:
```
Oops! Something went wrong...
```
- No need to store user's input between navigations or page reload.

Optionally you can add css styles, however the focus is on logic. 
