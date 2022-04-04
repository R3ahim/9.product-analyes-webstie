import React from 'react';
import './Blogs.css'
import img from '../../download.jpg'
const Blogs = () => {
    return(
        <div>
            <div className='blog-cotnianer'>
          <div className='quest-contianer'>
              <h1>What is  SEMANTIC ELMENTS</h1>
              <div>
                  <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 20, 2021</span></h5>
              </div>
             <img src={img} alt="" />
          
          </div>
        <h2>Answer: </h2>  <p>Semantic element হল html element যার একটি অর্থ আছে। Semantic elements উদাহরণগুলির মধ্যে রয়েছে title, footer, nav, main, section, article, aside । এছাড়াও রয়েছে: summery, img, table, figcaption, form, table, markএবং time । আপনি বিষয়বস্তুর টুকরোগুলিকে একসাথে মোড়ানোর জন্য শব্দার্থিক উপাদান ব্যবহার করেন এবং উপাদানের নাম কী তার একটি সংক্ষিপ্ত বিবরণ দেয় বিষয়বস্তুর ধরন যে উপাদান আছে.
</p>
          </div>
        </div>
    );
};

export default Blogs;