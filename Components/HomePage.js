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
                    <div ref={menuBox} className="ResposiveMenuMobile">
                        <div className="ConTainerFluid FlexCenterItem">
                            <div className="titleBox">
                                <a>Our Misson</a>
                                <a>About MillionairaMaker</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bodybox">
                <div className="ConTainerFluid">
                    <div className="ItemBox01 FlexCenterItem textWhite GrapItemBody">
                        <img className="Img01" src="/Static/Asset 1.png" />
                        <div className="Img02">
                            <p>Connect Wallet</p>
                        </div>
                    </div>
                    <div className="GrapItemBody">
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
                            <Link href="/gold">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 6.png"/>
                                    <p className="ContentItem03">SoLotto Gold</p>
                                </div>
                            </Link>
                            <Link href="/bronze">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 5.png"/>
                                    <p className="ContentItem03">SoLotto Bronze</p>
                                </div>
                            </Link>
                            <Link href="/mini">
                                <div className="SubItemBox03 FlexCenterItem">
                                    <img className="ImgItem03" src="/Static/Asset 7.png"/>
                                    <p className="ContentItem03">SoLotto Mini</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="GrapItemBody">
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
                                <p className="ContentBox05">SoLotto SoLMiLL</p>
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