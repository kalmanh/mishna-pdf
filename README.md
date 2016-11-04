# PDF generator for Mishnah Study Library

This node package is used to generate PDF for Mishnah schedule.
(Using the awesome [Mishnah](https://github.com/mishnah/mishnah) built by [David Bankier](https://github.com/dbankier))

## Install

```
$ git clone https://github.com/kalmanh/mishna-pdf.git
$ cd mishna-pdf
$ npm install
```

## Usage

Modify `data/schedule.json` with appropriate key/values (see below)
omitting the defaults if you wish.

Then,

```
$ node index.js
```

## data/schedule.json

```
  {
     // Starting year, month and date (in that order)
     // NOTE: The month is 0-based (so, 10 is actually November) - I know, I know... Don't ask :)
     start: "2016, 10, 3",  // (defaults to  10 July 2010)

     per_day: 2,         // mishnayot to be learnt per day (default: 2)
     cycles:  1,         // cycles to generate (default: 1)
     perakim:  false,    // build a perakim based learning schedule (default: false)
     sun2thurs:  false,  // build a schedule for Sunday to Thursday only (default: false),
     seder: "nashim"     // build a schedule for a specific seder only (default: undefined, which means all)
     // Valid values for seder are "zeraim", "moed", "nashim", "nezikin"
  }
```

### Credits

Did I mention the [Mishnah](https://github.com/mishnah/mishnah)? :)