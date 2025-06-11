import React from 'react'
import './LowMid.css'

const LowMid = () => {
    return (
        <div className="lowermid">

            <div className="contentPlace">
                <div className="contentPara">

                    <p>You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!</p>

                    <p>Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build <span className="dots">...</span>
                        <span className="appearD">relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.</span>
                    </p>


                    <button className="paraD"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg> Read more</button>
                </div>


                <div className="contentImage">

                    <div className="image">
                        <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7" />
                    </div>


                </div>
            </div>

            <div className="contentRating">

                <div className="esba">

                    <div className="leftRating">

                        <h1> ESRB rating</h1>


                        <div className="smallerBox">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/ESRB_Everyone_10%2B.svg/344px-ESRB_Everyone_10%2B.svg.png" />

                            <div className="smallerBoxpara">
                                <p>Stimulated Gambling, Use of Alcohol,Fantasy Violence, Use Of</p>
                                <p>Tobacco, Mild Blood, Mild Language</p>

                                <hr />
                                <p>Users Interact</p>
                            </div>
                        </div>

                    </div>


                    <div className="playerModes">

                        <h1>Supported play modes</h1>

                        <div className="gameBox">
                            <div className="containG">
                                <div className="gamesvg">  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><path d="M6 12h4m-2 -2v4" /><path d="M15 11l0 .01" /><path d="M18 13l0 .01" /></svg></div>

                                <h1>TV</h1>
                            </div>

                            <div className="containG">
                                <div className="gamesvg">  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><path d="M6 12h4m-2 -2v4" /><path d="M15 11l0 .01" /><path d="M18 13l0 .01" /></svg></div>
                                <h1>Tabletop</h1>
                            </div>

                            <div className="containG">

                                <div className="gamesvg">  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><path d="M6 12h4m-2 -2v4" /><path d="M15 11l0 .01" /><path d="M18 13l0 .01" /></svg></div>
                                <h1>Handheld</h1>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default LowMid
