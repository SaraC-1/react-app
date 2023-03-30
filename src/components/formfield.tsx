const FormField = () => {
  return (
    <div className="formfield">
      <label htmlFor="formfield1">Label</label>
      <br />
      <input type="text" id="formfield1" placeholder="Placeholder" />
      <p>Validation Message</p>
    </div>
  );
};

export default FormField;
