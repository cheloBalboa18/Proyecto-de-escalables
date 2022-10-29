const {Router} = require('express');
const router = Router();

const {renderAbout, renderIndex } = require('../controllers/index.controller');//obtiene los controladores de rutas index y about

router.get('/',renderIndex);

router.get('/about', renderAbout)

module.exports = router;