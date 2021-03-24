import { SubmissionError } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { addHotdog } from '../store/actions/hotdogActions';
import AddHotdogReduxForm from './forms/AddHotdogReduxForm';

import '../styles/components/modal.scss';

function Modal({ modalActive, setModalActive }) {
  const dispatch = useDispatch();
  const hotdogs = useSelector(({ hotdogs }) => hotdogs.data);

  const onSubmit = values => {
    hotdogs.forEach(el => {
      if (el.name === values.name)
        throw new SubmissionError({ _error: 'Hot-dog with such name already exists!' });
    });

    dispatch(addHotdog({
      name: values.name,
      title: `${values.title}$`,
      description: values.description,
      image: values.image
    }));

    setModalActive(false);
  };

  return (
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__container">
          <h3 className="modal__title">Add new hot-dog</h3>
          <AddHotdogReduxForm onSubmit={onSubmit} setModalActive={setModalActive}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;