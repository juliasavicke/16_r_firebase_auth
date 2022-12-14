import { Link } from 'react-router-dom';

function NotAuthorised(props) {
  return (
    <div>
      <h1>Only for registered users</h1>
      <p>
        Please login <Link to={'/auth'}>here</Link>
      </p>
    </div>
  );
}
export default NotAuthorised;
