import React from 'react'
import './TopMid.css'

const TopMid = () => {
    return (
        <div className="TopMid">

            <div className="stardrew">


                <div className="galleryHead">
                    <ul>
                        <li>Store</li>
                        <li>Games</li>
                        <li>Stardew Valley</li>
                    </ul>
                </div>


                <div className="galleryArea">


                    <div className="galleryImage">
                        <div className="image">
                            <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7" />
                        </div>

                        <div className="imgGalSlide">

                        </div>
                    </div>

                    {/* leftSide */}

                    <div className="infoSide">

                        <h3> Nintendo Switch</h3>


                        <h1> Stardew Valley</h1>


                        <div className="infoContent">

                            <div className="heart">
                                <h1> $14.99</h1>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                            </div>

                            <div className='buttonDirect'>

                                <div className="buttonss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-coin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" /></svg>

                                    <p>Eligible for up to <span class="gold">75</span> Gold Points</p>
                                </div>


                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>

                                    <h1> Direct download</h1>
                                </button>


                                <p className="lowerpButton"> This item will be sent to your system automatically after purchase</p>

                            </div>

                        </div>


                    </div>



                </div>


            </div>

        </div>
    )
}

export default TopMid
