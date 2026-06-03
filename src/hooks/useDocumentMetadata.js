import { useEffect } from 'react';

const useDocumentMetadata = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | Uzhavan Thottam` : 'Uzhavan Thottam - Premium Organic Foods';

    // Update Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);
};

export default useDocumentMetadata;
