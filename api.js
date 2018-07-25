//get data
async function get() {
    try {
        let responsen= await fetch (
            url,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Global.token}`
                },
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {get};

//push data
async function post(params) {
    try {
        let response = await fetch (
            URL,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${Global.token}`
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {post};

//push data
async function put(params, id) {
    try {
        let response = await fetch (
            URL,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${Global.token}`
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {put};

//delete data
// async function delete(id) {
//     try {
//         let response = await fetch (
//             URL,
//             {
//                 method: 'DELETE',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-type': 'application/json',
//                     Authorization: `Bearer ${Global.token}`
//                 },
//                 body: JSON.stringify(params),
//             });
//             let responseJson = await response.json();
//             console.log(JSON.stringify(responseJson));
//             return responseJson
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// export {delete};

async function login(param) {
    try {
        let response = await fetch (
            'http://27.72.57.38:6785/api/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    //Authorization: `Bearer ${Global.token}`
                },
                body: JSON.stringify(param),
            }
        )
        let responseJson = await response.json();
        console.log(JSON.stringify(responseJson));
        return responseJson

        // .then((response) => response.json())
        // .then((responseJson) => {
        //     return responseJson;
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    }
    catch (error) {
        console.log(error)
    }
}

export {login};

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXZpY2VfY29kZSI6IjEyMyIsInBhc3N3b3JkIjoiMTIzNDU2IiwibGFuZ3VhZ2VfY29kZSI6ImpwIiwiaXNzIjoiaHR0cDovLzI3LjcyLjU3LjM4OjY3ODUvYXBpL2xvZ2luIiwiaWF0IjoxNTMyNTI3OTI3LCJleHAiOjE1MzM4NDE5MjcsIm5iZiI6MTUzMjUyNzkyNywianRpIjoibzdEUnJzSDBCUXZTaUFXNiJ9.dGsqLizpHoghmMcKqqXZRZ9tQVzmrbiuAZt_wbv9Xe0';
async function scan(barcode) {
    try {
        let response= await fetch (
            `http://27.72.57.38:6785/api/barcode/scan?barcode=`+barcode,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
               // body: JSON.stringify(barcode)
            
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {scan};  

async function getProduct(id) {
    try {
        let response= await fetch (
            `http://27.72.57.38:6785/api/product/4`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {getProduct};

async function getUtility(id) {
    try {
        let responsen= await fetch (
            `http://27.72.57.38:6785/api/product/${id}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Global.token}`
                },
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {getUtility};

async function search(V, Kinh) {
    try {
        let responsen= await fetch (
            url,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Global.token}`
                },
            });
            let responseJson = await response.json();
            console.log(JSON.stringify(responseJson));
            return responseJson
    }
    catch (error) {
        console.log(error)
    }
}

export {search};