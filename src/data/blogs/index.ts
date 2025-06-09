import financialPlanning from './financial-planning';
import gstUpdates2025 from './gst-updates-2025';
import gstDocumentList from './gst-document-list';

// Make sure all blog objects have tag and date fields!
export const blogs = [
  {
    ...financialPlanning,
    tag: "mutual fund",
    date: "2025-05-10",
  },
  {
    ...gstUpdates2025,
    tag: "gst",
    date: "2025-06-01",
  },
  {
    ...gstDocumentList,
    tag: "GST",
    date: "9 JUNE 2025",
  },
  // Add more blogs as needed
];
