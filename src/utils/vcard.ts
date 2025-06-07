import VCardCreator from 'vcard-creator';

export const generateVCard = () => {
  // Create a new vCard
  const myVCard = new VCardCreator.default('Financial Services');

  // Add company information
  myVCard
    .addCompany('Financial Services')
    .addJobtitle('Financial Advisor')
    .addEmail('contact@financialservices.com')
    .addPhoneNumber('+919876543210', 'WORK')
    .addAddress('', '', '123 Financial District', 'Mumbai', 'Maharashtra', '400001', 'India', 'WORK')
    .addURL('https://financialservices.example.com');

  // Create a data URI for the vCard file
  const vCardData = myVCard.getOutput();
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);

  // Create a temporary link to download the vCard
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', 'financial-services-contact.vcf');
  tempLink.click();

  // Clean up
  window.URL.revokeObjectURL(url);
};