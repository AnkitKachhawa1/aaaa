import financialPlanning from './financial-planning';
import gstUpdates2025 from './gst-updates-2025';
import gstDocumentList from './gst-document-list';

// Make sure all blog objects have tag and date fields!
export const blogs = [
  {
    ...financialPlanning,
    tag: "Mutual Fund",
    date: "10/05/2025",
  },
  {
    ...gstUpdates2025,
    tag: "GST",
    date: "01/06/2025",
  },
  {
    ...gstDocumentList,
    tag: "GST",
    date: "09/06/2025",
  },
  // Add more blogs as needed
];