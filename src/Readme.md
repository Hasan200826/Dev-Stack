# 🚀 Development Stack Explorer

A modern and responsive React project for exploring different development technologies and creating your own development stack.

Users can explore technologies, view their information, and add or remove technologies from their personal stack.

## 🌐 Live Demo

[Development Stack Explorer](http://localhost:5173/)

> **Note:** This is the local development URL. Replace it with your deployed website URL after deployment.

---

## 🛠️ Technologies Used

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite
* 📦 JSON
* 🔔 React Toastify

---

## ✨ Features

### 🔍 1. Explore Technologies

Users can explore different development technologies and see useful information such as:

* Technology name
* Description
* Category
* Rating
* Difficulty
* Badge

### ➕ 2. Add Technology to Stack

Users can select a technology and add it to their personal development stack.

### 🗑️ 3. Manage Stack

Users can manage their selected technologies by:

* Viewing added technologies
* Removing individual technologies
* Removing all technologies
* Showing an empty-stack message when there are no items

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to write and understand.

```tsx
const App = () => {
  return <h1>Hello React</h1>
}
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store data inside a component that can change over time.

```text
Props → Parent → Child

State → Component's own changing data
```

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and update state.

I used `useState` to store the technologies that the user adds to their stack.

```tsx
const [stackArr, setStackArr] = useState<string[]>([])
```

Here:

* `stackArr` stores the selected technologies.
* `setStackArr` updates the stack.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects in React.

I used it to load the JSON data when the component starts.

```tsx
useEffect(() => {
  // Load JSON data
}, [])
```

The empty dependency array `[]` means the effect runs when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed.

```tsx
{items.map((item) => (
  <div key={item.id}>
    {item.name}
  </div>
))}
```

Here, `item.id` is the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty stack message when there are no technologies in the stack.

```tsx
{stackArr.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItems />
)}
```

If `stackArr` is empty, the empty-stack message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

```tsx
<Child stackArr={stackArr} />
```

The child receives the data:

```tsx
const Child = ({ stackArr }) => {
  // use stackArr
}
```

A child can send something back to the parent by receiving a function through props.

```tsx
<Child setStackArr={setStackArr} />
```

Then the child can call the function:

```tsx
setStackArr([])
```

So the basic flow is:

```text
Parent
   ↓
  Props
   ↓
Child

Child
   ↓
Callback Function
   ↓
Parent
```

---

## 👨‍💻 Author

Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite.
