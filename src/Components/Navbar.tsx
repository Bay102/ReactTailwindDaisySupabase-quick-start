import { useAuthProvider } from '../Providers/AuthContext';
import { useNavigate } from 'react-router-dom';
// import UserMenu from './UserMenu';
import { supabase } from '../supabaseConfig';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, setUser } = useAuthProvider();

  const navigate = useNavigate();

  const signOutUser = async () => {
    setUser(null);
    await supabase.auth.signOut();
    navigate('/');
    toast.success('Goodbye');
  };

  return (
    <div className="navbar bg-base-100 w-full flex flex-col sm:flex-row">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate('/')}
        >
          APP
        </a>
      </div>

      {!user && (
        <div className="flex flex-row gap-2">
          <button
            className="btn btn-sm btn-outline btn-secondary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="btn btn-sm btn-outline btn-primary"
            onClick={() => navigate('/register')}
          >
            Join
          </button>
        </div>
      )}

      {user && (
        <div className="flex-none gap-2">
          {/* <UserMenu /> */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[300px]"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Membership</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOutUser()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
