import React, { Fragment } from 'react'
import book3 from "../../assets/images/book3.png";
const BookList = (props) => {
    console.log(props.book);
    return (
        <Fragment>
            {props.book.map(item => {
                return <div key={item.id}
                    className="main__book--content__intro"
                    data-aos="fade-down"
                    data-aos-duration="3000" >
                    <img src={book3} className="main__book--img" alt="" />
                    <h5>
                        {item.name}
                    </h5>
                    <p>
                        {item.shortDescription}
                    </p>
                    <button
                        type="button"
                        className="btn btn--info btn--fill"
                        data-aos="fade-left"
                        data-aos-duration="3000">
                        اطلاعات بیشتر
                    </button>
                </div>
            })}
        </Fragment>)
}
export default BookList;
