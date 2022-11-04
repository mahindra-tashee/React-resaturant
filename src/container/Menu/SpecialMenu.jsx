
import './SpecialMenu.css';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.wines.map((wine, index) => {
              return (
                <div className='app__menuitem'>
                  <div className='app__menuitem-head'>
                    <div className='app__menuitem-name'>
                      <p className='p__cormorant' style={{ color: '#DCCAB7' }}>{wine.title}</p>
                    </div>

                    <div className='app__menuitem-dash' />

                    <div className='app__menuitem-price'>
                      <p className='p__cormorant' style={{ color: '#DCCAB7' }}>{wine.price}</p>
                    </div>
                  </div>
                </div>
              );

            })
          }
        </div>
      </div>


      <div className='app__specialMenu-menu_image'>
        <img src={images.menu} alt="menu" />
      </div>


      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.cocktails.map((cocktail, index) => {
              return (
                <>
                  <div className='app__menuitem'>
                    <div className='app__menuitem-head'>
                      <div className='app__menuitem-name'>
                        <p className='p__cormorant' style={{ color: '#DCCAB7' }}>{cocktail.title}</p>
                      </div>

                      <div className='app__menuitem-dash' />

                      <div className='app__menuitem-price'>
                        <p className='p__cormorant' style={{ color: '#DCCAB7' }}>{cocktail.price}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>


    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
