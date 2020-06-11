import axios from 'axios';

export default function ApiCaller(
  url,
  method = 'GET',
  header = {},
  body = null,
) {
  /** Header Req */
  const headers = {
    'content-type': 'application/json charset=utf-8',
    ...header,
  };

  return axios({
    method,
    headers,
    url: url,
    data: body,
  });
}
