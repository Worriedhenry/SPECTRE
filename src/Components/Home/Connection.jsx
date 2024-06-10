import React, { useEffect ,useState} from "react";
import axios from "axios";
import {connect} from "../../Reducers/authSlice"
import { useSelector, useDispatch } from "react-redux";
export default function connection() {

    const dispatch = useDispatch()
    const { connection } = useSelector((state) => state.auth)
    const [connectionState, setConnectionState] = useState(connection)
    useEffect(() => {
        if (connection) return
        axios.get(import.meta.env.VITE_BACKEND + "/connection").then((res) => {
            console.log(res.data)
            if (res.status === 200) {
                dispatch(connect())
                setTimeout(() => {
                    setConnectionState(true)
                    // setConnectionState(false)
                },1200)
            }
            else {
                alert("connection With Backend Failed , Please Refresh The Page")
            }
        })
    }, [])

    // console.log(connection)
    return (
        <div className={`${connectionState  ? "hidden" : "block"}   top-0 w-full z-99`}>
            {!connection && <h1 className="w-full py-2 font-medium text-center bg-yellow-300 animate-pulse">Connecting . . .</h1>}
            {connection && <h1 className="w-full py-2 font-medium text-center bg-green-300 animate-bounce">Connected</h1>}
        </div>
    )
}