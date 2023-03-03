Using display: inline-block create a webpage

Here are the colors:

- #F5C6D6
- #EE2E84
- #85CFD8
- #8DC63F
- #E76E34

To practice media queries, you must make this color grid keep it's regular form (look like the picture above) on screens above 768px (large screens). Once below 768px(small screens), each color must expand to the full-width of its container.

Important Tips while using `display: inline-block`

- It's easiest to get the even white "spacing" by actually using a thick, white border around the shapes.
- In order to use percentage widths (like `width: 50%`) and not have them wrap, you'll need to add the following line to the top of your CSS:

* {
    box-sizing: border-box;
    font-size: 0px;
}