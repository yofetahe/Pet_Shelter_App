const controllers = require('./controllers');
const path = require('path');

module.exports = app => {

    app
        .get('/api/pets', controllers.getAll)
        .get('/api/pets/:id', controllers.getById)
        .post('/api/pets', controllers.addContent)
        .put('/api/pets/:id', controllers.updateContentById)
        .delete('/api/pets/:id', controllers.deleteContentById)
        .get('/api/pets/check/:name', controllers.getByName)
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
          
}