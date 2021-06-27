var fs = require("fs");

fs.open("datakaryawan.txt", "w+", function (err, file){
    if (err) throw err;

    let data = "Kelas Karyawan!";

    fs.writeFile(file, data, (err) =>{
        if (err) throw err;
        console.log("Tersimpan!");
    });

    fs.readFile(file, (err, data) =>{
        if(err) throw err;
        console.log(data.toString("utf-8"));
    });
});