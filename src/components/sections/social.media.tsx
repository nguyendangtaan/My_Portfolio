import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube: string;
    tiktok: string;
    instagram: string;
    facebook: string
}
const SocialMedia = (props: IProps) => {
    const { youtube, tiktok, instagram, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Nguyen Dang Tan">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok  Nguyen Dang Tan">
                <FaTiktok size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Instagram Nguyen Dang Tan">
                <FaInstagramSquare size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook ">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;