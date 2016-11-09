// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import { injectReducer } from '../store/reducers'
import Home from './Home'
/*import CounterRoute from './Counter'*/

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => ({
    path: '/',
    //component: CoreLayout,
    getComponent: function(nextState, cb) {
        require.ensure([], (require) => {
            
            const Comp = require('../layouts/CoreLayout/CoreLayout').default
            //const reducer = require('./Meet/ModuleMeet').default
            //injectReducer(store, { key: 'meeting', reducer })
            cb(null, Comp)
        }, 'app')

    },
    indexRoute: Home,
    childRoutes: [{
        path: 'counter',
        getComponent: function(nextState, cb) {
            require.ensure([], (require) => {
                
                const Counter = require('./Counter/containers/CounterContainer').default
                const reducer = require('./Counter/modules/counter').default
                
                injectReducer(store, { key: 'counter', reducer })
                
                cb(null, Counter)
                
            }, 'counter')
            /*require.ensure([], (require) => {
                cb(null, [
                    // Remove imports!
                    require('./Counter').default(store)
                ])
            })*/
        }
    }, {
        path: 'meeting',
        getComponent: function(nextState, cb) {
            require.ensure([], (require) => {
                /*  Webpack - use require callback to define
                    dependencies for bundling   */
                const Comp = require('./Meet/ContainerMeet').default
                const reducer = require('./Meet/ModuleMeet').default
                    /*  Add the reducer to the store on key 'counter'  */
                injectReducer(store, { key: 'meeting', reducer })
                cb(null, Comp)
            }, 'meeting')
        }

    }]

})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
