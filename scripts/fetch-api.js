fetch("https://example.com").then((response) => {
    const json = response.json();

    // TODO
});

fetch("https://example.com", {
    body: JSON.stringify({ first_name: "foo", last_name: "bar" }),
    headers: {
        "Content-Type": 'application/json;charset=UTF-8'
    },
    method: "POST"
}).then((response) => {
    const json = response.json();

    // TODO
});
