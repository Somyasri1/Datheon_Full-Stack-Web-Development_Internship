/**
 * Utility to reliably download and preview the verified resume PDF
 * Prevents saving HTML redirect or warmup pages as PDF.
 */
export async function downloadResumeFile(
  filePath: string = '/assets/resume.pdf',
  fileName: string = 'Uppalapati_Somya_Sri_Resume.pdf'
) {
  try {
    const response = await fetch(filePath, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const blob = await response.blob();
    // Verify binary PDF header (%PDF-)
    const headerSlice = await blob.slice(0, 5).text();
    if (!headerSlice.startsWith('%PDF-')) {
      console.warn('Response did not contain valid PDF header, falling back to direct link');
      triggerDirectDownload(filePath, fileName);
      return;
    }

    // Create PDF blob URL
    const objectUrl = window.URL.createObjectURL(
      new Blob([blob], { type: 'application/pdf' })
    );
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => window.URL.revokeObjectURL(objectUrl), 3000);
  } catch (error) {
    console.error('Error fetching PDF blob, falling back to direct anchor:', error);
    triggerDirectDownload(filePath, fileName);
  }
}

function triggerDirectDownload(filePath: string, fileName: string) {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function openResumeInNewTab(filePath: string = '/assets/resume.pdf') {
  try {
    const response = await fetch(filePath, { cache: 'no-cache' });
    if (response.ok) {
      const blob = await response.blob();
      const headerSlice = await blob.slice(0, 5).text();
      if (headerSlice.startsWith('%PDF-')) {
        const objectUrl = window.URL.createObjectURL(
          new Blob([blob], { type: 'application/pdf' })
        );
        window.open(objectUrl, '_blank', 'noopener,noreferrer');
        return;
      }
    }
  } catch (e) {
    console.warn('Blob preview failed, using direct URL:', e);
  }
  window.open(filePath, '_blank', 'noopener,noreferrer');
}
