### What to refacto ?

> Move the API call to `api.js` file

### Prerequisities

1. Detect which precise lines you want to move

   > Here : 2 lines of axios call only (l3 & 4)

2. List features that will might be impacted by your refactoring and define how you will test them.

   > Here : After the call, parameters are set to Booking class, testing only one parameter is sufficient (for example : `minimumNumberOfHoursBeforeBooking`)
   > How : go to the page where this parameter is displayed

### Steps

1. Create a function `getAppParams` in `bookings.js`
2. Copy/paste axios call in this function
3. Replace axios call by this function in Booking constructor
4. Check that code works
5. Move your function in `api.js` and import it in `bookings.js`
6. Check that code works
7. Commit
