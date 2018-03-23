Basic CSV to JSON converter. I decided to write the code myself, rather than using a csvtoJSON plug in.
It ended up being rather simple. Javascript's .split() function did most of the heavy lifting.


Run this file from the command line as follows:

```
$ node converter.js [name of file]
```


In our case, the command would be:

```
$ node converter.js customer-data.csv
```