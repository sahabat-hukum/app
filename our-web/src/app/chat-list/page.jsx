"use client";
import { useCallback, useEffect, useState } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";


function Chat() {
  const userId = headersList.get("x-user-id");
  const [dataMe, setDataMe] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/user/` + userId,
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();

        setDataMe(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: dataMe._id,
        name: dataMe.name,
        email: dataMe.identifier,
        photoUrl: dataMe.imgUrl,
        welcomeMessage: "Hi!",
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation("new_conversation");

    const other = new Talk.User({
      id: "frank",
      name: "Frank",
      email: "frank@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Hey, how can I help?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return <Session appId="t6cWkLWk" syncUser={syncUser}></Session>;
}

export default Chat;
