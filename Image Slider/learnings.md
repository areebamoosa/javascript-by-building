# 📚 Learnings from Image Slider Mini-Project

- **Automatic Slider**:

  - Selected all images inside a container and showed only one at a time.

  - Used `setInterval()` to automatically change the image every few seconds.
  - Used `% images.length` to loop back to the first image seamlessly.

- **Manual Slider (Button Click)**:

  - Created forward (`Next`) and backward (`Back`) buttons.
  - Changed `curIndex` on button click and showed the corresponding image.
  - Hid all images first, then displayed only the current one.

  - Handled looping so when reaching the end, it goes back to the first (and vice versa).

- **Concepts Practiced**:

  - `querySelectorAll` to select multiple elements.

  - `style.display` to show/hide images.
  - Event listeners on buttons for interactivity.
  - Index looping for continuous slides.

### Concept of Automatic Slideshow

`document.querySelectorAll(".images img")` — this will grab all `<img>` tags inside the .images container in one go.

The result is a NodeList (like an array) that you can loop through and access by index `([0], [1], etc.).`

`currentIndex + 1` → Move to the next image index.

If currentIndex is `0`, it becomes `1`.

If currentIndex is `1`, it becomes `2`, etc.

`% images.length` → This is the modulus operator. It keeps the number within `0 to images.length - 1.`

Example: If you have 3 images (images.length = 3):

```
(0 + 1) % 3 = 1
(1 + 1) % 3 = 2
(2 + 1) % 3 = 0 ← wraps back to the start
```

The result → currentIndex keeps cycling like:

```
0 → 1 → 2 → 0 → 1 → 2 → ...
```

Set Iterval updating the index image value. Example:

#### 1. Time 0 seconds (start)

- showNextImg() runs:

- Hide all images

- Show images[0] (first image)

- Update: currentIndex = (0 + 1) % 3 = 1

#### 2. Time 2 seconds

- showNextImg() runs again:

- Hide all images

- Show images[1] (second image)

- Update: currentIndex = (1 + 1) % 3 = 2

### Concept from Click Slideshow

`images2.length` → total number of images in your `.images2 container`.

Example: if you have 4 images, images2.length is 4.

The last valid index is 3 (because arrays start at 0).

`curIndex >= images2.length` → this checks:

“Have we moved past the last image index?”

If yes, then:

`curIndex = 0;`
