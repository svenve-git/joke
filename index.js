const express = require('express');
const { response } = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

function onListen () {
    console.log(`listening on port: ${PORT}`);
}

app.listen(PORT, onListen);

const page = `
<HTML>
    <heading>
        <title>Sven van Ewijk</title>
    </heading> 
<body>
<h1>Why does the chicken cross the road?</h1>


<h4>Because they grew up playing Frogger on DOS</h4>
</body>
</HTML>`;

app.get('/', (request, response) => {
    console.log(request);
    response.send(page);
});