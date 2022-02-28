import Row from './Row'
import LayerThreeText from '../../Data/LayerThree.json'

function Rows(props){

    const LayerThreeTextFlat = LayerThreeText.flat()
    const numberOfRows = LayerThreeTextFlat.length

    const viewStrand = 'Number and algebra'
    
    var LayerThreeRows = []
    for (let i=numberOfRows-1; i>0; i--){
        let text = LayerThreeTextFlat[i][viewStrand]
        LayerThreeRows.push(<Row text={text} index={i}/>)
    }

    // Enable and disable each strand

    // Lock in a level and then be able to zoom in and out on that level
    // Into structure

    return (
        <div className=''>
            <div className='flex justify-center'>
                <div className=''>
                    {LayerThreeRows}
                </div>
            </div>
        </div>
    )
}

export default Rows