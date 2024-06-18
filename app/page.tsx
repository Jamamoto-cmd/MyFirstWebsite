import TypingBubble from "./components/typing-bubble/typing-bubble";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="w-full min-h-screen h-auto overflow-auto pt-16">
        {/*round picture
        <div className="flex justify-center items-center mt-16">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/WECHSELN.jpg"
              alt="Your Alt Text"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>*/}
        {/*Chatbubble*/}
        <div className="flex items-center justify-center mb-5">
          <TypingBubble
            text="Hallo, dies ist eine langsam erscheinende Nachricht."
            typingSpeed={150}
          />
        </div>
      </article>
    </>
  );
}
