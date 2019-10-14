import React from 'react';
import './Picture.css';


const Picture = (props) => {

  return (

    // <React.Fragment>

      // {/* { !props.pictures &&
      //   <div>Picture is loading...</div>
      // } */}

      // {/* { props.pictures && */}
        <a href="#s" className="Picture" key={props.key}>
          <img className="Picture__img" src={props.url} width="182" height="182" alt={`Картинка ${parseInt(props.url.split('/')[1])}`}/>

          <p className="Picture__info">
            <span className="Picture__comments"></span>
            <span className="Picture__likes">{props.likes}</span>
          </p>
        </a>
      // }

    // </React.Fragment>
  );
}

export default Picture;
