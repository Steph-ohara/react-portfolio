import React from 'react'

export default function Resume() {
  return (
    <section class=''>
        <h1 className='resume'>Resume: Stephanie O'Hara</h1>
        <hr></hr>

        <div class='row justify-content-center' id='resume'>
            <div class='mt-5 pl-5 pr-5'>
                Full Stack Developer with 6 Months of experince in MERN, HTML, CSS, MySQL, etc. 

                <p class='mt-5'>
                    <a href='https://www.linkedin.com/in/stephohara/'><img src='https://img.icons8.com/color/48/000000/linkedin-2.png' alt='Stephanie Linkedin'/></a>    
                </p>  
            </div>
        </div>


        <div class='justify-content-center mt-5'>
            <div id='front-back'>
                <h2>
                    Front End experince
                </h2>
                <p>
                    HTML, CSS (Bootsrap, Tailwind), JavaScript, jQuery, React.js
                </p>
            </div>

            <div id='front-back' class='mt-5'>
                <h2>
                    Back End Experience
                </h2>
                <p>
                    Node.js, Express.js, Mysql, Sequelize, NoSQL including MongoDB and Mongoose, API's including thrid party, RESTful and server-side API's, and Handlebars.
                </p>
            </div>
        </div>    
    </section>
  );
}