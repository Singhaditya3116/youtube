import React from "react";
import userIcon from "../images/user-icon.png";

const commentsData = [
  {
    name: "Singh Aditya",
    text: "No one can beat MSD in wicket-keeper role.",
    replies: [
      {
        name: "Singh Aditya",
        text: "No one can beat MSD in wicket-keeper role.",
        replies: [
          {
            name: "Singh Aditya",
            text: "No one can beat MSD in wicket-keeper role.",
            replies: [
              {
                name: "Singh Aditya",
                text: "No one can beat MSD in wicket-keeper role.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Singh Aditya",
        text: "No one can beat MSD in wicket-keeper role.",
        replies: [
          {
            name: "Singh Aditya",
            text: "No one can beat MSD in wicket-keeper role.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Singh Uday",
    text: "No one can beat MSD in wicket-keeper role.",
    replies: [
      {
        name: "Singh Aditya",
        text: "No one can beat MSD in wicket-keeper role.",
        replies: [],
      },
    ],
  },
  {
    name: "Thorat Rahul",
    text: "No one can beat MSD in wicket-keeper role.",
    replies: [],
  },
  {
    name: "Krishna Shubhankar",
    text: "No one can beat MSD in wicket-keeper role.",
    replies: [
      {
        name: "Singh Aditya",
        text: "No one can beat MSD in wicket-keeper role.",
        replies: [],
      },
      {
        name: "Singh Aditya",
        text: "No one can beat MSD in wicket-keeper role.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ comment }) => {
  const { name, text, replies } = comment;
  return (
    <>
      <div className="flex  p-2 m-2 rounded-md shadow">
        <div className="mr-2">
          <img className="w-8 h-8" alt="profile" src={userIcon} />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <h4>{text}</h4>
        </div>
      </div>
      <div className="ml-7  border-gray-500 border-l-2">
        {replies.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2">
      <h2 className="font-bold py-2 text-xl">Comments :</h2>
      {commentsData.map((comment) => (
        <div className="border-gray-500 border-l-2">
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
