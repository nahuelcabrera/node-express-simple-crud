const path = require('path');
const { render } = require('../helpers');

class HomeController {
    async index(req, res, next){
        return render('home', res);
    }
    async about(req, res, next){
        return render('about', res);
    }
}

module.exports = new HomeController();