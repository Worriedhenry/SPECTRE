import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';

const URL = import.meta.env.VITE_BACKEND;

const useSocket = () => {
  const userId = useSelector(state => state.auth.userId);
  const socket = useRef(null);

  useEffect(() => {
    if (userId) {
      socket.current = io(URL, {
        auth: { userId },
        autoConnect: false,
        transports: ['websocket']
      });

      // Optionally connect the socket here or elsewhere
      socket.current.connect();

      // Cleanup on unmount
      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [userId]);

  return socket.current;
};

export default useSocket;
