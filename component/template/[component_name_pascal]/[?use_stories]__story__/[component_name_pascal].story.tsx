import React from 'react';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: 'components/<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    parameters: {},
};

export const Basic = () => <<%- component_name_pascal %>>Hello, world!</<%- component_name_pascal %>>;
