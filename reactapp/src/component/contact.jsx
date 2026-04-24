import React from 'react'

function contact() {
    const [name, setname] = usestate('')
    const [email, setemail] = usestate('')
    const [message, setmessage] = usestate('')
    const handlesubmit = () => { }
    return (
        <div>
            <form onsubmit={handleSubmit}>
                <input type="text" placeholder='Enter you name' value={name} onChange={(e) => setname(e.target.value)} />
                <input type="email" placeholder='Enter you email' value={email} onChange={(e) => setemail(e.target.value)} />
                <textarea placeholder='Enter you message' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )


}

export default App