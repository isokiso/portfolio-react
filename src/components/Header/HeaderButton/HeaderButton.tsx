import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderButton.css';

interface NavigationButtonProps {
  contentTextColor: string;
  contentText: string;
  fontInfo: {
    info: string,
    fontName: string,
  };
};


const HeaderButton = (props: NavigationButtonProps) => {

  const info: any = props.fontInfo.info;
  const fontName: any = props.fontInfo.fontName;

  return (
    <div className="HeaderButton">
      <p style={{ color: props.contentTextColor }}>
        <FontAwesomeIcon icon={[info, fontName]} /> {props.contentText}
      </p>
    </div>
  )
};

export default HeaderButton;
