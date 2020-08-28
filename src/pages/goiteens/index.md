---
title: 'GoITeens'
date: '2019-11-28'
spoiler: HTML5, CSS3 - Landing for GoITeens children's IT school.
---
`Gulp`, `HTML5`, `CSS3`, `Sass(SCSS)`
![]()

Adaptive layout of a landing page for GoITeens children's educational IT school.

![GoITeens](./goiteens_1.png)

Base technologies: HTML5, CSS3. Ready to connect JS files. Scalable and compiled with Galp and Sass.

![GoITeens](./goiteens_2.png)

The page includes 11 sections. The site is cross-platform and adapted for mobile devices, tablets and desktops.

![GoITeens](./goiteens_3.png)

Sections of the page are includet as modules in the main site layout.

The code looked something like this:

```html
<body>
  <!-- Header -->
  //= ./html/header.html
  <!-- Sections -->
  <main>
    //= ./html/offer.html
    //= ./html/gm.html
    //= ./html/programs.html
    //= ./html/test.html
    //= ./html/skills.html
    //= ./html/format.html
    //= ./html/teachers.html
    //= ./html/certificate.html
    //= ./html/reviews.html
  </main>
  <!-- Footer -->
  //= ./html/footer.html

  <!-- inject:js -->
  <!-- endinject -->
</body>
```

**Live site:** [here](https://mort-gh.github.io/varya/build/)
