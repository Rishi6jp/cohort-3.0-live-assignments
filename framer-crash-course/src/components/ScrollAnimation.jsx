import { useScroll, motion, useSpring } from 'framer-motion';
import React from 'react'

const ScrollAnimation = () => {
    const {scrollYProgress} = useScroll();

    const scaleX = useSpring(scrollYProgress);

    return (
        <div >
            <motion.div 
            style={{
                // scaleX: scrollYProgress,
                scaleX,
                background: "blue",
                transformOrigin: "left", 
                position: "sticky",
                top: 0, 
                width: "100%", 
                height: "20px",
            }}/>
            <div
            style={{
                maxWidth: "700px",
                margin: "auto",
                padding: "1.2rem"
            }}
            >
               <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut necessitatibus suscipit, esse fugit consequatur cumque ab eveniet totam quod modi earum voluptas! Consequuntur aspernatur minima nostrum a voluptates ex quis.
                Dignissimos odit tenetur sapiente, minima quasi minus soluta accusamus unde aliquid? Nostrum harum et sapiente sequi, sunt architecto a dignissimos aliquid quae molestiae voluptatum eos voluptates animi. Ut, sed consequuntur?
                Provident incidunt quam distinctio aperiam excepturi explicabo ratione nam? Asperiores maiores quos quisquam quam rerum, voluptas rem vero voluptatibus tempore quis tenetur provident fugit distinctio iure quibusdam repudiandae exercitationem cum.
                Quas, quis, consectetur quos ratione corrupti quisquam debitis possimus rerum in unde nesciunt nam nihil. Illo eveniet molestiae incidunt exercitationem quos sapiente delectus at, fugit placeat? Dolorum temporibus nihil aperiam.
                </p> 
            </div>
        </div>
    )
}

export default ScrollAnimation;