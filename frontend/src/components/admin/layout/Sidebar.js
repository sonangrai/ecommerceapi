import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="sys__title">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path d="M511.52,172.128L482.56,56.224C479.008,41.984,466.208,32,451.52,32H60.512c-14.688,0-27.488,9.984-31.072,24.224    L0.48,172.128C0.16,173.376,0,174.688,0,176c0,44.096,34.08,80,76,80c24.352,0,46.08-12.128,60-30.944    C149.92,243.872,171.648,256,196,256s46.08-12.128,60-30.944C269.92,243.872,291.616,256,316,256c24.384,0,46.08-12.128,60-30.944    C389.92,243.872,411.616,256,436,256c41.92,0,76-35.904,76-80C512,174.688,511.84,173.376,511.52,172.128z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M436,288c-21.792,0-42.496-6.656-60-18.816c-35.008,24.352-84.992,24.352-120,0c-35.008,24.352-84.992,24.352-120,0    C118.496,281.344,97.792,288,76,288c-15.712,0-30.528-3.68-44-9.952V448c0,17.664,14.336,32,32,32h128V352h128v128h128    c17.664,0,32-14.336,32-32V278.048C466.528,284.32,451.712,288,436,288z" />
                </g>
              </g>
            </svg>
            Pasal
          </span>
        </div>
        <div className="menu__box">
          <div className="menu__item active">
            <Link to="">
              <svg
                id="light"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m22.5 6h-21c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5zm-21-5c-.276 0-.5.224-.5.5v3c0 .276.224.5.5.5h21c.276 0 .5-.224.5-.5v-3c0-.276-.224-.5-.5-.5z" />
                </g>
                <g>
                  <path d="m9.5 24h-8c-.827 0-1.5-.673-1.5-1.5v-13c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zm-8-15c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h8c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5z" />
                </g>
                <g>
                  <path d="m22.5 15h-8c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h8c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5z" />
                </g>
                <g>
                  <path d="m22.5 24h-8c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5zm-8-6c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h8c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5z" />
                </g>
              </svg>
              Dashboard
            </Link>
          </div>
          <div className="menu__item">
            <Link to="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path d="m61.18 39.1a3.969 3.969 0 0 0 -2.18-2.29v-27.81a3.009 3.009 0 0 0 -3-3h-32a3.009 3.009 0 0 0 -3 3v28.03a20.264 20.264 0 0 0 -3.24 1.85l-3.14 2.2-1.15-1.64a1.007 1.007 0 0 0 -1.39-.25l-9.83 6.88a1.017 1.017 0 0 0 -.25 1.4l10.33 14.74a1 1 0 0 0 1.39.25l9.83-6.88a1.019 1.019 0 0 0 .25-1.4l-.57-.81a8.9 8.9 0 0 1 6.6-1.41l1.78.3a13 13 0 0 0 6.71-.58l20.47-7.45a4 4 0 0 0 2.39-5.13zm-16.18-31.1h11a1 1 0 0 1 1 1v3h-12zm-8 0h6v8.59l-2.29-2.3a1.008 1.008 0 0 0 -1.42 0l-2.29 2.3zm-14 1a1 1 0 0 1 1-1h11v4h-12zm0 5h12v5a.987.987 0 0 0 .62.92 1 1 0 0 0 1.09-.21l3.29-3.3 3.29 3.3a1.007 1.007 0 0 0 .71.29.838.838 0 0 0 .38-.08.987.987 0 0 0 .62-.92v-5h12v22.51a3.847 3.847 0 0 0 -.94.2l-3.54 1.29h-7.03a3.873 3.873 0 0 0 -1.85-.87l-10.05-1.77a20.993 20.993 0 0 0 -9.74.58l-.18.06c-.23.06-.45.15-.67.23zm-9.61 46.25-9.17-13.11 8.19-5.74 9.17 13.11zm46.01-19.43a2 2 0 0 1 -1.29 1.53l-20.47 7.45a10.988 10.988 0 0 1 -5.68.49l-1.79-.3a10.883 10.883 0 0 0 -8.09 1.74l-6.31-9.02 3.14-2.19a18.6 18.6 0 0 1 5.31-2.6l.18-.05a19.244 19.244 0 0 1 8.85-.55l10.04 1.77a2.048 2.048 0 0 1 1.3.83 2.012 2.012 0 0 1 .33.86 1.768 1.768 0 0 1 -.05.84 2.009 2.009 0 0 1 -2.29 1.42l-10.81-1.91-.34 1.96 10.8 1.91a3.419 3.419 0 0 0 .71.07 4.017 4.017 0 0 0 3.84-2.85l9.96-3.63a2 2 0 0 1 2.56 1.2 1.9 1.9 0 0 1 .1 1.03z" />
              </svg>
              Products
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;