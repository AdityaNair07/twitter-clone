import React from "react";
import TweetBox from "./TweetBox";
import Header from "./Header";
import db from "../firebase";
import { useState, useEffect } from "react";
import TweetList from "./TweetList";

export default function Content() {
  // const [tweets, setTweets] = useState([]);
  // useEffect(() => {
  //   db.collection("tweets")
  //     .orderBy("timeTweet", "desc")
  //     .onSnapshot((snapshot) =>
  //       setTweets(snapshot.docs.map((doc) => doc.data()))
  //     );
  // }, []);
  const tweets = [
    {
      displayName: "John Doe",
      userName: "JohnDoe",
      content: "Just learned about React Hooks! Mind blown!",
      timeTweet: new Date("2022-01-01T12:00:00.000Z"),
      profileImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      displayName: "John Doe",
      userName: "JohnDoe",
      content: "Just learned about React Hooks! Mind blown!",
      timeTweet: new Date("2022-01-01T12:00:00.000Z"),
      profileImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      displayName: "John Doe",
      userName: "JohnDoe",
      content: "Just learned about React Hooks! Mind blown!",
      timeTweet: new Date("2022-01-01T12:00:00.000Z"),
      profileImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      displayName: "John Doe",
      userName: "JohnDoe",
      content: "Just learned about React Hooks! Mind blown!",
      timeTweet: new Date("2022-01-01T12:00:00.000Z"),
      profileImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      displayName: "John Doe",
      userName: "JohnDoe",
      content: "Just learned about React Hooks! Mind blown!",
      timeTweet: new Date("2022-01-01T12:00:00.000Z"),
      profileImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Image:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="lg:flex-1 w-[600px] border-r-2 border-l-2 border-br border-opacity-20 mx-6">
      <div className="border-b-2 border-br border-opacity-20">
        <header className="sticky top-0 z-10 bg-white">
          <Header />
        </header>
        <TweetBox />
      </div>
      <div className="text-sgray">
        <TweetList tweets={tweets} />
      </div>
    </div>
  );
}
