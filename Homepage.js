import React from "react";
import './Homepage.css'
export const Homepage = () => {
  return (
    <>
      <div id="content-block">
        <div className="content-push">
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax "
                style={{
                 
                    backgroundImage: `url('https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/311571625_10160267832400907_6422746932429974744_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LrHB6gPVdkEAX-_HXMv&_nc_ht=scontent.fbho1-3.fna&oh=00_AfB4uK56rszsuyKg4MGlxr6qoLJTCwNou4t7vINZn5AOxw&oe=63DFE220')`,
                  backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                    fontFamily: "Bitter",
                    backgroundColor:'black'
                    
                }}
              >
                 <div className=" page1 ">
                     <p>Give your vibe</p>
               </div>
              </div>
            </div>
          </div>
          
         
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax  bg-[#191613] px-56 pt-10"
                style={{
                  backgroundImage:
                    "url(https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/311571625_10160267832400907_6422746932429974744_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LrHB6gPVdkEAX-_HXMv&_nc_ht=scontent.fbho1-3.fna&oh=00_AfB4uK56rszsuyKg4MGlxr6qoLJTCwNou4t7vINZn5AOxw&oe=63DFE220)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

     
        
    </>
  );
};
