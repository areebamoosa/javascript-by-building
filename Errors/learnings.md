# 📚 Learnings from Form Validation App

- Practiced **checking form inputs** using JavaScript before submission.

- Used **`.trim()`** to remove extra spaces and detect empty fields properly.

- Displayed **dynamic error messages** depending on which field is empty.

- Learned to handle **multiple validation cases**: both fields empty, one field empty, or all valid.

- Improved understanding of **user-friendly form validation** in JS.

## Notes

`.trim()` is a method in JavaScript that removes any extra spaces from the beginning and end of a string.

We're checking:

“Is the user’s input empty (after removing unwanted spaces)?”

```
" ".trim() → becomes ""
```

Now it properly detects that the input is actually empty, even if the user typed only spaces.
