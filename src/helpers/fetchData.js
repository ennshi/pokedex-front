export default async ({url, method, data}) => {
    let response;
    const errors = [];
    const options = {
        crossDomain: true,
        method,
        'Content-Type': 'application/json'
    };
    if(method === 'POST') {
        Object.assign(options, { body: data });
    }
    try {
        const res = await fetch(url, options);
        response = await res.json();
    } catch(e) {
        errors.push('Server error. Please try again later.');
    }
    if(!errors.length && response.errors) {
        errors.push(...Object.values(response.errors));
    }
    return { response, errors };
};
