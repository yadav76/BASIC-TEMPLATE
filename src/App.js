import react from "react";
import Navbar from './Component/Navbar.js'
import "./style.css";
import About from "./Component/About.js";
import Section from "./Component/Section.js";

// Instaed of Repeating same Section content again & again I can use array of Objects and map over it.
let section_data = [
    {
        title: "Skills",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?"
    },
    {
        title: "Education",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?"
    },
    {
        title: "Experience",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi??"
    },
    {
        title: "Projects",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?i?"
    },
    {
        title: "Contact",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo expedita qui fugit cupiditate molestiae, rerum ratione rem libero quidem eos labore a quos, odio laborum illo numquam nulla, nam dolorem! Delectus praesentium consequatur in similique et qui tempora minima dolores aliquid assumenda. Illo unde animi, nobis ipsa natus commodi?i?"
    }
]

const App = () => {

    return (

        <div>
            <Navbar />

            <About> 
                <hr />
            </About>

            { 
                // Here I am writing js code and converting array elements into <section> 
                section_data.map((data, index) => (
                    <Section 
                        title={data.title}
                        content={data.content}
                    >
                    {index!=section_data.length-1 ? <hr />: ""}
                    </Section>
                ))
            }
        </div>
    );
}




// const App = () => {
    
//     return (
//         <div>
//             <Navbar />
//             <About>
//                 <hr /> 
//             </About>

//             <Section
//                 title="Section 1"
//                 data= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta, repudiandae, delectus quam commodi voluptate suscipit nisi optio magni aperiam earum fuga. Dolor aliquam harum repellendus laboriosam fuga minima suscipit fugiat nihil deserunt, dicta cupiditate dolore id quisquam! Provident distinctio itaque quas, repellendus alias quis tempora delectus obcaecati ratione esse?"
//             />
//             <Section
//                 title="Section 2"
//                 data= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta, repudiandae, delectus quam commodi voluptate suscipit nisi optio magni aperiam earum fuga. Dolor aliquam harum repellendus laboriosam fuga minima suscipit fugiat nihil deserunt, dicta cupiditate dolore id quisquam! Provident distinctio itaque quas, repellendus alias quis tempora delectus obcaecati ratione esse?"
//             />
//             <Section
//                 title="Section 3"
//                 data= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, soluta, repudiandae, delectus quam commodi voluptate suscipit nisi optio magni aperiam earum fuga. Dolor aliquam harum repellendus laboriosam fuga minima suscipit fugiat nihil deserunt, dicta cupiditate dolore id quisquam! Provident distinctio itaque quas, repellendus alias quis tempora delectus obcaecati ratione esse?"
//             />
            
//         </div>

//     )
// }

export default App;