import React, { Fragment } from "react";
import icon from "../../assets/icons/sprite.svg";
const InfoList = (props) => {
    console.log(props);
    return (
        <Fragment>
            {props.info.map(item => {
                return <div key={item.id}> <p
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1600">
                    <svg className="icon--bio">
                        <use href={`${icon}#star-svgrepo-com`}></use>
                    </svg>{item.title}</p></div>
            })}
        </Fragment>
    );
    // return (
    //     <Fragment>
    //         <p
    //             data-aos="fade-down"
    //             data-aos-easing="linear"
    //             data-aos-duration="1600">
    //             <svg className="icon--bio">
    //                 <use href={`${icon}#star-svgrepo-com`}></use>
    //             </svg>
    //             دکترای تخصصی (Ph.D) حقوق خصوصی از دانشگاه تربیت مدرس
    //         </p>

    //     </Fragment>
    // );
};
export default InfoList;
