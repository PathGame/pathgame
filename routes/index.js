/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};


/*
 * Export rest of the routes
 */
exports.project = require('./project');
