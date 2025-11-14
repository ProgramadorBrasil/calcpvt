import { FileText } from "lucide-react";

interface CaseStudyBoxProps {
  title?: string;
  content: string;
}

const CaseStudyBox = ({ title, content }: CaseStudyBoxProps) => {
  return (
    <div className="my-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-ms-blue p-6 rounded-r-lg">
      <div className="flex items-start space-x-3">
        <FileText className="h-6 w-6 text-ms-blue mt-1 flex-shrink-0" />
        <div className="flex-1">
          {title && <h4 className="font-bold text-lg mb-3 text-ms-blue">{title}</h4>}
          <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBox;
