"use client";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center my-8 mx-16 bg-[#0E0E10] h-[40rem] rounded-2xl">
      <TextRevealCard
      text="Explore Cloud Dynamics"
      revealText="Understand the Technology"
      >
<TextRevealCardTitle>
  Reveal Cloud Insights.
</TextRevealCardTitle>
<TextRevealCardDescription>
  Dive into the intricacies of cloud technology. Hover over to uncover hidden insights.
</TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
