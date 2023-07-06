const url = 'https://api.pawan.krd/v1/chat/completions';

export const fetchGPT = async (chat) => {
    console.log(chat);
    const data = {
        'model': "gpt-4",
        'max_tokens': 250,
        'messages': chat
    };

    // request headers
    const headers = {
        'Authorization': 'Bearer pk-LnnsrJkKMLQPYgGEmDAFcJOooguSgBtuhSqzXTlwtFQKjcol',
        'Content-Type': 'application/json',
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    };
    const response = await fetch(url, options).then(response => response.json());
    console.log(response);
    return response;
}