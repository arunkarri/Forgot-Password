import ForgotPassword from './forgot-password';
import ResetPassword from './reset-password';

const routes = [
  { route: 'forgot', component: ForgotPassword, label: 'Forgot Password' },
  { route: 'reset-password/:email', component: ResetPassword, label: 'Reset Password' },
];

export default routes;
