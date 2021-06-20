import React from 'react';
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard";

//import ShirohumiImg from "../../images/shiro.png";
//import PortfolioImg from "../../images/Portfolio.png";
import ProductSample from "../../images/ProductSample.png";
import ESgenerator from "../../images/ES.png"
import Portfolio from "../../images/Portfolio.png"
import FaceTrack from "../../images/FaceTrack.png"
import WordCollectionImg from '../../images/wordcollection.png';

const Product = () => {
    return (
        <div className="product">
            <ProductCard
                url="https://github.com/isokiso/ES_generator"
                topImage={ESgenerator}
                title="ES自動生成器"
                description="自然言語処理で就活のエントリーシートを自動生成しました。"
                platformIconIonfo={
                    {
                        info: "fab",
                        fontName: "app-store-ios"
                    }
                }
            />

            <ProductCard
                url=""
                topImage={Portfolio}
                title="ポートフォリオ"
                description="Reactを使用して本サイトを作成しました。"
                platformIconIonfo={
                    {
                        info: "fas",
                        fontName: "laptop"
                    }
                }
            />

            <ProductCard
                url=""
                topImage={FaceTrack}
                title="顔の向きによるハンドフリーなPC操作機能"
                description="OpenCV, FaceTrackerを用いて顔のトラッキングをし、PC操作補助機能の実装をしました。"
                platformIconIonfo={
                    {
                        info: "fas",
                        fontName: "laptop"
                    }
                }
            />
        </div>
    );
};

export default Product;
