"use client";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { Toaster } from "sonner";
export function TailwindcssButtons() {
  const copy = (button: any) => {

  };

  const copyToClipboard = (text: string) => {
  };
  return (
    <div className="pb-40 px-4 w-full">
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  
  {
    name: "Architecture diagram",
    description: "cloud  architecture diagrams with  appropriate description",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Upload ur architecture
        </div>
      </button>
    ),
  },
  


];
