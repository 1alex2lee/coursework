import sqlite3 from "sqlite3";

const handler = function (obj) {
    console.log(obj);

    // opens the comments database
    function openDatabase() {
        let db = new sqlite3.Database('./comments.sqlite', sqlite3.OPEN_READWRITE, function(err) {
            if (err) {
            return console.error(err.message);
            }
            console.log('database opened');
        });
        return db; // returns the database object
    }

    // take the database object and closes it
    function closeDatabase(db) {
        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('database closed');
        });
    }

    // defines function to add a comment given a received object
    function addComment(obj) {
        let activeuser = obj.user;
        let newcomment = obj.comment;
        let activevideo = obj.vid;
        if (newcomment !== "") { // checks if request is to post comment orjust retrieve comments
            let db = openDatabase();
            // defines sqlite query with variables inserted
            let query = "INSERT INTO " + activevideo + "(user, comment) VALUES('" + activeuser + "', '" + newcomment + "')";
            // querys database to add comment to the correct table
            db.run(query, function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log("comment added to database");
            });
            closeDatabase(db);
        }
    }

    return new Promise(function (resolve, reject) { // returns promise of all comments
        let activevideo = obj.vid;
        addComment(obj); // runs the add comment function
        let db = openDatabase();
        // defines query with active video inserted
        let q = "SELECT user user, comment comment FROM " + activevideo + " ORDER BY primary_key";
        // querys for all user comment pairs of selected video
        db.all(q, [], function (err, rows) {
            if (err) {
                reject(err);
                return;
            }
            const history = []; // defines array to push each comment to
            rows.forEach(function (row) { // iterate through user comment pair in database
                let newentry = {user: row.user, comment: row.comment}; // defines user comment object
                history.push(newentry); // add object to array
            });
            console.log("comment section updated");
            resolve(history); // sends array of objects to client
        });
        closeDatabase(db);
    });
};

export default Object.freeze(handler);
