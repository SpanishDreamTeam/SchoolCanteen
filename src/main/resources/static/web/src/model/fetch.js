export function postService(path, body, callback) {
    fetch(path, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(body),
    }).then(function(response) {
    if(response.status === 203){
        window.location.hash = '#';
    }
    return response.json().then((json) => {
    callback && callback(json);
    });
    }).catch((error) => {
    /*console.log(error);*/
    });
    }
    
export function service(path, method, body, callback) {
    fetch(path, {
    method: method,
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(body),
    }).then(function(response) {
    if(response.status === 203){
        window.location.hash = '#';
    }
    return response.json().then((json) => {
    callback && callback(json);
    
    });
    }).catch((error) => {
    /*console.log(error);*/
    });
    }
    
export function getService(path, callback) {
    fetch(path, {
    method: 'GET',
    mode: 'cors',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    credentials: 'include',
    }).then(function(response) {
    if(response.status === 203){
        window.location.hash = '#';
    }
    return response.json().then((json) => {
    callback && callback(json);
    });
    }).catch((error) => {
    /*console.log(error);*/
    });
    }