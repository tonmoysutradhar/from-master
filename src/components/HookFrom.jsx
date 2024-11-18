import useInputState from "../hooks/useInputState";


const HookFrom = () => {
    // const [name, handleNameChange] = useInputState('Tonmoy');
    const emailState = useInputState('tonmoy@1.com');

    const handleSubmit = e => {
        console.log('from dataa', emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;