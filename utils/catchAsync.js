module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);   //The function will run and if there is any error then 
    }                                       //catch will run and catch the error.
}