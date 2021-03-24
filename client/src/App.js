import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import ClipLoader from "react-spinners/ClipLoader";
import Header from './components/Header';
import Modal from './components/Modal';
import HomePage from './pages/HomePage';

import './styles/common.scss';

function App() {
  const loading = useSelector(({ hotdogs }) => hotdogs.loading);
  const error = useSelector(({ hotdogs }) => hotdogs.error);
  const alert = useAlert();
  const [modalActive, setModalActive] = useState(false);
  const clipLoaderCss = `
    height: 50px;
    width: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;  
  `;

  if (error) alert.error(error);

  return (
    <>
      <ClipLoader loading={loading} css={clipLoaderCss}/>
      <Header setModalActive={setModalActive}/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}/>
      <HomePage/>
    </>  
  );
};

export default App;