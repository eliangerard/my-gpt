export const fetchSD = async ( prompt ) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "pk-LnnsrJkKMLQPYgGEmDAFcJOooguSgBtuhSqzXTlwtFQKjcol");
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024"
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://api.pawan.krd/v1/images/generations", requestOptions)
        .then(response => response.json())
}