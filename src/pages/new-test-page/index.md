---
title: 'New Test Page'
date: '2020-03-07'
spoiler: Все проходит и это пройдет.
---

Romeo present...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet vehicula maximus. Sed auctor egestas tortor, sit amet maximus quam. Pellentesque in blandit felis. Duis in sollicitudin nibh. Curabitur rhoncus malesuada est, et rutrum risus hendrerit et. Aliquam erat volutpat. Pellentesque diam magna, sollicitudin cursus neque ac, suscipit porta odio. Mauris ac bibendum eros. Cras ullamcorper orci orci, quis placerat tortor tincidunt non. Aenean sagittis velit at arcu semper cursus. Sed vel odio a urna sollicitudin blandit et ut neque. Integer consequat consectetur augue, sit amet imperdiet augue aliquet eget. Praesent non sapien rhoncus, egestas diam ac, consequat neque.

Praesent euismod dolor eget urna molestie condimentum. Nullam sed odio quis elit sodales dignissim eget at odio. Curabitur in sem lacus. Mauris lobortis consectetur dictum. Duis sed tellus mattis, molestie lorem ut, convallis felis. Duis orci lacus, volutpat et sem vel, interdum congue ligula. Maecenas interdum quam in nibh consectetur, vitae laoreet tellus suscipit. Integer pulvinar pellentesque nibh, convallis sollicitudin augue elementum eu. Etiam mattis risus sed tempor feugiat. Curabitur malesuada ac justo sed dictum. Mauris rutrum neque ut augue euismod mollis. Nullam rhoncus ante at dapibus eleifend. Donec convallis velit non blandit sollicitudin. Quisque vulputate tristique tellus vel commodo. Nam et eros vitae arcu iaculis convallis tempor nec mauris.

Donec nec finibus leo. Pellentesque in libero facilisis, congue nibh id, viverra dolor. Aliquam lobortis libero turpis, eget aliquam elit sodales et. Fusce non volutpat est. Suspendisse pharetra massa nec libero eleifend, eu suscipit diam tempus. Vestibulum posuere nulla id nisl iaculis ultricies. Morbi sollicitudin massa ut lacus ullamcorper suscipit. Vivamus vel sem vel tellus iaculis convallis et nec erat.ape's position and size in a different way. If the user held Shift, we'd also need to preserve proportions while resizing. There was a bunch of math.

The code looked something like this:

```jsx
let Rectangle = {
  resizeTopLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeTopRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeBottomLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeBottomRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
};

let Oval = {
  resizeLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeTop(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeBottom(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
};

let Header = {
  resizeLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },  
}

let TextBlock = {
  resizeTopLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeTopRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeBottomLeft(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
  resizeBottomRight(position, size, preserveAspect, dx, dy) {
    // 10 repetitive lines of math
  },
};
```


I see now that my "refactoring" was a disaster in two ways:

* Firstly, I didn't talk to the person who wrote it. I rewrote the code and checked it in without their input. Even if it *was* an improvement (which I don't believe anymore), this is a terrible way to go about it. A healthy engineering team is constantly *building trust*. Rewriting your teammate's code without a discussion is a huge blow to your ability to effectively collaborate on a codebase together.

* Secondly, nothing is free. My code traded the ability to change requirements for reduced duplication, and it was not a good trade. For example, we later needed many special cases and behaviors for different handles on different shapes. My abstraction would have to become several times more convoluted to afford that, whereas with the original "messy" version such changes stayed easy as cake.

Am I saying that you should write "dirty" code? No. I suggest to think deeply about what you mean when you say "clean" or "dirty". Do you get a feeling of revolt? Righteousness? Beauty? Elegance? How sure are you that you can name the concrete engineering outcomes corresponding to those qualities? How exactly do they affect the way the code is written and [modified](/optimized-for-change/)?

I sure didn't think deeply about any of those things. I thought a lot about how the code *looked* -- but not about how it *evolved* with a team of squishy humans.

Coding is a journey. Think how far you came from your first line of code to where you are now. I reckon it was a joy to see for the first time how extracting a function or refactoring a class can make convoluted code simple. If you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while.

But don't stop there. Don't be a clean code zealot. Clean code is not a goal. It's an attempt to make some sense out of the immense complexity of systems we're dealing with. It's a defense mechanism when you're not yet sure how a change would affect the codebase but you need guidance in a sea of unknowns.

Let clean code guide you. **Then let it go.**
