
// const handler = function (obj) {
//     const reversed = obj.message.split("").reverse().join();
//     return {
//         "message": reversed
//     };
// };

import sqlite3 from "sqlite3";

const handler = function (obj) {
    console.log(obj)

    function openDatabase() {
        let db = new sqlite3.Database('./comments.sqlite', sqlite3.OPEN_READWRITE, function(err) {
            if (err) {
            return console.error(err.message);
            }
            console.log('database opened');
        });
        return db
    }

    function closeDatabase(db) {
        db.close((err) => {
            if (err) {
            return console.error(err.message);
            }
            console.log('database closed');
        });
    }

    function addComment(obj) {
        var activeuser = obj.user
        var newcomment = obj.comment
        var activevideo = obj.vid
        if (newcomment != ""){
            var db = openDatabase();
            var query = "INSERT INTO "+activevideo+"(user, comment) VALUES('"+activeuser+"', '"+newcomment+"')"
            db.run(query, function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log("comment added to database");
            });
            closeDatabase(db);
        };
    };

    addComment(obj);

    return new Promise(function (resolve, reject) {
        var activevideo = obj.vid
        var db = openDatabase();
        var q = "SELECT user user, comment comment FROM "+activevideo+" ORDER BY primary_key"
        db.all(q, [], function (err, rows) {
            if (err) {
                reject(err);
                return;
            };
            const history = [];
            // for (var i = 0; i < rows.length; i++) {
            //     var row = rows[i]
            //     var newentry = {user:row.user, comment:row.comment}
            //     history.push(newentry)
            // }
            rows.forEach(function(row) {
                var newentry = {user:row.user, comment:row.comment};
                history.push(newentry);
            });
            console.log("comment section updated")
            resolve(history)
        })
        closeDatabase(db)
    })
}

    //     var db = openDatabase();
    //     db.all(`SELECT user user, comment comment FROM grade1cmajor ORDER BY primary_key`, [], (err, rows) => {
    //         if (err) {
    //             throw err;
    //         }
    //         const history = []
    //         // for (var i = 0; i < rows.length; i++) {
    //         //     var row = rows[i]
    //         //     var newentry = {user:row.user, comment:row.comment}
    //         //     history.push(newentry)
    //         // }
    //         rows.forEach(row => history.push({user:row.user,comment=row.comment}))
    //         console.log(history)
    //         return (history)
    //     })
    //     closeDatabase(db)
    // }

    // addComment(obj);

    // // var allComments = [{user:"alex", comment: "first"},{user:"alex", comment: "second"}]
    // // var x = giveArray()
    // var x = [{user:"alex",comment:"first"},{user:"alex",comment:"second"}]
    // console.log("handler gives "+x)
    // return x
// };

export default Object.freeze(handler);
