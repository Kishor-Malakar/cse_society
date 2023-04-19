import React from 'react'
import {BiHomeAlt} from 'react-icons/bi';
import {AiFillPicture} from 'react-icons/ai';
import {RxHeading} from 'react-icons/rx';
import {MdEventAvailable} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs';
import {FaUserGraduate} from 'react-icons/fa';
import {HiSpeakerphone} from 'react-icons/hi';
import {Link} from 'react-scroll';
// remove overflow in app js to use the link
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='n_main fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className="mx-auto my-0 py-0">
            <div className="n_box w-full bg-black h-[96px] backdrop-blur-2xl
            rounded-full max-w-[350px] mx-auto px-4 flex justify-between text-2x1
            text-white/50">
                <Link to="n_header" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <BiHomeAlt/>
                </Link>
                <Link to="n_announcements" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <HiSpeakerphone/>
                </Link>
                <Link to="n_carousel" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <AiFillPicture/>
                </Link>
                <Link to="n_vision" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <RxHeading/>
                </Link>
                <Link to="n_events" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <MdEventAvailable/>
                </Link>
                <Link to="n_members" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <BsPeopleFill/>
                </Link>
                <Link to="n_alumni" activeClass='active' spy={true} smooth={true} offset={0} duration={0} className="btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                    <FaUserGraduate/>
                </Link>
                {/* <a href="#n_header" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><BiHomeAlt/></a>
                <a href="#n_announcements" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><HiSpeakerphone/></a>
                <a href="#n_carousel" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><AiFillPicture/></a>
                <a href="#n_vision" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><RxHeading/></a>
                <a href="#n_events" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><MdEventAvailable/></a>
                <a href="#n_members" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><BsPeopleFill/></a>
                <a href="#n_alumni" className='btns cursor-pointer w-[40px] h-[40px] flex items-center justify-center'><FaUserGraduate/></a> */}
            </div>
        </div>
    </div>
  )
}
