import React from "react";
import icon from "../../assets/icons/sprite.svg";
const InfoList = (props) => {
    return (
        <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1600">
            <svg className="icon--bio">
                <use href={`${icon}#star-svgrepo-com`}></use>
            </svg>
            {props.info}
            {/* دکترای تخصصی (Ph.D) حقوق خصوصی از دانشگاه تربیت مدرس */}
        </p>
    );
};
export default InfoList;
