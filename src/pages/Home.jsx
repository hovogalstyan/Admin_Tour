import React from 'react';
import Wrapper from "../components/Wrapper";
import Profile from "../components/Profile";
import { ReactComponent as SearchIcon} from "../assets/icon/search.svg";

const Home = () => {
    return (
        <Wrapper helmetTitle={"Home"}>
            <section className={'home'}>
                <div className="search">
                    <h4>Widgets</h4>
                    <div>
                        {/*<SearchIcon />*/}
                        <input type="text" placeholder="Search" />
                    </div>
                    <Profile />
                </div>
                <div className="analytics">
                    <div className="analyticsDays">
                        <h4>Analytics new signups</h4>
                        <input type="date"
                               onChange={(e) => console.log(e.target.value)}/>
                    </div>

                    <div className="analyticsBox">
                        <div>
                            <p>162k</p>
                            <span>Visits</span>
                        </div>
                        <div className="active">
                            <p>2.3k</p>
                            <span>New Signups</span>
                            <span>3% Decrease</span>
                        </div>
                        <div>
                            <p>4.1k</p>
                            <span>Users</span>
                        </div>
                    </div>

                    <div className="img">

                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Home;
