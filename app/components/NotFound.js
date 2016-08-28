import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <div className="notfound__svg">
          <svg width="149px" height="149px" viewBox="0 0 149 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="50-Emoji-Icons" transform="translate(-1330.000000, -205.000000)">
                    <g id="embarrassed-1" transform="translate(1330.875000, 205.000000)">
                        <path d="M135.498,62.064 C135.498,60.378 135.433,58.7075 135.316,57.052 C132.9745,57.9915 130.4225,58.5145 127.749,58.5145 C116.5115,58.5145 107.369,49.372 107.369,38.1345 C107.369,34.0505 109.5625,29.086 114.042,23.0355 C103.9305,18.0065 92.459,15.3535 80.38,15.794 C41.746,17.2015 11.5695,49.663 12.9775,88.2965 C13.1835,93.9485 14.0625,99.416 15.521,104.633 C18.6725,110.638 22.7195,116.102 27.488,120.843 C38.434,127.9375 51.483,132.063 65.499,132.063 C104.158,132.063 135.498,100.723 135.498,62.064 L135.498,62.064 Z M90.7485,65.564 C90.7485,61.146 94.3305,57.564 98.7485,57.564 C103.1665,57.564 106.7485,61.146 106.7485,65.564 C106.7485,66.6035 106.544,67.5935 106.183,68.505 C113.6485,70.085 119.251,76.71 119.251,84.6465 C119.251,93.761 111.8635,101.1495 102.749,101.1495 C93.634,101.1495 86.246,93.761 86.246,84.6465 C86.246,79.1265 88.959,74.243 93.121,71.2475 C91.657,69.7975 90.7485,67.787 90.7485,65.564 L90.7485,65.564 Z M45.249,101.1495 C36.134,101.1495 28.746,93.761 28.746,84.6465 C28.746,76.7105 34.348,70.0855 41.814,68.505 C41.453,67.594 41.2485,66.6035 41.2485,65.564 C41.2485,61.146 44.8305,57.564 49.2485,57.564 C53.6665,57.564 57.2485,61.146 57.2485,65.564 C57.2485,67.787 56.3405,69.7975 54.876,71.247 C59.038,74.243 61.751,79.1265 61.751,84.6465 C61.751,93.7605 54.3635,101.1495 45.249,101.1495 L45.249,101.1495 Z M57.332,103.0635 L90.332,103.0635 L90.332,111.0635 L57.332,111.0635 L57.332,103.0635 L57.332,103.0635 Z" id="Shape" fill="#FFCE00"></path>
                        <path d="M135.498,62.064 C135.498,100.723 104.158,132.063 65.499,132.063 C51.483,132.063 38.4335,127.9375 27.488,120.843 C39.428,132.715 55.8715,140.063 73.999,140.063 C110.391,140.063 139.998,110.456 139.998,74.064 C139.998,67.8135 139.1245,61.763 137.493,56.0285 C136.792,56.4125 136.064,56.751 135.316,57.052 C135.433,58.7075 135.498,60.378 135.498,62.064 L135.498,62.064 Z" id="Shape" fill="#FFB100"></path>
                        <path d="M80.38,15.7935 C92.459,15.353 103.931,18.0065 114.042,23.035 C114.2585,22.7425 114.4815,22.447 114.7085,22.1495 C103.4865,13.3305 89.346,8.065 73.999,8.065 C37.607,8.065 8,37.672 8,74.064 C8,85.089 10.721,95.4885 15.521,104.633 C14.0625,99.416 13.1835,93.9485 12.9775,88.2965 C11.5695,49.663 41.746,17.2015 80.38,15.7935 L80.38,15.7935 Z" id="Shape" fill="#FFE454"></path>
                        <path d="M54.876,71.247 C53.4305,72.6785 51.4435,73.564 49.2485,73.564 C45.87,73.564 42.987,71.4665 41.814,68.505 C34.348,70.0855 28.746,76.7105 28.746,84.6465 C28.746,93.761 36.1335,101.1495 45.249,101.1495 C54.3635,101.1495 61.751,93.761 61.751,84.6465 C61.751,79.1265 59.038,74.243 54.876,71.247 L54.876,71.247 Z" id="Shape" fill="#FF9E00"></path>
                        <path d="M86.246,84.6465 C86.246,93.761 93.6335,101.1495 102.749,101.1495 C111.8635,101.1495 119.251,93.761 119.251,84.6465 C119.251,76.71 113.6485,70.085 106.183,68.505 C105.01,71.4665 102.127,73.564 98.7485,73.564 C96.5535,73.564 94.5665,72.6785 93.121,71.2475 C88.959,74.243 86.246,79.1265 86.246,84.6465 L86.246,84.6465 Z" id="Shape" fill="#FF9E00"></path>
                        <path d="M49.2485,73.564 C51.4435,73.564 53.4305,72.6785 54.876,71.247 C56.3405,69.7975 57.2485,67.787 57.2485,65.564 C57.2485,61.146 53.6665,57.564 49.2485,57.564 C44.8305,57.564 41.2485,61.146 41.2485,65.564 C41.2485,66.6035 41.453,67.5935 41.814,68.505 C42.987,71.4665 45.87,73.564 49.2485,73.564 L49.2485,73.564 Z" id="Shape" fill="#000000"></path>
                        <path d="M106.183,68.505 C106.544,67.594 106.7485,66.6035 106.7485,65.564 C106.7485,61.146 103.1665,57.564 98.7485,57.564 C94.3305,57.564 90.7485,61.146 90.7485,65.564 C90.7485,67.787 91.6565,69.7975 93.121,71.2475 C94.5665,72.6785 96.5535,73.564 98.7485,73.564 C102.127,73.564 105.01,71.4665 106.183,68.505 L106.183,68.505 Z" id="Shape" fill="#000000"></path>
                        <rect id="Rectangle-path" fill="#000000" x="57.332" y="103.0635" width="33" height="8"></rect>
                        <path d="M115.369,38.1345 C115.369,44.9605 120.9225,50.5145 127.749,50.5145 C134.5745,50.5145 140.128,44.961 140.128,38.1345 C140.128,33.788 133.58,25.2915 127.7505,19.211 C121.9195,25.2975 115.369,33.798 115.369,38.1345 L115.369,38.1345 Z" id="Shape" fill="#28E0FF"></path>
                        <path d="M148.128,38.1345 C148.128,33.371 145.154,27.415 139.036,19.9265 C134.8285,14.7765 130.675,10.8265 130.501,10.661 L127.749,8.0525 L124.9975,10.6605 C124.8705,10.7805 122.6485,12.896 119.834,16.0105 C107.221,6.031 91.294,0.065 73.999,0.065 C33.196,0.065 0,33.2605 0,74.064 C0,114.867 33.196,148.063 73.999,148.063 C114.802,148.063 147.998,114.867 147.998,74.064 C147.998,65.757 146.6215,57.7645 144.0855,50.304 C146.6235,46.906 148.128,42.6925 148.128,38.1345 L148.128,38.1345 Z M139.998,74.064 C139.998,110.456 110.391,140.063 73.999,140.063 C55.871,140.063 39.4275,132.715 27.488,120.843 C22.72,116.102 18.6725,110.638 15.521,104.633 C10.721,95.4885 8,85.089 8,74.064 C8,37.672 37.607,8.065 73.999,8.065 C89.346,8.065 103.4865,13.3305 114.7085,22.1495 C114.4815,22.4475 114.2585,22.743 114.042,23.035 C109.5625,29.086 107.369,34.05 107.369,38.134 C107.369,49.3715 116.5115,58.514 127.749,58.514 C130.4225,58.514 132.9745,57.991 135.316,57.0515 C136.064,56.7505 136.792,56.412 137.493,56.028 C139.1245,61.763 139.998,67.8135 139.998,74.064 L139.998,74.064 Z M127.749,50.514 C120.923,50.514 115.369,44.9605 115.369,38.134 C115.369,33.7975 121.9195,25.297 127.7505,19.2105 C133.58,25.291 140.128,33.787 140.128,38.134 C140.128,44.9605 134.5745,50.514 127.749,50.514 L127.749,50.514 Z" id="Shape" fill="#000000"></path>
                    </g>
                </g>
            </g>
          </svg>
        </div>
        <h2>404</h2>
        <p className="notfound__head">PAGE NOT FOUND</p>
        <p className="notfound__detail">Oops, la page demandée n'existe plus ou n'est plus disponible</p>
        <Link to="/"><button className="notfound__button">Retourner à la page d'accueil</button></Link>
      </div>
    );
  }
}
