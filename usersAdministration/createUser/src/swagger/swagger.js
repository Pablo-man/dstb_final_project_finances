import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Create-Register API',
            version: '1.0.0',
            description: 'API for managing Users (create)',
            contact: {
                name: 'Pablo Méndez & Xavier Quishpe'
            },
            servers: [
                {
                    url: 'http://localhost:3001',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./src/routes/*.js']
};

const specs = swaggerJsdoc(options);
export default specs;