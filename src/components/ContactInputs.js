const ContactInputs = (props) => {
    const {id, label, type, name, pattern, onchange, value} = props;
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <br />
            <input type={type} name={name} id={id} spellCheck="false" pattern={pattern} value={value} onChange={onchange} required/>
            <br />
        </>
    )
}

export default ContactInputs;