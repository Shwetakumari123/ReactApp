export function BackDrop(props){
    const{onClickFunction} = props
    return(
    <div className='backdrop' onClick={onClickFunction}/>
    )
}

