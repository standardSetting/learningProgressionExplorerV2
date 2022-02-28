import LevelCardElement from "./LevelCardElement"
import LayerTwoText from "../../Data/LayerTwo.json"

function LevelCard(props){

    const levelCardIndex = props.levelCardIndex

    return (
        <div className='bg-white'>
            <div style={{marginTop:'1vh',marginBottom:'1vh'}}>
                <div className='flex flex-row'>
                    <div className='flex flex-column'>
                        <div className='b--dark-purple' >
                            <div className='bg-almost-pink dark-purple b mt4'>
                                {levelCardIndex+'. '+LayerTwoText[levelCardIndex-1]['Nutshell statement']}
                            </div>
                            <div className=''>
                                <LevelCardElement title='Conceptual understanding' paragraph={LayerTwoText[levelCardIndex-1]['Conceptual understanding']}/>
                                <LevelCardElement title='Procedural fluency' paragraph={LayerTwoText[levelCardIndex-1]['Procedural fluency']}/>
                                <LevelCardElement title='Strategic competence' paragraph={LayerTwoText[levelCardIndex-1]['Strategic competence']}/>
                                <LevelCardElement title='Adaptive reasoning' paragraph={LayerTwoText[levelCardIndex-1]['Adaptive reasoning']}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelCard