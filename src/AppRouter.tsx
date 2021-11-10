import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './home/components/homeContainer';
import { Gomoku } from "./gomoku/components/gomokuContainer";

import { homePath, gomokuPath } from './common/utils/paths';

const AppRouter: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route path={homePath} exact component={Home}></Route>
            <Route path={gomokuPath} exact component={Gomoku}></Route>
      </Router>
    )
}

export default AppRouter;