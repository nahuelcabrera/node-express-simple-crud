const path = require('path');
const { render } = require('../helpers');
const { DB_PATH } = require('../config');
let db = require(DB_PATH);
const fs = require('fs');

class QuotesController {
    constructor(){

    }

    async index(req, res, next){
        return render("quotes", res);
    }

    async get(req, res){
        return res.send(db);
    }

    async add(req, res, next){
        const defaultQuote = { id: 0 };
        const quote = req.body;
        const lastQuote = db[db.length - 1] || defaultQuote;
        const { id } = lastQuote;
        quote.id = id + 1;
        db.push(quote);
        fs.writeFileSync(DB_PATH, JSON.stringify(db));
        return res.status(201).send();
    }
}

module.exports = new QuotesController();