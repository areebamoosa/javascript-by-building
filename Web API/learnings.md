# 📚 Learnings from Web API Project

- Practiced **DOM selection** using `getElementById`.

- Learned to use **`fetch()`** to get data from an API.

- Used **`async/await`** for handling asynchronous operations.

- Learned to **parse JSON** using `.json()` method from the response.

- Showed a **loading state** while waiting for the API response.

- Handled errors using `try...catch` to **display fallback messages**.

- Understood **dynamic content updates** in the DOM with `innerHTML` and `innerText`.

## Notes

### Project Recap:

Async function starts.

fetch(URL) → request is sent to API.

Wait until the server responds (await).

Convert JSON response into JavaScript object.

Put that data into your HTML so the user can see it.

### Concepts from the project

```js
const getFacts = async () => {};
```

You’re creating a function called getFacts.

#### Adding the keyword async means:

This function can use the await keyword inside it.

It will always return a Promise.

You need async because fetch() works asynchronously — it doesn’t block your code while it waits for data.

```js
let response = await fetch(URL);
```

fetch(URL) → sends an HTTP request to the given URL.

It returns a Promise that resolves to a Response object once the server replies.

await pauses this function until the request is done (without freezing the whole page).

##### Example:

**Without await**: you’d just get a Promise, not the actual data.
With await: response contains the actual HTTP response from the server.

```js
let data = await response.json();
```

The server’s response is in JSON format (text that looks like JavaScript objects).

`.json()` is a method on the Response object that reads the response body and parses it into a JavaScript object.

It also returns a Promise → so you need await again to wait until parsing is done.

**Example:**

Raw JSON from API:

```
{ "fact": "Cats have whiskers to sense their surroundings." }
```

After .json(), you can access it like data.fact in JavaScript.

## .json()

When you call fetch(), the response you get is a special object that contains the raw HTTP data — kind of like an unopened package.

.json() opens the package and parses the raw JSON text into a JavaScript object.

JavaScript can then easily read and work with it (like data.fact).
Once JavaScript has it, you can choose how to display it for humans (e.g., putting it into innerHTML).

So .json() makes the data machine-readable for JavaScript, and then you make it human-readable by displaying it on the page.

**Example :**

Before .json()

```js
let response = await fetch("https://catfact.ninja/fact");
console.log(response);
```

You’ll see something like this in the console:

```
Response { type: "cors", url: "https://catfact.ninja/fact", status: 200, ok: true, ... }
```

This is not your actual cat fact yet — it’s a Response object, like a sealed box.

Inside it is the raw JSON text, but it’s not directly usable.

After .json()

```js
let data = await response.json();
console.log(data);
```

Now you’ll see something like:

```
{ fact: "Cats have five toes on their front paws, but only four toes on their back paws.", length: 83 }
```

This is a JavaScript object.

data.fact → "Cats have five toes on their front paws, but only four toes on their back paws."

data.length → 83

Now it’s ready for JavaScript to use — you can insert it into your HTML, run logic on it, etc.

The variable name response is just a convention programmers use because it clearly tells you,

"this variable holds the HTTP response from the server".

For example, these are all valid:

```js
let res = await fetch(URL);
let apiResult = await fetch(URL);
let catDataBox = await fetch(URL); // silly name but works
```

The important thing is:

The value returned by fetch() is always a Response object, no matter what variable name you give it.

Good naming makes your code easier to read later.

#### Async

Your function is async because it has to do something that takes time — talking to another computer over the internet (the API).

Why can’t it be a normal function?

A normal function runs from top to bottom instantly.

But `fetch(URL)` doesn’t finish instantly — it sends a request to a server and waits for a reply.

If we made it normal, JavaScript would try to use the data before it even arrived, causing errors.

##### What async + await do:

async tells JavaScript:

`“This function will have pauses while it waits for stuff.”`

await tells JavaScript:

`“Pause here until this thing finishes, then continue.”`

**Web API** = a service on the internet you can ask for data (like cat facts) using `HTTP requests.`

You send a `request` with `fetch(URL).`

The server sends back a response in JSON format.

Your code reads that JSON and displays it on the page.

---

In short: Your button → sends request to Web API → gets data → shows it in the DOM.

---

## This is a solid, complete mini project demonstrating:

- Async functions with async/await

- Fetch API to get JSON data

- Error handling with try/catch

- Updating the DOM dynamically

- Making code human-readable from raw JSON
