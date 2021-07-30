import React from "react";
import styled from "styled-components";

const NotificationsContainer = styled.div`
  min-height: 0;
  overflow: hidden;
  height: calc((100vh - 150px) * 3 / 4);
  width: 100%;

  & > div {
    height: calc(100%);
    overflow: auto;
  }

  & > div > div {
    margin: 20px;
    padding: 10px 15px;
    background: #292929;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    > span.timestamp {
      width: 100%;
      text-align: right;
      font-weight: bold;
      color: #888;
      font-size: 0.8rem;
      padding: 0 5px;
    }
  }
`;

interface INotificationsProps {
  notifications: { content: string; created_at: string }[];
}

const Notifications: React.FC<INotificationsProps> = ({
  notifications
}: INotificationsProps) => {
  return (
    <NotificationsContainer>
      <div>
        {notifications.length === 0 ? (
          <div>
            <span style={{ fontWeight: "bold", color: "#999" }}>
              No new notifications
            </span>
          </div>
        ) : (
          notifications.map(({ content, created_at }, i) => (
            <div key={i}>
              <span dangerouslySetInnerHTML={{ __html: content }} />
              <span className="timestamp">{created_at}</span>
            </div>
          ))
        )}
      </div>
    </NotificationsContainer>
  );
};

export default Notifications;
