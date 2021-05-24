export function fetchSheets() {
    const sheets = fetch('http://localhost:3000/songs');
    return {
      type: 'GET_SONGS',
      sheets
    };
  };