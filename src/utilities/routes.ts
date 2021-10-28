import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

export default [
    {
        path: '/',
        exact: true,
        title: 'Home',
        component: Home,
    },
    {
        path: '/signup',
        exact: true,
        title: 'Checkout',
        component: SignUp,
    },
];
