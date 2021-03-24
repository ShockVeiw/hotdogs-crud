import { reduxForm, Field, reset } from 'redux-form';
import { renderInput } from './renderFields';
import { required, isNumber } from '../../formValidators';

const AddHotdogForm = props => {
  const handleReset = () => {
    props.reset();
    props.setModalActive(false);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <Field type="text" name="name" component={renderInput} validate={required} placeholder="Name"/>
      <Field type="text" name="title" component={renderInput} validate={[required, isNumber]} placeholder="Title"/>
      <Field type="text" name="description" component={renderInput} validate={required} placeholder="Description"/>
      <Field type="text" name="image" component={renderInput} validate={required} placeholder="Image"/>
      {props.error && <span className="form-alert">{props.error}</span>}
      <button type="reset" onClick={handleReset}>No Thanks</button>
      <button type="submit" >Add</button>
    </form>
  );
};

const resetFormAfterSubmit = (result, dispatch) =>
  dispatch(reset('addHotdogForm'));

const AddHotdogReduxForm = reduxForm({
  form: 'addHotdogForm',
  onSubmitSuccess: resetFormAfterSubmit
})(AddHotdogForm);

export default AddHotdogReduxForm;