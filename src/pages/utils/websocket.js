export const connectWebSocket = (onMessage) => {
    const ws = new WebSocket('wss://your-backend-url/ws/chat'); // Replace with actual WebSocket URL
  
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data); 
    };
  
    ws.onclose = () => console.log('WebSocket connection closed.');
    ws.onerror = (error) => console.error('WebSocket error:', error);
  
    return ws;
  };