### Steps

1) Externalize the condition of the if statement in a const `condition`

2) Add an optional `is` boolean parameter to the function

3) `condition` should equal `is` when defined and `isNot` otherwise

4) Call `methodA` with `is` at `!isNot`

5) Remove `isNot` parameter

6) Add `is` condition in if statement and remove `condition` const
