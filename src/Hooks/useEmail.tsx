import { useCallback } from 'react';

interface EmailOptions {
  to: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
  attachments?: File[];
}

export const useEmail = () => {
  const openEmail = useCallback(({ to, subject = '', body = '', cc = '', bcc = '', attachments = [] }: EmailOptions) => {
    // Check if attachments are provided
    if (attachments && attachments.length > 0) {
      // Modify body to mention attachments
      const attachmentNames = attachments.map(file => file.name).join(', ');
      const modifiedBody = body + `\n\n[Note: Please manually attach the following files: ${attachmentNames}]`;
      
      const params = new URLSearchParams();
      if (subject) params.append('subject', subject);
      if (modifiedBody) params.append('body', modifiedBody);
      if (cc) params.append('cc', cc);
      if (bcc) params.append('bcc', bcc);
      
      const mailtoLink = `mailto:${to}${params.toString() ? '?' + params.toString() : ''}`;
      window.location.href = mailtoLink;
      
      // Alert user about manual attachment
      alert('Please manually attach your files to the email that just opened.');
    } else {
      // No attachments, proceed normally
      const params = new URLSearchParams();
      if (subject) params.append('subject', subject);
      if (body) params.append('body', body);
      if (cc) params.append('cc', cc);
      if (bcc) params.append('bcc', bcc);
      
      const mailtoLink = `mailto:${to}${params.toString() ? '?' + params.toString() : ''}`;
      window.location.href = mailtoLink;
    }
  }, []);

  return { openEmail };
};