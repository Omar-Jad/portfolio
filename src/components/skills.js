import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css'
export const Skills=()=>{
    const responsive={
        superLargeDesktop:{
            breakpoint:{max:4000,min:3000},
            items :5
        },
        desktop:{
            breakpoint:{max:3000,min:1024},
            items:3
        },
        
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1
        }
    }

    return (

        <section className='skills' id ="skills">

            <div className='containerr'>
                <div className='row'>
                    <div className='column-12'>
                        <h2 className='text'>Skills</h2>
                        <p className='text'>Here are my skills that i can help you with</p>
                    
                    <Carousel responsive={responsive} infinite={true} className='owl-theme skill-slider'>
                     <div className='item'>
                        <h5 className='text'>Web Development</h5>
                        <CircularProgressbar className='progress'
                      value={70} 
                      text={`${70}%`} 
                      styles={buildStyles({ pathColor: "url(#gradient)", textColor: "#fff", trailColor: "#230505" })}
                    />
                        </div>   

                        <div className='item'>
                        <h5 className='text'>password cracking</h5>
                          <CircularProgressbar className='progress' 
                      value={90} 
                      text={`${90}%`} 
                      styles={buildStyles({ pathColor: "url(#gradient)", textColor: "#fff", trailColor: "#230505" })}
                    />
                        </div>

                        <div className='item'>
                        <h5 className='text'>networks problems</h5>
                          <CircularProgressbar className='progress'
                      value={85} 
                      text={`${85}%`} 
                      styles={buildStyles({ pathColor: "url(#gradient)", textColor: "#fff", trailColor: "#230505" })}
                    />
                        </div>

                        <div className='item'>
                        <h5 className='text'>vulnerability scanning</h5>
                          <CircularProgressbar className='progress'
                      value={95} 
                      text={`${95}%`} 
                      styles={buildStyles({ pathColor: "url(#gradient)", textColor: "#fff", trailColor: "#230505" })}
                    />
                        </div>
                        </Carousel>
                    </div>

                </div>

            </div>


        </section>

    )

    
}
export default Skills;