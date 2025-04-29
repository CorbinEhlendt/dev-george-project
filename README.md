# Dev-George-Project

## Authorship & Attribution
- **Author:** Corbin Ehlendt
- **Code resources used:**
  - [W3Schools JS](https://www.w3schools.com/js/default.asp)
  - [Bootstrap](https://getbootstrap.com/docs/5.3/examples/)
---

## User Story

> As a student I wanted a good quick way to see
> what classes I have taken and who taught it.
> So this app allows quick access to that information
> that could also be shared if someone wanted 

---

## Narrative
The purpose of the app is to have a easy way to see the classes you have taken. You could use this information to easily show others what you have learned.

---

##  Screenshots & Code Samples

###  Original app design

![dev-able-screenshot](https://github.com/CorbinEhlendt/dev-george-project/blob/main/images/ablePreview.png)

---

## Cool Code Snippet

Here’s a snippet of code:

```javascript
// Show Delete Confirmation
function showDeleteConfirmation(log, listItem, index, classData) {
    const confirmationBox = document.createElement('div');
    confirmationBox.className = 'confirmation-box mt-2';
    confirmationBox.innerHTML = `
        <p>Delete "<strong>${log.class}</strong>"?</p>
        <button class="btn btn-danger btn-sm confirm-delete-btn">Delete</button>
        <button class="btn btn-secondary btn-sm cancel-delete-btn">Cancel</button>
    `;

    listItem.appendChild(confirmationBox);

    confirmationBox.querySelector('.confirm-delete-btn').onclick = () => deleteRecord(index, classData, listItem);
    confirmationBox.querySelector('.cancel-delete-btn').onclick = () => confirmationBox.remove();
}
```
This code creates a confirmation prompt for the use to delete a class they have listed. 
This is great because by adding the confirmation you get rid of the risk of accidentally 
deleting one of your classes.

---

## Future app [ideas](url)
