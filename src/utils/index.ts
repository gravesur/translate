const saySentence = (m: string) => {
  const msg = new SpeechSynthesisUtterance(m);

  msg.lang = 'en-US';

  window.speechSynthesis.speak(msg);
};

export { saySentence };
