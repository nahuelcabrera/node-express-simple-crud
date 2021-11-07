
module.exports = function(req, res, next){
    return res.status(404).send({ message: "Not found" });
}