import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SidebarTop } from "./Layout/helpers";
import quotes from "../Data/quotes";

export const PriestChatHeader: React.FC = () => {
  return (
    <SidebarTop>
      <div style={{ fontWeight: 800, fontSize: "1.5rem" }}>Talk to the Priest!</div>
      <div style={{ fontSize: "1.3rem" }}>Confess your sins.</div>
    </SidebarTop>
  );
};

const PriestChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ChatInputContainer = styled.form`
  width: 100%;
  display: flex;
  border-bottom: 5px solid white;
  height: 50px;
`;

const ChatHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const ChatInput = styled.input`
  width: calc(100% - 50px);
  height: 100%;
  background: #282828;
  padding: 15px 0;
  text-indent: 15px;
  border: none;
  color: #ffffff;

  &:focus {
    outline: none;
    background: #383838;
  }
`;

const ChatButton = styled.button`
  width: 50px;
  height: 48px;
  border: none;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatMessageContainer = styled.div`
  margin: 10px;
  display: flex;
`;

const ChatMessage = styled.div`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #333333;
  background: #282828;
  font-size: 0.9rem;
  line-height: 1rem;
  height: auto;
  overflow: hidden;
`;

const PriestChatMessageContainer = styled(ChatMessageContainer)`
  justify-content: flex-start;
`;

const UserChatMessageContainer = styled(ChatMessageContainer)`
  justify-content: flex-end;
`;

const PriestChatMessage = styled(ChatMessage)`
  background: #eaeaef;
`;

const UserChatMessage = styled(ChatMessage)`
  background: #c4c4c4;
`;

export default () => {
  const msgInputRef = useRef<HTMLInputElement>(null);
  const [chatHistory, setChatHistory] = useState<any>([]);

  return (
    <PriestChatContainer>
      <ChatHistory>
        {chatHistory.map((m: any) =>
          m[1] ? (
            <UserChatMessageContainer>
              <UserChatMessage>
                <div>
                  <strong>You</strong>
                </div>
                <div>{m[0]}</div>
              </UserChatMessage>
            </UserChatMessageContainer>
          ) : (
            <PriestChatMessageContainer>
              <PriestChatMessage>
                <div>
                  <strong>Priest</strong>
                </div>
                <div>{m[0]}</div>
              </PriestChatMessage>
            </PriestChatMessageContainer>
          )
        )}
      </ChatHistory>
      <ChatInputContainer
        onSubmit={(e) => {
          e.preventDefault();
          const message = (msgInputRef as any).current.value;
          (msgInputRef as any).current.value = "";
          const reply = quotes[Math.floor(Math.random() * 100) % quotes.length];
          setChatHistory((c: any) => [...c, [message, true]]);
          setTimeout(() => setChatHistory((c: any) => [...c, [reply, false]]), 500);
        }}
      >
        <ChatInput
          placeholder="Confess your sins..."
          name="message"
          ref={msgInputRef}
          autoComplete="off"
        />
        <ChatButton type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M28.2842 14.1421L9.19234 23.3345L12.7279 14.1421L9.19234 4.94975L28.2842 14.1421Z"
              fill="#181818"
            />
          </svg>
        </ChatButton>
      </ChatInputContainer>
    </PriestChatContainer>
  );
};
