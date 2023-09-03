function callGPTAPI() {

    const prompt = document.getElementById('prompt');
    const results = document.getElementById('results');
    const url = 'https://open-ai21.p.rapidapi.com/conversationgpt';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'f3b8a816f7mshacbe6c8291c94d7p1c4bedjsna067405d6ed2',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        body: `{
       "model":"gpt-3.5-turbo", "messages":[{"role":"user", "content":"${prompt.value}"}]   
        }`
    };

    fetch(url, options).then((response) => response.json()).then((response) => {
        console.log(response);
        results.innerText = response.GPT;
    })
        .catch((err) => console.log(err));
}