# 📚 Learnings from Array Methods App

- Practiced **array methods**: `map`, `filter`, `reduce`, `sort`, and `find`.

- Used **`map()`** to display all students in the HTML.

- Learned **`filter()`** to get only students who passed (marks >= 50).

- Used **`reduce()`** to calculate the total marks and then find the average.

- Practiced **`sort()`** to arrange students from highest to lowest marks.

- Used **`find()`** to search for a specific student by name.

## Notes

## 1. Map

```js
studentList.innerHTML = outputArray.join("");

// outputArray is an array of strings. Each string looks like <p>Name: Alexa, Marks: 88</p>, etc.

// The .join('') method combines all the strings in the array into one big string.

// The empty quotes '' mean: join the strings without adding anything between them (no commas or spaces).

// So, after join(''), you get one long HTML string like:

// <p>Name: Alexa, Marks: 88</p><p>Name: Siri, Marks: 85</p><p>Name: Haze, Marks: 89</p> ...

// Finally, studentList.innerHTML = ... sets this combined HTML string inside the element with ID "students".
```

**Why is this useful?**

When you have an array of HTML snippets (like many `<p>` tags), you can't just put the array directly into the page — you need one big string of HTML.

**For example:**

```js
const arr = ["<p>Hi</p>", "<p>Hello</p>", "<p>Bye</p>"];

// If you do
element.innerHTML = arr;

// the page will show something weird like

("<p>Hi</p>,<p>Hello</p>,<p>Bye</p>");

// because it converts the array to a string by joining with commas automatically.
```

But if you do:

```js
element.innerHTML = arr.join('');

// It joins all array elements without any commas or spaces, so the HTML is clean:

<p>Hi</p><p>Hello</p><p>Bye</p>
```

**Summary:**

`.join()` turns an array into one string.

`.join('')` joins with nothing between items (no commas).
This is perfect for putting multiple HTML strings into the page at once.

## 2. Reduce

reduce is an array method that takes all elements in an array and reduces them to one single value.

It does this by applying a function you give it, repeatedly, across the array.

```js
// The function inside reduce:
(sum, student) => sum + student.marks

// sum: This is the accumulator — it keeps the running total as reduce loops through the array.

// student: This is the current element in the array during each iteration — one student object at a time.

sum + student.marks:

// Adds the current student's marks to the running total (sum).

// The 0 at the end is the initial value for the accumulator (sum). This means the sum starts at 0.
```

**Step-by-step example:**

```js
// Suppose:

students = [
  { name: "Alexa", marks: 88 },
  { name: "Siri", marks: 85 },
  { name: "Haze", marks: 89 },
];

// Initial sum is 0 (because of the 0 initial value).

// First iteration: sum = 0 + 88 = 88

// Second iteration: sum = 88 + 85 = 173

// Third iteration: sum = 173 + 89 = 262

// reduce finishes and returns 262.
```

### Structure of the .reduce() callback function

The callback function inside .reduce() always takes at least two parameters (can take up to four):

```js
array.reduce((accumulator, currentValue, currentIndex, array) => {},
initialValue);

// accumulator: Holds the accumulated value returned by the previous call of the callback. It starts with initialValue.

// currentValue: The current element being processed in the array.

// currentIndex (optional): The index of the current element.

// array (optional): The original array on which reduce is called.

// In my code:

(sum, student) => sum + student.marks;

// sum → accumulator

// This holds the running total (or accumulated value) during the reduce operation. On the first call, it's set to the initialValue provided (which is 0 here).

// student → currentValue

// This is the current object in the array being processed (each student object).
```

## 3. Sort

```js
let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

[...students]

// This uses the spread operator (...) to create a shallow copy of the students array.

// Why? Because .sort() modifies the original array, and we usually want to keep the original data intact.

// So [...students] makes a new array with the same student objects but separate from the original array.

.sort(...)

// This calls the sort() method on the copied array to order its elements.

(a, b) => b.marks - a.marks

// This is a comparison function passed to sort(). It defines how the array should be sorted.

// a and b represent two elements (student objects) that the sort method compares.

// b.marks - a.marks means:

// If the result is positive, b comes before a (because b has higher marks).

// If the result is negative, a comes before b.

// If the result is 0, their order stays the same.

// So overall, this sorts the array in descending order by marks — highest marks first.
```

## 4. Find

```js
let nameToFind = searchInput.value.trim().toLowerCase();

// This gets the text the user typed in the search box.

// trim() removes any extra spaces at the start or end.

// toLowerCase() changes all letters to small letters so it’s easier to compare without worrying about uppercase or lowercase.

let foundStudent = students.find(
  (student) => student.name.toLowerCase() === nameToFind
);

// This looks through the students list.

// For each student, it changes their name to lowercase.

// Then it checks if that lowercase name exactly matches what the user typed (nameToFind).

// .find() stops and returns the first student that matches.

// If no one matches, it returns undefined (nothing found).
```
