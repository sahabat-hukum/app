"use client";
import { useCallback, useEffect, useState } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";
import { headers } from "next/headers";

function Chat({ params }) {
  const headersList = headers();
  const userId = headersList.get("x-user-id");
  const [dataMe, setDataMe] = useState(null);
  const [data, setData] = useState(null);

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

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/user/` + params.id,
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();

        setData(data);
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
      id: data._id,
      name: data.name,
      email: data.identifier,
      photoUrl: data.imgUrl,
      welcomeMessage: "Hey, how can I help?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <Session appId="t6cWkLWk" syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "500px" }}
      ></Chatbox>
    </Session>
  );
}

export default Chat;
