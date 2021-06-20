import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {  CHANGE_PAGE_STATE_HOME,} from "../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

//import ProfileCard from '../ProfileCard/ProfileCard';
//import Mybutton from '../Button/MyButton';
//import WordCollectionImg from '../../images/wordcollection.png';

const Home = () => {

  const { dispatch } = useContext(AppContext);
  const [pageState, setPageState] = useState([true, false, false]);

  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    dispatch({
      type: CHANGE_PAGE_STATE_HOME,
    });
    // eslint-disable-next-line
  }, [pageState]);


  const [skillContentAnim, setSkillContentAnim] = useState("");
  window.addEventListener("scroll", () => {
    setSkillContentAnim("fadein");
  });

  return (
    <div className="home">
      <div className="top" style={{ backgroundImage: "TopImage" }}>
        <h1>Welcome to Koki Isokawa's website!!</h1>
      </div>
      
      <div className="margin"></div>

      <div className="content">
        <div className="content-grid">
          <h3 className="about-index">About</h3>
          <div className="content-about">
            1995年生まれ。埼玉県出身。<br></br>
            8才から野球にのめり込み、クラブチームで野球漬けの日々を送る。<br></br>
            学部時代は東京大学工学部電子情報工学科に所属し、農業IoT技術とデータ活用の分野で研究を行った。<br></br>
            大学院は情報理工学系研究科にて時空間データ分析手法について研究を行った。<br></br>
            その他、東京大学丁友会硬式野球部代表を務めた。<br></br>
            現在は大手証券会社にてクオンツ・データサイエンス業務に従事。<br></br>
            趣味は旅行、犬/猫と戯れること。
          </div>
        </div>
        
        
        <div className="content-grid">
          <h3 className="content-index">Educaiton</h3>
          <div className="content-row">
            <span className="col-1">Apr. 2019 - Mar. 2021</span>
            <span className="col-2">東京大学大学院 情報理工学系研究科 電子情報学専攻（喜連川研究室）</span>
          </div>
          <div className="content-row">
            <span className="col-1">Apr. 2017 - Mar. 2019</span>
            <span className="col-2">東京大学　工学部　電子情報工学科（川原研究室）</span>
          </div>
          <div className="content-row">
            <span className="col-1">Apr. 2015 - Mar. 2017</span>
            <span className="col-2">東京大学　教養学部（前期課程）</span>
          </div>
          <div className="content-row">
            <span className="col-1">Apr. 2011 - Mar. 2014</span>
            <span className="col-2">筑波大学附属高校 </span>
          </div>
        </div>

        <div className="content-grid">
          <h3 className="content-index">Publish</h3>
          <div className="content-pub">
            <span className="color-pub">携帯電話人口統計および施設情報の複合非負値行列因子分解に基づく都市動態の変化点検知</span>（口頭）<br></br>
            磯川 弘基（東大），豊田 正史（東大生研），梅本 和俊（東大生研），商 海川（東大生研，情報通信研究機構），是津 耕司（情報通信研究機構）,喜連川 優（東大生研，国立情報学研究所）<br></br>
            第13回データ工学と情報マネジメントに関するフォーラム（DEIM 2021）<br></br>
            <strong>DEIM学生プレゼンテーション賞</strong>・<strong><u>優秀論文賞</u></strong><br></br>
          </div>

          <div className="content-pub">
            <span className="color-pub">携帯電話人口統計データを用いた新規施設に関わる都市動態の変化解析</span>（口頭）<br></br>
            磯川 弘基（東大），豊田 正史（東大生研），喜連川 優（東大生研，国立情報学研究所）<br></br>
            第12回データ工学と情報マネジメントに関するフォーラム（DEIM 2020）<br></br>
            <strong>DEIM学生プレゼンテーション賞</strong>
          </div>

          <div className="content-pub">
            <span className="color-pub">完全制御型植物工場における環境制御最適化に向けた生育段階によるベイズ最適化の適用手法</span>（口頭）<br></br>
            磯川 弘基（東大），繁田 亮（東大），川原 圭博（東大）<br></br>
            電子情報通信学会総合大会 2019
          </div>
          <div className="content-pub">
            <span className="color-pub">完全制御型植物工場におけるベイズ最適化を用いた動的な最適環境制御則探索</span>（口頭）<br></br>
            磯川 弘基 （東大），繁田 亮（東大），川原 圭博（東大） <br></br>
            電子情報通信学会技術研究報告 2018
          </div>
        </div>
        
        {/*
        <div className="content-skill">
          <h3>Skill</h3>
          <div className="content-skill-list" style={{ animationName: skillContentAnim }}>
            <div className="skill-lang">
              <h2>Language</h2>
              <div className="skill-lang-content">
                <h2>Python</h2>
                <h2>C#</h2>
                <h2>C</h2>
                <h2>TypeScript</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
              </div>
            </div>

            <div className="skill-framework">
              <h2 className="skill-framework-title">Framework & Tool</h2>
              <div className="skill-framework-content">
                <h2>Unity</h2>
                <h2>Django</h2>
                <h2>React</h2>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
      

      <div className="contact">
        <h3>Contact</h3>
        <div className="contact-content">
          <h2>SNS</h2>
          <div className="contact-icon">
          
          <li>
          <FacebookShareButton url={"https://www.facebook.com/kohki.isokawa"}>
          <FacebookIcon size={45} round />
          </FacebookShareButton>
          </li>
          <li>
          <LinkedinShareButton url={"https://www.linkedin.com/in/%E5%BC%98%E5%9F%BA-%E7%A3%AF%E5%B7%9D-b018931b2/"}>
          <LinkedinIcon size={45} round />
          </LinkedinShareButton>
          </li>
          <li>
          <a href="https://www.slideshare.net/ssuser9baa2a" className="contact-item">
            <FontAwesomeIcon icon={["fab", "slideshare"]} size={"3x"} className="logos" color="#3b5998" />
          </a>
          </li>
          <li>
          <a href="https://www.github.com/isokiso" className="contact-item">
            <FontAwesomeIcon icon={["fab", "github"]} size={"3x"} className="logos" color="black" />
          </a>
          </li>
          <li>
          <a href="https://www.instagram.com/i.so.ka.wa" className="contact-item">
            <FontAwesomeIcon icon={["fab", "instagram"]} size={"3x"} className="logos" color="#3b5998" />
          </a>
          </li>
          </div>
          <h2>E-mail</h2>
          <h2 className="email">tyukyubya12215[at]gmail.com</h2>
        </div>
      </div>
    </div>
  )

};

export default Home;