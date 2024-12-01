import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(Box)`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
  outline: none;
  border-radius: 8px;
`;

const Title = styled(Typography)`
  font-size: 20px;
  margin-bottom: 16px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SendButton = styled(Button)`
  margin-top: 16px;
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #388e3c;
  }
`;

const MessageModal = ({ open, onClose, message, onSend }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    onSend(newMessage);
    setNewMessage('');
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      aria-labelledby="message-modal"
      aria-describedby="message-content"
    >
      <ModalContainer>
        <Title variant="h6" component="h2">
          Full Message
        </Title>
        <Typography>{message}</Typography>
        <TextArea
          aria-label="new-message"
          placeholder="Enter your reply..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          minRows={4}
        />
        <SendButton variant="contained" onClick={handleSend}>
          Send
        </SendButton>
      </ModalContainer>
    </CustomModal>
  );
};

export default MessageModal;

