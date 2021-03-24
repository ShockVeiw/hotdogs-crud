import { Field } from 'redux-form';
import { renderInput, renderTextarea } from './renderFields';
import { required, isNumber } from '../../formValidators';

export default function UpdateHotdogForm(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <Field type="text" name="image" component={renderInput} validate={required} placeholder="Image"/>
      <Field type="text" name="name" component={renderInput} validate={required} placeholder="Name"/>
      <Field type="text" name="title"  component={renderInput} validate={[required, isNumber]} placeholder="Title"/>
      <Field name="description" component={renderTextarea} validate={required} placeholder="Description"/>
      {props.error && <span className="form-alert">{props.error}</span>}
      <button type="submit">Update</button>
      <button type="reset" onClick={props.onDelete}>Delete</button>
      <button type="button" onClick={props.hideEditMenu}>Hide edit menu</button>
    </form>
  );
}; 