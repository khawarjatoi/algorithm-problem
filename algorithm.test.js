require('wTesting');
const _ = require('./algorithm');

function algorithm(test) {
  /* */

  test.case = 'Example:1';
  var available = [240, 360, 720];
  var allowed = [360, 720];
  var preferred = [1080];
  var expected = [360];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:2';
  var available = [240, 720];
  var allowed = [360, 720];
  var preferred = [1080];
  var expected = [720];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:3';
  var available = [240];
  var allowed = [360, 720];
  var preferred = [1080];
  var expected = [];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:4';
  var available = [240, 360, 720];
  var allowed = [240, 360, 720, 1080];
  var preferred = [240, 360];
  var expected = [240, 360];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:5';
  var available = [240, 720];
  var allowed = [240, 360, 720, 1080];
  var preferred = [240, 360];
  var expected = [240, 720];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);
  /* */

  test.case = 'Example:6';
  var available = [240, 720];
  var allowed = [240, 360, 1080];
  var preferred = [240, 360];
  var expected = [240];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:7';
  var available = [720];
  var allowed = [240, 360, 1080];
  var preferred = [240, 360];
  var expected = [];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:8';
  var available = [240, 360];
  var allowed = [240, 360];
  var preferred = [720, 1080];
  var expected = [240];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:9';
  var available = [240, 360, 720];
  var allowed = [360, 'any'];
  var preferred = [360, 720];
  var expected = [360, 720];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:10';
  var available = [240, 360, 720];
  var allowed = [240, 360, 720];
  var preferred = ['any', 720];
  var expected = [240, 360, 720];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:11';
  var available = [240, 360, 720];
  var allowed = [360, 1080];
  var preferred = ['any', 720];
  var expected = [360];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);

  /* */

  test.case = 'Example:12';
  var available = [240, 360, 720];
  var allowed = [1080];
  var preferred = ['any', 720];
  var expected = [];
  var got = _.attempt(available, allowed, preferred);
  test.identical(got, expected);
}

/*
Map that describes test suit, contains
- name of the suit,
- map of test routines
- and other options
*/

var testSuite = {
  name: 'algorithm',
  tests: {
    algorithm,
  },
};

/* Initilize test suit */
testSuite = wTestSuite(testSuite);

/* Run all tests of the suit */
wTester.test(testSuite.name);
