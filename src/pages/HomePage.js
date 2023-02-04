import React from 'react'
import CarouselComp from '../components/CarouselComp'
import FooterComp from '../components/FooterComp'
import NavbarComp from '../components/NavbarComp'

const HomePage = () => {
  const [login, setLogin] = React.useState(false);
  const loginHandler = () => {
    setLogin(!login)
  }
  return (
    <>
        <NavbarComp isLogin={login}/>
        <button className="btn btn-primary" onClick={loginHandler}>{login ? 'Login':'Logout'}</button>
        <CarouselComp/>
        <div className="container" style={{ marginTop:'100px', marginBottom:'100px' }}>
            <h2>Tentang Kami</h2>
            <p style={{ textAlign:'justify' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, officia minus quia excepturi obcaecati totam, deserunt quisquam dicta ducimus neque ipsa, nobis voluptate in dolorum nostrum dolorem. Velit aut quas corrupti saepe. Sit fugiat explicabo rerum suscipit amet eum modi animi dolore qui sint quia quod optio atque corrupti eos id expedita, ratione veniam sunt ut blanditiis nostrum unde quaerat saepe. Dolorem neque sed ullam rem commodi nesciunt! Sequi necessitatibus odio suscipit asperiores voluptates nisi aliquid ab corporis dicta tempore similique nesciunt vero vel ducimus voluptatum, fugit rem. Maxime ex qui aliquam voluptates inventore similique! Accusantium quae obcaecati reiciendis illo culpa ad dicta ullam, perspiciatis corporis necessitatibus amet aliquid exercitationem, maxime earum laborum delectus officia expedita quia quas nemo dolor cupiditate nostrum. Libero deserunt ex quam officiis autem, voluptatem voluptate earum molestias voluptatum? Neque enim, labore natus consequatur iusto excepturi hic fugiat beatae suscipit consectetur, non debitis? Dolores quam esse sunt magnam autem natus odio delectus, blanditiis temporibus distinctio! Labore doloribus dolore, vero, atque ipsum quo qui temporibus veritatis alias tempore quibusdam illo cupiditate vel recusandae totam voluptatem, expedita eum autem hic voluptatibus id. Eos quaerat sequi atque exercitationem officiis magnam cumque harum, facere deserunt sint, doloribus et natus sit.</p>
        </div>
        <div className="container" style={{ marginTop:'100px', marginBottom:'100px' }}>
          <h2>Layanan Kami</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3">
                <h4>lorem ipsum</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus?</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <h4>lorem ipsum</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus?</p>
              </div>
            </div><div className="col-md-4">
              <div className="card p-3">
                <h4>lorem ipsum</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus?</p>
              </div>
            </div>
          </div>
        </div>
        <FooterComp/>
    </>
  )
}

export default HomePage