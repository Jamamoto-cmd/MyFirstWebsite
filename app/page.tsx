import TypingBubble from "./components/typing-bubble/typing-bubble";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="w-full min-h-screen h-auto overflow-auto pt-16">
        {/*round picture*/}
        <div className="flex justify-center items-center mt-16">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/profil.jpg"
              alt="Your Alt Text"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>
        {/*Chatbubble*/}
        <div className="flex items-center justify-center mb-5 ">
          <div className="max-w-2xl text-2xl">
            <TypingBubble
              text="Hallo, liebe Leute, dies ist meine erste eigene Website. 
            Die Website befindet sich gerade noch in der Entwicklung. 
            Schaut gerne mal von Zeit zu Zeit rein und entdeckt neue Features.
            LG Jonny c:"
              typingSpeed={150}
            />
          </div>
        </div>
      </article>
    </>
  );
}
