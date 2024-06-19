import { Image } from './Image'
import milkImgMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkImgDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImgDesktop from '../assets/desktop/image-gallery-orange.jpg'
import orangeImgMobile from '../assets/mobile/image-gallery-orange.jpg'
import coneImgDesktop from '../assets/desktop/image-gallery-cone.jpg'
import coneImgMobile from '../assets/mobile/image-gallery-cone.jpg'
import sugarImgDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'
import sugarImgMobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'

export const Gallerey = () => {
    return (
        <>
            <div className='grid grid-cols-2 sm:flex'>
                <Image
                    imgMobile={milkImgMobile}
                    imgDesktop={milkImgDesktop}
                />
                <Image
                    imgMobile={orangeImgMobile}
                    imgDesktop={orangeImgDesktop}
                />
                <Image
                    imgMobile={coneImgMobile}
                    imgDesktop={coneImgDesktop}
                />
                <Image
                    imgMobile={sugarImgMobile}
                    imgDesktop={sugarImgDesktop}
                />
            </div>
        </>
    )
}