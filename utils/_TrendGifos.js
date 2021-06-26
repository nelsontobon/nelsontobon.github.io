import {reqTrendigGifos} from './_request.js'
import {renderGif} from '/utils/_renderGif.js'

/**
 * funcion que permite pintar en el footer los gifos tendencia
 */
export function TrendGifos(){
    reqTrendigGifos(3).then(
        (Response) =>{
            let gifos = document.getElementById('GifosTrend')
            for (let item in Response.data ) {
                renderGif(Response.data[item],gifos,'Trend')
            }  
        }
    )
}