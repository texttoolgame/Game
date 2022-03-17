import React from "react";
import {ConTainerFull, ConTainerFluid} from "../styles/StyledComponents"

function HomePage() {
    return (
        <>
            <div className="Header FlexCenterItem">
                <div className="titleBox">
                    <a>Our Misson</a>
                    <a>About MillionairaMaker</a>
                </div>
            </div>
            <div className="Bodybox">
                <div className="ItemBox01 textWhite GrapItemBody">
                    <img className="Img01" src="/Static/Asset 1.png" />
                    <div className="Img02">
                        <p>Connect Wallet</p>
                    </div>
                </div>
                <div className="ItemBox02 FlexCenterItem GrapItemBody textWhite">
                    <div className="Img03 FlexCenterItem">
                        <p className="FlexCenterItem">
                            Buy SoLotto NFT at USDC
                        </p>
                        <img className="iconNFT" src="/Static/Asset 4.png"/>
                        <p className="FlexCenterItem">
                            (Solana Chain)
                        </p>
                    </div>
                </div>
                <div className="ItemBox03 FlexCenterItem GrapItemBody">
                    <div className="SubItemBox03 FlexCenterItem">
                        <img className="ImgItem03" src="/Static/Asset 5.png"/>
                        <p className="ContentItem03">Solotto Gold</p>
                    </div>
                    <div className="SubItemBox03 FlexCenterItem">
                        <img className="ImgItem03" src="/Static/Asset 6.png"/>
                        <p className="ContentItem03">Solotto Bronze</p>
                    </div>
                    <div className="SubItemBox03 FlexCenterItem">
                        <img className="ImgItem03" src="/Static/Asset 7.png"/>
                        <p className="ContentItem03">Solotto Mini</p>
                    </div>
                </div>
                <div className="ItemBox04 FlexCenterItem GrapItemBody textWhite">
                    <div className="ImgItemBox04 FlexCenterItem">
                        <p>
                            Buy SoLotto NFT SoLana
                        </p>
                        <img src="/Static/Asset 9.png" className="iconNFT"/>
                    </div>
                </div>
                <div className="ItemBox05 FlexCenterItem GrapItemBody">
                    <div className="SubItemBox05 FlexCenterItem">
                        <img className="ImgItemBox05" src="/Static/Asset 10.png"/>
                        <p className="ContentBox05">Solotto SoLMiLL</p>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <div className="ItemFooter01 fontSize30px">
                    <p className="">Connect with us</p>
                </div>
                <div className="ItemFooter02">
                    <div className="FlexCenterItem">
                        <img className="ImgItemFooter02" src="/Static/Asset 11.png" />
                        <img className="ImgItemFooter02" src="/Static/Asset 12.png" />
                        <img className="ImgItemFooter02" src="/Static/Asset 13.png" />
                    </div>
                    <div>
                        <img className="ImgItemFooter02" src="/Static/Asset 14.png" />
                        <img className="ImgItemFooter02" src="/Static/Asset 15.png" />
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </> 
    )
}
export default HomePage;