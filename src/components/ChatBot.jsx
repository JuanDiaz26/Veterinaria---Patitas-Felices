import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    if (!window.voiceflowChatLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.onload = () => {
        if (!window.voiceflowChatLoaded) {  // Asegúrate de que no se cargue más de una vez
          window.voiceflow.chat.load({
            verify: { projectID: '66a79da2f0a219b6f4eedc73' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
          window.voiceflowChatLoaded = true;
        }
      };

      document.body.appendChild(script);

      // Cleanup function to remove the script when the component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      {/* Puedes agregar aquí cualquier contenido adicional que desees */}
    </div>
  );
};

export default VoiceflowChat;

