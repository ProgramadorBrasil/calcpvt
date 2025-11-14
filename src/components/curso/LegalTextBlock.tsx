import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";

interface LegalTextBlockProps {
  content: string;
  reference?: string;
}

const LegalTextBlock = ({ content, reference }: LegalTextBlockProps) => {
  return (
    <div className="my-6 bg-gray-50 border-l-4 border-ms-blue p-6 rounded-r-lg">
      <div className="flex items-start space-x-3">
        <Scale className="h-5 w-5 text-ms-blue mt-1 flex-shrink-0" />
        <div className="flex-1">
          {reference && (
            <Badge variant="outline" className="mb-3 bg-ms-blue text-white border-ms-blue">
              {reference}
            </Badge>
          )}
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap font-serif italic">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalTextBlock;
