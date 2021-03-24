import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import { updateHotdog, deleteHotdog } from '../store/actions/hotdogActions';
import UpdateHotdogForm from './forms/UpdateHotdogForm';

import '../styles/components/hotdog.scss';

function HotDogItem(props) {
  const dispatch = useDispatch();
  const hotdogs = useSelector(({ hotdogs }) => hotdogs.data);
  const [isEditing, setIsEditing] = useState(false);
  const showEditMenu = () => setIsEditing(true);
  const hideEditMenu = () => setIsEditing(false);

  const UpdateHotdogReduxForm = reduxForm({
    form: `updateHotdog-${props.id}`,
    initialValues: { ...props, title: props.title.slice(0, props.title.length - 1) },
    enableReinitialize: true
  })(UpdateHotdogForm);

  const onSubmit = values => {
    hotdogs.forEach(hotdog => {
      if (hotdog.name !== props.name && hotdog.name === values.name)
        throw new SubmissionError({ _error: 'Hot-dog with such name already exists!' });
    });

    dispatch(updateHotdog(props.id, {
      name: values.name,
      title: `${values.title}$`,
      description: values.description,
      image: values.image
    }));

    setIsEditing(false);
  };

  const onDelete = () => dispatch(deleteHotdog(props.id));

  return (
    <div className="item">
      {
        !isEditing ?
          <div className="item__wrapper">
            <div className="item__top-side">
              <div className="item__image"><img src={props.image} alt="hot-dog"/></div>
              <h3 className="item__name">{props.name}</h3>
              <p className="item__title">{props.title}</p>
              <p className="item__description">{props.description}</p>
            </div>
            <button className="item__button" onClick={showEditMenu}>Edit</button>
          </div>  
        :
          <>
            <div className="item__image"><img src={props.image} alt="hot-dog"/></div>
            <UpdateHotdogReduxForm onSubmit={onSubmit} onDelete={onDelete} hideEditMenu={hideEditMenu} {...props}/>
          </>  
      }
    </div>   
  );
};

export default HotDogItem;