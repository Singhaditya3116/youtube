import userIcon from "../images/user-icon.png";

const ChatMessage = ({name,message}) => {
    return (
        <div className="flex items-center  p-2 shadow-sm">
            <div className="mr-2 shrink-0">
                <img className="w-5 h-5" alt="profile" src={userIcon} />
            </div>
            
            <span className="shrink-0 mr-2 text-[12px] font-bold">{name}</span>
            <span className="text-[12px]">{message}</span>
        </div>
    )
}

export default ChatMessage;