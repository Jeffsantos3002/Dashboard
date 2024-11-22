export default function Header() {
  return (
    <div className="navbar bg-base-100 fixed">

      <div className="flex-1">
        <div className="drawer w-auto">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <a className="btn btn-ghost text-xl">SoftGreen</a>
              {/* Sidebar content here */}
              <li><a>Page 1</a></li>
              <li><a>Page 2</a></li>
            </ul>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">SoftGreen</a>
      </div>

    </div>
  )
}