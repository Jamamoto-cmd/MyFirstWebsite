import { Metadata } from "next";
import { title } from "process";

type Props = {
  params: { projectId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.projectId}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

export default function Projects({ params }: Props) {
  return (
    <>
      <div className="w-full">
        <h1>Project Nr. {params.projectId}</h1>
      </div>
    </>
  );
}
