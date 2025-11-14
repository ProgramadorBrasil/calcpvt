import { CheckCircle2 } from "lucide-react";

interface ChecklistSectionProps {
  title: string;
  items: string[];
}

const ChecklistSection = ({ title, items }: ChecklistSectionProps) => {
  return (
    <div className="my-6">
      <h4 className="font-semibold text-lg mb-3 text-ms-blue">{title}</h4>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded transition-colors">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;
