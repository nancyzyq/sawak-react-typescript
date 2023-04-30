import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Dispatch } from 'redux';
import { RootState } from '../../store';
import { getMenuItems } from '../../store/menu/action'
// import { Carousel } from '../../components/Carousel';
// import Nav from '../../components/Nav'
// import Footer from '../../components/Footer'
// import MenuCardList from './MenuCardList'
// import MenuFilter from './MenuFilter';

interface HomeProps {
    menu: Array<Object>,
    getMenuItems: () => void

}

class Menu extends React.Component<HomeProps> {
  componentDidMount () {
		this.props.getMenuItems()
    setTimeout(() => {
      console.log(this.props.menu)
    }, 1000)
  }
  render() {
    return (
      <div>
        {/* <Nav /> */}
        {/* <Carousel/> */}
        <div className="container">
          <div className="text-center mb-4">
            <h1>Menu</h1>
          </div>
          {/* filter menu items by category  */}
          {/* <MenuFilter /> */}
          {/* <hr className="mb-5" /> */}
          {/* menu items list  */}
          {/* <MenuCardList menu={this.props.menu} /> */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
   menu: state.Menu.filteredMenu
})

const mapDispatchToProps = {
	getMenuItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)