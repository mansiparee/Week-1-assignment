## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs");

let data = "this is a update data";

function aftercontentupdated(err){
if (err){
console.error(err)
return;
}
let cleanedData = cleared (data); 
fs.writeFile('a.text',data,'utf8',cleanedData,fileWritten);
}
fs,readFile('a.txt',data,fileRead);
