

const About = (props) => {

    return (

        <div className="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non culpa quas libero, illo molestias animi hic perspiciatis, eius officia provident, beatae magnam repellendus eveniet reprehenderit nulla magni! Maxime quidem fugiat reprehenderit! Temporibus molestias quidem, a explicabo dolore ea error, quo quisquam doloribus, nihil maiores? Pariatur modi ratione ducimus iusto, </p>
            {props.children}
        </div>
        
    )
}

export default About;