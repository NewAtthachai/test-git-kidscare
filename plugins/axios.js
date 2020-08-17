export default function({ $axios, redirect }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    switch (code) {
      case 401:
        window.location = "/admin/login";
        break;
      case 504:
        window.location = "/admin/login";
        break;
    }
  });
}
