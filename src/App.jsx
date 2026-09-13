import './App.css'
import Accordian from './components/accordion'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code-generator'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import { sideMenu } from './components/tree-view/data'

function App() {

  return (
    <>
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

      {/* Load More Products Components */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component / Menu UI Component / Recursive Navigation Menu*/}
      {/* <TreeView menus={sideMenu}/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light and dark theme mode switch */}
      <LightDarkMode />
    </>
  )
}

export default App
