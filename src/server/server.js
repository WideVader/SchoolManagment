const Fs = require('fs')
const Path = require('path')
const sqlite3 = require('sqlite3').verbose();
const path = Path.join(__dirname, "database.sqlite3")

const db = new sqlite3.Database(path,(err)=>{
    if(err) return console.error(err.message);
});

if (!Fs.existsSync(path)){
    let sql = "CREATE TABLE subject(id TEXT PRIMARY KEY, hoursExpected REAL NOT NULL DEFAULT 0, hoursDone REAL NOT NULL DEFAULT 0, weeks INTEGER NOT NULL)"
    db.run(sql)
}
function addSubject(subjectName,hoursExpected, hoursDone, weeksNumber){
    let db = new sqlite3.Database(path,(err)=>{
        if(err) return console.error(err.message);
    });
    let sql1 = `INSERT INTO subject(id, hoursExpected, hoursDone, weeks) VALUES(?, ?, ?, ?)`
    db.run(sql1,[`${subjectName}`,hoursExpected, hoursDone,weeksNumber],(err)=>{
        if(err) return console.error(err.message);
    });
}


exports.addSubject = addSubject;

// let sql1 = `UPDATE subject SET hoursDone = ? where id = ?`
// db.run(sql1,[2,'Analiza'],(err)=>{
//     if(err) return console.error(err.message);
// });

// db.serialize(() => {
//     if (!Fs.existsSync(path))
//         db.run("CREATE TABLE subject (info TEXT, it REAL)");

//     const stmt = db.prepare("INSERT INTO subject VALUES (?,?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM subject", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

db.close();