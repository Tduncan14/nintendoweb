import React from 'react'
import './FooterList.css'

const FooterList = () => {
    return (
        <div>
            <ul className="ListContainer">
                <li>
                    <div className="innerList firstborder">
                        <ul>
                            <li className="HeaderList"><h1>About Nintendo</h1></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Corporate Social Responsiblity</a></li>
                        </ul>
                    </div>
                </li>
                {/* end of about nintendo list */}

                <li>
                    <div className="innerList">
                        <ul>
                            <li className="HeaderList">
                                <h1>Shop</h1>
                            </li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Hardware</a></li>
                            <li><a href="#">Merchandise</a></li>
                            <li><a href="#">Sales & deals</a></li>
                            <li><a href="#">Exclusives</a></li>
                            <li><a href="#">Online service</a></li>
                            <li><a href="#">Nintendo NY store</a ></li>
                        </ul>
                    </div>
                </li>

                {/* End of shop */}

                <li>
                    <div className="innerList">
                        <ul>
                            <li className="HeaderList">
                                <h1>My Nintendo Store orders</h1>
                            </li>
                            <li><a href="#">Order details</a></li>
                            <li><a href="#">Shipping info</a></li>
                            <li><a href="#">Returns & exchanges</a></li>
                            <li><a href="#">FAQ</a></li>

                        </ul>
                    </div>
                </li>



                {/* end of store orders */}





                <li>
                    <div className="innerList">
                        <ul>
                            <li className="HeaderList">
                                <h1>Support</h1>
                            </li>
                            <li><a href="#">Nintendo Switch</a></li>
                            <li><a href="#">Nintendo Account</a></li>
                            <li><a href="#">Other systems</a></li>
                            <li><a href="#">Repairs</a></li>
                            <li><a href="#">Nintendo product recycling</a></li>

                        </ul>
                    </div>
                </li>
                {/* end of support  */}

                <li className="twoinone">
                    <div className="innerList">
                        <ul>
                            <li className="HeaderList">
                                <h1>Parents</h1>
                            </li>
                            <li><a href="#">Info for parents</a></li>
                            <li><a href="#">Parental controls</a></li>

                        </ul>
                    </div>


                    <div className="innerList">
                        <ul>
                            <li className="HeaderList">
                                <h1>Privacy</h1>
                            </li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookies and interest- <span>based ads</span></a></li>

                        </ul>
                    </div>
                </li>

                {/* end of parent / privacy */}

                <li>
                    <div className="innerList community">
                        <ul>
                            <li className="HeaderList">
                                <h1>Community</h1>
                            </li>
                            <li><a href="#">Community guidelines</a></li>
                            <li><a href="#">Online safety principles</a></li>
                        </ul>
                    </div>
                </li>




                {/* end of community */}

            </ul>

        </div>
    )
}

export default FooterList
