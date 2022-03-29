import {useState} from 'react'

function Form (props) {
    const [like,setLike] = useState(1)
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = useState(now)

    setInterval(updateTime,1000)

    function likeIncrease() {
        setLike(like +1)
    }
    function updateTime() {
        const now = new Date().toLocaleTimeString();
        setTime(now)
    }
    const fls = true;
    const style1= {
        color:'red',
        fontSize:'20px',
        backgroundColor:'blue'
    }
    return (
        <div>
            <div>{fls ? <p style={{backgroundColor:'red',color:'blue'}}>Nu salut </p> : <p>salut</p>}</div>
            <p>{like}</p>
            <p>{time}</p>
            <button onClick={updateTime}>Update</button>
            <button onClick={likeIncrease}>Sall</button>
            <p>{props.name}</p>
            <form action="/me">
                <input type="text" name="name" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form