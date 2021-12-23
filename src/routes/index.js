import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import appRoutes from './appRoutes'
import loginRoutes from './loginRoute'
import errorRoutes from './errorRoutes'

const Routes = () => {
    return (
        <Router>
            <Switch>
                {loginRoutes.map(route => <Route {...route} /> )}
                {appRoutes.map(route => <Route {...route} /> )}
                {errorRoutes.map(route => <Route {...route} />)}
            </Switch>
        </Router>
    )
}

export default Routes
