const Ajax = Object.create(null);

const json = (response) => response.json();

Ajax.query = function (requestObj) {
    
    return window.fetch("/", {
        "method": "POST",
        "body": JSON.stringify(requestObj),
        "headers": {
            "Content-Type": "application/json",
            "dataType": "array"
        }
    }).then(json);
};

export default Object.freeze(Ajax);
