import {useState} from 'react'

const Video = () =>{

        return(
            <div className="video">
                <h1>
                    신  희  타    알  아  보  기
                </h1>
                <ul>
                    <li className="video_left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6dd2i4t2BGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aSq-ModjlKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li className="video_left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nvKMMkHFA7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dgANSoAunZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                </ul>
            </div>
        )

}


export default Video