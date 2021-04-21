import React  from 'react';
import './Home.css';

const Home = () =>{
    return(
        <div className='home'>
        <h2>Home</h2>
            <div className='home-banner'>
                <div className='banner'>
                    <img src='http://revistas.unimagdalena.edu.co/public/site/images/admin/construccion.jpg'  alt=''/>
                    {/* <img src='https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_960_720.jpg' alt='' />
                    <img src='https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg' alt=''/>
                    <img src='https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg' alt=''/>
                    <img src='https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_960_720.jpg' alt=''/>
                    <img src='https://cdn.pixabay.com/photo/2017/07/31/11/33/people-2557483_960_720.jpg' alt=''/> */}
                </div>
            </div>
        </div>
    )
}

export default Home;