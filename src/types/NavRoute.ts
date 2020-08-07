import { FunctionComponent } from 'react';

export interface NavRoute {
    name: string;
    path: string;
    component: FunctionComponent<any>;
    exact?: boolean;
    props?: { [key: string]: any };
}
