export async function getData() {
    const res = await fetch(`https://restcountries.com/v3.1/all`, {
        method: "GET"
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data.');
    };

    return res.json();
}

export async function getCountry(name) {


    const res = await fetch(`https://restcountries.com/v3.1/name${name}?fullText=true`, {
        method: "GET"
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data.');
    };

    return res.json();
}