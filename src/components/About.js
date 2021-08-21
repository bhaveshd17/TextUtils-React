import React from 'react'

export default function About(props) {
    return(
        <h4 style={{color: props.mode==='light'?'black':'white', }}>
            About Us
        </h4>
    )
    // const [style, setStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    // const [btnText, setBtntext] = useState('Enable light mode')

    // const styleToggle = ()=>{
    //     if(style.color === 'white'){
    //         setStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setBtntext('Enable Dark mode')
    //     }
    //     else{
    //         setStyle({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //         setBtntext('Enable Light mode')
    //     }
    // }

    // return (
    //     <div className="container my-3" style={style}>
    //         <h2>About Us</h2>
    //       <div className="accordion" id="accordionExample">
    //         <div className="accordion-item">
    //             <h2 className="accordion-header" id="headingOne">
    //             <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                 Accordion Item #1
    //             </button>
    //             </h2>
    //             <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={style}>
    //                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    //             </div>
    //             </div>
    //         </div>
    //         <div className="accordion-item">
    //             <h2 className="accordion-header" id="headingTwo">
    //             <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //                 Accordion Item #2
    //             </button>
    //             </h2>
    //             <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={style}>
    //                 <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    //             </div>
    //             </div>
    //         </div>
    //         <div className="accordion-item">
    //             <h2 className="accordion-header" id="headingThree">
    //             <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    //                 Accordion Item #3
    //             </button>
    //             </h2>
    //             <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={style}>
    //                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    //             </div>
    //             </div>
                
    //         </div>
    //         </div>  

    //         <button className="btn btn-primary m-3" onClick={styleToggle}>{btnText}</button>
    //     </div>
    // )
}
