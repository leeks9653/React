import React from 'react';
import './css/App.scss';

import jquery from 'jquery';
import $ from 'jquery';

function Item ({name , price , src}) {
  return (
    <figure className="each_item">
      <div className="item_image_area">
        <img src={src} alt={name}></img>
      </div>
      <figcaption className="item_text_area">
        <h2 className="item_name">{name}</h2>
        <div className="item_info_area">
          <span className="item_price">{price}</span><span className="item_comment">후기(3)</span>
        </div>
      </figcaption>
    </figure>
  );
}

const snack_list = [
  {
    "name" : "알새우칩",
    "src" : "./img/alsaeuchib.png",
    "price" : "2,000원"
  },                                                                                                   
  {
    "name" : "바나나킥",
    "src" : "./img/bananakig.png",
    "price" : "1,700원"
  },
  {
    "name" : "닭다리",
    "src" : "./img/dalgdali.png",
    "price" : "2,100원"
  },
  {
    "name" : "감자깡",
    "src" : "./img/gamjaggang.png",
    "price" : "1,600원"
  },
  {
    "name" : "고구마깡",
    "src" : "./img/gogumaggang.png",
    "price" : "1,600원"
  },
  {
    "name" : "구운새우칩",
    "src" : "./img/guunsaeuchib.png",
    "price" : "2,000원"
  },
  {
    "name" : "조청유과",
    "src" : "./img/jocheong_yugwa.png",
    "price" : "2,400원"
  },
  {
    "name" : "꿀꽈배기",
    "src" : "./img/kkulkkwabaegi.png",
    "price" : "2,200원"
  },
];

const drink_list = [
  {
    "name" : "백산수 1L",
    "src" : "./img/baegsansu1L.png",
    "price" : "2,000원"
  },                                                                                                   
  {
    "name" : "백산수 2L",
    "src" : "./img/baegsansu2L.png",
    "price" : "3,300원"
  },
  {
    "name" : "백산수 500ml",
    "src" : "./img/baegsansu500ml.png",
    "price" : "1,100원"
  },
  {
    "name" : "백산수 330ml",
    "src" : "./img/baegsansu330ml.png",
    "price" : "650원"
  }
];

const ramen_list = [
  {
    "name" : "맛짬뽕",
    "src" : "./img/masjjamppong.png",
    "price" : "770원"
  },                                                                                                   
  {
    "name" : "새우탕",
    "src" : "./img/saeutang.png",
    "price" : "830원"
  },
  {
    "name" : "너구리",
    "src" : "./img/neoguli.png",
    "price" : "900원"
  },
  {
    "name" : "사리곰탕",
    "src" : "./img/saligomtang.png",
    "price" : "860원"
  },
  {
    "name" : "신라면",
    "src" : "./img/sinlamyeon.png",
    "price" : "910원"
  },
  {
    "name" : "신라면 블랙",
    "src" : "./img/sinlamyeon_black.png",
    "price" : "1,150원"
  },
  {
    "name" : "튀김우동",
    "src" : "./img/twigim_udong.png",
    "price" : "690원"
  },
  {
    "name" : "신라면 블랙",
    "src" : "./img/yuggaejang.png",
    "price" : "550원"
  }
];

class App extends React.Component  {
  componentDidMount(){
    $(document).ready(function(){
      alert('test');
    });
  }
  state = {
    menu : 0,
  }
  show_snack = () => { 
    this.setState({menu : 0});
  }
  show_drink = () => { 
    this.setState({menu : 1});
  }
  show_ramen = () => { 
    this.setState({menu : 2});
  }
  render() {
    switch(this.state.menu) {
      case 0 :
        return (
          <div className="wrap">
            <header className="header_area">
              <h1 className="header_title">편의점</h1>
              <nav className="nav_area">
                <ul className="nav_flex_box">
                  <a href="#!" className="" onClick={this.show_drink}><li>음료수</li></a>
                  <a href="#!" className="" onClick={this.show_snack}><li>과자</li></a>
                  <a href="#!" className="" onClick={this.show_ramen}><li>라면</li></a>
                </ul>
              </nav>
            </header>
            <section className="main_area">
              <article className="item_area">
              {snack_list.map(item => (<Item name={item.name} price={item.price} src={item.src} />))}
              </article>
            </section>
            <footer className="footer_area">
              <article>개인정보</article>
              <article>회사정보</article>
            </footer>
          </div>
        );
      case 1 :
        return (
          <div className="wrap">
            <header className="header_area">
              <h1 className="header_title">편의점</h1>
              <nav className="nav_area">
                <ul className="nav_flex_box">
                  <a href="#!" className="" onClick={this.show_drink}><li>음료수</li></a>
                  <a href="#!" className="" onClick={this.show_snack}><li>과자</li></a>
                  <a href="#!" className="" onClick={this.show_ramen}><li>라면</li></a>
                </ul>
              </nav>
            </header>
            <section className="main_area">
              <article className="item_area">
              {drink_list.map(item => (<Item name={item.name} price={item.price} src={item.src} />))}
              </article>
            </section>
            <footer className="footer_area">
              <article>개인정보</article>
              <article>회사정보</article>
            </footer>
          </div>
        );
      case 2 :
        return (
          <div className="wrap">
            <header className="header_area">
              <h1 className="header_title">편의점</h1>
              <nav className="nav_area">
                <ul className="nav_flex_box">
                  <a href="#!" className="" onClick={this.show_drink}><li>음료수</li></a>
                  <a href="#!" className="" onClick={this.show_snack}><li>과자</li></a>
                  <a href="#!" className="" onClick={this.show_ramen}><li>라면</li></a>
                </ul>
              </nav>
            </header>
            <section className="main_area">
              <article className="item_area">
              {ramen_list.map(item => (<Item name={item.name} price={item.price} src={item.src} />))}
              </article>
            </section>
            <footer className="footer_area">
              <article>개인정보</article>
              <article>회사정보</article>
            </footer>
          </div>
        );
        default : 
    }
  }
}
export default App;
