import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {

    const [commentText,setCommentText] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
        // API Polling
        dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomString(15)
        }))

        },1500);

        return () => {clearInterval(i)};
    },[]);

    const onChangeHandler = (event) => {
        setCommentText(event.target.value);
    }

    //If enter key is pressed,append comment in live chat
    const handleEnterKeyPressed = (event) => {
        if(event.key === 'Enter'){
            dispatch(addMessage({
                name:"Singh Aditya",message:commentText
            }));
            setCommentText("");
        }
    }

    return (
        <>
            <div className="flex flex-col-reverse  h-[600px] ml-4 py-2 border border-black rounded-lg bg-slate-100 overflow-y-auto">
                {
                    chatMessages.map((chat,index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)
                }
            </div>
            <div className="ml-4 mt-1">
                <input className="w-full p-1 border border-black rounded-lg bg-slate-100" type="text" placeholder="Enter the comments" value={commentText} onChange={onChangeHandler} onKeyDown={handleEnterKeyPressed}/>
            </div>
        </>

    )
}

export default LiveChat;