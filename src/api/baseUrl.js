export default function getBaseUrl() {
  const inDevelopment = window.location.hoatname === 'localhost';
  return inDevelopment ? 'http://localhost:3001' : '/';
}
