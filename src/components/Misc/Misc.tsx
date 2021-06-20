import React from 'react';
import "./Misc.css";
import ProductCard from "../Product/ProductCard/ProductCard";

//import ShirohumiImg from "../../images/shiro.png";
//import PortfolioImg from "../../images/Portfolio.png";
import ProductSample from "../../images/Cat.png";
import { MobileScreenShareRounded } from '@material-ui/icons';


const Misc = () => {
    return (
        <div className="misc">
            {/*
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
                topImage={ProductSample}
                title="ポートフォリオ"
                description="Reactを使用して作成しました。"
                platformIconIonfo={
                    {
                        info: "fas",
                        fontName: "laptop"
                    }
                }
            />
            */}
            <ProductCard
                url=""
                topImage={ProductSample}
                title="準備中..."
                description=""
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

export default Misc;
