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

## 🖼️ Screenshots & Code Samples

### ✨ My App (Login Modal)

![dev-able-screenshot]()

### ✨ Real App Examples

Examples that inspired me:
- [Dribbble login page designs](https://dribbble.com/tags/login)
- Twitter's clean simple login form.

*(Insert screenshots of real apps you looked at for ideas.)*

---

## 🧩 Cool Code Snippet

Here’s a snippet I’m proud of:

```javascript
loginBtn.addEventListener('click', function() {
  if (loggedIn) {
    loggedIn = false;
    userNameSpan.textContent = '';
    loginBtn.textContent = 'Login';
    loginBtn.setAttribute('data-bs-toggle', 'modal');
    loginBtn.setAttribute('data-bs-target', '#loginModal');
  }
});
