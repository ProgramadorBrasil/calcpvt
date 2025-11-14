import { ContentSection } from "@/types/course.types";
import CalloutBox from "./CalloutBox";
import LegalTextBlock from "./LegalTextBlock";
import ChecklistSection from "./ChecklistSection";
import CaseStudyBox from "./CaseStudyBox";

interface ContentRendererProps {
  sections: ContentSection[];
}

const ContentRenderer = ({ sections }: ContentRendererProps) => {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        switch (section.type) {
          case "text":
            return (
              <div key={index} className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            );

          case "legal-text":
            return (
              <LegalTextBlock
                key={index}
                content={section.content}
                reference={section.metadata?.legalReference}
              />
            );

          case "callout":
            return (
              <CalloutBox
                key={index}
                type={section.metadata?.calloutType || "info"}
                title={section.metadata?.title}
                content={section.content}
              />
            );

          case "checklist":
            return (
              <ChecklistSection
                key={index}
                title={section.content}
                items={section.metadata?.items || []}
              />
            );

          case "case-study":
            return (
              <CaseStudyBox
                key={index}
                title={section.metadata?.title}
                content={section.content}
              />
            );

          default:
            return (
              <div key={index} className="text-gray-700">
                {section.content}
              </div>
            );
        }
      })}
    </div>
  );
};

export default ContentRenderer;
