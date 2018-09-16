import axios from 'axios';

export const simpleAction = () => {
    console.log("SIMPLE ACTION DISPATCHED");
    const request = axios.get("https://jsonplaceholder.typicode.com/todos");
    return (dispatch) => {
        request
            .then(data => {
            console.log("HELLP")
            console.log(data)
            dispatch({
                type: 'SIMPLE_ACTION',
                payload: data
            })
        })
    }
}