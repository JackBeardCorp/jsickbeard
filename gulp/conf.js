/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');
//var proxyMiddleware = require('http-proxy-middleware');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src/main/js',
  dist: 'src/main/resources/static',
  tmp: 'target/.tmp',
  e2e: 'src/main/js/e2e'
};
/**
 * Tableau des proxies
 */
/**exports.proxies=
   [
    proxyMiddleware('/api', {target: 'http://localhost:3010/', changeOrigin: true}),
    proxyMiddleware('/wiki', {target: 'https://wiki.netapsys.fr', changeOrigin: true})
  ];
*/
/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/],
  directory: 'src/main/js/bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};


/**
* Adresse Serveur
**/
exports.proxyServer = {
    local: 'http://localhost:8080',
    integ: 'http://data.nantes.fr', // Mettre la valeur du serveur d'integration
    recette : 'http://data.nantes.fr' // Mettre la valeur du serveur de recette
}
