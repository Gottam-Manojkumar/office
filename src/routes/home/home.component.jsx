import Directory from "../../components/directory/directory.component";

import { Outlet } from "react-router-dom";

const Home = () => {

    const categories = [
      {
        id: 1,
        title: 'Hats',
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        subtitle: 'Shop Now'
      },
      {
        id: 2,
        title: 'Jackets',
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        subtitle: 'Shop Now'
      },
      {
        id: 3,
        title: 'Sneakers',
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        subtitle: 'Shop Now'
      },
      {
        id: 4,
        title: 'Womens',
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        subtitle: 'Shop Now'
      },
      {
        id: 5,
        title: 'Mens',
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        subtitle: 'Shop Now'
      }
    ]
  
    return (
      <div>
        <Outlet></Outlet>
        <Directory categories={categories}/>
      </div>
    );
  }


  export default Home