const host = 'https://parseapi.back4app.com';
const appId = 'DxlPXCpDR8DuVnkbBS4Hqop3w2WMX9tGV5C4Q0Q7';
const apiKey = '4TLbwx5CsoxJlWnlDRUgVhWXYFE11vM1clfogiLe';

async function request(method, url = '/', data) {
  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': appId,
      'X-Parse-JavaScript-Key': apiKey,
    },
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  //! To Do - Add auth headers

  try {
    const response = await fetch(host + url, options);

    if (response.status === 204) {
      return response;
    }

    const result = await response.json();

    if (response.ok != true) {
      console.log(result);
      throw new Error(result.message || result.error);
    }
    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');