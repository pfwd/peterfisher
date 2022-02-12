---
type: "blog"
slug: "/javascript-sort-by-soonest-date-object"
date: "2022-01-26"
title: "How to sort an array of JavaScript objects by soonest date"
excerpt: "How to "

---
Let's say you have an array of JavaScript objects, each containing a date. The objects are jumbled up, and you need to sort the array by the soonest date.

```javascript
let events = [
    {
        name: 'test 1',
        date: "2022-05-11",
    },
    {
        name: 'test 2',
        date: "2022-02-04",
    },
    {
        name: 'test 3',
        date: "2022-01-10",
    }
]
```
The soonest date is the date closest to the current date. 

In the above example the middle object in the array has the soonest date (based on today's date which is the 12th of February 2022).

To sort the array by soonest date we need to loop over the dates using the `sort` function and return a positive number. We also need to check if the date is less than the current date.

```javascript
const sortBySoonest = function (events) {
    const currentDate = new Date()
    return events.sort(function (a, b) {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        // Move all the dates that are in the past to the end of the array
        if (dateA < currentDate || dateB < currentDate) {
            return -1;
        }
        // Order by soonest
        return dateA - dateB;
    });
}
//..
```

The order of `let sortedEvents = sortBySoonest` is now

```javascript
let events = [
    {
        name: 'test 2',
        date: "2022-02-04",
    },
    {
        name: 'test 1',
        date: "2022-05-11",
    },
    {
        name: 'test 3',
        date: "2022-01-10",
    }
]
```

Notice that objects which have dates in the past are at the end of the array.