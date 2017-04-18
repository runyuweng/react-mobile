import Zhaoda from "../../src/components/Zhaoda/Zhaoda/Zhaoda.jsx";
import ZhaoDaIndex from "../../src/components/Zhaoda/ZhaoDaIndex/ZhaoDaIndex.jsx";

module.exports = {
    path : "Zhaoda",
    getComponent(nextState, cb) {
        require.ensure([], () => {
            cb(null, Zhaoda)
        }, 'Zhaoda')
    },

    indexRoute : {
        getComponent(nextState,cb){
            require.ensure([],()=>{
                cb(null,ZhaoDaIndex)
            })
        }
    },

    getChildRoutes(location, callback) {
        require.ensure([], (require)=>{
        callback(null, [
            require('./ZhaodaIndex'),
            ])
        })
    },
}