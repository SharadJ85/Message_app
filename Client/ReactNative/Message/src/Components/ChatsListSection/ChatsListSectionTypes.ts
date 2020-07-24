export interface ChatsListSectionProps {
  user?: User;
  recipient: User;
  message: ChatMessage;
  newMessageCount?: number;
}

interface ChatMessage {
  user?: User;
  message: string;
  timeStamp: string;
}

interface User {
  userId: string;
  userName: string;
  email: string;
}
