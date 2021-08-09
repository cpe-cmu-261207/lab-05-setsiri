type propsHeader = {
    title: string;
    name: string;   
}

const Header =  (props: propsHeader) => {
    return (
        <div className='flex justify-center items-end space-x-2'>
            <span className='text-center italic my-2 text-2xl'>{props.title}</span>
            <span className='text-gray-400 italic my-2 text-xl'>by {props.name}</span>
        </div>
    )
}

export default Header