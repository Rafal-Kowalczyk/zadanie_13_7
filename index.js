var fs = require('fs');

fs.readdir('./test/', 'utf-8', function(err, files) {
    console.log(files);
    fs.writeFile('copy.txt', files, function(err) {
        if (err) throw err;
        console.log('Read content saved to the file copy.txt');
    });
});