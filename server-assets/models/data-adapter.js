let uuid = require('node-uuid'),
    JsData = require('js-data'),
    FBAdapter = require('js-data-firebase')
    DS = new JsData.DS();

let fbAdapter = new FBAdapter({
    basePath: 'https://ilcsort.firebaseio.com'
})

function formatQuery(query) {
    query = query || '';
    return {
        with: query.split(',').join(' ').split(' ')
    }
}

DS.registerAdapter('firebase', fbAdapter, { default: true })
//This one line tells the whole server to use Firebase as its default database.
//To change the database service, add a dependency and change this one line.

module.exports = {
    DS,
    uuid,
    formatQuery
}