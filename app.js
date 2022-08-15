const express =require('express');
const app = express();
const swaggerJsDoc =  require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const swaggerOptions ={
    swaggerDefinition:{
        info: {
            title : 'Library API',
            version: '1.0.0'
        }
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    apis: ['app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /books:
 *    get:
 *      description: use to request all customers
 *      responses: 
 *        "200":
 *           description: Asuccessful response
 */


app.get('/books', (req, res) => {
    res.send([
        {
            isbn: "7578488488588",
            title: "emeka documentation",
            author: "jkii hiooi",
            publisher: "scholar"
        }
    ])
})

app.listen(3000, ()=> console.log('running on port 3000'))