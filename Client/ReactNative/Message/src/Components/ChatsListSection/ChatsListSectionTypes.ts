export interface ChatsListSectionProps {
  owner?: User;
  recipient: User;
  messages: ChatMessage;
  newMessageCount?: number;
}

interface ChatMessage {
  user?: User;
  message: string;
  timeStamp: string;
}

interface User {
  userId?: string;
  userName: string;
}
