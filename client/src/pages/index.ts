import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'));
export const LoginPage = lazy(() => import('./login'));
export const SignUpPage = lazy(() => import('./signup'));
export const SignOutPage = lazy(() => import('./signout'));
export const MyPage = lazy(() => import('./mypage'));
export const TodoPage = lazy(() => import('./todo'));
