import React from 'react';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillInstagram,
    AiFillYoutube
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home1" id="home">
                <main>
                    <h1>React Webpage</h1>
                    <p>Learn New Things Everyday</p>
                </main>
            </div>

            <div className="home2" >
                <img src="" alt="" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum dolore nisi consequuntur impedit, et dolor quae,
                        sunt neque culpa illo deleniti inventore, architecto veritatis veniam ullam facere
                        aspernatur doloribus dolorem?
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero neque, magnam tempore dolor facere numquam, autem provident distinctio quam veniam porro tempora dignissimos nemo recusandae est nulla! Exercitationem, illo.
                        Voluptatem consequuntur accusamus repellat ex unde modi impedit mollitia ullam cumque! Soluta tenetur adipisci magnam illum est nam, amet vitae alias nobis eaque placeat quas, quaerat ipsa rem maiores distinctio. Consequuntur enim veniam vitae in eos dolor, maiores beatae?
                        Modi asperiores, ullam voluptates explicabo cumque veniam dolor distinctio debitis ratione optio omnis magni cum? Cumque, voluptas earum perferendis fugiat maxime temporibus dolore officia autem, odit dolorem nobis doloribus veniam!
                    </p>
                </div>
            </div>

            <div className="home4" id="brands" >
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>

        </>
    )
}

export default Home