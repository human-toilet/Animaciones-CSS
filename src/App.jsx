//componentes
import { Footer } from "./components/Footer"
import { ImgList } from "./components/ImgList"

export function App() {
  const imgSrc = 'src/assets/img/maxi.jpg'
  const imgList = Array.from({length: 10}, () => imgSrc)

  return (
    <>
      <h1 
        className="sticky text-white text-center p-[16px] m-0 w-[100%] text-[30px] font-bold top-0 animate-header-animation z-10"
        style={{
          animationTimeline: 'scroll(root block)',
          animationRange: '0 100%'
        }}
      >ANIMACIONES CSS</h1>
      <ImgList imgs={imgList}/>
      <Footer
        author='Maxi'
        email='maxibengochea67@gmail.com'
      />
    </>
  )
}
