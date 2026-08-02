1. How did event.preventDefault() help in handling form submission?
event.preventDefault() helps with various components in web development. In this lab it has assisted me from allowing the user to continue on unless all input fields are valid.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation attributes provide built-in commands to provide quick checks. Where as JavaScript validations are customizable and more complex. HTML5 attributes are used for a baseline. It's used to get support and accessibility on a browser-level. JavaScript is used to enhance the experience, show friendly inline messages, perform cross-field checks, and handle submission flows. Combining both can provide a much smoother coding experience and user experience. Also if Javascript is disable HTML5 validations can be a fall back option.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data? 
The DOMContentLoaded script checks localStorage.getItem('savedUsername'). If a value exists, it thens pre-fills the username input and runs validation for that field. Data in localStorage is scoped per origin and persists until explicitly cleared; it is not automatically cleared on logout. This can be a privacy concern on shared devices.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
When I aws validating fields in real time, the confirm-password field needed to reflect both it's own validity and whether it matched the password field. Changes to the password field could leave the confirm field showing stale validity. My solution was attaching 'input' listeners to both the password adn comfirm-password fields. When either field changes, call a shared updateCustomValidity(confirmPassword) and validateField(confirmPassword) so the confirm field’s custom validity is recalculated immediately whenever either value changes.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
Clear and concise wording that are short and action-oriented. Input listeners update message as the user types. checkValidity() was used to decide whether to clear the message. Preventing errors showing before the user interacts and remove messages too soon as the field becomes valid.