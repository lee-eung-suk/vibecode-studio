export const trackView = async (toolId: string) => {
  try {
    const response = await fetch(`/api/tools/${toolId}`, {
      method: 'POST',
    });
    return response.json();
  } catch (error) {
    console.error('Failed to track view:', error);
  }
};

export const getVisitorId = () => {
  if (typeof window === 'undefined') return null;

  let visitorId = localStorage.getItem('vibecode_visitor_id');
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('vibecode_visitor_id', visitorId);
  }
  return visitorId;
};
