### What to refacto ?

> Refacto `hasOnlyMainPicture` into `hasMoreThanOnePicture`

### Steps

1) ⚠️ Write tests that cover all the cases ie. 0/1/2 pictures with & without `mainPicture` flag

2) Create another prop `hasMoreThanOnePicture = otherPictures.length > 0` in `component.container`

3) Replace in the `Component` the `hasPicture && !hasOnlyMainPicture` condition with `hasMoreThanOnePicture`

4) Check where `hasOnlyMainPicture` is used.

5) Create a `mainButtonType2` which depends on `hasMoreThanOnePicture`

6) Replace every `mainButtonType` reference with `mainButtonType2`

7) Remove `mainButtonType2`

8) Remove every reference to `hasOnlyMainPicture`
