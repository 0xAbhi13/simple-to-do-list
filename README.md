<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=170&section=header&text=Simple%20To-Do%20List&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2016&descAlignY=62&descSize=17" alt="Simple To-Do List header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=760&lines=Veda+Technology+Internship+%E2%80%A2+Day+16;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;In-Memory+Tasks+%E2%80%A2+Event+Delegation+%E2%80%A2+Safe+Rendering" alt="Typing introduction" />

  <p><b>Light Theme &#183; Blue &amp; Orange Accents &#183; Responsive &#183; Accessible</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
  ![In Memory](https://img.shields.io/badge/In_Memory-2563eb?style=for-the-badge)
  ![No Build Step](https://img.shields.io/badge/No_Build_Step-16a34a?style=for-the-badge)

</div>

---

## Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=f97316&center=true&vCenter=true&width=720&lines=Add+%26+Delete+%E2%80%A2+In-Memory+Array;Event+Delegation+%E2%80%A2+Safe+Rendering;Counter+%E2%80%A2+Empty+State+%E2%80%A2+Responsive" alt="Features animation" />
</div>

- **Add tasks** &mdash; type a task and click Add Task or press Enter.
- **Input validation** &mdash; empty and whitespace-only inputs are rejected; text is trimmed.
- **Render tasks** &mdash; tasks are stored in a JavaScript array and rendered dynamically.
- **Delete tasks** &mdash; every task has its own Delete button.
- **Event delegation** &mdash; a single click listener on the task list handles all delete actions.
- **Re-rendering** &mdash; the list re-renders whenever a task is added or removed.
- **Task counter** &mdash; shows the total number of current tasks.
- **Empty state** &mdash; a helpful message appears when there are no tasks.
- **Safe rendering** &mdash; task text is inserted via `textContent`, so HTML-like text is displayed safely.
- **Responsive layout** &mdash; works on mobile, tablet, and desktop without horizontal scrolling.
- **Accessible** &mdash; semantic HTML, labels, visible focus states, keyboard support.
- **In-memory only** &mdash; refreshing the page resets the task list.

## Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, form, list, footer (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom properties, Flexbox, animations, media queries, reduced-motion (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000) | Array state, rendering, event delegation (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=flat-square) | Zero dependencies |

## In-Memory Task Storage

Tasks are stored in a JavaScript array declared as `let tasks = [];`. Each task is an object with a unique `id` and the trimmed `text`. Adding pushes a new object; deleting filters the array by id. Because nothing is written to `localStorage`, `sessionStorage`, or a backend, refreshing the page resets the list to empty.

## Event Delegation and Array-Based Rendering

- A single `click` listener is attached to the `<ul>` task list. When a delete button is clicked, the event bubbles up, and `event.target.closest(".task-delete")` identifies which button was pressed. The button's `data-id` tells us which task to remove.
- `renderTasks()` rebuilds the entire list from the `tasks` array using `document.createElement()` and `textContent`, ensuring safe output. It is called after every add or remove, and uses `push()`, `filter()`, and `forEach()`.

## Project Structure

```text
internship-task-16/
+-- index.html
+-- style.css
+-- script.js
+-- README.md
+-- assets/
    +-- favicon.svg
```

## How to Run

1. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. No build step, no server, no dependencies.
3. Resize the window or use DevTools device mode to test desktop, tablet, and mobile widths.
