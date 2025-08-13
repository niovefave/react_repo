async function useFetchPost(url, jsonObj) {
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonObj),
  };
  const resp = await fetch(url, option);
  return resp;
}

export default useFetchPost;
