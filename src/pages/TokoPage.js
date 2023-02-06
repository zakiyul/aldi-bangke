import axios from 'axios';
import React, { useState } from 'react';
import CardComp from '../components/CardComp';
import NavbarComp from '../components/NavbarComp';
import { AuthContext } from '../context/AuthContext'

const TokoPage = () => {
    const {isLogin} = React.useContext(AuthContext);
    const data = {
        idToko: 1,
        title: 'Toko A',
        domisili: 'Jakarta',
        alamat: 'Jln. Mangga 12',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit architecto quidem.',
        img: 'https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/12/22/ded5158c-1421-4848-a15f-2e95e897f316.jpg'
    }
    const [items, setItems] = useState([]);
    const getItem = async () => {
        const res = await axios.get('https://fajartimur.com/api/items/');
        setItems(res.data.results)
    }
    React.useEffect(() => {
        getItem()
    },[])

    return(
        <>
            <NavbarComp isLogin={isLogin}/>
            <div className="container">
                <div className="row">
                    {/* {[1,2,3,4,5,6,7,8,9,10].map(e => {
                        return (
                            <div className="col-md-4 col-6">
                                <CardComp idToko={data.id} title={data.title} domisili={data.domisili} alamat={data.alamat} description={data.description} img={data.img} />
                            </div>
                        );
                    })} */}
                    {items && items.map(e => {
                        return (
                            <div className="col-md-4 col-6">
                                <CardComp idToko={e.id} title={data.title} img={e.img.thumbnail} domisili={data.domisili} alamat={data.alamat} description={data.description} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TokoPage;