import React, {useRef} from "react";
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
function HomePage() {
    const btnMenu = useRef();
    const btnCloseMenu = useRef();
    const menuBox = useRef();
    const Header = useRef();
    const openMenu = () =>{
        btnCloseMenu.current.style.display = "block"
        btnMenu.current.style.display = "none"
        menuBox.current.style.display= "block"
        Header.current.style.position= "fixed"
    }
    const closeMenu = () => {
        btnMenu.current.style.display = "block";
        btnCloseMenu.current.style.display = "none"
        menuBox.current.style.display= "none";
        Header.current.style.position= "relative";
    }
    return (
        <>  
            <div ref={Header} className="ConTainerFull">
                <div  className="Header">
                    <div className="BtnHeaderBox">
                        <button ref={btnMenu} onClick={openMenu} className="BtnMenuResposive">
                            <AiOutlineMenu></AiOutlineMenu>
                        </button>
                        <button ref={btnCloseMenu} onClick={closeMenu} className="BtnCloseResposive">
                            <AiOutlineClose></AiOutlineClose>
                        </button>
                    </div>
                    <img className="LogoHeader" src="/Static/Asset 1.png"/>
                    <div ref={menuBox} className="ResposiveMenuMobile">
                        <div className="ConTainerFluid FlexCenterItem">
                            <div className="titleBox">
                                <p>Our Mission</p>
                                <p>About Millionaire Maker</p>
                                <p>About SoLotto</p>
                                <p>Wallet Help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bodybox">
                <div className="ConTainerFluid">
                    <div className="ItemBox01 FlexCenterItem GrapItemBody">
                        <p>
                            Solotto.org is a game where you can win NFTs, which can become high vaulue NFTs.
                        </p>
                        <p>
                            Millionarine Maker will purchase those NFTs for US$100 to US$1,000,000.
                        </p>
                    </div>
                    <div className="GrapItemBody">
                        <div className="ItemBox02 FlexCenterItem GrapItemBody textWhite">
                            <div className="Img03 FlexCenterItem">
                                <p className="FlexCenterItem">
                                    Buy SoLotto NFT at 
                                </p>
                                <div className="FlexCenterItem">
                                    <p className="FlexCenterItem">
                                        USD Coin
                                    </p>
                                    <img className="iconNFT" src="/Static/Asset 4.png"/>
                                    <p className="FlexCenterItem">
                                        (Solana Chain)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="GrapItemBody FlexCenterItem CommissonBox">
                            <h1>COMING SOON...</h1>
                        </div>
                        <div className="ItemBox03 FlexCenterItem GrapItemBody">
                            <Link href="/gold">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 5.png"/>
                                    <p className="ContentItem03">SoLotto Gold</p>
                                    <p className="SubContentItem03">Open 21 Mar 2022 UTC 7:00</p>
                                </div>
                            </Link>
                            <Link href="/bronze">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 7.png"/>
                                    <p className="ContentItem03">SoLotto Bronze</p>
                                    <p className="SubContentItem03">Open 19 Mar 2022 UTC 7:00</p>
                                </div>
                            </Link>
                            <Link href="/mini">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 6.png"/>
                                    <p className="ContentItem03">SoLotto Mini</p>
                                    <p className="SubContentItem03">Open 19 Mar 2022 UTC 17:00</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="GrapItemBody">
                        <div className="ItemBox04 FlexCenterItem GrapItemBody textWhite">
                            <div className="ImgItemBox04 ContainerFuild FlexCenterItem">
                                <p>
                                    Buy SoLotto NFT SoLana
                                </p>
                                <img src="/Static/Asset 9.png" className="iconNFT"/>
                            </div>
                        </div>
                        <div>
                            <div className="ItemBox05 FlexCenterItem GrapItemBody">
                                <div className="SubItemBox05 FlexCenterItem">
                                    <img className="ImgItemBox05" src="/Static/Asset 10.png"/>
                                    <p className="ContentBox05">SoLotto SoLMiLL</p>
                                </div>
                            </div>
                        </div>
                        <div className="boderspace">
                            
                        </div>
                    </div>
                    <div className="ConTainerFluid">
                        <div className="ItemBox06 GrapItemBody">
                            <div className="SubBox01ItemBox06">
                                <h6 className="TitleContentItemBox06">Our Mission</h6>
                                <p>To create a millionaire every time.</p>
                                <p>So that those fortunate millionaires will be able to contribute to society by starting their own businesses, which will create a positive flow of business and influence society.​​</p>
                                <p>By increasing the number of millionaires in the world, it will help revitalize society during the Corona pandemic​</p>
                            </div>
                            <div className="SubBox01ItemBox06">
                                <h6 className="TitleContentItemBox06">Characteristics of Millionaire Maker​</h6>
                                <p>SoLotto.org is a game where you can win NFTs, which can become high value NFTs.​​​</p>
                                <p>At SoLotto.org, you have a higher chance of winning US$1,000,000 than the famous Dubai's Millennium Millionaire (1 in 5,000 chance of winning US$1,000,000).​</p>
                                <p>Among the NFTs that are issued at SoLotto.org include NFT's that can become high value NFTs.​​​</p>
                                <p>Millionaire Maker will purchase those NFTs for US$100 to US$1,000,000.​​​</p>
                                <p>Millionaire Maker/SoLotto.org is completely transparent through the use of a blockchain​​</p>
                                <p>The reason for the high probability of winning is because of the utilization of a DAO (Decentralized Autonomous Organization) mechanism which reduces administrative costs.​</p>
                                <p>You can participate in the game anonymously.</p>
                                <p>A portion of the profits will be donated to help those exhausted by COVID.​</p>
                            </div>
                            <div className="SubBox01ItemBox06">
                                <h6 className="TitleContentItemBox06">What is SoLotto ?</h6>
                                <p>At SoLotto.org, potential high price NFTs will be issued.</p>
                                <p>NFTs that are issued at SoLotto.org will be purchased by Millionaire Maker for as high as 6,600 times more.​</p>
                                <p>SoLotto allows you to purchase SoLotto NFT tickets based on Solana-Chain's USD Coins.​</p>
                                <p>Be aware of other similar crypto currencies, such as using capital or small letters. The correct crypto currency SoLotto uses is "USD Coins".​</p>
                                <p>'USD Coins" can be purchased on various blockchains such as Solana-Chains, Ethereum-Chains through the exchanges such as Binance. And each blockchain will have a different gas fee at the time of remittance.​</p>
                                <p> This site will use the Solana-Chains's USD Coins.</p>
                                <p>You need to have both 'Solana' and 'USD Coins' in your cryptocurrency wallet.​​​</p>
                                <p>'USD Coins' will be used to purchase NFT tickets.</p>
                                <p>'Solana' will be used to pay gas fees. (Gas fees of the Solana-Chain's USD Coins are nominal)​</p>
                                <p>Prepare these correctly and bring out your good fortune.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <div className="ConTainerFluid SubFooterBox">
                    <div className="ItemFooter02">
                        <div className="IconBoxItemFooter02 FlexCenterItem">
                            <img className="ImgItemFooter02" src="/Static/Asset 11.png" />
                            <img className="ImgItemFooter02" src="/Static/Asset 12.png" />
                            <img className="ImgItemFooter02" src="/Static/Asset 13.png" />
                        </div>
                        <div className="IconBoxItemFooter02 ">
                            <div className="ItemFooter01 fontSize30px">
                                <p className="">Connect with us</p>
                            </div>
                            <div className="FlexCenterItem">
                                <img className="ImgItemFooter02" src="/Static/Asset 14.png" />
                                <img className="ImgItemFooter02" src="/Static/Asset 15.png" />
                            </div>
                        </div>
                    </div>
                    <div className="ItemFooter03 FlexCenterItem">
                        <p>Copyright 2021 Solotto All Right Reserved</p>
                    </div>
                </div>
            </div>
        </> 
    )
}
export default HomePage;