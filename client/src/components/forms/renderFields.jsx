export const renderInput = ({ input, type, placeholder, meta: { touched, error } }) => (
  <>
    {touched && error && <span className="field-alert">{error}</span>}
    <input {...input} placeholder={placeholder} type={type}/>
  </>  
);

export const renderTextarea = ({ input, type, placeholder, meta: { touched, error } }) => (
  <>
    {touched && error && <span className="field-alert">{error}</span>}
    <textarea {...input} placeholder={placeholder} type={type}/>
  </>  
);

