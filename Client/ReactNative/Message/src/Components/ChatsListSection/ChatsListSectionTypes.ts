export interface Props {
  title: string;
  time: string;
  message: {msg: string} | undefined;
  messageCount?: number;
}
