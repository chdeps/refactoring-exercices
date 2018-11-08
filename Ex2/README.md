### Steps

1) Define an enum `EDirection` mapping directions `left` & `right` to the number of degrees needed to rotate the Svg

2) Add a prop `direction` of type `EDirection` of to `ChevronLeft`

3) Change svg prop `rotation` to `direction || 180`

4) Rename `ChevronLeft` to `Chevron`

5) Add prop `direction` to `Chevron` setting it to 180 when direction is not defined and to 0 when a transform style rotation of 180 degrees is applied. ⚠️ Don't forget to remove the transform style rotation while adding the `direction` prop.

6) Set prop `rotation` of Svg to `direction`

7) Remove the `style`prop of the `Chevron

`
