import Mine from "../../src/components/Mine/Mine/Mine.jsx";

module.exports = {
    path : "mine",
    getComponent(nextState, cb) {
        require.ensure([], () => {
            cb(null, Mine)
        }, 'mine')
    }
}