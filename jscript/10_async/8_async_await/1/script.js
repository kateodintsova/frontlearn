async function loadJson(url) {
    let response = await fetch(url);

    if (response.status === 200) {
        let json = response.json();
        return await json;
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404as