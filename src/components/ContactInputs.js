const ContactInputs = (props) => {
    return(
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <br />
            <input type={props.type} name={props.name} id={props.id} spellCheck="false" pattern={props.pattern} value={props.value} onChange={props.onchange} required/>
            <br />
        </>
    )
}

export default ContactInputs;