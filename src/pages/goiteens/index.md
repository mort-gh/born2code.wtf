---
title: 'GoITeens'
date: '2020-03-07'
spoiler: Landing-page for GoITeens children's IT school.
---


![Gulp](./gulp-plain.svg)
![HTML5](./html5-plain-wordmark.svg)
![CSS3](./css3-plain-wordmark.svg)
![Sass](./sass-original.svg)
![GitHub](./github-original-wordmark.svg)
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
