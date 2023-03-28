import { FC } from 'react';
import './loading-screen.css';

export const LoadingScreen: FC = () => (
  <div className="spinner-square">
    <div className="square-1 square"></div>
    <div className="square-2 square"></div>
    <div className="square-3 square"></div>
  </div>
);
