const LSInputField = ({ inputFieldData }) => {
  const { type, placeholder, dispatch, validationType, error } = inputFieldData;
  return (
    <>
      <input
        className={`login_form_input w-100 mb-2 border border-0 rounded-pill bg-white text-secondary py-2 px-4`}
        type={type}
        placeholder={placeholder}
        onBlur={(e) => {
          dispatch({
            type: validationType,
            payload: e.target.value,
          });
        }}
      />
      <p className="error_message">{error}</p>
    </>
  );
};

export default LSInputField;
