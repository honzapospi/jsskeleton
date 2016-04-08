import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from '../components/layout';
import Homepage from '../components/homepage';
import Contact from '../components/contact';

export default (
    <div>
        <Route path="/" component={Layout}>
            <IndexRoute component={Homepage} />
            <Route path="contact/" component={Contact} />
        </Route>
    </div>
);
