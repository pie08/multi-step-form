export default function FormInputText({
  title,
  placeholder,
  value,
  setValue,
  inputType = "text",
  isRequired = false,
  validationError,
  formType,
}) {
  return (
    <div
      className={`form__group ${
        validationError === formType ? "form-required-error" : ""
      }`}
    >
      <label className="form__label">{title}</label>

      {isRequired ? (
        <input
          className="input--text"
          required
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className="input--text"
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}
