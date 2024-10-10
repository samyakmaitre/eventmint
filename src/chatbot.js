import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', '0XGVtjHZT4GAOOfkqBMPa');
    script.setAttribute('domain', 'www.chatbase.co');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <script>
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "0XGVtjHZT4GAOOfkqBMPa",
            domain: "www.chatbase.co"
          };
        `}
      </script>
    </div>
  );
};

export default Chatbot;
