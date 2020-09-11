async function fetchRequest(request) {
  let response = await fetch(request);
  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response;
  }
}

function searchPage(pageString) {
  return fetchRequest(pageString).then(data => data.json());
}

export default searchPage;