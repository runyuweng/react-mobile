import Home from "../../src/components/Home/Home/Home.jsx";
module.exports = {
    path : "home",
    getComponent(nextState, cb) {
        require.ensure([], () => {
            cb(null, Home)
        }, 'home')
    }
}