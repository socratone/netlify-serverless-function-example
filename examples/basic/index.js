const getData = async () => {
  try {
    const response = await fetch('/.netlify/functions/hello-world');
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error);
    return '';
  }
};

const init = async () => {
  const data = await getData();
  document.body.append(data);
};

init();
