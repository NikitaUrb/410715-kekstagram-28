let DATA;

await fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((posts) => {
    DATA = posts;
    return DATA;
  });

const sendForm = (item) => {
  fetch(
    'https://28.javascript.pages.academy/kekstagram/data',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(item)
    });
} ;

export {DATA, sendForm};
