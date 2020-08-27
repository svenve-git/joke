const express = require('express');
const { response } = require('express');

const app = express();

const port = 3000;

function onListen () {
    console.log(`listening on port: ${port}`);
}

app.listen(port, onListen);

const page = `
<HTML>
    <heading>
        <title>Sven van Ewijk</title>
    </heading> 
<body>
<h1>Why do comedions love !false?</h1>


<h4>Because it's true!!</h4>
</body>
</HTML>`;

app.get('/', (request, response) => {
    console.log(request);
    response.send(page);
});